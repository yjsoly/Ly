//var array = new Array("url(img/gameArts.png) no-repeat 0 -569px","url(img/gameArts.png) no-repeat -84px -656px","url(img/gameArts.png) no-repeat -110px -734px","url(img/gameArts.png) no-repeat -40px -726px");
//var plane = document.getElementById("airplane");
//var background = document.getElementById("background");
//var start = document.getElementById("start");
//var stop = document.getElementById("stop");
//var starStop = true;
//var score = 0;
//start.onclick = function(e){
//	this.style.display="none";
//	stop.style.display="block";
//	planeDrag();
//	backDrag();
//	setInterval(diaoz,3000);
//	setInterval(bullet,400);
////	setInterval(diaox,1000);
////	setInterval(diaod,6000);
//}
//var obj = function(){
//	
//}
//function diaoz(){
//	var zb = Math.floor(Math.random()*280+480);
//	var a = new DownPlane("46px","60px",array[0]);
//	a.addchild();
//	a.div.style.left=zb+"px";
//		var b = 15;
//		setInterval(function(){
//			a.div.style.top=b+"px";
//			b+=10;
//		},100);
//		setInterval(function(){if(b>519){
//		a.div.parentNode.removeChild(a.div);
//	}},3000)
//}
//function diaod(){
//	var zb = Math.floor(Math.random()*200+490);
//	var a = new DownPlane("115px","165px",array[2]);
//	a.addchild();
//	a.div.style.left=zb+"px";
//	document.body.appendChild(a.div);
//		var b = -45;
//		setInterval(function(){
//			a.div.style.top=b+"px";
//			b+=10;
//		if(b>445){
//		a.div.parentNode.removeChild(a.div);
//	}
//		},200);
//}
//function diaox(){
//	var zb = Math.floor(Math.random()*280+490);
//	var a = new DownPlane("31px","25px",array[1]);
//	a.addchild();
//	a.div.style.left=zb+"px";
//		var b = 15;
//		setInterval(function(){
//			a.div.style.top=b+"px";
//			b+=10;
//		if(b>519){
//		a.div.parentNode.removeChild(a.div);
//	}
//		},100);
//}
//function bullet(){
//	var bullets = new DownPlane("10px","18px",array[3]);
//	bullets.addchild();
//	var x = plane.offsetLeft+28;
//	var y = plane.offsetTop;
//	bullets.div.style.left=x+"px";
//		setInterval(function(){
//			bullets.div.style.top=y+"px";
//			y-=5;
//		if(y<12){
//		bullets.div.parentNode.removeChild(bullets.div);
//	}
//		},100);
//}



//获得主界面
var mainDiv = document.getElementById("maindiv");
//获得开始界面
var stardiv = document.getElementById("startdiv");
//获得游戏中分数主界面
var scorediv = document.getElementById("scorediv");
//获取分数界面
var scorelabel = document.getElementById("label");
//获取暂停界面
var suspenddiv = document.getElementById("suspenddiv");
//获取游戏结束界面
var enddiv = document.getElementById("enddiv");
//获得游戏结束后分数统计界面
var planscore = document.getElementById("planscore");
//初始化分数
var scores = 0;

//创建飞机类
function(hp,X,Y,sizeX,sizeY,score, dietime,sudu,boomimage,imagesrc){
	this.planX= X;
	this.planY = Y;
	this.imagenode = null;
	this.planhp = hp;
	this.planscore = score;
	this.plansizeX= sizeX;
	this.plansizeY=sizeY;
	this.planboomimage = boomimage;
	this.planisdie =false;
	this.plandietimes=0;
	this.plandietime = dietime;
	this.plansudu = sudu;
	//行为
	//移动行为
	this.planmove = funciton(){
		if(scores<=50000){
			this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+"px";
		}
		else if(scores>50000&&scores<=100000){
			this.imagenode.style.top = this.imagenode.offsetTop+this.plansudu+1+"px";
		}
		else if(scores>100000&&scores<=150000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+2+"px";
        }
		else if(scores>150000&&scores<=200000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+3+"px";
        }
        else if(scores>200000&&scores<=300000){
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+4+"px";
        }
        else{
            this.imagenode.style.top=this.imagenode.offsetTop+this.plansudu+5+"px";
        }
	}
	this.init = function(){
		this.imagenode = document.createElement("img");
		this.imagenode.style.left = this.planX+"px";
		this.imagenode.style.top= this.planY+"px";
		this.imagenode.src = imagesrc;
		mainDiv.appendChild(this.imagenode);
	}
	this.init();
}
