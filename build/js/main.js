/* user scripts */

$(document).ready(function() {
    

    var scrollTo = function(pos) {
        var pos;
        $('html,body').animate({scrollTop:pos}, 1000);
        return false;
    }

    $('.j-scroll-to').click(function(event) {
        event.preventDefault(); 
        var div = $(this).attr('href');
        var toPos = $(div).offset().top;
        scrollTo(toPos);
    });

    /*Модальные окна*/
    var overlay = $('#overlay'); 
    var open_modal = $('.open-modal'); 
    var close = $('.modal-close'); 
    var modal = $('.modal'); 

    // для открытия модалки нужна ссылка вида <a href="#name"></a> и класс "open_modal"
    // будет открыта модалка с id="name"
    open_modal.click( function(event){
        modal.fadeOut(200);
        event.preventDefault(); 
        var div = $(this).attr('href'); 
        overlay.fadeIn(400);
        $(div).fadeIn(400);
        $('html, body').addClass('j-noScroll');
        baseBoxHeight = $('.mobile-menu__right').height();
    });

    close.click(function() {
        modal.fadeOut(200);
        overlay.fadeOut(200);
        $('html, body').removeClass('j-noScroll');
    });

    overlay.click(function(event) {
        if ( $( event.target ).attr('id') == 'overlay' ) {
            $(this).fadeOut(200);
            modal.fadeOut(200);
            $('html, body').removeClass('j-noScroll');
        }
    });

    /*селект*/
    $('.select').click(function(e) {
        if ( !$(this).hasClass('j-open') ) {
            e.stopPropagation();
            $(this).addClass('j-open');
            $('.select-list').hide();
            $('.select').not(this).removeClass('j-open');
            $(this).find('.select-list').slideDown(200);
        } else {
            $(this).find('.select-list').slideUp(200);
            $(this).removeClass('j-open');
        }
    });


    // подстановка значения по умолчанию
    $('.select').each(function() {
        var val = $(this).find('.select-default').text();
        $(this).find('.select-default').addClass('selected');
        console.log(val);
        $(this).find('input').val(val);
    })

    $('body').click(function() {
        $('.select-list').slideUp(200);
        $('.select').removeClass('j-open');
    });

    $('.select-list__one').click(function(e) {
        e.stopPropagation();
        var val = $(this).text();
        $('.select').removeClass('j-open');
        $(this).parents('.select').find('input').val(val);
        $(this).parents('.select').find('.select-list').slideUp(200);
        $(this).parents('.select-list').find('.select-list__one').removeClass('selected');
        $(this).addClass('selected');
    });

    

    
    

});
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

    var catalogSlider = new Swiper('.catalog-slider', {
    	slidesPerView: 1,
    	spaceBetween: 0,
        loop: false,
    	nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    	pagination: '.swiper-pagination',
        paginationClickable: true,
        touchRatio: 0,
        breakpoints: {
        	760: {
		      touchRatio: 1
		    }
        }
    });


    catalogSlider.on('slideChangeEnd', function () {
    	var thisSlide = $('.catalog-slider .catalog-slide.swiper-slide-active');
	    if ( thisSlide.find('div').length == 0 ) {
	    	console.log('loading');
	    	var slideId = thisSlide.data('id');
	    	$.ajax({
	            type: 'POST',
	            url: '/ajax/slide-load.php',
	            data: {'slide': slideId}, // передача ID слайда
	            success: function(data) {
	                thisSlide.append(data);
	                panelInit();
	            }
	        });
	    }
	});

	catalogSlider.on('slideChangeStart', function() {
		$('.panel-one').removeClass('open');
	    $('.panel-overlay').fadeOut();
	});


    var panelInit = function() {
	    $('.panel-one').on('click', function(event) {
	    	if ( !$(this).hasClass('open') ) {
	    		$('.panel-one').removeClass('open');
	    		$(this).toggleClass('open');
	    		$('.panel-overlay').fadeIn();

	    		var profile = new Swiper('.panel-slider-wrap', {
			    	slidesPerView: 'auto',
			    	spaceBetween: 40,
			        loop: false,
			    	nextButton: '.panel-slider-next',
			        prevButton: '.panel-slider-prev',
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
			        pagination: '.gallery-pagination',
			        paginationClickable: true,
			    });

			    var gallery2 = new Swiper('.gallery-2', {
			    	slidesPerView: 'auto',
			    	spaceBetween: 10,
			        loop: false,
			    	nextButton: '.panel-carusel-next',
			        prevButton: '.panel-carusel-prev',
			    });
	    	}
	    }); 

	    $('.panel-close').on('click', function() {
	    	$(this).parents('.panel-one').removeClass('open');
	    	$('.panel-overlay').fadeOut();
	    	return false;
	    });


	    /*$('.panel-slider-next').on('click', function() {
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
	    	
	    });*/

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
    }

    panelInit();

});