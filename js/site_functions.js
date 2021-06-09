$(function(){
  $('.nav-toggle').click(function() {
    $('nav,html').toggleClass('active');
  });
  $('.close-announcement').click(function() {
    $('.announcement-topbar').slideUp();
    var d = new Date();
    d.setTime(d.getTime() + (1*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "announcement=hidden; expires="+expires;
  });
  if (document.cookie.indexOf('announcement=hidden') >-1) {
    $('.announcement-topbar').hide();
  } else {
    $('.announcement-topbar').removeClass('hidden');
  }
});
