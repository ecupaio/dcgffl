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
    var cookieDomain = window.location.host; 
    if (cookieDomain.indexOf('localhost') > -1) {
      document.cookie = "announcement=hidden;expires="+expires;
    } else {
      document.cookie = "announcement=hidden; domain="+cookieDomain+"; expires="+expires;
    }
  });
  if (document.cookie.indexOf('announcement=hidden') >-1) {
  } else {
    $('.announcement-topbar').slideDown();
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
  });
  //anchor link
  $('a[href^="#"]').click(function(e) {
    e.preventDefault();
    var anchor = $(this).attr('href');
    if (anchor.length > 1) {
      $('html,body').animate({
        scrollTop: $(anchor).offset().top - 117
      });
    }
  });
  //newsletter signup 
  $('.signup-form').submit(function(e) {
    e.preventDefault();
    var email = $(this).find('.email').val();
    $.ajax({
      url: 'https://dcgffl.us16.list-manage.com/subscribe/post-json?u=44f118b44c71d10ae3076bec3&id=110054a516&subscribe=Subscribe&c=?',
      type: 'GET',
      data: $(this).serialize(),
      dataType: 'jsonp',
      contentType: "application/json; charset=utf-8",
      success: function(data) {
        console.log(data);
        if (data.result === 'error') {
          $('.form-error').html(data.msg);
          $('.form-error').slideDown();
        } else if (data.result === 'success') {
          console.log('success');
          $('.form-error').slideUp();
          $('.form-body').slideUp();
          $('.form-success').slideDown();
        }
      }, 
      error: function(data) {
        console.log(data);
        window.open(mcUrl+'/subscribe/post?u='+mcUserId+'&id='+mcListId+'&subscribe=Subscribe&EMAIL='+email,'_blank');
      }
    });
  });
});
