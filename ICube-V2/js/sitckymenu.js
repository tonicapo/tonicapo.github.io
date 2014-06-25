$('window').ready(function(){
    nav = $('nav');
    ref = $('.ref');
    mobilemenu = $('#mobilemenu');
    navoffset = $('.navcontainer').offset().top;
//    console.log(navoffset);
    oldoffset = 0;
    newoffset = 0;
    
   mobilemenu.click(function(){
//       nav.css('height','200px');
        nav.toggleClass("toggleMenu");
        console.log("toggle");
   });
    
    
    $(window).scroll(function(){        
        newoffset = $(this).scrollTop();      
        if(newoffset < (oldoffset) && newoffset > navoffset && !((window.innerHeight + window.scrollY) >= document.body.offsetHeight)   ){
//            nav.css('top', -50);
            ref.addClass('stick');
            nav.addClass('animated fadeInDown');
        } else {
            ref.removeClass('stick');
            nav.removeClass('animated fadeInDown');
        }
        
        oldoffset  = $(this).scrollTop();
    });
    
});
