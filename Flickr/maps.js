// console.log("Loaded");
function initialisation(){
	console.log("Map init");
	var centreCarte = new google.maps.LatLng(48.530181109656, 7.7340223115619);
	var optionsCarte = {
		zoom: 16,
		center: centreCarte,
		disableDefaultUI: false
	}


	// marker.setMap(maCarte);
	var maCarte = new google.maps.Map(document.getElementById("map"), optionsCarte);

	// A placer après la définition de la variable maCarte
	var marker = new google.maps.Marker({
	    position: centreCarte,
	    map: maCarte,
	    title:"Hello World!"
	});
}
	google.maps.event.addDomListener(window, 'load', initialisation);
	// initialisation();



function parsing(){
				console.log("parsing gotcha!");
					  $.ajax({
					  		// type:'GET',
					       // url: "http://carto.strasmap.eu/remote.amf.json/Bike.geometry?a",
					       url: "carto.json",
					       // url: "http://api.flickr.com/services/feeds/photos_public.gne?tags=obama&nojsoncallback=1",
                    		dataType: "json",
                    		mimeType: "application/json; charset=utf-8",
					       // crossDomain: true,
					       // jsonpCallback: "parse",

					        success: function(data) {
					       		console.log("success"+data);
					       		parse(data);
					    },
					    	error: function(data){
					    			// console.log(data);
					    			// parse(data);
					    		}
					   });

						// var apiKey = '77ca75a5a089d738397b21d81fd06215';
						// var url = "https://api.flickr.com/services/feeds/photos_public.gne?method=flickr.photos.getRecent&author=12037949754@N01&format=json&api_key=77ca75a5a089d738397b21d81fd06215&jsoncallback=?";
						// var largeSRC = "";
						// $.getJSON(url, function(data) {
						//     // $.each(data.sizes.size, function(i, datum) {
						//     //     $.each(datum, function(key, value) {
						//     //         if (key === "label" && value === "Original") {
						//     //             largeSRC = datum.source;
						//     //             alert(largeSRC);
						//     //         }
						//     //     });
						//     // });
						// 	console.log(data);
						// });


  // var flickerAPI = "https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
  // $.getJSON( flickerAPI, {
  //   tags: "mount rainier",
  //   tagmode: "any",
  //   format: "json"
  // })
  //   .done(function( data ) {
  //     $.each( data.items, function( i, item ) {
  //     		console.log(item.media.m);
  //       });
  //     //console.log(data);
  //     });
  


// 					function createCORSRequest(method, url) {
// 						  var xhr = new XMLHttpRequest();
// 						  if ("withCredentials" in xhr) {

// 						    // Check if the XMLHttpRequest object has a "withCredentials" property.
// 						    // "withCredentials" only exists on XMLHTTPRequest2 objects.
// 						    xhr.open(method, url, true);
// 						    // console.log("open");
// 						  } else if (typeof XDomainRequest != "undefined") {

// 						    // Otherwise, check if XDomainRequest.
// 						    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
// 						    xhr = new XDomainRequest();
// 						    xhr.open(method, url);
// 						    console.log("noopen");
// 						  } else {

// 						    // Otherwise, CORS is not supported by the browser.
// 						    xhr = null;

// 						  }
// 						  return xhr;
// 						};

// 						// var xhr = createCORSRequest('GET', url);
// 						// if (!xhr) {
// 						//   throw new Error('CORS not supported');
// 						// }


// 						// Helper method to parse the title tag from the response.
// function getTitle(text) {
//   return text.match('<title>(.*)?</title>')[1];
// };

// // Make the actual CORS request.
// function makeCorsRequest() {
// 	console.log('request');
//   // All HTML5 Rocks properties support CORS.
//   var url = 'https://carto.strasmap.eu/remote.amf.json/Bike.geometry';

//   var xhr = createCORSRequest('GET', url);
//   if (!xhr) {
//     alert('CORS not supported');
//     return;
//   }


//   // Response handlers.
//   xhr.onload = function() {
//     var text = xhr.responseText;
//     var title = getTitle(text);
//     alert('Response from CORS request to ' + url + ': ' + title);
//   }

//   xhr.onerror = function() {
//     alert('Woops, there was an error making the request.');
//   }


// // var url = 'http://api.alice.com/cors';
// // var xhr = createCORSRequest('GET', url);
// // xhr.send();
//   xhr.send();
// };

// makeCorsRequest();

						// xhr.send();

						// xhr.onerror = function() {
						// 	  console.log('There was an error!');
						// 	};

						// xhr.onloadend = function() {

						//  var responseText = xhr.responseText;
						//  console.log(responseText);
						//  // process the response.
						}


            // };
// ATTENTION : window.onload n'est déclanché qu'une fois
// Ça ne fonctionne pas s'il est indiqué ailleurs, même dans un autre fichier js
// window.onload = parsing;
function parse(response) {
	console.log("je parse");
     // each goes here with appends to #jqueryfeed
     $.each(response.s, function(i,     newsItem){
         // $("#jqueryfeed").append("<li>"+newsItem.title+"</li>");
         console.log(newsItem.id);
     });
// console.log("callback");
}
