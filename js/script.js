	var container = document.querySelector('#splitlayout');
	var leftZone = document.querySelector('#left');
	var rightZone = document.querySelector('#right');
	var backLeft = document.querySelector(".back-left");
	var backRight = document.querySelector(".back-right");
window.onload = function() {
	
	backLeft.addEventListener('click', function() {
		container.className = 'splitlayout';
	});

	backRight.addEventListener('click', function() {
		container.className = 'splitlayout';
	});

	leftZone.addEventListener('click', function(){
		container.className = 'splitlayout left-open';
	});

	rightZone.addEventListener('click', function(){
		container.className = 'splitlayout right-open';
	});
};