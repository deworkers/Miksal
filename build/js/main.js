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
        loop: false,
    	nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    	pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true
    });

    if ( $('.main-slider').length > 0 ) {
        $('.about-nav').on('click', function() {
            var idx = $(this).data('index');
            mainSlider.slideTo(idx,300);
        });
        mainSlider.on('slideChangeEnd', function () {
            var idx = mainSlider.activeIndex;
            console.log(idx);
            $('.about-nav').removeClass('active');
            $('.about-one').removeClass('active');

            $('.about-nav').each(function() {
                if ( $(this).data('index') == idx ) {
                    $(this).addClass('active');
                }
            });

            $('.about-nav.active').parents('.about-one').addClass('active');
        });
    }

    var slideIndex = $('.slide--active').index();

    var typeSlider = new Swiper('.type-slider', {
    	slidesPerView: 1,
    	spaceBetween: 0,
        loop: false,
        initialSlide: slideIndex,
    	nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    	pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true
    });

    if ( $('.type-slider').length > 0 ) {
	    typeSlider.on('slideChangeEnd', function () {
	    	var url = $('.type-slider').find('.type-slide').eq(typeSlider.activeIndex).data('url');
	    	$(location).attr('href',url);
		});
    }

    var listSlider = new Swiper('.list-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        mousewheelControl: true,
        initialSlide: slideIndex,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        pagination: '.swiper-pagination',
        breakpoints: {
            760: {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesOffsetBefore: 0,
                spaceBetween: 0,
            }
        }
    });

    if ( $('.list-slider').length > 0 ) {
        listSlider.on('slideChangeEnd', function () {
            var url = $('.list-slider').find('.list-slide').eq(listSlider.activeIndex).data('url');
            $(location).attr('href',url);
        });
    }

    /*if ( $('.main-slider').length > 0 ) {
	    if ( $(window).width() <= 768 ) {
		    mainSlider.on('slideChangeStart', function () {
			    $('.slide-bottom').animate({'bottom':'-100%'}, 300);
		    	$('.main-slide-descr').animate({'bottom':'80px'}, 300);
		    	$('.main-slider .swiper-pagination').delay(300).fadeIn();
			});
	    }
    }*/

    $('.slider-info').on('click', function() {
    	$('.parametrs').animate({'bottom':'0'}, 300);
    	$('.catalog-slide__title').animate({'bottom':'140px'}, 300);
    });

    $('.info-close').on('click', function() {
    	$('.parametrs').animate({'bottom':'-100%'}, 300);
    	$('.catalog-slide__title').animate({'bottom':'100px'}, 300);
    });


    var catalogSlider = new Swiper('.catalog-slider', {
    	slidesPerView: 1,
    	spaceBetween: 0,
        loop: false,
    	nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
    	pagination: '.swiper-pagination',
        paginationClickable: true,
        touchRatio: 0,
        initialSlide: slideIndex,
        mousewheelControl: true,
        breakpoints: {
        	760: {
		      touchRatio: 1
		    }
        }
    });



    if ( $('.catalog-slider').length > 0 ) {
	    catalogSlider.on('slideChangeEnd', function () {
	    	console.log(catalogSlider.activeIndex);
	    	var url = $('.catalog-slider').find('.catalog-slide').eq(catalogSlider.activeIndex).data('url');
	    	$(location).attr('href',url);
		});

		catalogSlider.on('slideChangeStart', function() {
			$('.panel-one').removeClass('open');
		    $('.panel-overlay').fadeOut();
		});
    }


    var panelInit = function() {
	    $('.panel-one').on('click', function(event) {
	    	if ( !$(this).hasClass('open') && !$(this).hasClass('disabled') ) {
	    		$('.panel-one').removeClass('open');
	    		$(this).toggleClass('open');
	    		$('.panel-overlay').fadeIn();
                $('.swiper-button-next, .swiper-button-prev').hide();

	    		var profile = new Swiper('.panel-slider-wrap', {
			    	slidesPerView: 'auto',
			    	spaceBetween: 40,
			        loop: false,
			    	nextButton: '.panel-slider-next',
			        prevButton: '.panel-slider-prev',
                    mousewheelControl: true
			    });

			    var furniture = new Swiper('.furniture-slider', {
			    	slidesPerView: 'auto',
			    	spaceBetween: 40,
			        loop: false,
			    	nextButton: '.panel-carusel-next',
			        prevButton: '.panel-carusel-prev',
                    mousewheelControl: true
			    });

                var subimage = new Swiper('.furniture-subimage', {
                    slidesPerView: 3,
                    spaceBetween: 5,
                    loop: false,
                    mousewheelControl: true
                });

                var variant = new Swiper('.variant-slider', {
                    slidesPerView: 'auto',
                    spaceBetween: 40,
                    loop: false,
                    nextButton: '.panel-carusel-next',
                    prevButton: '.panel-carusel-prev',
                    mousewheelControl: true
                });

			    var gallery = new Swiper('.gallery', {
			        slidesPerView: 'auto',
			        spaceBetween: 10,
			        loop: false,
			        nextButton: '.panel-carusel-next',
			        prevButton: '.panel-carusel-prev',
			        pagination: '.gallery-pagination',
			        paginationClickable: true,
                    mousewheelControl: true
			    });

			    var gallery2 = new Swiper('.gallery-2', {
			    	slidesPerView: 'auto',
			    	spaceBetween: 10,
			        loop: false,
			    	nextButton: '.panel-carusel-next',
			        prevButton: '.panel-carusel-prev',
			        pagination: '.gallery2-pagination',
                    mousewheelControl: true
			    });

                var contact = new Swiper('.contact-gallery', {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    loop: false,
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    paginationClickable: true,
                    mousewheelControl: true
                });
	    	}
	    }); 

	    $('.panel-close').on('click', function() {
	    	$(this).parents('.panel-one').removeClass('open');
	    	$('.panel-overlay').fadeOut();
            $('.swiper-button-next, .swiper-button-prev').show();
	    	return false;
	    });
	    
    }

    panelInit();

    $(document).keydown(function(e) {
	    if( e.keyCode === 27 ) {
	        $('.panel-one').removeClass('open');
	    	$('.panel-overlay').fadeOut();
	    }
	});

	$("#order-form").validate({
        rules:{
            name:{
                required: true
            },
            phone:{
                required: true,
            },
        },
        messages:{
            name:{
                required: "Это поле обязательно для заполнения",
            },
            phone:{
                required: "Это поле обязательно для заполнения",
            },
        },
        submitHandler: function() {
            $("#order-form").parents('.modal-form').html('<h2>Спасибо за заказ</h2>')
        }
    });

    $("#order-photo").validate({
        rules:{
            name:{
                required: true
            },
            phone:{
                required: true,
            },
        },
        messages:{
            name:{
                required: "Это поле обязательно для заполнения",
            },
            phone:{
                required: "Это поле обязательно для заполнения",
            },
        },
        submitHandler: function() {
            $('#order-photo').parents('.modal-form').html('<h2>Спасибо за заказ</h2>')
        }
    });



    $("#order-form").submit(function() { //устанавливаем событие отправки для формы с id=form
        var formData = $(this).serialize(); //собераем все данные из формы
        $.ajax({
            type: "POST", //Метод отправки
            url: "/ajax/send.php", //путь до php фаила отправителя
            data: formData
        });
    });

    $('input[name="phone"]').mask("+7(999) 999-99-99",{placeholder:"_"});

    $('.popup-open').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });

    $('.ajax-html').magnificPopup({
        type: 'ajax'
    });

    $('.hide-elem').on('click', function() {
        $('body').toggleClass('hide-elems');
    });

    $('.get-img').on('click', function() {
        var imgUrl = $(this).data('img');
        style = 'background-image: url('+ imgUrl +')';
        $('.put-img').attr('style', style);
    });

    $('.get-gallImg').on('click', function() {
        var imgUrl = $(this).find('img').attr('src');
        style = 'background-image: url('+ imgUrl +')';
        $('.put-img').attr('style', style);
    });

    $('.furniture-subimage').magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-img-mobile',
        gallery: {
            tCounter: '<span class="mfp-counter">%curr% из %total%</span>',
            tLoading: 'Загрузку изображения #%curr%...',
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            titleSrc: function(item) {
                return item.el.attr('title');
            }
        }
    });


});