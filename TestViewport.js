var hasInnerText =
(document.getElementsByTagName("body")[0].innerText !== undefined) ? true : false;

if(!hasInnerText){
	var viewport = document.getElementById("viewport");
	viewport.textContent += (" "+window.innerWidth+"px x "+window.innerHeight+"px.");

	var pixeldensity = document.getElementById('pixeldensity');
	pixeldensity.textContent += (' '+window.devicePixelRatio+'.');

	var pixeldensity = document.getElementById('browser');
	browser.textContent += (' '+window.outerWidth+'px x '+window.outerHeight+'px.');

	var ecran = document.getElementById('ecran');
	ecran.textContent += (' '+screen.width+'px x '+screen.height+'px.');

	var layout = document.getElementById('layout');
	layout.textContent += document.documentElement.clientWidth;
}else{
	var viewport = document.getElementById("viewport");
	viewport.innerText += (" "+window.innerWidth+"px x "+window.innerHeight+"px.");

	var pixeldensity = document.getElementById('pixeldensity');
	pixeldensity.innerText += (' '+window.devicePixelRatio+'.');

	var pixeldensity = document.getElementById('browser');
	browser.innerText += (' '+window.outerWidth+'px x '+window.outerHeight+'px.');

	var ecran = document.getElementById('ecran');
	ecran.innerText += (' '+screen.width+'px x '+screen.height+'px.');

	var layout = document.getElementById('layout');
	layout.innerText += (' '+document.documentElement.clientWidth+'px x '+document.documentElement.clientHeight+'px.');
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