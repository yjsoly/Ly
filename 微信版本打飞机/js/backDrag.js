function backDrag(){
		var a = 0;
		setInterval(function(){
		background.style.backgroundPositionY= a+"px";
		a+=2;
	},10);	
}
