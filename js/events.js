$(function() {
  $(".month-anchor").click(function(e) {
    e.preventDefault();
    var month = $(this).text();
    $('html,body').animate({
      scrollTop: $('[data-month="'+month+'"]').offset().top - 117
    });
  });
  $('.load-past-events').click(function(e) {
    e.preventDefault();
    var firstHidden = $('.past-events .event-month.hidden').eq(0).index() - 1;
    console.log(firstHidden);
      $('.past-events .event-month.hidden').slice(0,3).removeClass('hidden');
      $('html,body').animate({
        scrollTop: $('.past-events .event-month:eq('+firstHidden+')').offset().top - 117
      }, 500); 
      if ($('.past-events .event-month.hidden').length === 0) {
        $('.load-past-events').addClass("hidden");  
      } 
  });
});