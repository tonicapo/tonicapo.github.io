var hasInnerText =
(document.getElementsByTagName("body")[0].innerText !== undefined) ? true : false;

var viewport = document.getElementById("viewport");
var pixeldensity = document.getElementById('pixeldensity');
var browser = document.getElementById('browser');
var ecran = document.getElementById('ecran');
var layout = document.getElementById('layout');

function resize(){
		if(!hasInnerText){
			viewport.textContent = ("Viewport :  "+window.innerWidth+"px x "+window.innerHeight+"px.");
			pixeldensity.textContent = ('Densité de pixels :  '+window.devicePixelRatio+'.');
			browser.textContent = ('Navigateur : '+window.outerWidth+'px x '+window.outerHeight+'px.');
			ecran.textContent = ('Ecran : '+screen.width+'px x '+screen.height+'px.');
			layout.textContent = ('Layout : '+document.documentElement.clientWidth+'px x '+document.documentElement.clientHeight+'px.');
		}else{
			viewport.innerText = ("Viewport : "+window.innerWidth+"px x "+window.innerHeight+"px.");
			pixeldensity.innerText = ('Densité de pixels '+window.devicePixelRatio+'.');
			browser.innerText = ('Navigateur '+window.outerWidth+'px x '+window.outerHeight+'px.');
			ecran.innerText = ('Ecran : '+screen.width+'px x '+screen.height+'px.');
			layout.innerText = ('Layout : '+document.documentElement.clientWidth+'px x '+document.documentElement.clientHeight+'px.');
		}
};

resize();
window.onresize = function(){
	resize();
}

// http://toddmotto.com/viewport-dynamic-width-calculation-retina-and-pixel-ratio-javascript-widget/
// (function() {

//     // Create the ViewPort detector
//     var viewDetector = document.createElement('div');
//     document.getElementsByTagName('body')[0].insertBefore(viewDetector).id = 'viewport-detector';
    
//     // Load and Resize events
//     window.onresize = dynamicResizer;
//     window.onload = dynamicResizer;

//     function dynamicResizer() {
//         var docWidth = window.innerWidth,
//             docHeight = window.innerHeight;
//         spanDimensions.innerHTML = docWidth + " x " + docHeight;
//     }
    
//     // Create <span class="dimensions"> and append
//     var spanDimensions = document.createElement('span');
//     spanDimensions.className = 'dimensions';
//     document.getElementById('viewport-detector').appendChild(spanDimensions);
    
//     // Create <span class="retina"> and append
//     var spanRetina = document.createElement('span');
//     spanRetina.className = 'retina';
//     document.getElementById('viewport-detector').appendChild(spanRetina);
    
//     // Create <span class="pixel-ratio"> and append
//     var spanPixels = document.createElement('span');
//     spanPixels.className = 'pixel-ratio';
//     document.getElementById('viewport-detector').appendChild(spanPixels);
//     spanPixels.innerHTML = 'Pixel Ratio: ' + window.devicePixelRatio;
    
//     // Retina detect
//     if(window.devicePixelRatio >= 2) {
//         spanRetina.innerHTML = 'Retina Device';
//     } else {
//         spanRetina.innerHTML = 'No Retina Device';
//     }
// })();