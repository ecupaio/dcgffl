$(function() {
  $('.week-link').click(function(e) {
    e.preventDefault();
    var selectedWeek = $(this).data('week');
    
    $('.games-list .game').each(function(i,game) {
      if ($(this).data('week') == selectedWeek) {
        $(this).removeClass('hidden');
      } else {
        $(this).addClass('hidden');
      }
    });
    $('.week-title').text(selectedWeek);
    $('html,body').animate({
      scrollTop: $('#scoreboard').offset().top
    });
  });
  function getParameter(paramName) {
    var searchString = window.location.search.substring(1),
        i, val, params = searchString.split("&");
  
    for (i=0;i<params.length;i++) {
      val = params[i].split("=");
      if (val[0] == paramName) {
        return val[1];
      }
    }
    return null;
  }
  if (window.location.search.indexOf('week') > -1) {
    var week = getParameter('week');
    $('.week-title').text(decodeURIComponent(week));
    $('.games-list .game').each(function(i,game) {
      if ($(this).data('week') == decodeURIComponent(week)) {
        $(this).removeClass('hidden');
      } else {
        $(this).addClass('hidden');
      }
    });
  }
});