$(function () {
    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollCount = $(window).scrollTop();

//////////* Fixed Header *///////////
 checkScroll(scrollCount); 

   $(window).on("scroll", function(){

        
    scrollCount = $(this).scrollTop();
    checkScroll(scrollCount);
        
   }) ;


  function checkScroll(scrollCount){
    if(scrollCount >= introH ){
        header.addClass("fixed");
    }
    else {
        header.removeClass("fixed");
    }
  }
//////////* Smooth Scroll *///////////

$("[data-scroll]").on("click", function(event){
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffSet = $(blockId).offset().top;

    $("#nav a").removeClass("active");
     $this.addClass("active");
        
     $('html, body').animate({
         scrollTop: blockOffSet
     },500) ;

});

//////////* Gamburger *///////////

    $("#nav__toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });


//////////* Accordion *///////////

    $("[data-collaps]").on("click", function(event){
        event.preventDefault();
    
        var collapseId = $(this).data("collaps");
        $(this).toggleClass("active");
        /*$(collapseId).slideToggle();*/
    });

//////////* slic *///////////
    $('[data-slider]').slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
        
    });
});