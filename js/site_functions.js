$(function(){
  $('.nav-toggle').click(function() {
    $('nav,html').toggleClass('active');
  });
  $(window).on('scroll load resize',function() {
    var scrollTop;
    // if (inView('nav') == false) {
    //   $('nav').addClass('sticky').slideUp();
    //   scrollTop = $(window).scrollTop();
      
    // }
    // if ($(window).scrollTop() == 0) {
    //   $('nav').removeClass('sticky').slideDown();
    // } 
  });
  function inView(element) {
    var elementTop = $(element).offset().top;
    var elementBottom = elementTop + $(element).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
    
  $('.close-announcement').click(function() {
    $('.announcement-topbar').slideUp();
    var d = new Date();
    d.setTime(d.getTime() + (1*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "announcement=hidden; expires="+expires;
  });
  if (document.cookie.indexOf('announcement=hidden') >-1) {
    $('.announcement-topbar').hide();
  } else {
    $('.announcement-topbar').removeClass('hidden');
  }
  //Scoreboard feed
  if ($().slick) {
    $('.scoreboard-feed').slick({
      slidesToShow: 5,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 568,
          settings: {
            slidesToShow: 1
          }
        }
      ]  
    }); 
  }
  if (window.location.pathname !== "/" && $('#photo-slider').length > 0) {
    $('#photo-slider').slick({
      slidesToShow: 1,
      autoplay: true
    });
  }
  if ($('.featured-supporters').length > 0) {
    $('.featured-supporters').slick({
      slidesToShow: 1,
      autoplay: true,
      dots: true
    });
  }
  //sponsor form
  $('a[href="#sponsor-form"]').click(function(e) {
    e.preventDefault();
    $('.sponsor-form-overlay').addClass('active');

  });
  $('.close-sponsor-overlay').click(function() {
    $('.sponsor-form-overlay').removeClass('active');
  });
  $('#sponsor-form').submit(function(e) {
    e.preventDefault();
    $.ajax({
      url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfKAfXRdx-cf-Wawz-Uk3OysAeY3j2jllCTuB85uZSaSSNDmg/formResponse',
      data: $(this).serialize(),
      method: "POST",
      crossDomain: true
    }).always(function() {
      $('#sponsor-form .form-body').slideUp();
      $('#sponsor-form .form-success').slideDown();
    });
  })
});
