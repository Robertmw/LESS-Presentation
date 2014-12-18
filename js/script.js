window.onload = function() {
	var container = document.querySelector('#splitlayout');
	var leftButton = document.querySelector('#left-name');
	var rightButton = document.querySelector('#right-name');


	leftButton.addEventListener('click', function(){
		container.className = 'splitlayout left-open';
	});

	rightButton.addEventListener('click', function(){
		container.className = 'splitlayout right-open';
	});
};

function toggle(){
	// code ..
}