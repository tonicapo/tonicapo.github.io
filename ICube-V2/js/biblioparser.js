$('window').ready(function(){
                var jsonMimeType = "application/json;charset=UTF-8";
//              $("li").remove(); // Remove any existing li elements
//               $(this).toggleClass("btn-primary"); // Switch to default grey
//               $(this).html("Loading"); // Change text of button
               $.ajax({
                    url: "./json/biblio.json",
                    dataType: "jsonp",
                   contentType: "application/json; charset=utf-8",
//                    beforeSend: function(x) {
//                      if(x && x.overrideMimeType) {
//                       x.overrideMimeType(jsonMimeType);
//                      }
//                     },
                    complete: function(jqXHR, textStatus) {
                        console.log("Completed: "+textStatus);
                    },
//                   complete:function (xhr, status) {
//                        if (status === 'error' || !xhr.responseText) {
//                            handleError();
//                        }
//                        else {
//                            var data = xhr.responseText;
//                            //...
//                        }
//                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        $("section").html("Error: "+textStatus+" "+errorThrown);
                    },
                    success: function(data, textStatus, jqXHR) {
                        //parse(data);
                    },
                  jsonpCallback:"parse"
               });

//               $(this).html("Load Again"); // Change back text of button
//               $(this).toggleClass("btn-primary"); // Revert back to default grey
           });

function parse(response) {
//    $.each(response.movies, function (i,movie) {
//            $("#moviefeed").append("<li>"+movie.title+" ("+movie.runtime+" mins)</li>");
//    });
        $(section).append("<h1> Gotcha </h1>");
        $(section).append("<p>"+response.articlelist.article.type+"</p>");
}
