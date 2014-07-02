$('window').ready(function(){

//              $("li").remove(); // Remove any existing li elements
//               $(this).toggleClass("btn-primary"); // Switch to default grey
//               $(this).html("Loading"); // Change text of button
               $.ajax({
                    url: "./json/biblio.json",
                    dataType: "json",
                    mimeType: "application/json; charset=utf-8",
                    complete: function(jqXHR, textStatus) {
                        console.log("Completed: "+textStatus);
                    },
                   complete:function (xhr, textStatus) {
                       console.log("Completed: "+textStatus);
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log(errorThrown);
                    },
                    success: function(data, textStatus, jqXHR) {
                        parse(data);
                    },

               });

//               $(this).html("Load Again"); // Change back text of button
//               $(this).toggleClass("btn-primary"); // Revert back to default grey
            });

//Version alternative avec getJSON
//    $(function() {
//    $.getJSON("./json/biblio.json",
//      function(response) {
//        console.log(response.responseData);
////        $.each(response.responseData.entries, function (i,newsItem) {
////            $("#newsfeed").append("<li>"+newsItem.title+"</li>");
////        });
//        $("section").append("<h1> Gotcha </h1>");
//        $("section").append("<p>"+response.articlelist.article.type+"</p>");
//      });
//    });
//
//     });

function parse(response) {
//    $.each(response.movies, function (i,movie) {
//            $("#moviefeed").append("<li>"+movie.title+" ("+movie.runtime+" mins)</li>");
//    });
        // console.log("function call");
        var section = $("section");


        // PARSING INTERNATIONAL JOURNALS

        $.each(response.list, function(i, listitem) {
                section.append("<h1 class='mainh1 articlesection'>"+listitem.pubtypelist.title+"</h1>");
                        $.each(listitem.pubtypelist.articlelist, function (i, item) {
                            if (item.type == "article"){
                                parsearticle(section, item);
                            } else {
                                parseinproceedings(section, item);
                            }
                        });
        });
}


// PARSING FUNCTIONS
    // On définit une chaine de caractères à ajouter
    //Pour éviter le problème de jQuery .append qui ferme automatiquement les élements
    //Lorsqu'on ouvre un paragraphe par exemple
var parseauthors = function(target, authors){
    var num = authors.length - 1;
    var authorslist = "";
    $.each(authors, function (i,item) {
       authorslist += item.name;
       // console.log(i);
       if(i<num){
            authorslist += ", ";
       }else{
            authorslist += ".";
       }
    });
    target.append("<p>"+authorslist+"</p>");
}

var parsearticle = function(target, item){
    target.append("<p class='title'>"+item.article.title+"</p>");

    parseauthors(target, item.article.author);

    var reference = "";
    reference += item.article.journal.name;
    if(item.article.journal.num!=""){reference += (", num. "+item.article.journal.num)};
    if(item.article.journal.vol!=""){reference += (", vol. "+item.article.journal.vol)};
    if(item.article.journal.pages!=""){reference += (", pp. "+item.article.journal.pages)};
    reference+=".";
    target.append("<p class='reference'>"+reference+"</p>");
}

var parseinproceedings = function(target, item){
    target.append("<p class='title'>"+item.article.title+"</p>");
    var num = item.article.author.length - 1;

    parseauthors(target, item.article.author);

    var reference = "";
    reference += item.article.booktitle;
    if(item.article.pages!=""){reference += (", pp. "+item.article.pages)};
    if(item.article.month!="" && item.article.year!=""){
        reference += (", "+item.article.month+". "+item.article.year)
    }else if(item.article.year!=""){
        reference += (", "+item.article.year)
    };

    if(item.article.editor!=""){reference += (", "+item.article.editor)};
    if(item.article.publisher!=""){reference += (", "+item.article.publisher)};
    reference+=".";
    target.append("<p class='reference'>"+reference+"</p>");
}
