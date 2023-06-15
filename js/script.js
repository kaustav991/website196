$(document).ready(function () {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100){  
        $('header').addClass("sticky");
    }
    else{
        $('header').removeClass("sticky");
    }
});
// slimnav
$('#navigation nav').slimNav_sk78();
$('#nav-icon0').click(function() {
    $(this).toggleClass('open');
});


// accordian
$('.accordion li').click(function(){
  $(this).toggleClass(' active ');
  $(this).siblings().removeClass('active'); 
  $(this).siblings().find(".content").slideUp(); 
  $(this).find(".content").slideToggle();
});


  // testimonials
  $(".testimonials .owl-carousel").owlCarousel({
    items:3,
    loop: true,
    autoplay: true,
    nav: false,
    dots: true,
    margin:30,
    animateIn: "fadeIn", // add this
    animateOut: "fadeOut", // and this
    
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
  
        1000: {
          items: 3
        },
      }
  });

  


  


});











