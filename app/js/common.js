
//preloader
$(window).on('load', function() { 
	$(".loader-inner").fadeOut(); 
	$(".loader").delay(400).fadeOut(100); 
});


$(function() {

//$ select
$( "#currency" ).selectmenu();


//$ select
$( ".find-form select" ).selectmenu();


//lang flag chanjer
$('#lang').on('click', function() {
 if($("#lang :selected").val() == "ru") {
		$("#lang").attr('style', 'background-image:url(img/ru.png);');
 }
 if($("#lang :selected").val() == "en") {
		$("#lang").attr('style', 'background-image:url(img/en.png);');
 }
});


//mobile menu scripts
$('.header-nav-toggle').on('click', function() {
	$(this).toggleClass('on');
	$('.toggle-btn').toggleClass('on');
	$('.header-nav-list').slideToggle();
	return false;
});

$(window).resize(function(){
	if($(window).width() > '768')   {
		$('.header-nav-list').removeAttr('style');
		$('.toggle-btn').removeClass('on');
		$('.header-nav-toggle').removeClass('on');
	}
});


//Open submenu on hover
$('.header-nav-list .nav-item').hover(function(){
	$(this).find('.header-submenu').slideDown(100);
}, function(){
	$(this).find('.header-submenu').slideUp(100);
});


//Close menu when click on submenu item
$('.header-submenu a').on('click', function(){
	$('.header-submenu').hide();
	$('.toggle-btn').removeClass('on');
	$('.header-nav-toggle').removeClass('on');
	$('.header-submenu').removeAttr('style');
	if($(window).width() < 768) {
		$('.header-nav-list').slideUp();
	}
	return false;
});


//Slider range
//http://xiper.net/collect/js-plugins/ui/jquery-ui-slider
$( "#slider-range" ).slider({
	range: true,
	min: 0,
	max: 1000000,
	step: 5000,
	values: [ 200000, 500000 ],

	stop: function(event, ui) {
		$("#minCost").val("$" + ui.values[ 0 ]);
		$("#maxCost").val("$" + ui.values[ 1 ]);
	},

	slide: function( event, ui ) {
		$("#minCost").val("$" + ui.values[ 0 ]);
		$("#maxCost").val("$" + ui.values[ 1 ]);
	}

});


$( "#minCost" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ));
$( "#maxCost" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ));


$("#minCost").change(function(){

	var value1=$("#minCost").val();
	var value2=$("#maxCost").val();

	if(parseInt(value1) > parseInt(value2)){
		value1 = value2;
		$("#minCost").val(value1);
	}
	$("#slider-range").slider("values",0,value1);
});


$("#maxCost").change(function(){

	var value1=$("#minCost").val();
	var value2=$("#maxCost").val();

	if (value2 > 1000000) {
		value2 = 1000000;
		$("#maxCost").val(1000000);
	}
	if(parseInt(value1) > parseInt(value2)){
		value2 = value1;
		$("#maxCost").val(value2);
	}
	$("#slider-range").slider("values",1,value2);
});

//Filter input fields
$('.slider-wrapper input').keypress(function(event){
	var key, keyChar;
	if(!event) var event = window.event;
	if (event.keyCode) key = event.keyCode;
	else if(event.which) key = event.which;
	if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
	keyChar=String.fromCharCode(key);
	if(!/\d/.test(keyChar))	return false;
});



//Open close header form on
$('.find-now-btn').on('click', function(){

	if ($(this).hasClass('on')) {
		$(this).removeClass('on')
		.html('Find Now');
		$('.find-home-wrapper').slideToggle(400);
		return false;
	}

	$('.find-home-wrapper').slideToggle(400);
	$(this).html('Hide Form').addClass('on');
	return false;
});

$('.main-form-btn').on('click', function(){
	if($(window).width() <= 480) {
		$('.find-home-wrapper').slideToggle(400);
		if ($('.find-now-btn').hasClass('on')) {
			$('.find-now-btn').removeClass('on')
			.html('Find Now');
		}
	}
	return false;
});

$(window).resize(function(){
	if($(window).width() > 480) {
		$('.find-home-wrapper').removeAttr('style');
	}
});


//Swiper slider
var mySwiper = new Swiper ('.swiper-container', {
	spaceBetween: 30,
	loop: true,
	slidesPerView: 4,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	breakpoints: {
		1200: {
			slidesPerView: 3
		},
		992: {
			slidesPerView: 2
		},
		640: {
			slidesPerView: 1
		}
	}
})


//Equal Heights
function heightses() {
	$('.latest-prop-item .description-block').css('height', '').equalHeights();
}

$(window).resize(function() {
	heightses();
});

heightses();


//fix hover overlay on windows phone
$('.latest-prop-item .img-wrapper').on('click', function(){
	$(this).find('.img-overlay').removeAttr('style')
	.css({'opacity':'1', 'transform':'scale(1)'});
});

$('.latest-prop-item .img-overlay').on('click', function(e){
	e.stopPropagation();
	$(this).removeAttr('style');
});


//Theme color changer
$('.theme-default').on('click', function(){
	$('#color-styles').attr('href', 'css/theme-default.css');
});
$('.theme-red').on('click', function(){
	$('#color-styles').attr('href', 'css/red-theme.css');
});
$('.theme-blue').on('click', function(){
	$('#color-styles').attr('href', 'css/blue-theme.css');
});


});
