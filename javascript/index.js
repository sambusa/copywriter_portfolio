$('#copywriting').click(function(){
	$('#copytext').toggle();
});

$('#social').click(function(){
	$('#socialtext').toggle();
});

$('#email').click(function(){
	$('#emailtext').toggle();
});

$('#fewd').click(function(){
	$('#fewdtext').toggle();
});

$('#pricing').click(function(){
	$('#pricingtext').toggle();
});


// javascript for portfolio page starts here

var currentIndex = 0;

var images = [
	'images/manifesta_job.jpg',
    'images/acep_job.jpg',
	'images/etsy_job.jpg',
	'images/townshop_job.jpg'];

function setImageByIndex(index){
	$('#carousel img').attr('src', images[index]);
};

setImageByIndex(currentIndex);

$('#next').click(function(){
	currentIndex++;
	currentIndex %= images.length;
	setImageByIndex(currentIndex);
});

$('#previous').click(function(){
	currentIndex--;
	if(currentIndex < 0){
		currentIndex = images.length - 1;
	};
	setImageByIndex(currentIndex);
});

// modal jQuery starts here

var $overlay = $('#overlay');

$('.acepTrigger').on('click', function(){
    $overlay.addClass('show');
});

$overlay.on('click', function(){
    $(this).removeClass('show');
});

var $overlaydos = $('#overlay2');

$('.bloomTrigger').on('click', function(){
    $overlaydos.addClass('show');
});

$overlaydos.on('click', function(){
    $(this).removeClass('show');
});

var $overlaytres = $('#overlay3');

$('.manifestaTrigger').on('click', function(){
    $overlaytres.addClass('show');
});

$overlaytres.on('click', function(){
    $(this).removeClass('show');
});

var $overlayquatro = $('#overlay4');

$('.claimTrigger').on('click', function(){
    $overlayquatro.addClass('show');
});

$overlayquatro.on('click', function(){
    $(this).removeClass('show');
});

var $overlaycinco = $('#overlay5');

$('.enablevueTrigger').on('click', function(){
    $overlaycinco.addClass('show');
});

$overlaycinco.on('click', function(){
    $(this).removeClass('show');
});

var $overlayseis = $('#overlay6');

$('.townshopTrigger').on('click', function(){
    $overlayseis.addClass('show');
});

$overlayseis.on('click', function(){
    $(this).removeClass('show');
});

// jquery for media query


$('.hamburger').click(function(){
    console.log('it worked');
    $('.dropmenu').toggle();
});
                      