function DownPlane(a,b,c){
	this.div = document.createElement("div");
	this.addchild = function(){
		this.div.style.width=a;
		this.div.style.height=b;
		this.div.style.background=c;
		background.appendChild(this.div);
		this.div.style.position="absolute";
	}

}