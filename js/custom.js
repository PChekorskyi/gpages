jq2 = jQuery.noConflict();
jq2(function( $ ) {

    /*Вызов карусельки*/
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        items:3,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })

    /*Конец вызова */

/*SmoothScroll start*/

SmoothScroll({
    keyboardSupport: false,
    animationTime: 800,
    stepSize: 100
     })

/*SmoothScroll End*/

   /*Isotope*/
	$(window).on('load', function () {
		$('.grid').isotope({
		itemSelector: '.grid-item',
		layoutMode: 'fitRows',
		});
		
		const filterItem = '.sect4_buttons_block > a';
		$(filterItem).on('click', function(e) {
			e.preventDefault();
			$(filterItem).removeClass('active');
			$(this).addClass('active');
		
		var selector = $(this).attr('data-filter');
		$('.grid').isotope({
			filter: selector
		});
		
		return false;
		});
	});
   /*Isotope/ */

    /*Якорная прокрутка*/
    $(document).ready(function(){
        $(".nav").on("click","a", function(event) {
            // исключаем стандартную реакцию браузера
            event.preventDefault();
            // получем идентификатор блока из атрибута href
            const id = $(this).attr('href'),
            // находим высоту, на которой расположен блок
            top = $(id).offset().top;
            // анимируем переход к блоку, время: 800 мс
            $('body,html').animate({scrollTop: top}, 800);
        });
    });
});