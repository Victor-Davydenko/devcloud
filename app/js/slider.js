$(document).ready(function(){
  $('.statistics__slider').slick({
    dots:true,
    arrows: false,
    autoplay:true,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint:2500,
        settings: "unslick"
      },
      {
        breakpoint:768,
        settings:{
          slidesToShow:1,
          dots:true,
          arrows:false
        }
      }
    ]
  });
});
