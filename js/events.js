$(function() {
  $(".month-anchor").click(function(e) {
    e.preventDefault();
    var month = $(this).text();
    $('html,body').animate({
      scrollTop: $('.event-month[data-month="'+month+'"]').offset().top - 117
    });
  });
});