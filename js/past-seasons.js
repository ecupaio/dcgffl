$(function () {
  $('.season-link').each(function(i,obj) {
    if ($(this).attr('href') == window.location.pathname) {
      $(this).addClass('active');
    }
    if (window.location.pathname == "/past-seasons/") {
      $('.season-link:eq(0)').addClass('active');
    }
  });
});