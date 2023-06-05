(function ($) {
"use strict";

$(document).ready(function() {
    $('.nav-toggle').click(function(){
        $('ul').toggleClass('show');
    })
    
});
// Mobile Responsive////


//Tab function //
$('.invest-content-wrap').eq(0).addClass('active')
$('.tab-image').hide()
$('.tab-image').eq(0).show()

$('.invest-content-wrap').each(function(i){
    $(this).click(function(){
        
        if( $(this).hasClass('active') ) return false
        
        else{
            $('.invest-content-wrap').removeClass('active')
            $(this).addClass('active')
            $('.tab-image').hide()
            $('.tab-image').eq(i).show()
            
        }
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
});



// WOW active
new WOW().init();


})(jQuery);