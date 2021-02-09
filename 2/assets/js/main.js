/* Preloader */
$(window).on('load', function () {
    // $('body').css('position','fixed');
    $('.preloader').delay(1000).fadeOut('slow',
    function(){
        // $('body').css('position','relative')
    });
});

// Header смена цвета при скролле
window.onscroll = function showHeader() {
    var header = document.querySelector('.header');
    if(window.pageYOffset > 40){
        header.classList.add('header__fixed');
    } else{
        header.classList.remove('header__fixed');
    }
}

// Плавное открытие всех #ссылок 
$('a[href^="#"]').click(function() {
    let target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    },500);
    $('.menu__mobile .menu').hide();
    $('.menu__burger').removeClass('close');
    return false;
});

// Сортировка организаций 
var mixer = mixitup('.organization__item');

// Категории кнопки 
$(function(){
    var link1 = $('.n1');
    link1.click(function() {
        $('.n2').removeClass('active');
        $('.n3').removeClass('active');
        $('.n4').removeClass('active');
        $('.n1').addClass('active');
    })
})
$(function(){
    var link1 = $('.n2');
    link1.click(function() {
        $('.n1').removeClass('active');
        $('.n3').removeClass('active');
        $('.n4').removeClass('active');
        $('.n2').addClass('active');
    })
})
$(function(){
    var link1 = $('.n3');
    link1.click(function() {
        $('.n2').removeClass('active');
        $('.n1').removeClass('active');
        $('.n4').removeClass('active');
        $('.n3').addClass('active');
    })
})
$(function(){
    var link1 = $('.n4');
    link1.click(function() {
        $('.n2').removeClass('active');
        $('.n3').removeClass('active');
        $('.n1').removeClass('active');
        $('.n4').addClass('active');
    })
})
$(function(){
    var link1 = $('.n5');
    link1.click(function() {
        $('.btn').removeClass('active');
    })
})

/* Мобильное меню */
$('.menu__burger').click(function() {
    $('.menu__mobile .menu').toggle(500);
    $(this).toggleClass('close');
});