$(document).ready(function(){
    $(".nav-item").click(function(){
        $(".nav-item").removeClass("active");
        $(this).addClass("active");
    });
    
    $("#toggler").click(function(){
        $("#wrap").toggleClass("toggled")
        var right = $('.sidbar').css('right');
        if(right == "0px") {
            $('.sidbar').css({'right': '-17rem'});
            $('.layer').fadeOut();
        }else {
            $('.sidbar').css({'right': '0'});
            $('.layer').fadeIn();
        }
    });
   
    $('.layer').click(function(){
        $('.sidbar').css({'right': '-17rem'});
        $('.layer').fadeOut();
    })

    $('.search-icon').click(function(){
        $('.search-input').slideToggle('slow');
    })
   
});