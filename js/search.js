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
    $('#search-filter-icon').click(function(){
        $('.filter-col').slideToggle('slow');
    })

    $("input:checkbox").click(function(){
        var $box = $(this);

        if($box.is(':checked')) {
            var group = "input:checkbox[name='"+$box.attr("name")+"']";
            $(group).prop("checked",false);
            $box.prop("checked",true);
        }
    })
});