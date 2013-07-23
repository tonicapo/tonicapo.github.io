var viewport = document.getElementById('viewport');
viewport.innerText += (' '+window.innerWidth+'px x '+window.innerHeight+'px.');

var pixeldensity = document.getElementById('pixeldensity');
pixeldensity.innerText += (' '+window.devicePixelRatio+'.');

var pixeldensity = document.getElementById('browser');
browser.innerText += (' '+window.outerWidth+'px x '+window.outerHeight+'px.');

var ecran = document.getElementById('ecran');
ecran.innerText += (' '+screen.width+'px x '+screen.height+'px.');

var ecran = document.getElementById('matchmedia');
if (window.matchMedia("(min-width: 640px)").matches) {
	ecran.innerText += ("device-width > 640px (window.matchMedia OK)");
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