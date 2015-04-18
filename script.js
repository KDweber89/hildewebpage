$(document).ready(function(){

    setProperHeights();

    $("#star1").mouseenter(function(){
        $(".circle1").fadeIn();
    });
    $("#star1").mouseleave(function(){
        $(".circle1").fadeOut();
    });

    $("#star2").mouseenter(function(){
        $(".circle2").fadeIn();
    });
    $("#star2").mouseleave(function(){
        $(".circle2").fadeOut();
    });

    $("#star3").mouseenter(function(){
        $(".circle3").fadeIn();
    });
    $("#star3").mouseleave(function(){
        $(".circle3").fadeOut();
    });

    $("#star4").mouseenter(function(){
        $(".circle4").fadeIn();
    });
    $("#star4").mouseleave(function(){
        $(".circle4").fadeOut();
    });

    $("#star5").mouseenter(function(){
        $(".circle5").fadeIn();
    });
    $("#star5").mouseleave(function(){
        $(".circle5").fadeOut();
    });
});

$(window).resize(function(){
    this.setProperHeights();
});

function setProperHeights() {
    var headerHeight = $('.header').height();
    var newHeight = $(window).height() - $('.header').height() + "px" ;
    console.log("Setting new height to " + newHeight + " (header height is " + headerHeight + ")");

    $('.map-container').height(newHeight);


    
    // $('.map').width($('.map').height() * 1897 / 1150);


    if (($('.map-container').height() * 1897 / 1150) > $('.map-container').width()) {
        $('.map').height($('.map').width() * 1150 / 1897 + "px");
        $('.map').width("100%");
    } else {
        $('.map').width($('.map').height() * 1897 / 1150 + "px");
        $('.map').height("100%");
    }
}

