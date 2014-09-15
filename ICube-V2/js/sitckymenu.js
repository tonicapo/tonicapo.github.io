$('window').ready(function(){
    var nav = $('nav');
    var navul = $('nav > ul');
    var ref = $('.ref');
    var menubutton = $('#menubutton');
    var mobilemenu = $('#mobilemenu');
    var navoffset = $('.navcontainer').offset().top;
    // console.log(navoffset);
    var oldoffset = 0;
    var newoffset = 0;
    
   menubutton.click(function(){
        menubutton.toggleClass('active');
        if(navul.hasClass("toggleMenuDown")){
            navul.removeClass("toggleMenuDown");
            navul.addClass("toggleMenuUp");
        }else{
            navul.toggleClass("toggleMenuUp");
            if(navul.hasClass("toggleMenuUp")){
                navul.removeClass("toggleMenuUp");
            }
            navul.addClass("toggleMenuDown");
        }
        console.log("toggleMenu");
   });
    
    
    $(window).scroll(function(){
        if(navul.hasClass("toggleMenuDown")){
            navul.toggleClass("toggleMenuDown");
            menubutton.toggleClass('active');
        }

        newoffset = $(this).scrollTop();      
        if(newoffset < (oldoffset) && newoffset > navoffset && !((window.innerHeight + window.scrollY) >= document.body.offsetHeight)   ){
            ref.addClass('stick');
            nav.removeClass('fadeInUp');
            nav.addClass('fadeInDown');

        } else if(newoffset > (oldoffset) && newoffset > navoffset && !((window.innerHeight + window.scrollY) >= document.body.offsetHeight)   ){
            console.log("toggleDown");

            nav.addClass('fadeInUp');
            nav.removeClass('fadeInDown');
        } else {
            ref.removeClass('stick');
            nav.removeClass('fadeInDown');
            nav.removeClass('fadeInUp');
        }
        
        oldoffset  = $(this).scrollTop();
    });
    
});
