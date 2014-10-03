$(window).ready(function(){

	// RESIZING TRIANGLE FOR FIREFOX
	var wp = $(window);
	var	wpwidth = wp.width();
	var wpheight = wp.height();
	var backgroundtext = $('#backgroundtext');
	var shortt  = [], mediumt = [], longt = [];


	$('#polygon1').attr('points', '0 125,'+wpwidth/2+' -20,'+wpwidth/2+' 270');
	$('#polygon2').attr('points', '50 125,'+wpwidth/2+' 20,'+wpwidth/2+' 230');
 
 	if(wpheight > 1055){
 		backgroundtext.height(320 + (wpheight-1055));
 		backgroundtext.attr('top', 320 + (wpheight-1055));
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
                        console.log("Completed: "+textStatus);
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
    	console.log('click');
 	
    	smaller.click(function(){
    		console.log('click');
    		smaller.removeClass('selected');
    		$(this).addClass('selected');
    		textlength = $(this).children('p').html().toString();
    		console.log(textlength);
    	});

    	btngenerate.click(function(){
    		console.log(textlength);
    		switch(textlength) {
		    case "S":
		        section.html(longt[Math.round(Math.random()*longt.length)]);
		        console.log("short");
		        break;
		    case "M":
		        section.html(longt[Math.round(Math.random()*longt.length)]);
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
});