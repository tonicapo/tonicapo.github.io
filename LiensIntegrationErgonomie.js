
// var lesElementsTests = document.getElementById('tous');
//alert(lesElementsTests.innerHTML);
//alert(btnTous.length);
// var largeur = window.screen.width;
// var hauteur = window.screen.height;
// alert("Largeur : "+largeur+", Hauteur :"+hauteur);

// var hauteur = window.innerHeight;
// var largeur = window.innerWidth;
// alert("Inner Largeur : "+largeur+", Inner Hauteur :"+hauteur);


// var btnTous = document.getElementsByTagName('li');
var btnTous = $('li');
var	lesElements = document.querySelectorAll('div.global');
var filtrage = function () {
      //alert("Vous m'avez cliqué !");
		// for(var i=0;i<lesElements.length; i++){
		// 	if(this.id ==='web'){
		// 		if(lesElements[i].className ==='global webdesign'){
		// 		lesElements[i].style.display = 'inline-block';
		// 		}
		// 		else{
		// 			lesElements[i].style.display = 'none';
		// 		}
		// 	}

		// 	else if(this.id ==='inte'){
		// 		if(lesElements[i].className ==='global integration'){
		// 		lesElements[i].style.display = 'inline-block';
		// 		}
		// 		else{
		// 			lesElements[i].style.display = 'none';
		// 		}
		// 	}

		// 	else if(this.id ==='ergo'){
		// 		if(lesElements[i].className ==='global ergonomie'){
		// 		lesElements[i].style.display = 'inline-block';
		// 		}
		// 		else{
		// 			lesElements[i].style.display = 'none';
		// 		}
		// 	}else{
		// 		lesElements[i].style.display = 'inline-block';
		// 	}
		// }
		// if(this.id ==='web'){
		// 	$('body').queue(function(){
		// 			// $('.webdesign').slideDown('1.0', 'linear');
		// 							$('.webdesign').slideDown('slow', 'linear');
		// 			$('.integration, .ergonomie').slideUp('slow', 'linear');
		// 			$('body').dequeue();
		// 			// $('.integration, .ergonomie').dequeue();
		// 		});
		// 	}else if(this.id ==='inte'){
		// 		$('body').queue(function(){
		// 			// $('.integration').slideDown('1.0', 'linear');
		// 							$('.integration').slideDown('slow', 'linear');
		// 			$('.webdesign, .ergonomie').slideUp('slow', 'linear');
		// 								$('body').dequeue();
		// 			// $('.integration').dequeue();
		// 			// $('.webdesign, .ergonomie').dequeue();
		// 		});
		// 	}else if(this.id ==='ergo'){
		// 		$('body').queue(function(){
		// 			// $('.ergonomie').slideDown('1.0', 'linear');
		// 							$('.ergonomie').slideDown('slow', 'linear');
		// 			$('.integration, .webdesign').slideUp('slow', 'linear');
		// 								$('body').dequeue();
		// 			// $('.ergonomie').dequeue();
		// 			// $('.integration, .webdesign').dequeue();
		// 		});
		// 	}else{
		// 		$('.global').slideDown('600', 'linear');
		// }


				if(this.id ==='web'){
			// $('body').queue(function(){
					// $('.webdesign').slideDown('1.0', 'linear');
									$('.webdesign').slideDown('slow', 'linear');
					$('.integration, .ergonomie').slideUp('slow', 'linear');
					// $('body').dequeue();
					// $('.integration, .ergonomie').dequeue();
				// });
			}else if(this.id ==='inte'){
				// $('body').queue(function(){
					// $('.integration').slideDown('1.0', 'linear');
									$('.integration').slideDown('slow', 'linear');
					$('.webdesign, .ergonomie').slideUp('slow', 'linear');
										// $('body').dequeue();
					// $('.integration').dequeue();
					// $('.webdesign, .ergonomie').dequeue();
				// });
			}else if(this.id ==='ergo'){
				// $('body').queue(function(){
					// $('.ergonomie').slideDown('1.0', 'linear');
									$('.ergonomie').slideDown('slow', 'linear');
					$('.integration, .webdesign').slideUp('slow', 'linear');
										// $('body').dequeue();
					// $('.ergonomie').dequeue();
					// $('.integration, .webdesign').dequeue();
				// });
			}else{
				$('.global').slideDown('600', 'linear');
		}
  };


for(var i=0;i<btnTous.length; i++){
	btnTous[i].addEventListener('click', filtrage , false);
}






