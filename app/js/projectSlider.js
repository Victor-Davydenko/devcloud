$(document).ready(function(){
  $('.slider').slick({
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
