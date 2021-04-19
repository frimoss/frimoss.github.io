
/* Preloader */
$(window).on('load', function () {
    $('.preloader').delay(10).fadeOut('slow');
});

// Header  повяление при сколле наверх
var header = $('.header'),
		scrollPrev = 0;
$(window).scroll(function() {
	var scrolled = $(window).scrollTop();
	if ( scrolled > 100 && scrolled > scrollPrev ) {
        if (!$('.menu__burger').hasClass('close')) {
            header.addClass('out');
        }
	} else {	
		header.removeClass('out');
	}
	if ($(document).scrollTop() > 10 ) {
		header.addClass('active');
	} else {
        if (!$('.menu__burger').hasClass('close')){
            header.removeClass('active');
        }		
	}
	scrollPrev = scrolled;
});

// Плавное открытие всех #ссылок 
$('a[href^="#"]').click(function() {
    let target = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    },800);
    $('.menu__mobile').hide();
    $('.menu__burger').removeClass('close');
    $('body').removeClass('fixed');
    return false;
});

/* Modal window */
$('.link__about').click(function() {
    $('.modal').show();
	return false;
});
$('.close_modal_window').click(function() {
    $('.modal').hide();
	return false;
});
$('.modal__out').click(function() {
    $('.modal').hide();
	return false;
});

// Откл tilt.js на моб
function destroyTilt() {
    var tiltElements = document.querySelectorAll(`[data-tilt]`);
    var mq = window.matchMedia("(max-width: 1025px)");
    if (mq.matches) {
        for (var i = 0, len = tiltElements.length; i < len; i++) {
            tiltElements[i].vanillaTilt.destroy();
        }
    }
}
destroyTilt();

/* Мобильное меню */
$('.menu__burger').click(function() {
    $('.menu__mobile').slideToggle(400);
    $(this).toggleClass('close');
	$('.header').addClass('active');
    $('body').toggleClass('fixed');
});