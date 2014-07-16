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
	// google.maps.event.addDomListener(window, 'load', initialisation);
	// initialisation();



function parsing(){
				console.log("parsing gotcha!");
//              $("li").remove(); // Remove any existing li elements
//               $(this).toggleClass("btn-primary"); // Switch to default grey
//               $(this).html("Loading"); // Change text of button
//               $.ajax({
//                    url: "http://carto.strasmap.eu/remote.amf.json/Bike.geometry",
//                    dataType: "json",
//                    mimeType: "application/json; charset=utf-8",
//                    complete: function(jqXHR, textStatus) {
//                        console.log("Completed: "+textStatus);
//                    },
//                    error: function(jqXHR, textStatus, errorThrown) {
//                        console.log(errorThrown);
//                    },
//                    success: function(data, textStatus, jqXHR) {
//                        parse(data);
//                    },
//
//               });
   $.ajax({
        url: "http://carto.strasmap.eu/remote.amf.json/Bike.geometry",
        dataType:"jsonp",
        jsonpCallback: "",
    });
//               $(this).html("Load Again"); // Change back text of button
//               $(this).toggleClass("btn-primary"); // Revert back to default grey
            };
// ATTENTION : window.onload n'est déclanché qu'une fois
// Ça ne fonctionne pas s'il est indiqué ailleurs, même dans un autre fichier js
// window.onload = parsing;

