$(document).ready(function() {
    var mainSlider = new Swiper('.main-slider', {
    	slidesPerView: 1,
    	spaceBetween: 0,
        loop: true,
    	nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    	pagination: '.swiper-pagination',
        paginationClickable: true
    });  

    if ( $(window).width() <= 768 ) {
	    mainSlider.on('slideChangeStart', function () {
		    $('.slide-bottom').animate({'bottom':'-100%'}, 300);
	    	$('.main-slide-descr').animate({'bottom':'80px'}, 300);
	    	$('.main-slider .swiper-pagination').delay(300).fadeIn();
		});
    }

    $('.slider-info').on('click', function() {
    	$(this).parents('.main-slide ').find('.slide-bottom').animate({'bottom':'0'}, 300);
    	$(this).parents('.main-slide ').find('.main-slide-descr').animate({'bottom':'260px'}, 300);
    	$('.main-slider .swiper-pagination').hide();
    });

    $('.info-close').on('click', function() {
    	$(this).parents('.main-slide ').find('.slide-bottom').animate({'bottom':'-100%'}, 300);
    	$(this).parents('.main-slide ').find('.main-slide-descr').animate({'bottom':'80px'}, 300);
    	$('.main-slider .swiper-pagination').delay(300).fadeIn();
    });


    var mainSlider = new Swiper('.catalog-slider', {
    	slidesPerView: 1,
    	spaceBetween: 0,
        loop: false,
    	nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    	pagination: '.swiper-pagination',
        paginationClickable: true
    }); 

    $('.panel-one').on('click', function() {
    	if ( !$(this).hasClass('open') ) {
    		$('.panel-one').removeClass('open');
    		$(this).toggleClass('open');
    		$('.panel-overlay').fadeToggle();
    	} else {
			$('.panel-one').removeClass('open');
    	}
    	
    }); 
});