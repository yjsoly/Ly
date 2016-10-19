//	鸟(翅膀会动)(本身会动) 一只鸟  直接对象obj
//	背景 一个背景 直接 一个obj
//	水管(左右跑)(一队管子长度在随机)  一个obj 除了背景再从开始的地方重新运动.
//	flash(不停的画,不停的删除)启动方法
var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var time;
var score = 0;
context.font = "40px System"
context.strokeStyle = 'black'
context.fillStyle = 'white'
document.onkeypress = function (e){
	var e = e ||window.event;
	if(e.keyCode==32){
		var pianyiliang = 0 ;
		var time = setInterval(function(){
			bird.startPosition -= 10;
			pianyiliang +=10 ;
			if(pianyiliang>=60){
				clearInterval(time);
			}
		},13)
		
	}
}

var bird = {
	imgs : (function(){
		var img = new Image();
		img.src = "img/atlas.png";
		return img;
	})(),
	drawIndex : 0,
	startPosition : 200,//鸟当前的Y坐标.
	draw : function(){
		var position = [{X:4,Y:981},{X:4,Y:981},{X:61,Y:981},{X:61,Y:981},{X:116,Y:981},{X:116,Y:981}];
		context.drawImage(this.imgs,position[this.drawIndex%6].X,position[this.drawIndex%6].Y,37,26,100,this.startPosition += 3,37,26)
		this.drawIndex+=1;
	}
}
var pipe = {
	imgs : (function(){
		var img = new Image();
		img.src = "img/atlas.png";
		return img;
	})(),
	KX: 130,
	positionX :291,
	positionY : -Math.floor(Math.random()*233),
	draw : function (){
		this.positionX -= 1
		if (this.positionX <= -54) {
			this.positionX = 291;
			this.positionY = -Math.floor(Math.random()*233);
			score++;
		}
		context.drawImage(this.imgs,111,645,54,322,this.positionX,this.positionY,54,322)
		context.drawImage(this.imgs,166,645,54,322,this.positionX,this.positionY+322+this.KX,54,322)
	}
}
var background = {
	imgs : (function(){
		var img = new Image();
		img.src = "img/atlas.png";
		return img;
	})(),
	draw : function(){
		context.drawImage(this.imgs,290,0,291,512,0,0,291,512);
	}
}
function judge(){
	//碰到了天花板、摔到了地上
	if (bird.startPosition <= 0 || bird.startPosition>= 512-26) {
		clearInterval(time);
	}
	//摔倒了地上
	//碰到了水管的上下左右
	if (100 + 37 >= pipe.positionX && 100 < pipe.positionX + 54 && bird.startPosition + 26 > pipe.positionY && bird.startPosition < pipe.positionY + 322) {//当前小鸟是否碰到了上水管
		clearInterval(time)
	}
	if(100 + 37 >= pipe.positionX && 100 < pipe.positionX + 54 && bird.startPosition + 26 > pipe.positionY + 322 + pipe.KX && bird.startPosition < pipe.positionY+322*2 + pipe.KX){
		clearInterval(time)
	}
}
function flash(){
	time = setInterval(function(){
		context.clearRect(0,0,canvas.offsetWidth,canvas.offsetHeight)
		background.draw();
		pipe.draw();
		bird.draw();
		context.strokeText(score,0,40);
		context.fillText(score,0,40);
		judge();
	},13);
}
flash();
