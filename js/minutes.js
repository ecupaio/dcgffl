$(function() {
  $('.season-title').click(function(e) {
    e.preventDefault();
    $(this).next('.minutes-list').slideToggle();
    $(this).toggleClass('active');
  });
})