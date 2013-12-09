$("document").ready(function(){
			var j = 2;
			var lesImages = ['Railway.jpg', 'HoneyDukes.jpg','Bananas.jpg', 'BW_IMG_6489.jpg','chocolatier.jpg '];
			var image = 2;
			var promise = null;

			var animer = function(){
                        	$(this).css('-webkit-transform',"translateX(0%)");
                        	$(this).css('-moz-transform',"translateX(0%)");

                        	
   					$(".photo").animate({ whyNotToUseANonExistingProperty: 100 }, {
						step: function(now,fx) {
                        	$(this).css('-webkit-transform',"translateX(-"+now + "%)");
                        	$(this).css('-moz-transform',"translateX(-"+now + "%)");
                    },
                    duration:'slow'
                	},'linear');
				setTimeout(changer, 4000);
			};
			setInterval(animer, 5000);

			function changer(){
				console.log('changer');
				if (image==2){
					$('.1').css('background-image', "url(./photos/"+lesImages[j]+")");

					$('.1').css('left',"100%");
					image=1;
					j++;
				}else{
					$('.2').css('background-image', "url(./photos/"+lesImages[j]+")");
					$('.2').css('-webkit-transform',"translateX(100%)");
					image=2;
					j++;
				}

				if(j==lesImages.length){j=0;}
			}

			$.getJSON("./list_images.json", function (obj) 
				{
   				$(obj.users).each(function (key, value) 
   						{
        			$("ul").append("<li>" + value.name + "</li>");
						}
					)
				}
			);


    });


