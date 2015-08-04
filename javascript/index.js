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



// // $('button').click(function(){
// 	$('p').html('Hello World!');
// })

// var scrolling = getElementById.('scrolling');
// var choices = ['image.jpg', 'image2.jpg', 'image3.jpg'];

// $('.button').click(function(){

// })


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
    // $('.nonModal').hide();
});

$overlay.on('click', function(){
    $(this).removeClass('show');
    // $('.nonModal').show();
});

var $overlaydos = $('#overlay2');

$('.bloomTrigger').on('click', function(){
    $overlaydos.addClass('show');
    // $('.nonModal').hide();
});

$overlaydos.on('click', function(){
    $(this).removeClass('show');
    // $('.nonModal').show();
});

var $overlaytres = $('#overlay3');

$('.manifestaTrigger').on('click', function(){
    $overlaytres.addClass('show');
    // $('.nonModal').hide();
});

$overlaytres.on('click', function(){
    $(this).removeClass('show');
    // $('.nonModal').show();
});

var $overlayquatro = $('#overlay4');

$('.claimTrigger').on('click', function(){
    $overlayquatro.addClass('show');
    // $('.nonModal').hide();
});

$overlayquatro.on('click', function(){
    $(this).removeClass('show');
    // $('.nonModal').show();
});

var $overlaycinco = $('#overlay5');

$('.enablevueTrigger').on('click', function(){
    $overlaycinco.addClass('show');
    // $('.nonModal').hide();
});

$overlaycinco.on('click', function(){
    $(this).removeClass('show');
    // $('.nonModal').show();
});

var $overlayseis = $('#overlay6');

$('.townshopTrigger').on('click', function(){
    $overlayseis.addClass('show');
    // $('.nonModal').hide();
});

$overlayseis.on('click', function(){
    $(this).removeClass('show');
    // $('.nonModal').show();
});
                      

// $('#about').click(function(){

// });

// $('button').click(function(){
//    document.location.href='about.html' + $(this).attr('#about');
// });

// $(button).click(function(){
// 	fucnction incrementIndex(){
// 		currentIndex++;
// 		$('li').toggleClass('hide');
// 	}
// })