$(window).ready(function(){

	        var clientTarget = new ZeroClipboard( $('#btncopy'), {
              moviePath: "ZeroClipboard.swf",
              debug: false
            } );

            // ZeroClipboard.config( { swfPath: "http://YOURSERVER/path/ZeroClipboard.swf" } );

            clientTarget.on( "ready", function(event)
            {
                console.log("loaded");
                
                clientTarget.on( 'complete', function(event) {
          		//event.clipboardData.setData('text/plain', 'les datas');
          		console.log('copié');
        		} );


                // clientTarget.on( "complete", function(clientTarget, args) {
                //     clientTarget.setText( args.text );
                //     // $('#target-to-copy-text').fadeIn();
                // } );
            } );

	// RESIZING TRIANGLE FOR FIREFOX
	var wp = $(window);

	var	wpwidth = wp.width();
	var wpheight = wp.height();
		console.log('wpwidth'+wpwidth);
		console.log('wpheight'+wpheight);

	var backgroundtext = $('#backgroundtext');
	var footer = $('footer');
	var shortt  = [], mediumt = [], longt = [];

	if((wpwidth>360)&&(wpwidth<1153)){
		$('#polygon1').attr('points', '0 125, 576 -20, 576 270');
		$('#polygon2').attr('points', '50 125, 576 20, 576 230');
	}else{
		$('#polygon1').attr('points', '0 125,'+wpwidth/2+' -20,'+wpwidth/2+' 270');
		$('#polygon2').attr('points', '50 125,'+wpwidth/2+' 20,'+wpwidth/2+' 230');
	}

 	
 	if(wpheight > (footer.offset().top+footer.height())){
 		console.log('footer offset'+footer.offset().top);
 		// backgroundtext.height(320 + (wpheight-1055));
 		// backgroundtext.attr('top', 320 + (wpheight-1055));
 		footer.offset({top: (wpheight-footer.height()-9)});
 		console.log('footer offset'+footer.offset().top);
 		var bgtheight = footer.offset().top-($('section').offset().top + $('section').height()/2);
 		console.log(bgtheight);
 		
 		backgroundtext.height(bgtheight);
 		console.log(backgroundtext.height());
 		backgroundtext.offset({top: $('section').offset().top + $('section').height()/2});
 	}

	// SVG Icon Colors
	var btngenerate = $('#btngenerate');
	var btnoptions = $('#btnoptions');
	var btnS = $('#btnS');
	var btnM = $('#btnM');
	var btnL = $('#btnL');
	var btncopy = $('#btncopy');
	var iconleft = [$('#iconleft'), "#icon-left", "#icon-left-white"];
	var iconcopy = [$('#iconcopy'), "#icon-copy", "#icon-copy-white"];
	

	function changesvgcolor(button, icon){
		var icostring;
			button.mouseover(function(){
				icon[0].attr("xlink:href",icon[2]);
			});

			button.mouseout(function(){
				icon[0].attr("xlink:href",icon[1]);
			});
	}

	changesvgcolor(btngenerate, iconleft);
	changesvgcolor(btncopy, iconcopy);

	$('nav li').mouseover(function(){
    	$(this).addClass('active');
    }).mouseout(function(){
    	$(this).removeClass('active');
    });

	// JSON
    $.ajax({
                    url: "./json/citations.json",
                    // dataType: "json",
                    mimeType: "application/json; charset=utf-8",
                    complete: function(jqXHR, textStatus) {
                    	// $('#loader-container').toggleClass('none');
                        // console.log("Completed: "+textStatus);
                    },
                    error: function(jqXHR, textStatus, errorThrown) {
                        console.log(errorThrown);
                    },
                    success: function(data, textStatus, jqXHR) {
                        fire(data);
                    }

    });

    function fire(jsobj){
    	// console.log(jsobj);
    	var textlength ="S";
    	var smaller = $('.smaller');
    	var section = $('section');

    	parse(jsobj);
    	// console.log('click');
 	
    	smaller.click(function(){
    		// console.log('click');
    		smaller.removeClass('selected');
    		$(this).addClass('selected');
    		textlength = $(this).children('p').html().toString();
    		console.log(textlength);
    	});

    	btngenerate.click(function(){
    		console.log(textlength);
    		switch(textlength) {
		    case "S":
		        section.html(shortt[Math.round(Math.random()*shortt.length)]);
		        console.log("short");
		        break;
		    case "M":
		        section.html(mediumt[Math.round(Math.random()*mediumt.length)]);
		        console.log("medium");
		        break;
		    case "L":
		   		section.html(longt[Math.round(Math.random()*longt.length)]); 
		   		console.log("long");
		   		break;	
		    default:
		        section.html("Vous devez choisir une longueur de texte");
			}
    	});


// $('.zclip').zclip({
// 	path:'//cdnjs.cloudflare.com/ajax/libs/zeroclipboard/2.1.6/ZeroClipboard.swf',
// 	copy:function(){alert($('section').html());},
// 	afterCopy:function(){
// 	// $('#callback-paragraph').css('background','green');
// 	// $(this).css('color','purple');
// 	// $(this).next('.check').show();
// 		alert('after copy');
// 	}
// });
// The link with ID "copy-description" will copy
// the text of the paragraph with ID "description"
// $('a#copy-dynamic').zclip({
// path:'js/ZeroClipboard.swf',
// copy:function(){return $('input#dynamic').val();}
// });

	  //   	ZeroClipboard.config( { moviePath: 'javascripts/ZeroClipboard.swf' } );
	 
			// var client = new ZeroClipboard( $("#btncopy") );



    }

    function parse(lejson) {
    	console.log(lejson);
        // var section = $("section");
        // console.log('check');
        $.each(lejson.citations, function(i, item) {
        		if(item.cite.type == "short"){shortt.push(item.cite.text);}
        		if(item.cite.type == "medium"){mediumt.push(item.cite.text);}
        		if(item.cite.type == "long"){longt.push(item.cite.text);}
        });

	}


});
