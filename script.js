$(window).on('load', function() { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({'overflow':'visible'});
})

function infoPopup() {
  document.getElementById("bottomText").style.display = "none";
  document.getElementById("infoText").style.display = "block";

}

function infoBack() {
  document.getElementById("bottomText").style.display = "block";
  document.getElementById("infoText").style.display = "none";


}

	$(document).ready(function(){
		$(".owl-carousel").owlCarousel({
			center: true,
			items: 3,
			margin: 10,
			stagePadding: 50,
			loop: true,
			responsive:{
				0:{
					items:1,
					stagePadding: 10,
				},
				600:{
					items:1,
					stagePadding: 100,
				},
				720:{
					items:1,
					stagePadding: 150,
				},
				800:{
					items:2,

				},
				1000:{
					items:3,
				}
			}
		});
	});
