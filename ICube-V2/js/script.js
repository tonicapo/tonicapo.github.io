$(window).ready(function(){

	// Zeroclipboard : http://zeroclipboard.org/
	// Création du clipboard
	// Attention : ne semble pas fonctionner en local
	var client = new ZeroClipboard( $('.clip_button'), {
    	moviePath: "ZeroClipboard.swf",
    	debug: false
    } );

    client.on( 'ready', function(event) {
        // console.log( 'movie is loaded' );

        client.on( 'copy', function(event) {
          event.clipboardData.setData('text/plain', event.target.innerHTML);
        } );

        client.on( 'aftercopy', function(event) {
          console.log('Copied text to clipboard: ' + event.data['text/plain']);
        } );
     } );

    client.on( 'error', function(event) {
        // console.log( 'ZeroClipboard error of type "' + event.name + '": ' + event.message );
        ZeroClipboard.destroy();
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
    	var tags = "";
    	var lasection = $('section');
    	var letexte = '';
    	var subbuttons = $('#submenu li');

    	parse(jsobj);

    	smaller.click(function(){
    		// console.log('click');
    		smaller.removeClass('selected');
    		$(this).addClass('selected');
    		textlength = $(this).children('p').html().toString();
    		console.log(textlength);
    	});

    	
    	subbuttons.click(function(){
    		subbuttons.removeClass('selected');
    		$(this).addClass('selected');

    		letexte = lasection.text();
    		var tag = $(this).attr('id');
	    	console.log($(this).html());
	   		switch(istagged(letexte)) {
		    case 'p':
		    console.log('case p');
			        if(tag=='h1'){
						textreplace(lasection, letexte, 'p', 'h1');
			        }else if(tag=="h2"){
			        	textreplace(lasection, letexte, 'p', 'h2');
			        }else{
			        	textreplace(lasection, letexte, 'p', '');
			        }
			        break;
		    case "h1":
		    		console.log('case h1');
			        if(tag=='p'){
						textreplace(lasection, letexte, 'h1', 'p');
			        }else if(tag=="h2"){
			        	textreplace(lasection, letexte, 'h1', 'h2');
			        }else{
			        	textreplace(lasection, letexte, 'h1', '');
			        }
			        break;
		    case "h2":
		    		    console.log('case h2');
			        if(tag=='p'){
						textreplace(lasection, letexte, 'h2', 'p');
			        }else if(tag=="h1"){
			        	textreplace(lasection, letexte, 'h2', 'h1');
			        }else{
			        	textreplace(lasection, letexte, 'h2', '');
			        }
			        break;
		   	case null:
		   			console.log('case null');
			   		if(tag=='p'){
			   			textreplace(lasection, letexte, null, 'p');
			   		}else if(tag=='h1'){
						textreplace(lasection, letexte, null, 'h1');
			   		}else if(tag=='h2'){
						textreplace(lasection, letexte, null, 'h2');
			   		}else{
			   			break;
			   		}
			   		break;	
		    default:
		    		break;
			    
				}
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

	function istagged(mytext){
		if(mytext.indexOf('<p>')>=0){return 'p';}
		else if(mytext.indexOf('<h1>')>=0){return 'h1';}
		else if(mytext.indexOf('<h2>')>=0){return 'h2';}
		else {return null;}
	}

	function textreplace(dest, texte, tag1, tag2){
		if(dest.text()!==''){
			if(tag1===null){
				texte = '<'+tag2+'>'+texte+'<\/'+tag2+'>';
			}else if(tag1!==null && tag2===''){
				texte = texte.replace('<'+tag1+'>','');
				texte = texte.replace('<\/'+tag1+'>','');
			}
			else{
				// console.log('replacing : '+'<'+tag1+'>'+' with : '+'<'+tag2+'>');

				// texte = texte.replace("<p>","<h1>");
				// texte = texte.replace("<\/p>","<\/h1>");

				texte = texte.replace('<'+tag1+'>','<'+tag2+'>');
				texte = texte.replace('<\/'+tag1+'>','<\/'+tag2+'>');
				console.log(texte);
			}
		dest.text(texte);
		}
	}


});