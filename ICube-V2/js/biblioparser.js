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
                        $("section").html("Error: "+textStatus+" "+errorThrown);
//                        console.log(responseText);
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
        console.log("function call");
        $("section").append("<h1> Gotcha </h1>");
        $("section").append("<p>"+response.articlelist.article.type+"</p>");
}
