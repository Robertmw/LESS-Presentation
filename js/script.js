$(document).ready(function() {

	$(".page-inner-left").onepage_scroll({
		sectionContainer: "section" 
	});

	var container = $('#splitlayout');
	var leftZone = $('#left');
	var rightZone = $('#right');
	var backLeft = $(".back.back-left");
	var backRight = $(".back.back-right");


	leftZone.on('click', function() {
		container.toggleClass('left-open');
	});
	rightZone.on('click', function() {
		container.toggleClass('right-open');
	});
});
