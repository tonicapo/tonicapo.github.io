$('window').ready(function(){

//              $("li").remove(); // Remove any existing li elements
//               $(this).toggleClass("btn-primary"); // Switch to default grey
//               $(this).html("Loading"); // Change text of button
                $('#floatingBarsG').toggleClass('none');
               $.ajax({
                    url: "./json/biblio.json",
                    dataType: "json",
                    mimeType: "application/json; charset=utf-8",
                    complete: function(jqXHR, textStatus) {
                        $('#floatingBarsG').toggleClass('none');
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
                            console.log(item.article.type);
                            if (item.article.type == "article"){
                                parsereview(section, item);
                            } 

                            else if(item.article.type == "inproceedings"){
                                parseinproceedings(section, item);
                            } 
                            else {
                                parsemisc(section, item);
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
    return ("<p>"+authorslist+"</p>");
}

var parsereview = function(target, item){
    var refcontent = "<div class='article'>";
    refcontent+=("<h2 class='article-title'>"+item.article.title+"</h2>");
    refcontent+=parseauthors(target, item.article.author);
    refcontent += "<p class='article-ref'>"+item.article.journal.name;
    if(item.article.journal.num!=""){refcontent += (", num. "+item.article.journal.num)};
    if(item.article.journal.vol!=""){refcontent += (", vol. "+item.article.journal.vol)};
    if(item.article.journal.pages!=""){refcontent += (", pp. "+item.article.journal.pages)};
    if(item.article.month!="" && item.article.year!=""){
        refcontent += (", "+item.article.month+". "+item.article.year)
    }else if(item.article.year!=""){
        refcontent += (", "+item.article.year)
    };

    refcontent+=".</p>"
    if(item.article.link!=""){
        refcontent += addLink(item.article.link);
    }
    refcontent+="</div>";
    target.append(refcontent);
}

var parseinproceedings = function(target, item){
    var refcontent = "<div class='article'>";
    refcontent+=("<h2 class='article-title'>"+item.article.title+"</h2>");
    refcontent+=parseauthors(target, item.article.author);
    refcontent += "<p class='article-ref'>"+item.article.booktitle;
    if(item.article.pages!=""){refcontent += (", pp. "+item.article.pages)};
    if(item.article.month!="" && item.article.year!=""){
        refcontent += (", "+item.article.month+". "+item.article.year)
    }else if(item.article.year!=""){
        refcontent += (", "+item.article.year)
    };
    if(item.article.editor!=""){refcontent += (", "+item.article.editor)};
    if(item.article.publisher!=""){refcontent += (", "+item.article.publisher)};
    refcontent+=".</p>";
    if(item.article.link!=""){
        refcontent += addLink(item.article.link);
    }
    refcontent+="</div>";
    target.append(refcontent);
}

var parsemisc = function(target, item){
    var refcontent = "<div class='article'>";
    refcontent+=("<h2 class='article-title'>"+item.article.title+"</h2>");
    refcontent+=parseauthors(target, item.article.author);
    refcontent += "<p class='article-ref'>"+item.article.event;
    // if(item.article.pages!=""){reference += (", pp. "+item.article.pages)};
    if(item.article.date!="" && item.article.month!="" && item.article.year!=""){
        refcontent += (", "+item.article.month+". "+item.article.date+", "+item.article.year)
    }else if(item.article.month!="" && item.article.year!=""){
        refcontent += (", "+item.article.month+". "+item.article.year)
    }else if(item.article.year!=""){
        refcontent += (", "+item.article.year)
    };
    if(item.article.country!=""){refcontent += (", "+item.article.country)};
    if(item.article.city!=""){refcontent += (", "+item.article.city)};

    refcontent+=".</p>";
    if(item.article.link!=""){
        refcontent += addLink(item.article.link);
    }
    refcontent+="</div>";
    target.append(refcontent);
}

var addLink = function(item){
    var ref= "./article/"+item;
    return "<p class='article-down'><a href='"+ref+"'><span class='icon-file-pdf'></span> Télécharger l'article</a></p>";
}