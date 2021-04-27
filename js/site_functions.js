$(function(){
  $('.nav-toggle').click(function() {
    $('nav,html').toggleClass('active');
  });
  $('.close-announcement').click(function() {
    $('.announcement-topbar').slideUp();
  });
});
