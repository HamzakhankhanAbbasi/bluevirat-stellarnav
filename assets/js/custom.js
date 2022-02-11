// NAVIGATION
// initializeStellarNav(1, '#main-nav');
// function initializeStellarNav(index, element) {
// 	$(element).stellarNav({
// 		breakpoint: 1023,
// 		position: 'left'
// 	});
// }

// $(".catItem").click(function(e){ 
// 	e.preventDefault();
// 	$(this).find(".catWrap").toggleClass("active");  
// 	e.stopPropagation() 
// });
// $(".catWrap").click(function(e){
// 	e.stopPropagation();
// });

// $(".catItem").hover(function (e) {
// 	$(".catWrap").toggleClass("active");
// });


//BANNER SLIDER
var swiper = new Swiper(".bannerSlider", {
	spaceBetween: 0,
	centeredSlides: true,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});


// PRODUCT SLIDER

// SELLER SLIDER

var swiper = new Swiper(".sellerSlider", {
	slidesPerView: 4,
	spaceBetween: 20,
	loop:true,
	navigation: {
		nextEl: ".sliderWrap .next",
		prevEl: ".sliderWrap .prev",
	},
	autoplay: {
		delay: 5000,
		disableOnInteraction: false,
	},
	breakpoints: {
		300: {
			slidesPerView: 1,
		},
		480: {
			slidesPerView: 2,
		},
		760: {
			slidesPerView: 3,
		},
		1025: {
			slidesPerView: 4,
		}
	},

});