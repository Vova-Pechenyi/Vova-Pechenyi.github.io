$(document).ready(function () {
    
$(".two").fadeOut(0);
$(".three").fadeOut(0);
    
    function one() {
        $('.one').fadeIn(1000);
        $('.two').fadeOut(500);
        $('.three').fadeOut(500);
    }
    function two() {
        $('.one').fadeOut(500);
        $('.two').fadeIn(1000);
        $('.three').fadeOut(500);
    }
    function three() {
        $('.one').fadeOut(500);
        $('.two').fadeOut(500);
        $('.three').fadeIn(1000);
    }
    
    var timerId = setTimeout(function animate() {
        
        setTimeout(one, 1500);
        setTimeout(two, 3500);
        setTimeout(three, 5500);
        
        timerId = setTimeout(animate, 6500);
    }, 0);
    function w_1() {
        $('.w-1').addClass('fadeInRight');
        $('.w-1').css('opacity','1');
    }
    function w_2() {
        $('.w-2').addClass('fadeInRight');
        $('.w-2').css('opacity','1');
    }
    function w_3() {
        $('.w-3').addClass('fadeInRight');
        $('.w-3').css('opacity','1');
    }
    function w_4() {
        $('.w-4').addClass('fadeInRight');
        $('.w-4').css('opacity','1');
    }
    function w_5() {
        $('.w-5').addClass('fadeInRight');
        $('.w-5').css('opacity','1');
    }
    function w_6() {
        $('.w-6').addClass('fadeInRight');
        $('.w-6').css('opacity','1');
    }
    function w_n() {
        setTimeout(w_1, 200);
        setTimeout(w_2, 400);
        setTimeout(w_3, 600);
        setTimeout(w_4, 800);
        setTimeout(w_5, 1000);
        setTimeout(w_6, 1300);
    }
    setTimeout(w_n,500);
    
    function h1() {
        $('.h1').addClass('fadeInUpBig');
        $('.h1').css('opacity', '1');
    }
    function line() {
        $('.line').addClass('fadeInLeftBig');
        $('.line').css('opacity', '1');
    }
    function descr_text() {
        $('.descr-text').addClass('fadeInUpBig');
        $('.descr-text').css('opacity', '1');
    }
    function btn_1() {
        $('.btn-1').addClass('fadeInLeft');
        $('.btn-1').css('opacity', '1');
    }
    function btn_2() {
        $('.btn-2').addClass('fadeInRightBig');
        $('.btn-2').css('opacity', '1');
    }
    
    
    setTimeout(h1,2000);
    setTimeout(line,2000);
    setTimeout(descr_text,2100);
    setTimeout(btn_1,2200);
    setTimeout(btn_2,2200);

    

    
    $('.w-n').hover(function() {
        $(this).children("ul").stop(false,true).fadeIn(300);
    }, function() {
        $(this).children("ul").stop(false,true).fadeOut(300);
    } );
    
    $('.bars-li').hover(function () {
        $(this).children("ul").stop(false,true).fadeIn(300);
    }, function () {
        $(this).children('ul').stop(false,true).fadeOut(300);
    });
    
    $('.menu-bars_list').fadeOut(100);
    
    $('.icon-fa').click(function () {
        $('.menu-bars_list').slideToggle();
    });
    
    
    $('.portfolio').fadeOut(100);
    
    $('.experience').click(function() {
        $('.portfolio').slideToggle("slow");
        $('.experience').css('opacity', '0.2');
        $('.experience').css('transition', '1s','linear');
    });
    
    $('.close_slider').click(function() {
        $('.portfolio').slideToggle("slow");
        $('.experience').css('opacity', '1');
        $('.experience').css('transition', '.3s','linear');
    });
    
    

    
    
    $('.slider').slick({
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: true,
        arrow: false,
    });
    
    
    $('.bgr').css('display', 'none');
    
    function ready() {
        $('.bgr').css('display', 'block');
    };
    
    setTimeout(ready, 1500);
    
    
    
    
    
    
    new WOW().init();
});

