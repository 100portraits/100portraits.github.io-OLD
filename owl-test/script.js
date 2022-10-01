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
