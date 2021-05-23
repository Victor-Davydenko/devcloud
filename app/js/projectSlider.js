$(document).ready(function(){
  $('.our-projects-slider').slick({
    dots:true,
    arrows: false,
    autoplay:false,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint:768,
        settings:{
          slidesToShow:1,
          dots:true,
          arrows:false
        }
      },
      {
        breakpoint:1920,
        settings:{
          slidesToShow:1,
          arrows:true
        }
      }
    ]
  });
});

$(document).ready(function(){
  $('.processes-slider').slick({
    dots:true,
    arrows: false,
    autoplay:false,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint:768,
        settings:{
          slidesToShow:1,
          dots:true,
          arrows:false
        }
      },
      {
        breakpoint:1024,
        settings:{
          slidesToShow:1
        }
      }
    ]
  });
});

$(document).ready(function(){
  $('.slider--experience').slick({
    dots:true,
    arrows: false,
    autoplay:false,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint:768,
        settings:{
          slidesToShow:1,
          dots:true,
          arrows:false
        }
      },
      {
        breakpoint:1921,
        settings:{
          slidesToShow:4,
          arrows:true
        }
      }
    ]
  });
});
