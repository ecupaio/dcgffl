$(function () {
  $('.load-posts').click(function(e) {
    e.preventDefault();
      var firstHidden = $('.post.hidden:first').index();
      $('.post.hidden').slice(0,9).removeClass('hidden');
      $('html,body').animate({
        scrollTop: $('.post:eq('+firstHidden+')').offset().top - 117
      }, 500); 
      if ($('.post.hidden').length === 0) {
        $('.load-posts').addClass("hidden");  
      }  
  });
});