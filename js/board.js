$(function() {
  $('.season-title').click(function(e) {
    e.preventDefault();
    $(this).next('.minutes-list').slideToggle();
    $(this).toggleClass('active');
  });
  $('.statement-toggle').click(function() {
    $(this).next('.statement-overlay').addClass('active');
    $('html,body').addClass('active');
  });
  $('.close-statement-overlay').click(function() {
    $(this).parents('.statement-overlay').removeClass('active');
    $('html,body').removeClass('active');
  });
}); 