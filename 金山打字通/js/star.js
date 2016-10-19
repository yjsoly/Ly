var bg =document.getElementById("bg");
var bt =document.getElementById("bt");
var start = document.getElementById("start");
var score = document.getElementById("score");
var array= [];
var scores = 0 ;
start.onclick= function(){
	bt.style.display="none";
	start.style.display="none";
	setInterval(Creat,500);
	clear();
	pd();
	score.style.display="block";
}
//创建一个下落的构造函数
function CreateNumber(width,height){
	this.div =document.createElement("div");
	this.div.style.width=width+"px";
	this.div.style.height=height+"px";
	this.div.style.position="absolute";
	this.div.className="zimu";
	this.speed = Math.floor(Math.random()*6+1);
	this.suiji = String.fromCharCode(Math.floor(Math.random()*26+65));
	this.div.innerHTML=this.suiji;
	bg.appendChild(this.div);
	var _this= this;
	this.timer = setInterval(function(){
		_this.div.style.top= _this.div.offsetTop + _this.speed+"px";
	},13);
	this.dead =function(){
		clearInterval(_this.timer);
		_this.div.parentNode.removeChild(_this.div);
	}
}
function Creat(){
	var sj = Math.floor(Math.random()*900);
	var a = new CreateNumber(33,33);	
	a.div.style.left=sj+"px";
	array[array.length]= a;
}

function clear(){
	setInterval(function(){
		for(var i = 0 ;i<=array.length;i++){
			var s = array[i]
			if(s.div.offsetTop>bg.offsetHeight){
				s.dead();
				array.splice(i,1);
			}
		}
	},500)
}
function pd(){
	setInterval(function(){
		document.onkeydown= function(e){
			var e = e||window.event;
			for (var i = 0; i<array.length;i++){
				var key = array[i].div.innerHTML;
				if(key==String.fromCharCode(e.keyCode)){
					array[i].dead();
					array.splice(i,1);
					scores+=10;
					score.innerHTML=scores;
				}
			}
		}
	},100)
}

