$(document).ready(function(){
  $('.slide-section__swiper_wapper').slick({
  slidesToShow: 3,  
  slidesToScroll: 1, 
  infinite: false,  
  responsive: [
    {
      breakpoint: 1270,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    },
    {
      breakpoint: 1001,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });

  $('.btn-menu').click(function(){
     $('#side-panel-mob').slideToggle();
     $('body').toggleClass('fixed');
  });
});

