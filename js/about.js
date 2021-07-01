$(function() {
  $('.faq-q').click(function() {
    $(this).toggleClass('active');
    $(this).next('.faq-a').slideToggle();
  });
});