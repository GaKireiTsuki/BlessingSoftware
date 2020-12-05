import $ from 'jquery'
$(document).ready(function () {
    //Scroll style
    $(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() > 30) {
                $('.nav').css({'transform': 'matrix(1, 0, 0, 1, 0, -210)'});
                $('.menu').css({'transform': 'matrix(1, 0, 0, 1, 0, 0)'});
            } else {
                $('.nav').css({'transform': 'matrix(1, 0, 0, 1, 0, 0)'});
                $('.menu').css({'transform': 'matrix(1, 0, 0, 1, 0, -210)'});
                $('.menu_bar').removeClass('menu_bars');
                $('.nav').removeClass('menu_nav');
                $('.menu_text').text('MENU').removeClass('e');
            }
        });
    });

    //Click open menu
    $('#menu').click(function () {
        $('.menu_bar').toggleClass('menu_bars');
        $('.nav').toggleClass('menu_nav');
        if ($('.menu_text').hasClass('e')) {
            $('.menu_text').text('MENU').removeClass('e');
        } else {
            $('.menu_text').text('CLOSE').addClass('e');
        }
    });
});