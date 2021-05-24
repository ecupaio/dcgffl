$(function(){
  $('.nav-toggle').click(function() {
    $('nav,html').toggleClass('active');
  });
  $(window).on('scroll load resize',function() {
    var scrollTop;
    if (inView('nav') == false) {
      $('nav').addClass('sticky');
      scrollTop = $(window).scrollTop();
      $('main').addClass('stick-nav');
    }
    if ($(window).scrollTop() == 0) {
      $('nav').removeClass('sticky');
    } 
  });
  function inView(element) {
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
    
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
