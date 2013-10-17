$("document").ready(function(){
			var j = 2;
			var lesImages = ['Railway.jpg', 'HoneyDukes.jpg','Bananas.jpg', 'BW_IMG_6489.jpg','chocolatier.jpg '];
			var image = 2;
			var promise = null;
				// alert('gotcha');
			// $('#photo2').offset({ top: 0, left: ($('#photo1').width()) });		


			// var leTiming = new Date();

			var animer = function(){
				    // $(".photo").each(function(){this.style.webkitTransition = '-webkit-translateX 2s ease-out';});
   					// $(".photo").each(function(){this.style.webkitTransform = '-webkit-translateX(100px)';});


					// $('.photo').attr('style', '-webkit-transition: translateX 5s ease-out');
					// $('.photo').attr('style', '-webkit-transform: translateX(100px)');

					// alert('gotcha');
						// $(".photo").transition({
						//   translate: [100,0] ,
						//   duration: 500,
						//   easing: 'in',
						//   complete: function() { /* ... */ }
						// });
					// $(".photo").css('-webkit-transition',  "-webkit-translateX 2s ease-out" );
   					// $(".photo").animate({WebkitTransform:'translateX(200px)'}, 5000);

   					$(".photo").animate({ whyNotToUseANonExistingProperty: 100 }, {
						step: function(now,fx) {
                        	$(this).css('-webkit-transform',"translateX("+now + "%)");
                        	$(this).css('-moz-transform',"translateX("+now + "%)");
                    },
                    duration:'slow'
                },'linear');
					// $(".photo").css('-webkit-transition',  "-webkit-translateX 2s ease-out" );
   		// 			$(".photo").css( "-webkit-transform", "translateX(100%)" );

				// $(".photo").animate({
				// 	left:"-=100%"

					//POur jouer sur l'opacité, on place l'élément initialement invisible à display:none;
					// opacity:'toggle'
				// }, 1000);
				// setTimeout(changer, 4000);
				// $(".photo").promise().done(changer());
				// }, { duration: 2000, done : function(){setTimeout(changer(), 1000);}});
				// $(".photo").promise().done(changer());
				// laPhoto2.animate({left:'-=1400'});
			};
			setInterval(animer, 1000);

//La fonction est appelée 2 fois!!!
			function changer(){
				console.log('changer');
				if (image==2){
					$('.1').css('background-image', "url(./photos/"+lesImages[j]+")");

					// $('.1').css('left', '100%');
					// $('.1').css('display', 'none');

					// console.log($('.1').css('opacity'));
					image=1;
					j++;
				}else{
					$('.2').css('background-image', "url(./photos/"+lesImages[j]+")");

					// $('.2').css('left', '100%');
					image=2;
					j++;
				}

				if(j==lesImages.length){j=0;}
			}


			// $translation = -100;
			// $actualOffset = 0;
			// $p1 = 0;
			// $p2 = 0;
			//  var move = function(){
			// 	if($actualOffset< (window.innerWidth-100)){
			// 		$p1 = laPhoto1.offset().left + $translation;
			// 		$p2 = laPhoto2.offset().left + $translation
			// 		console.log((new Date()).getTime());		
			// 		laPhoto1.offset({ top: 0, left: $p1});
			// 		laPhoto2.offset({ top: 0, left: $p2});
			// 		console.log((new Date()).getTime());
			// 		$actualOffset+=100;
			// 	}
			// 	else {
			// 		// if(j<lesImages.length){
			// 		$actualOffset = 0;
			// 			if(image==1){
			// 				laPhoto1.offset({ top: 0, left: window.innerWidth });
			// 				laPhoto2.offset({ top: 0, left: 0 });
			// 				clearInterval($id);
			// 				if(j<lesImages.length){
			// 				setTimeout(function(){$id = setInterval(move, 5);}, 5000);
			// 				laPhoto1.css('background-image', "url(./photos/"+lesImages[j]+")");
			// 				j++;
			// 				}
			// 				image = 2;
			// 				}
			// 			else{
			// 				laPhoto2.offset({ top: 0, left: window.innerWidth });
			// 				laPhoto1.offset({ top: 0, left: 0 });
			// 				clearInterval($id);
			// 				if(j<lesImages.length){
			// 				setTimeout(function(){$id = setInterval(move, 5);}, 5000);
			// 				laPhoto2.css('background-image', "url(./photos/"+lesImages[j]+")");
			// 				j++;
			// 			}
			// 				image = 1;
			// 				}
			// 		// }
			// 	}
			// };
			// setTimeout(function(){$id = setInterval(move, 5);}, 5000);

});