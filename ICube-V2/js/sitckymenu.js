$('window').ready(function(){
    var nav = $('nav');
    var navul = $('nav > ul');
    var ref = $('.ref');
    var menubutton = $('#menubutton');
    var mobilemenu = $('#mobilemenu');
    var navoffset = $('.navcontainer').offset().top;
    console.log(navoffset);
    var oldoffset = 0;
    var newoffset = 0;
    
   menubutton.click(function(){
        menubutton.toggleClass('active');
        navul.toggleClass("toggleMenu");
//        console.log("toggle");
   });
    
    
    $(window).scroll(function(){
        if(navul.hasClass("toggleMenu")){
            navul.toggleClass("toggleMenu");
        }

        newoffset = $(this).scrollTop();      
        if(newoffset < (oldoffset) && newoffset > navoffset && !((window.innerHeight + window.scrollY) >= document.body.offsetHeight)   ){
//            nav.css('top', -50);
            ref.addClass('stick');
            nav.addClass('fadeInDown');
        } else {
            ref.removeClass('stick');
            nav.removeClass('fadeInDown');
        }
        
        oldoffset  = $(this).scrollTop();
    });
    
});
