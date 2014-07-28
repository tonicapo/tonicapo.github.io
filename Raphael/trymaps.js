// ********************************************************************************
// ********************************************************************************
// MAPS + RAPHAELJS
// ********************************************************************************
// ********************************************************************************

// Très bon tuto sur l'API Google Map
//http://www.touraineverte.com/google-maps-api-version-3/exemple-tutoriel-marqueurs-markers/centrer-marqueurs-markers-points-carte-map.html

// ********************************************************************************
// MAPS : création des variables globales
// ********************************************************************************
// Tableau contenant les données des stations
var stationsDatas = new Array();

// ********************************************************************************
// MAPS : création des infobulles
// ********************************************************************************
// Creation du constructeur du layover / infobulle
function infobulle(options){
	// Debug
	// console.log("appel de la classe infobulle");
	
	// Initialisation des propriétés
	// Recupération du marqueur cible
	this.marker_ = options.marker;
	// Récupération du contenu texte
	this.content_ = options.content;
	// Identification de la carte
	this.map_ = options.marker.get('map');
	// Identification de la div à laquelle ajouter l'overlay
	// Cette div sera crée au over, donc null pour l'instant
	this.div_ = null;
	// Identification du style à appliquer à l'overlay 
	this.cssClass_ = options.cssClass || null;
	// Appel de la méthode setMap
	this.setMap(this.map_);
	// Ajout des écouteurs d'événement
	var me = this;

	// Afficher au mouseover
	google.maps.event.addListener(me.marker_, 'mouseover', function(){
		me.show();
	});

	// Supprimer au mouseOut
	google.maps.event.addListener(me.marker_, 'mouseout', function(){
		me.hide();
	});
}	

// Etendre la classe google.maps.OverlaView()
infobulle.prototype = new google.maps.OverlayView();
	
// Il faut instancier les méthodes onAdd, draw et onRemove
infobulle.prototype.onAdd = function(){
	// Création de la div d'affichage
	var div = document.createElement('div');

	// Spécification des styles et contenus
	div.style.position = "absolute";
	div.style.visibility = "hidden";
	if(this.cssClass_){
		div.className += " "+this.cssClass_;
	}
	div.innerHTML = this.content_;
	// Ajout du contenu à la div
	this.div_ = div;
	// On ajoute l'overlay à la map via l'un des panes de la map
	// On ajoute cet overlay au pane floatPane
	var panes = this.getPanes();
	panes.floatPane.appendChild(this.div_);
}

// Implementation de la méthode draw
infobulle.prototype.draw = function(){
	// Positionnement de l'overlay. On utilise la position du marqueur.
	// Pour cela, on doit récupérer la projection de cet overlay
	var overlayProjection = this.getProjection();

	// Recuperer les coordonnées des coin nord-est et sud-ouest de l'overlay
	var ne = overlayProjection.fromLatLngToDivPixel(this.marker_.getPosition());

	// Positionnement de la div
	var div = this.div_;
	div.style.left = ne.x + 'px';
	div.style.top = ne.y + 'px';
}

// Implementation des écouteurs d'événements
infobulle.prototype.onRemove = function() {
	this.div_.parentNode.removeChild(this.div_);
}

infobulle.prototype.hide = function(){
	if(this.div_){
		this.div_.style.visibility = "hidden";
	}	
}

infobulle.prototype.show = function(){
	if(this.div_){
		this.div_.style.visibility = "visible";
	}
}


// ********************************************************************************
// MAPS : parser les données json de la carte
// ********************************************************************************
function parsingJSONCarto(){

				console.log("parsing Carto coords");
					$.ajax({
					    // url: "http://carto.strasmap.eu/remote.amf.json/Bike.geometry?a",
					    url: "carto.json",
                    	dataType: "json",
                    	mimeType: "application/json; charset=utf-8",
					    // crossDomain: true,
					    // jsonpCallback: "parse",

					    success: function(data) {
					       		// console.log("success"+data);
					       		parseCarto(data);
					    	},
					    error: function(data){
					    		console.log("Erreur"+data);
					    	},
					    complete:function(data){
					    		console.log('Map parsing complete');
					    		initialisationGMAPS(stationsDatas);
					    		parsingJSONOccupation();
					    	}
					});
}

