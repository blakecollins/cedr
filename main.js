
$(document).ready(function(){
  
  var nav = $('nav');
  var scrollStart;
  
  // setting window to the top of page by default
  $(window).scrollTop(0);
  
  // targeting navigation on desktop with updated classes on scroll down
  $(document).scroll(function() {
     var scrollStart = $(window).scrollTop();
     
     if(scrollStart > 0 && $(window).innerWidth() > 864) {
         nav.addClass('navChange');
     }
     if (scrollStart === 0 && $(window).innerWidth() > 864) {
         nav.removeClass('navChange');
     }
  });
  
  // navigation: hamburger menu & dropdown for navigation
  var hamburger = $('.mainNav i');
  hamburger.click(function() {
      $('.mainNav').toggleClass('open');
  });
  
  // init for slick slider on homepage
  $('.slider').slick({
     lazyLoad: 'ondemand',
     infinite: true,
     speed: 500,
     fade: true,
     nextArrow: $('.slick-next'),
     prevArrow: $('.slick-prev')
  });
  
  // responsive parent workaround
  var parent = $('.sliderContainer');
  var height = $('.smallest img').height();
  
  if ($(window).innerWidth() < 1232) {
        $('.sliderContainer').css({"height": height + "px"});  
  };
  $(window).resize(function() {
    if ($(window).innerWidth() < 1232) {
        var height = $('.smallest img').height();
        $('.sliderContainer').css({"height": height + "px"});   
    } 
  });
  
  // products active class toggle
  var root = $('.product-list');
  var parentLI = root.find('li');
  var activeClass = root.find('.active');
  
  $(parentLI).click(function() {
      var activeClass = root.find('.active');
      activeClass.removeClass('active');
      $(this).addClass('active');
  })
  
});