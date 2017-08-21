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

    var listSlider = new Swiper('.list-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
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
    	if ( !$(this).hasClass('open') ) {
    		$('.panel-one').removeClass('open');
    		$(this).toggleClass('open');
    		$('.panel-overlay').fadeIn();
    		furniture.update();
    		gallery.update();
    		gallery2.update();
    	}
    }); 

    if ( $('.catalog-slider').length > 0 ) {
    	
    }

    $('.panel-close').on('click', function() {
    	$(this).parents('.panel-one').removeClass('open');
    	$('.panel-overlay').fadeOut();
    	return false;
    });

    var furniture = new Swiper('.furniture-slider', {
    	slidesPerView: 5,
    	spaceBetween: 40,
        loop: false,
    	nextButton: '.panel-carusel-next',
        prevButton: '.panel-carusel-prev',
    });

    var gallery = new Swiper('.gallery', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: false,
        nextButton: '.panel-carusel-next',
        prevButton: '.panel-carusel-prev',
    });

    var gallery2 = new Swiper('.gallery-2', {
    	slidesPerView: 'auto',
    	spaceBetween: 10,
        loop: false,
    	nextButton: '.panel-carusel-next',
        prevButton: '.panel-carusel-prev',
        pagination: '.gallery-pagination',
        paginationClickable: true
    });



    

    $('.panel-slider-next').on('click', function() {
    	var box = $(this).parents('.panel-inn').find('.slider-inn');
	    var deltaFunc = function() {
	    	var delta = 0;
	    	box.find('.panel-slider').each(function() {
		    	delta =+ $(this).width();
		    });
		    return delta;
	    }

	    delta = deltaFunc() - 360;
	    right = Math.abs( box.position().left );
	    console.log(right);
	    if ( right < delta ) {
	    	box.css('right', right + 180 + 'px');
	    }
    	
    });

    $('.panel-slider-prev').on('click', function() {
    	var box = $(this).parents('.panel-inn').find('.slider-inn');

    	right = Math.abs( box.position().left );
    	console.log(right);
	    if ( right >= 180 ) {
	    	box.css('right', right - 180 + 'px');
	    } else {
	    	box.css('right', '0px');
	    }
    	
    });
});