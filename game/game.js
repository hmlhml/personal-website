/*
	letter=[]
	letterArr=[]
	num:4  字母数量
	speed  字母下落速度
	score:10  初始分数
	关卡
	getletter(num)  获取指定数量的字母
	play()  开始游戏
	key()  按下键盘消除字母


	this.sence
	this.letter
	this.num
	this.letArr
	thhis.level
	rhis,score
	this.cw


	get:
	参数：num
	for（var i ）{
	创建img
	img。src
	img.style
	插入到场景

	字母放到letterarr
	}


	play
	setinterval （function（）{
	var letters=document。get
	for（）
	}，50）  改变top

*/
function game(obj,pause,score,win,winclose,lose,loseclose,level){
	this.obj=obj;
	this.pause=pause;
	this.score=score;
	this.win=win;
	this.lose=lose;
	this.win.style.display="none";
	this.lose.style.display="none";
	this.winclose=winclose;
	this.loseclose=loseclose;
	// this.lose=lose;
	this.score.val=5;
	this.score.innerHTML=this.score.val;
	this.letter=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	this.num=4;
	this.letterArr=[];
	this.speed=50;
	this.cw=document.documentElement.clientWidth;
	this.ch=document.documentElement.clientHeight;
	this.level=level||1;
	this.getLetter(4);
	this.play();
	this.key();
}
game.prototype.getLetter=function(num){
	for(var i=0;i<num;i++){
		var img=document.createElement("img");
		img.id=this.letter[Math.floor(Math.random()*(this.letter.length))];
		img.src="images/"+img.id+".png";
		img.style.cssText="position:absolute;left:"+Math.floor(Math.random()*(this.cw-200)+50)+"px;top:"+(Math.random()*(-100)-50)+"px";
		this.letterArr.push(img);
		this.obj.appendChild(img);

	}
}
game.prototype.play=function(){
	var that=this;
	function move(){
		// for(var i=0;i<that.num-that.letterArr.length;i++){
		// 	that.getLetter(that.num-that.letterArr.length);
		// }
		if(that.num-that.letterArr.length){
			that.getLetter(that.num-that.letterArr.length);
		}
		for(var i=0;i<that.letterArr.length;i++){
			var nowh=that.letterArr[i].offsetTop;
			that.letterArr[i].style.top=(nowh+that.speed*that.level)+"px";
			if(nowh+that.speed*that.level>that.ch){
				that.obj.removeChild(that.letterArr[i]);
				that.letterArr.splice(i,1);
				that.score.val-=1;
				that.score.innerHTML=that.score.val;
			}

		}
		if(that.score.val<=0){
			clearInterval(t);
			that.lose.style.display="block";
			
		}
		that.loseclose.onclick=function(){
			that.lose.style.display="none";
			location.assign("game.html")

		}
	}
	t=setInterval(move,500);
	var flag=true;
	that.pause.onclick=function(){
		if(flag){
			clearInterval(t);
			flag=false;
			this.style.background="url(images/6.png) no-repeat left top";
		}else{
			t=setInterval(move,500);	
			flag=true;
			this.style.background="url(images/5.png) no-repeat left top";

		}
	}
}
game.prototype.key=function(){
	var that=this;
	
	document.onkeydown=function(e){
		var ev=e||window.event;
		var nowletter=String.fromCharCode(ev.keyCode);
		if(that.score.val>=10){
			clearInterval(t);
			that.win.style.display="block";
			
		}
		that.winclose.onclick=function(){
			that.win.style.display="none";
			that.score.innerHTML=0;
		location.assign("game.html");
			
		}

		for(var i=0;i<that.letterArr.length;i++){
			if(that.letterArr[i].id==nowletter){
				that.obj.removeChild(that.letterArr[i]);
				that.letterArr.splice(i,1);
				that.score.val+=1;
				that.score.innerHTML=that.score.val;

				
			}
		}
	}
}


