// v1.6.5 by frimoss 18.03.2021

/* Мобильное меню */
$('.menu__burger').click(function() {
    $('.menu__mobile .menu').toggle(500);
    $(this).toggleClass('close');
});

/* Кнопки */
$(function(){
    var link1 = $('.btn1');
    link1.click(function() {
        $('.btn2').removeClass('active');
        $('.main__russia').hide();
        $('.btn1').addClass('active');
        $('.main__abroad').show();
    })
})
$(function(){
    var link2 = $('.btn2');
    link2.click(function() {
        $('.btn1').removeClass('active');
        $('.main__abroad').hide();
        $('.btn2').addClass('active');
        $('.main__russia').show();
    })
})