// ********************************************************************************
// MAPS : parser les données json de l'occupation des stations
// ********************************************************************************
function parsingJSONOccupation(){

				console.log("parsing Occupation....");
					$.ajax({
					    // url: "http://carto.strasmap.eu/remote.amf.json/Bike.geometry?a",
					    url: "occupation.json",
                    	dataType: "json",
                    	mimeType: "application/json; charset=utf-8",
					    // crossDomain: true,
					    // jsonpCallback: "parse",

					    success: function(data) {
					       		// console.log("success"+data);
					       		parseOccupation(data);
					    	},
					    error: function(data){
					    		// console.log("Erreur"+data);
					    	},
					    complete:function(data){
					    	console.log('Parsing complete');
					    	// drawingInitialisation();
					    	}
					});
}


// ********************************************************************************
// MAPS : fonction d'initialisation de la carte
// ********************************************************************************
function initialisationGMAPS(tabcoords){
	console.log("GMaps initialisation");
	// ********************************************************************************
	// MAPS : création de la carte
	// ********************************************************************************
	var optionsCarte = {
		zoom: 16,
		// Ajouter cette option pour centrer sur un seul marqueur
		// center: centreCarte,
		disableDefaultUI: false
	}

	//Défintion de la carte
	var maCarte = new google.maps.Map(document.getElementById("map"), optionsCarte);
	//Définition de la délimitation de la zone d'affichage
	var zoneMarqueurs = new google.maps.LatLngBounds();


	// ********************************************************************************
	// MAPS : création des marqueurs
	// ********************************************************************************
	// Création de l'overlay
	// Cette technique passe par la création d'un cusom layover 
	//http://medelbou.wordpress.com/2012/02/03/creating-a-tooltip-for-google-maps-javascript-api-v3/
	//http://code.google.com/apis/maps/documentation/javascript/overlays.html#CustomOverlays


	//Définir un marqueur unique
	// var marker = new google.maps.Marker({
	//     position: centreCarte,
	//     map: maCarte,
	//     title:"Hello World!"
	// });
	// marker.setMap(maCarte);

	//Définir des marqueurs multiples


	var marker_positions = new Array();
	for( var i = 0; i < tabcoords.length; i++ ) {
		var latitude = tabcoords[i][0];
		var longitude = tabcoords[i][1];
		
		var this_position = new google.maps.LatLng( latitude, longitude );
		marker_positions.push(this_position);

		var optionsMarqueur = {
			map:maCarte,
			content:tabcoords[i][2],
			position: this_position
		}
		var marqueur = new google.maps.Marker( optionsMarqueur );
		// Pour centrer la carte sur un marqueur :
		// var centreCarte = new google.maps.LatLng(tabcoords[0][0], tabcoords[0][1]);
		//Gérer le click : recentrer la page sur le marqueur et zoomer
		google.maps.event.addListener( marqueur, "click", function( evt ){
					maCarte.panTo( evt.latLng );
					maCarte.setCenter(evt.latLng);
					maCarte.setZoom(16);
					// drawingInitialisation(indice);
				});

		var contentHTML = "<p>"+marqueur.content+"</p>";
		var infoOptions = {
			marker:marqueur,
			content:contentHTML,
			cssClass:'infobulle'
		}

		var infob = new infobulle(infoOptions);
		zoneMarqueurs.extend(marqueur.getPosition());

		// ********************************************************************************
		// MAPS : ajout des items au menu
		// ********************************************************************************
		var li = document.createElement('li');
		$(li).html(tabcoords[i][2])
				.addClass('listitem')
				// Attention : manip que je n'aime pas
				// Je passe un attribut indice pour récupérer l'indice des coordonnées dans le
				// tableau marker_positions et gérer l'événement
				.attr('indice', ''+i)
				.click(function(){
       				maCarte.panTo( marker_positions[parseInt($(this).attr('indice'))] );
					maCarte.setCenter( marker_positions[parseInt($(this).attr('indice'))]  );
					maCarte.setZoom(16);
					drawingInitialisation(parseInt($(this).attr('indice')));
    			});
		$(li).appendTo('#menulist');
	}

	maCarte.fitBounds( zoneMarqueurs );

}
// A SAVOIR : 
// Pour initialiser la carte vie l'api MAPS, sans passer par window.onload si jamais cette méthode est
// déjà utilisée ailleurs dans le projet, utiliser la méthode suivante :
// google.maps.event.addDomListener(window, 'load', initialisation);






function parseCarto(response) {
     $.each(response.s, function(i, item){
     	// Création du tableau associé à la station
     	var station = new Array();
     	
     	// Coordonnées
        station.push(item.go.y);
        station.push(item.go.x);

        // Nom de la station
        station.push(item.ln);

        // Ajout au tableau global de données des stations
        stationsDatas.push(station);
        // console.log(tab[i]);
     });
}

