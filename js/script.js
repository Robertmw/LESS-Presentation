window.onload = function() {
	var container = document.querySelector('#splitlayout');
	var leftZone = document.querySelector('#left');
	var rightZone = document.querySelector('#right');


	leftZone.addEventListener('click', function(){
		container.className = 'splitlayout left-open';
	});

	rightZone.addEventListener('click', function(){
		container.className = 'splitlayout right-open';
	});
};

function toggle(){
	// code ..
}