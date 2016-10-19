function planeDrag(){
		document.onmousemove = function (e){
		this.e = e || window.event;
		var ax =e.clientX-35;
		var ay =e.clientY-40;
		var bx =background.offsetLeft;
		var by =background.offsetTop;
		if(ax>bx&&ay>by&&ax<(bx+261)&&ay<(by+500)){
		plane.style.top = e.clientY-40+"px";
		plane.style.left = e.clientX-35 +"px";
		}
	}
}