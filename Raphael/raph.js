window.onload = function(){
	// Get the containing element
	var container = document.getElementById("container");

	// Create the element on which Raphael will draw figures
	var paper = new Raphael(container, 500, 500);

	// Creates a cricle x=100, y=100, R=80
	paper.circle(100, 100, 80);


	var rectangle = paper.rect(200, 200, 250, 100);
	var ellipse = paper.ellipse(200, 400, 100, 50);
	for (var i=0; i <5; i++){
		paper.circle(300+10*i, 100+10*i, 80-10*i);
	}

	var tetronimo = paper.path("M 250 250 l 0 -50 l -50 0 l 0 -50 l -50 0 l 0 50 l -50 0 l 0 50 z");
	// console.log("gotcha!");
	tetronimo.attr(
			{
				fill:'#9cf',
				stroke:'#ddd',
				'stroke-width':10,
				'stroke-linejoin':'round',
				// l'attribut rotation indiqué dans le tuto http://code.tutsplus.com/tutorials/an-introduction-to-the-raphael-js-library--net-7186
				// n'existe plus depuis la spécification 2.?
				// On utilise à la place transform
				transform: "r-45"
			}
		);
	tetronimo.animate({transform:'r360'}, 2000, 'bounce');

};