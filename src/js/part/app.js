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

    if ( $('.main-slider').length > 0 ) {
	    if ( $(window).width() <= 768 ) {
		    mainSlider.on('slideChangeStart', function () {
			    $('.slide-bottom').animate({'bottom':'-100%'}, 300);
		    	$('.main-slide-descr').animate({'bottom':'80px'}, 300);
		    	$('.main-slider .swiper-pagination').delay(300).fadeIn();
			});
	    }
    }


    $('.slider-info').on('click', function() {
    	$('.parametrs').animate({'bottom':'0'}, 300);
    	$('.catalog-slide__title').animate({'bottom':'180px'}, 300);
    });

    $('.info-close').on('click', function() {
    	$('.parametrs').animate({'bottom':'-100%'}, 300);
    	$('.catalog-slide__title').animate({'bottom':'80px'}, 300);
    });

    /*$('.slider-info').on('click', function() {
    	$(this).parents('.main-slide ').find('.slide-bottom').animate({'bottom':'0'}, 300);
    	$(this).parents('.main-slide ').find('.main-slide-descr').animate({'bottom':'260px'}, 300);
    	$('.main-slider .swiper-pagination').hide();
    });

    $('.info-close').on('click', function() {
    	$(this).parents('.main-slide ').find('.slide-bottom').animate({'bottom':'-100%'}, 300);
    	$(this).parents('.main-slide ').find('.main-slide-descr').animate({'bottom':'80px'}, 300);
    	$('.main-slider .swiper-pagination').delay(300).fadeIn();
    });*/

    /*var catalogSlider = new Swiper('.catalog-slider', {
    	slidesPerView: 1,
    	spaceBetween: 0,
        loop: false,
    	nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    	pagination: '.swiper-pagination',
        paginationClickable: true
    }); */



    $('.panel-one').on('click', function(event) {
    	//event.stoppropagation();
    	if ( !$(this).hasClass('open') ) {
    		$('.panel-one').removeClass('open');
    		$(this).toggleClass('open');
    		$('.panel-overlay').fadeIn();
    		panelSlider.update();
    		panelSlider2.update();
    		furniture.update();
    	}
    }); 

    if ( $('.catalog-slider').length > 0 ) {
    	
    }

    $('.panel-close').on('click', function() {
    	$(this).parents('.panel-one').removeClass('open');
    	$('.panel-overlay').fadeOut();
    	return false;
    });

    /*catalogSlider.on('slideChangeStart', function () {
    	$('.panel-one').removeClass('open');
    	$('.panel-overlay').fadeOut();
	});*/

	var panelSlider = new Swiper('.panel-slider', {
    	slidesPerView: 5,
    	spaceBetween: 40,
        loop: false,
    	nextButton: '.panel-slider-next',
        prevButton: '.panel-slider-prev',
    });

    var panelSlider2 = new Swiper('.panel-slider-2', {
    	slidesPerView: 5,
    	spaceBetween: 40,
        loop: false,
    	nextButton: '.panel-slider-next',
        prevButton: '.panel-slider-prev',
    });

    var furniture = new Swiper('.furniture-slider', {
    	slidesPerView: 5,
    	spaceBetween: 40,
        loop: false,
    	nextButton: '.panel-slider-next',
        prevButton: '.panel-slider-prev',
    });
});