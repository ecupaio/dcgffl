$(function () {
  $('.share-link.fbook').click(function(e) {
    e.preventDefault();
    var link = $(this).attr('href');
    FB.ui({
      method: 'share',
      app_id: '227787841708160',
      href: link
    }, function(response){});
  });
  $('.share-link.copy').click(function(e) {
    e.preventDefault();
    
    var $this = $(this)
    $(this).addClass('active');
    var copyText = $(this).find('.copy-text');
    copyText.focus();
    copyText.select();
    copyText[0].setSelectionRange(0, 99999); 
    document.execCommand("copy");
    setTimeout(function(e) {
      $this.removeClass('active')
    }, 1000);
  });
});
