$(document).ready(function(){

	// WOW JS
	new WOW().init();
	
    // scroll function for header background on scroll //
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > 0) {
			$("header#ca-header").addClass("scrolled");
		} else {
			$("header#ca-header").removeClass("scrolled");
		}
	});

	// Hamburger
	$(".hamburger").click(function(){
		$("header#ca-header").toggleClass("menu-btn-clicked");
	});

	// mega menu
	$(".ca-mega-menu").parents('li').addClass('has-mega-menu');

	// Logo Slider
	$('.logo-slider').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1,
		arrows: false,
		dots: false,

		responsive: [
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 4,
			  }
			},
			{
			  breakpoint: 768,
			  settings: {
				slidesToShow: 2
			  }
			}
		  ]
	  });

	// Sync Slider
	 // Initialize the upper slider
	 $('.ca-sync-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
  		autoplaySpeed: 3000,
		infinite: true,
		speed: 1000,
		centerMode: true,
		focusOnSelect: true,
		arrows: false,
		dots: false,
		asNavFor: '.ca-sync-slider-nav',
		responsive: [
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 1,
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

	// Initialize the bottom slider
	$('.ca-sync-slider-nav').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		centerMode: true,
		focusOnSelect: true,
		arrows: false,
		dots: false,
		asNavFor: '.ca-sync-slider',
		responsive: [
			{
			  breakpoint: 991,
			  settings: {
				slidesToShow: 3,
			  }
			}
		  ]
	});

});