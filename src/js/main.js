$(document).ready(function(){
	$('.fa-bars').click(function(){
		$(this).toggleClass('fa-times');
		$('nav').toggleClass('navbar-active');
	});

	$(window).on('load scroll', function(){
		if($(window).scrollTop() > 50){
			$('header').addClass('header-active');
		}else{
			$('header').removeClass('header-active');
		}

		if($(window).scrollTop() > 500){
			$('.scroll-top img').show();
		}else{
			$('.scroll-top img').hide();
		}

		   $('section').each(function(){

      let height = $(this).height();
      let offset = $(this).offset().top - 200;
      let id = $(this).attr('id');
      let top = $(window).scrollTop();

      if(top > offset && top < offset + height){
        $('.navbar ul li a').removeClass('active')
        $('.navbar').find(`[href="#${id}"]`).addClass('active');
      }

    });
		   
	});


});