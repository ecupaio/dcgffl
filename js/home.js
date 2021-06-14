$(function() {
  $.ajax({
    url: 'https://www.flickr.com/services/rest/',
    type: 'GET',
    data: {
      'method': 'flickr.people.getPhotos',
      'api_key': 'b2e7ca6837ac851207f38ec05da28756',
      'user_id': '55392288@N03',
      'format': 'json',
      'per_page': 10,
      'page': 1,
      'nojsoncallback': 1
    },
    success: function(data) {

      var photos = data.photos.photo;
      $(photos).each(function(i,photo) {
        console.log(photo);
        var photoSlide = '<div class="photo-slide">'+
                            '<img  src="https://live.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'_b.jpg" alt="DCGFFL game photo" />'+
                          '<div>';  
        $('#photo-slider').append(photoSlide);
      });
      $('#photo-slider').slick({
        slidesToShow: 1,
        autoplay: true
      });
      $('.hero-placeholder').addClass('hidden')
    },
    error: function(data) {
      console.log(data);
    }
  });
  $('.news-feed').slick({
    slidesToShow: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]  
  }); 
  $('.events-feed').slick({
    slidesToShow: 3,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ] 
  }); 
});