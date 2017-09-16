window.onload = function(){
	var list = document.getElementById('list');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');

	function animate(offset){
		var newLeft = parseInt(list.style.left) + offset;
		list.style.left = newLeft + 'px';
		if (newLeft>0) {
			list.style.left = -3868 + 'px';
		}
		if (newLeft<-3868) {
			list.style.left = 0 + 'px';
		}
	}

	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var index=1;


	function buttonsShow(){
		for(var i=0;i<buttons.length;i++){
			if (buttons[i].className == 'on') {
				buttons[i].className = '';
			}
		}
		buttons[index - 1].className = 'on';
	}

	for(var i=0;i<buttons.length;i++){
		(function(i){
			buttons[i].onclick = function(){
				var clickIndex = parseInt(this.getAttribute('index'));
				var offset = 967 * (index - clickIndex);
				animate(offset);
				index=clickIndex;
				buttonsShow();
			}
		})(i)
	}

	prev.onclick = function(){
		index -= 1;
		if (index < 1) {
			index = 5;
		}
		buttonsShow();
		animate(967);
	}
	next.onclick = function(){
		index += 1;
		if(index > 5){
			index = 1;
		}
		buttonsShow();
		animate(-967);
	}
	var timer;
	function play(){
		timer = setInterval(function(){
			next.onclick()	
		},1500)
	}
	play();
	var container = document.getElementById('container');
	function stop(){
		clearInterval(timer);
	}
	container.onmouseover = stop;
	container.onmouseout = play;
}