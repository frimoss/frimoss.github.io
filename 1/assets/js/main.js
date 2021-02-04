/* Модальное окно */
$(function(){
  var link1 = $('.modal1');
  link1.click(function() {
      $('#4').css('display', 'none');
      $('#2').css('display', 'none');
      $('#3').css('display', 'none');
      $('#1').css('display', 'flex');
  })
})
$(function(){
  var link2 = $('.modal2');
  link2.click(function() {
      $('#4').css('display', 'none');
      $('#1').css('display', 'none');
      $('#3').css('display', 'none');
      $('#2').css('display', 'flex');
  })
})
$(function(){
  var link3 = $('.modal3');
  link3.click(function() {
      $('#1').css('display', 'none');
      $('#4').css('display', 'none');
      $('#2').css('display', 'none');
      $('#3').css('display', 'flex');
  })
})
$(function(){
  var link4 = $('.modal4');
  link4.click(function() {
      $('#1').css('display', 'none');
      $('#2').css('display', 'none');
      $('#3').css('display', 'none');
      $('#4').css('display', 'flex');
  })
})

$(function(){
  var close = $('.close_modal_window');
  close.click(function() {
      $('#1').hide();
      $('#2').hide();
      $('#3').hide();
      $('#4').hide();
  })
})
$(function(){
  var close = $('section');
  close.click(function() {
      $('#1').hide();
      $('#2').hide();
      $('#3').hide();
      $('#4').hide();
  })
})