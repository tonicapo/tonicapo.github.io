window.onload = function(){
	// Get the containing element
	var container = document.getElementById("container");

	// Create the element on which Raphael will draw figures
	var paper = new Raphael(container, 500, 500);



        var paper;
        var arc;
        var colorArr = ["#468966","#FFF0A5","#FFB03B","#B64926","#8E2800"];
        var pieData = [113,100,50,28,27];
        var sectorAngleArr = [];
        var total = 0;
        var startAngle = 0;
        var endAngle = 0;
        var x1,x2,y1,y2 = 0;

        function init(){
            // paper = Raphael("holder");
            //CALCULATE THE TOTAL
            for(var k=0; k < pieData.length; k++){
                total += pieData[k];
            }
            //CALCULATE THE ANGLES THAT EACH SECTOR SWIPES AND STORE IN AN ARRAY
            for(var i=0; i < pieData.length; i++){
                var angle = Math.ceil(360 * pieData[i]/total);
                sectorAngleArr.push(angle);
            }
            drawArcs();
        }               

        function drawArcs(){
            for(var i=0; i <sectorAngleArr.length; i++){
                startAngle = endAngle;
                endAngle = startAngle + sectorAngleArr[i];

                x1 = parseInt(200 + 180*Math.cos(Math.PI*startAngle/180));
                y1 = parseInt(200 + 180*Math.sin(Math.PI*startAngle/180));

                x2 = parseInt(200 + 180*Math.cos(Math.PI*endAngle/180));
                y2 = parseInt(200 + 180*Math.sin(Math.PI*endAngle/180));                

                var d = "M200,200  L" + x1 + "," + y1 + "  A180,180 0 0,1 " + x2 + "," + y2 + " z"; //1 means clockwise
                // alert(d);
                arc = paper.path(d);
                arc.attr("fill",colorArr[i]);
            }
        }

        init();




	// Creates a cricle x=100, y=100, R=80
	// paper.circle(100, 100, 80);


	// var rectangle = paper.rect(200, 200, 250, 100);
	// var ellipse = paper.ellipse(200, 400, 100, 50);
	// for (var i=0; i <5; i++){
	// 	paper.circle(300+10*i, 100+10*i, 80-10*i);
	// }

	// var tetronimo = paper.path("M 250 250 l 0 -50 l -50 0 l 0 -50 l -50 0 l 0 50 l -50 0 l 0 50 z");
	// // console.log("gotcha!");
	// tetronimo.attr(
	// 		{
	// 			fill:'#9cf',
	// 			stroke:'#ddd',
	// 			'stroke-width':10,
	// 			'stroke-linejoin':'round',
	// 			// l'attribut rotation indiqué dans le tuto http://code.tutsplus.com/tutorials/an-introduction-to-the-raphael-js-library--net-7186
	// 			// n'existe plus depuis la spécification 2.?
	// 			// On utilise à la place transform
	// 			transform: "r-45"
	// 		}
	// 	);
	// tetronimo.animate({transform:'r360'}, 2000, 'bounce',
 //    // /* callback after original animation finishes */
	//     	function(){
	// 	    	this.animate({
	// 		        transform: 'r45',
	// 		        stroke: '#3b4449',
	// 		        'stroke-width': 10
	// 	    	}, 1000);
	//     	}
	// 	);

	// tetronimo.node.onclick = function(){
	// 		// tetronimo.attr("fill", "red");
	// 			console.log('gotcha');
	//     		tetronimo.animate({
	//   			  path: "M 250 250 l 0 -50 l -50 0 l 0 -50 l -100 0 l 0 50 l 50 0 l 0 50 z"
	// 			}, 5000, 'elastic');
	// 	};

	// var pieData = [113,100,50,28,27];
	// var dataString = "M200,200  L380,200  A180,180 0 0,1 89,341 z";
	// var arc = paper.path(dataString);







   // var paper = Raphael('canvas');
   // paper.customAttributes.sector = function(cx, cy, r, startAngle, endAngle) {      
   //      var rad = Math.PI / 180,
   //      x1 = cx + r * Math.cos(startAngle * rad),
   //      x2 = cx + r * Math.cos(endAngle * rad),
   //      y1 = cy + r * Math.sin(startAngle * rad),
   //      y2 = cy + r * Math.sin(endAngle * rad),
   //      flag = (Math.abs(endAngle - startAngle) > 180);

   //      return {
   //          path:[["M", cx, cy,],["L", x1, y1,],["A", r, r, 0, +flag, 1, x2, y2,],["z"]]
   //      }
   //  }

   // path.animate({sector:[cx, cy, radius, startAngle, endAngle]}, animSpeed, function() {
   //     console.log('callback function called after animation');
   //  });  

 //    paper.customAttributes.hue = function (num) {
 //    num = num % 1;
 //    return {fill: "hsb(" + num + ", 0.75, 1)"};
	// };
	// // Custom attribute “hue” will change fill
	// // to be given hue with fixed saturation and brightness.
	// // Now you can use it like this:
	 // var c = paper.circle(10, 10, 10).attr({hue: .45});
	// // or even like this:
	// c.animate({hue: 1}, 1e3);

	// You could also create custom attribute
	// with multiple parameters:
	// paper.customAttributes.hsb = function (h, s, b) {
	//     return {fill: "hsb(" + [h, s, b].join(",") + ")"};
	// };
	// c.attr({hsb: "0.5 .8 1"});
	// c.animate({hsb: [1, 0, 0.5]}, 500);




// var r = Raphael("container");
// r.customAttributes.segment = function (x, y, r, a1, a2) {
//     var flag = (a2 - a1) > 180,
//         clr = (a2 - a1) / 360;
//     a1 = (a1 % 360) * Math.PI / 180;
//     a2 = (a2 % 360) * Math.PI / 180;
//     return {
//         path: [["M", x, y], ["l", r * Math.cos(a1), r * Math.sin(a1)], ["A", r, r, 0, +flag, 1, x + r * Math.cos(a2), y + r * Math.sin(a2)], ["z"]],
//         fill: "hsb(" + clr + ", .75, .8)"
//     };
// };
 
// points = [10, 20, 15];
// total = 45;
// start = 0;
// paths = [];
// for(i=0; i<=2; i++) {
//   size = 360 / total * points[i];
//   var slice = r.path();
//   slice.attr({segment: [250, 250, 200, start, start + size], stroke: "#000", title: "Slice "+i});
//   paths.push(slice);
//   start += size;
// }
 
// newPoints = [5, 20, 20];
// start = 0;
// for(i=0; i<=2; i++) {
//   size = 360 / total * newPoints[i];
//   paths[i].animate({segment: [250, 250, 200, start, start + size]}, 800);
//   paths[i].angle = start - size / 2;
//   start += size;
// }





	//initialisation();
	parsing();
};