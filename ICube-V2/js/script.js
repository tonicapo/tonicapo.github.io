$(window).ready(function(){

	// RESIZING TRIANGLE FOR FIREFOX
	var wp = $(window);
	var	wpwidth = wp.width();
	var wpheight = wp.height();
	var backgroundtext = $('#backgroundtext');
	var shortt  = [], mediumt = [], longt = [];


	$('#polygon1').attr('points', '154 125,'+wpwidth/2+' 0,'+wpwidth/2+' 250');
	$('#polygon2').attr('points', '200 125,'+wpwidth/2+' 20,'+wpwidth/2+' 230');
 
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
    	parse(jsobj);
    	console.log('click');
    	$('.menu .smaller').click(function(){
    		console.log('click');
    		$('.active p').removeClass('activetext').addClass('border');
    		$('.active').removeClass('active');
    		$(this).addClass('active');
    		$('.active p').addClass('activetext').removeClass('border');
    	});

    	btngenerate.click(function(){
    		console.log(mediumt.length);
    		$('section').html(longt[Math.round(Math.random()*longt.length)]);
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



// Gestion des états boutons
// <ul>
//     <li><a href="#">item 1</a></li>
//     <li><a href="#">item 2</a></li>
//     <li><a href="#">item 3</a></li>
// </ul>

// $("li a").click( function() {
//   $(".active").removeClass("active");
//   $(this).parent("li").addClass("active");
// });


});