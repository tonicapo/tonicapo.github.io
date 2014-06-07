$('window').ready(function(){
    nav = $('nav');
    ref = $('.ref');
    navoffset = $('.navcontainer').offset().top;
//    console.log(navoffset);
    oldoffset = 0;
    newoffset = 0;
    
    
    $(window).scroll(function(){
        newoffset = $(this).scrollTop();
        
        if(newoffset < (oldoffset) && newoffset > navoffset){
//            nav.css('top', -50);
            ref.addClass('sticky');
            nav.addClass('animated fadeInDown');
        } else {
            ref.removeClass('sticky');
            nav.removeClass('animated fadeInDown');
        }
        
        oldoffset  = $(this).scrollTop();
    });
});