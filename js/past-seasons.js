$(function () {
  $('.season-link').each(function(i,obj) {
    if ($(this).attr('href') == window.location.pathname) {
      $(this).addClass('active');
    }
  });
});