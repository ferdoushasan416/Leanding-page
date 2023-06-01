(function ($) {
"use strict";



// owlCarousel //
$('.slider-active').owlCarousel({
    loop:true,
    margin:0,
	items:1,
    nav:false,
	dots:false,
	autoplay:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
})


// WOW active
new WOW().init();


})(jQuery);