(function($) {
    "use strict";
	
	/* ..............................................
	Loader 
    ................................................. */
	
	$(window).on('load', function() { 
		$('.preloader').fadeOut(); 
		$('#preloader').delay(550).fadeOut('slow'); 
		$('body').delay(450).css({'overflow':'visible'});
	});
	
	/* ..............................................
    Map Full
    ................................................. */
	
	$(document).ready(function(){ 
		$(window).on('scroll', function() {
			if ($(this).scrollTop() > 100) { 
				$('#back-to-top').fadeIn();
				$('#up_page').fadeIn(); 
			} else { 
				$('#back-to-top').fadeOut();
				$('#up_page').fadeOut(); 
				$('#up_page').css({
					color: '#fff'
				});
			} 
		}); 

		$('#up_page').on('click', function() {
			$('html, body').animate({scrollTop: 0}, 600);
		});

		var $doc = $('html, body');
		$('.scrollSmooth').click(function() {
			$('.checkbtn').click();
		    $doc.animate({
		        scrollTop: $( $.attr(this, 'href') ).offset().top
		    }, 500);

		    return false;
		});
	});

	/*-------- Responsive menu ----------------------------------*/

	$(document).ready(function(){
		
		$('.responsive-menu').hide();
		$('.menu-times').hide();

		$('.menu-bars').click(function() {
			$('.responsive-menu').slideToggle('slow', function() {
				$('.menu-bars').hide();
				$('.menu-times').show();
				$('.conteudo__destaque').hide();
			});

			$('html, body').css({
				overflow:'hidden',
				height:'100%'});
		});

		$('.responsive-menu__ancora').click(function() {
			$('.responsive-menu').slideToggle('slow', function() {
				$('.menu-bars').show();
				$('.menu-times').hide();
			});
			$('.conteudo__destaque').show();
			$('html, body').css({
				overflow:'auto',
				height:'auto'});
		});

		$('.menu-times').click(function() {
			$('.responsive-menu').slideToggle('slow', function() {
				$('.menu-bars').show();
				$('.menu-times').hide();
			});
			$('.conteudo__destaque').show();
			$('html, body').css({
				overflow:'auto',
				height:'auto'});
		});

	});
	
}(jQuery));