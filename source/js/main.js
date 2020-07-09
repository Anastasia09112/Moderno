$(function(){

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true
      });

    $(".products__slider-inner").slick({
        arrows: false,
        dots: true,
        slidesToShow: 4,
        slidesToScroll: 2
    });
    var mixer = mixitup('.products__inner-box');
  
});