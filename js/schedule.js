$(function() {
  $('.menu-col .week a').click(function() {
    var week = $(this).data('week');
    console.log(week);
    $('.games-col .week').each(function(i,obj) {
      if ($(this).data('week') == week) {
        $(this).removeClass('hidden');
      } else {
        $(this).addClass('hidden');
      }
    });
  });
});