function parseOccupation(response) {
     $.each(response.s, function(i, item){
     	// Nombre total d'emplacements : indice 3
        stationsDatas[i].push(parseInt(item.st));

        // Nombre de Velhop disponibles : indice 4
        stationsDatas[i].push(parseInt(item.sa));

        // Nombre d'emplacement disponibles : indice 5
        stationsDatas[i].push(parseInt(item.sf)); 
        console.log(item.id);
        console.log(stationsDatas[i]);     
     });
}

// ********************************************************************************
// ********************************************************************************
// RAPHAEL
// ********************************************************************************
// ********************************************************************************
// Tuto :
// http://code.tutsplus.com/tutorials/an-introduction-to-the-raphael-js-library--net-7186
			// Get the containing element
			var container = document.getElementById("container");

			// Create the element on which Raphael will draw figures
			var paper = new Raphael(container, '100%', '100%');
	        var colorArr = ["#FFF0A5","#FFB03B","#B64926"];
	        var pieData;        

        function drawingInitialisation(indice){
        	paper.clear();

        	var total = 0;
        	var sectorAngleArr = [];
        	var pieData = [stationsDatas[indice][3],stationsDatas[indice][4],stationsDatas[indice][5]];   
	       	var dataText = ["Nombre total d'emplacements :"+stationsDatas[indice][3],"Nombre de Velhops disponibles :"+stationsDatas[indice][4],"Nombre d'emplacements disponibles :"+stationsDatas[indice][5]];


            //Calcul le total des valeurs
            for(var i=0; i < pieData.length; i++){
                total += pieData[i];
            }

            //Calcul des angles pour chaque secteur à partir du total
            for(var i=0; i < pieData.length; i++){
                var angle = Math.ceil(360 * pieData[i]/total);
                sectorAngleArr.push(angle);
            }
            
            drawArcs(sectorAngleArr, dataText);
        }               

        function drawArcs(sectorAngleArr, dataText){
	        startX = container.offsetWidth / 2;
	        startY = container.offsetHeight / 2;
	        var startAngle = 0;
	        var endAngle = 0;
	       	var x1,x2,y1,y2 = 0;
	       	var arc;
	       	var arc_flag;
	       	var textx;
	       	var texty;


            for(var i=0; i <sectorAngleArr.length; i++){
                startAngle = endAngle;
                endAngle = startAngle + sectorAngleArr[i];
                x0 = parseInt(startX + 80*Math.cos(Math.PI*startAngle/180));
                y0 = parseInt(startY + 80*Math.sin(Math.PI*startAngle/180));

                x1 = parseInt(startX + 150*Math.cos(Math.PI*startAngle/180));
                y1 = parseInt(startY + 150*Math.sin(Math.PI*startAngle/180));

                x2 = parseInt(startX + 150*Math.cos(Math.PI*endAngle/180));
                y2 = parseInt(startY + 150*Math.sin(Math.PI*endAngle/180)); 

                x3 = parseInt(startX + 80*Math.cos(Math.PI*endAngle/180));
                y3 = parseInt(startY + 80*Math.sin(Math.PI*endAngle/180));

                //Calcul du tracé en fonction de l'angle
                // Pour le cas Howart
                // Voir : http://www.itk.ilstu.edu/faculty/javila/SVG/SVG_drawing1/elliptical_curve.htm
                if(sectorAngleArr[i] < 180){
                	arc_flag = " 0 0";
                }else{
                	arc_flag = " 0 1"
                };

                var d = "M"+x0+","+y0+", L" + x1 + "," + y1 + "  A150,150"+arc_flag+", 1 " + x2 + "," + y2 + ", L" + x3 + "," + y3 +"  A80,80"+arc_flag+", 0 "+ x0 + "," + y0 +"z"  ; //1 means clockwise
                arc = paper.path(d);
                arc.attr("fill",colorArr[i]);
                textx = startX + 180*Math.cos(Math.PI*(startAngle+sectorAngleArr[i]/2)/180);
                texty = startY + 180*Math.sin(Math.PI*(startAngle+sectorAngleArr[i]/2)/180);
                paper.text(textx , texty , dataText[i]).attr({
                	fill: '#ff0000',
                	"font-size": 16, 
                	"font-family": "Arial"
                });
            }
        }

// ********************************************************************************
// ********************************************************************************
// INITIALISATION
// ********************************************************************************
// ********************************************************************************

// ATTENTION : window.onload n'est déclanché qu'une fois
// Ça ne fonctionne pas s'il est indiqué ailleurs, même dans un autre fichier js
window.onload = function(){
        parsingJSONCarto();
    }

