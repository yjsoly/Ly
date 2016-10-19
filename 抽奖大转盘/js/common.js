window.onload = function(){
	//幸运大转盘抽奖,获得指针元素
	var zhizhen = document.getElementById("zhizhen");
	//存放间隔动画id,用来清除动画
	var dbox = null;
	//间隔动画所用的时间长度,表示转动快慢
	var dtime = 2;
	//角度
	var deg = 0 ;
	//变化增量
	var cc =2;
	//设置指定的角度停止.
	var quan = 4;
	var odeg = Math.floor(Math.random()*361);
	var stopdeg = quan*360+odeg;
	//监听点击事件
	zhizhen.onclick = function(){
		deg=0;
		odeg = Math.floor(Math.random()*361);
		stopdeg = quan*360+odeg;
		dbox = setInterval(dong,dtime)
	}
	function dong(){
		deg+=cc;
		if(deg<stopdeg){
			zhizhen.style.transform="rotate("+deg+"deg)";
		}else{
			clearInterval(dbox);
			panduan(deg%360);
		}
	}
	function panduan(deg){
		if(deg>0&&deg<50){
			alert("不好意思,没有中奖.");
		}else if(deg>50&&deg<101){
			alert("恭喜你,六等奖");
		}else if(deg>101&&deg<151){
			alert("恭喜你,五等奖");
		}else if(deg>152&&deg<202){
			alert("恭喜你,四等奖");
		}else if(deg>203&&deg<254){
			alert("恭喜你,三等奖");
		}else if(deg>255&&deg<306){
			alert("恭喜你,二等奖");
		}else if(deg>306&&deg<360){
			alert("恭喜你,一等奖");
		}
	}
}
