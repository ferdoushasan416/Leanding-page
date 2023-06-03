(function ($) {
"use strict";


$(document).ready(function() {
    $('.nav-toggle').click(function(){
        $('ul').toggleClass('show');
    })
    
});


// owlCarousel //
$('.slider-active').owlCarousel({
    loop:true,
    margin:30,
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