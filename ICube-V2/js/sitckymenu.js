$('window').ready(function(){
    nav = $('nav');
    navtop = nav.offset().top();
    console.log(navtop);
    $(window).scroll(function(){
            console.log("triggered");   
    });
});