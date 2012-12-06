/* Author: Shahul Hameed

*/

$(function() {
	
		// hide #back-top first
		$("#back-top").hide();
		
		// fade in #back-top
		$(function () {
			$(window).scroll(function () {
				if ($(this).scrollTop() > 100) {
					$('#back-top').fadeIn();
				} else {
					$('#back-top').fadeOut();
				}
			});
	
			// scroll body to 0px on click
			$('#back-top a').click(function () {
				$('body,html').animate({
					scrollTop: 0
				}, 800);
				return false;
			});
		});
	
		//Coda-slider         
		$('#slider-id').codaSlider();
		
		//Placeholder
		$('input, textarea').placeholder();
		
		
		//Mobile Navigation
		$('.menu').mobileMenu({
                       defaultText: 'Navigate to...',
                       className: 'mnav',
                       subMenuDash: '&emsp;'
               });
		
		
		//Drop-Down Menu
		$(".menu li").hover(function () {
          	$(this).children('ul').css({visibility: "visible",display: "none"}).slideDown(300);
     	 }, function () {
          	$('ul', this).css({visibility: "hidden"});
     	});
		
		//ei-slider
		$('#ei-slider').eislideshow({
			animation	: 'sides',
			autoplay	: true,
			easing		: 'easeOutExpo',
			titleeasing	: 'easeOutExpo',
        });
		
		//Sequence
		/mobile/i.test(navigator.userAgent) && !location.hash && setTimeout(function () {
		  			if (!pageYOffset) window.scrollTo(0, 1);
		}, 1000);
		
		var options = {
			nextButton: false,
			prevButton: false,
			animateStartingFrameIn: true,
			transitionThreshold: 250,
			afterLoaded: function(){
				$("#nav").fadeIn(100);
				$("#nav li:nth-child("+(sequence.settings.startingFrameID)+") a").addClass("active");
			},
			beforeNextFrameAnimatesIn: function(){
				$("#nav li:not(:nth-child("+(sequence.nextFrameID)+")) a").removeClass("active");
				$("#nav li:nth-child("+(sequence.nextFrameID)+") a").addClass("active");
			}
		};

		var sequence = $("#sequence").sequence(options).data("sequence");
		
		$("#nav li a").click(function(e){
			e.preventDefault();
		});
	
		$("#nav li").click(function(){
			if(!sequence.active){
				$(this).children("img").removeClass("active").children("img").addClass("active");
				sequence.nextFrameID = $(this).index()+1;
				sequence.goTo(sequence.nextFrameID);
			}
		});
});

//LavaLamp
$(window).load(function() {
	$(".menu").lavaLamp({
		fx: "backout",
		speed: 700
	});
});