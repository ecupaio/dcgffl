$(function () {
  $('.winners-title').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $(this).next('.winners-list').slideToggle();
  });
});