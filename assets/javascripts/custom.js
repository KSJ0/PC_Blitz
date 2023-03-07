(function ($) {
	"use Strict";
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 300) {
			$('.header-sticky').addClass("sticky");
		} else {
			$('.header-sticky').removeClass("sticky");
		}
	});
	
	$(".slider-active").owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		autoplay: true,
		items: 1,
		autoplayTimeout: 10000,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		dots: true,
		autoHeight: true,
		lazyLoad: true
	});

	$(".product-active").owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplay: false,
		autoplayTimeout: 5000,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
		item: 5,
		responsive: {
			0: {
					items: 1
			},
			480: {
					items: 2
			},
			768: {
					items: 3
			},
			992: {
					items: 4
			},
			1200: {
					items: 5
			}
		}
	});

 	$(".sp-carousel-active").owlCarousel({
 		loop: true,
 		nav: false,
 		dots: false,
 		autoplay: false,
 		autoplayTimeout: 5000,
 		navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-left"></i>'],
 		item: 4,
 		responsive: {
 			0: {
 					items: 1
 			},
 			480: {
 					items: 2
 			},
 			768: {
 					items: 2
 			},
 			992: {
 					items: 3
 			},
 			1200: {
 					items: 4
 			}
 		}
 	});

    new WOW().init();
})(jQuery);
