$(function() {
  $('.rule-title').click(function(e) {
    e.preventDefault();
    $(this).parents('.rule').find('.rule-text').slideToggle();
    $(this).parents('.rule').toggleClass('active');
  
  });
});