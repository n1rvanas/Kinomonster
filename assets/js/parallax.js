$(window).scroll(function(e){
  parallax();
});
function parallax(){
  var scrolled = $(window).scrollTop();
  $('.prx-b').css('bottom',-(scrolled*0.74)+'px');
  $('.prx-t').css('top',-(scrolled*0.74)+'px');
  $('.prx-l').css('left',-(scrolled*0.74)+'px');
  $('.prx-r').css('right',-(scrolled*0.74)+'px');
}