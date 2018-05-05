/*$(document).ready(function(){
	$('.bxslider').bxSlider({
	  infiniteLoop: false,
	  hideControlOnEnd: true
	});
});*/
/*$(document).ready(function(){
  $('.bxslider').bxSlider({
    slideWidth: 300,
    minSlides: 3,
    maxSlides: 3,
    moveSlides: 3,
    slideMargin: 10
  });
});*/
$(document).ready(function(){
  $('.bxslider').bxSlider({
  	pager: false,
  	//adaptiveHeight: true,
  	slideWidth: 300,
  	auto: true,
  	speed: 900,
    minSlides: 2,
    shrinkItems: true,
    moveSlides: 2,
    maxSlides: 3,
    slideMargin: 10,
  });
    /*$('.main-carousel').flickity({
		// options
		cellAlign: 'left',
		contain: true,
		imagesLoaded: true,
		lazyLoad: true
	});*/

  	/*$('.your-class1').slick({
    	infinite: true,
    	slidesToShow: 3,
    	slidesToScroll: 3,
    	variableWidth: true,
    	autoplay: true,
    	responsive: [
    {
      breakpoint: 1080,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
        }
      }
  	]
 	});*/

	$('.your-class3').slick({
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true
	});

  	$('.your-class2').slick({
    	infinite: true,
    	slidesToShow: 3,
    	slidesToScroll: 3,
    	dots: true,
    	autoplay: true,
    	autoplaySpeed: 5000,
    	pauseOnHover: true,
    	/*variableWidth: true,
    	autoplay: true,
    	dots: true,*/
    	responsive: [
		    {
		      breakpoint: 1000,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
  		]
 	});
 	$('.your-class1').slick({
    	infinite: true,
    	slidesToShow: 3,
    	slidesToScroll: 3,
    	autoplay: true,
    	autoplaySpeed: 5000,
    	pauseOnHover: true,
    	/*variableWidth: true,
    	autoplay: true,
    	dots: true,*/
    	responsive: [
		    {
		      breakpoint: 1000,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
  		]
 	});




});
$(function() {



	/*var $tape = $('.tape'), $slider = $('.slider');
	var margin = 33.333333333;
	var currentSlide = 1;
	var $slides = $('.tape').find('img');
	var state = 1, interval, interval2;
	var dblclick = jQuery.Event( "dblclick" );

	$(".right").dblclick(function(e){
		console.log('dbl');
		e.stopPropagation();
  		e.preventDefault();
  		return false;
	});

	function forward() {
		
		interval = setInterval(function() {
			if(currentSlide == ($slides.length - 2) || currentSlide > ($slides.length - 2)) {
				clearInterval(interval);
				backward();
				return false;
			}
			$tape.animate({
				'margin-left': '-=' + margin + '%'
			}, 1000, function () {
				state = 1;
				currentSlide++;	
				console.log('forward');
				console.log(currentSlide);
			});
		}, 2000);
	}

	function backward() {
		interval2 = setInterval(function() {
			if(currentSlide == 1) {
				clearInterval(interval2);
				forward();
				return false;
			}
			$tape.animate({
				'margin-left': '+=' + margin + '%'
			}, 1000, function () {
				state = 2;
				currentSlide--;	
				console.log('backward');
				console.log(currentSlide);
			});
		}, 2000);
	}

	function stop() {
		clearInterval(interval);
		clearInterval(interval2);
	}

	function resume() {
		state === 1 ? forward() : backward();
	}

	function next() {
		
		console.log(currentSlide);
		if ((currentSlide ) !== ($slides.length - 2) && (currentSlide ) < ($slides.length - 2)) {
			++currentSlide;
			$tape.css({'margin-left': '-=' + margin + '%'});
			console.log('next');
			console.log(currentSlide);
		}
		
	}

	function previous() {
		//stop();
		console.log(currentSlide);
		if (currentSlide !== 1) {
			--currentSlide;
			$tape.css({'margin-left': '+=' + margin + '%'});
			console.log('previous');
			console.log(currentSlide);
		}
		//resume();
	}

	$slider.on('mouseenter', stop).on('mouseleave', resume);
	$('.right').off(dblclick);
	$('.left').off(dblclick);
	$('.right').click(next);
	$('.left').click(previous);
	
	forward();
	*/
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
