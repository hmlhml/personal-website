window.onload=function(){
	var box=getClass("first-center")[0];
	var as=getClass("imgBox")[0].getElementsByTagName('a');
	var anniu=getClass("dot")[0].getElementsByTagName('li');
	var btnl=getClass("btnl")[0];
	var btnr=getClass("btnr")[0];
	var num=0;
	var flag=true;

				//一般录播
				// function move(type){
				// 	if(type=="r"){
				// 		num++;
				// 		if(num==as.length){
				// 			num=0;
				// 		}
				// 	}else if(type=="l"){
				// 		num--;
				// 		if(num<0){
				// 			num=as.length-1;
				// 		}
				// 	}
					
				// 	for(var i=0;i<as.length;i++){
				// 		as[i].style.display="none";
				// 		anniu[i].style.background="";
				// 	}
				// 	as[num].style.display="block";
				// 	anniu[num].style.background="#ca1088";

				// }
				// var t=setInterval(function(){move("r")},2000);

				// box.onmouseover=function(){
				// 	clearInterval(t);
				// }
				// box.onmouseout=function(){
				// 	t=setInterval(function(){move("r")},2000);
				// }
				// for(var i=0;i<anniu.length;i++){
				// 	anniu[i].index=i;
				// 	anniu[i].onclick=function(){
				// 		for(var j=0;j<as.length;j++){
				// 		as[j].style.display="none";
				// 		anniu[j].style.background="";
				// 		}
				// 		this.style.background="#ca1088";
				// 		as[this.index].style.display="block";
				// 		num=this.index;
				// 	}
				// }
				// btnr.onclick=function(){
				// 	move("r");
				// }
				// btnl.onclick=function(){
				// 	move("l");
				// }

				//双下标轮播
				for(var i=1;i<as.length;i++){
					as[i].style.left="740px";
				}
				var now=0;
				var next=0
				function mo(){
					next++;
					if(next>=as.length){
						next=0;
					}
					as[next].style.left="740px";
					animate(as[now],{left:-740});
					animate(as[next],{left:0},function(){
						flag=true;
					});
					anniu[now].style.background="";
					anniu[next].style.background="#ca1088";
					now=next;
				}
				var t=setInterval(mo,2000);
				box.onmouseover=function(){
					clearInterval(t);
				}
				box.onmouseout=function(){
					t=setInterval(mo,2000);
				}
				btnr.onclick=function(){
					if(flag){
						flag=false;
						mo();
					}	
				}
				function moveL(){
					next--;
					if(next<0){
						next=as.length-1;		
					}
					as[next].style.left="-740px";
					animate(as[now],{left:740});
					animate(as[next],{left:0},function(){
								flag=true;
							})
					anniu[now].style.background="";
					anniu[next].style.background="#ca1088";
					now=next;
				}
				btnl.onclick=function(){
					if(flag){
						flag=false;				
						moveL();	
					}
				}
				for (var i = 0; i < anniu.length; i++) {
					anniu[i].index=i;
					anniu[i].onclick=function(){
					
						if(this.index>now){
							as[this.index].style.left="740px";
							animate(as[now],{left:-740});
							animate(as[this.index],{left:0});
						}
						if(this.index<now){
							as[this.index].style.left="-740px";
							animate(as[now],{left:740});
							animate(as[this.index],{left:0});
						}
						anniu[now].style.background="";
						anniu[this.index].style.background="#ca1088";
						now=this.index;
						next=this.index;
					}
				};
	//banner下方slide部分
	// var slideBig=$(".slideBig")[0];
	// var slideBox=$(".slideBox");
	// var w=getStyle(slideBox[0],"width")
	// function moveR(){
	// 	var first=getFirst(slideBig);
	// 	animate(first,{width:0},600,function(){
	// 		slideBig.appendChild(first);
	// 		first.style.width=w+"px";
	// 	})
	// }	
	// setInterval(moveR,5000);



	var slide=$(".slide")[0];
	var slideBig=$(".slideBig")[0];
	var slideBox=$(".slideBox");
	var w=getStyle(slideBox[0],"width");
	var leftbtn=$(".leftbtn")[0];
	var rightbtn=$(".rightbtn")[0];
	function moveR(){
		var first=getFirst(slideBig);
		animate(slideBig,{left:-w},600,function(){
			slideBig.appendChild(first);
			animate(slideBig,{left:0},0);
		})
	}	
	var t2=setInterval(moveR,1000);
	slide.onmouseover=function(){
		clearInterval(t2);
	
	}
	slide.onmouseout=function(){
		t2=setInterval(moveR,1000);
		
	}
	rightbtn.onclick=function(){{
		moveR();
	}}
	leftbtn.onclick=function(){
		var last=getLast(slideBig);
		animate(slideBig,{left:-w},0,function(){
			animate(slideBig,{left:0})
		})
	}
	//在线客服部分
	var sliderTab=$(".sliderTab")[0];
	var cont=$(".content",sliderTab);
	for(var i=0;i<cont.length;i++){
		cont[i].index=i;
		hover(cont[i],function(){
			animate(this,{left:-85},500)
		},function(){
			animate(this,{left:-21},500)
		})
	}


	//按需加载
	var picture=$(".pic-ture");
	var ch=document.documentElement.clientHeight;
	window.onscroll=function(){
		var tops=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
		// document.title=tops;
		for(var i=0;i<picture.length;i++){
			if(picture[i].offsetTop<=tops+ch);
			var img=$("img",picture[i]);
			for(var j=0;j<img.length;j++){
				img[j].src=img[j].getAttribute("data-src");
			}
		}
	}
	window.onscroll();



	//图片左移

	function moveleft(obj){
		var imgs=$("img",obj);
		for (var i = 0; i < imgs.length; i++) {
			hover(imgs[i],function(){
				animate(this,{marginRight:20})
			},function(){
				animate(this,{marginRight:0})
			})
		};
	}
	var small1=$(".smallbox",$(".fourG")[0]);
	var small2=$(".smallbox",$(".ywtj")[0]);
	var bigs=$(".bigbox",$(".buyphone")[0]);
	for (var i = 0; i < small1.length; i++) {
		moveleft(small1[i]);
		moveleft(small2[i]);
	};
	for (var i = 0; i < bigs.length; i++) {
		moveleft(bigs[i]);
	};
	

	//公告上移效果
	function movetop(obj){
		setInterval(function(){
			var first=getFirst(obj);
			obj.appendChild(first)
		},3000)
		
	}
	var uls=$("ul",$(".left")[0]);
	for(var i=0;i<uls.length;i++){
		movetop(uls[i])
	}

	//搜索框
	var sou=$(".sear",$(".searchBox")[0])[0];
	var placeholder=sou.placeholder;
	sou.onfocus=function(){	
		this.placeholder="";
	};
	sou.onblur=function(){
		if(this.placeholder==""){
			this.placeholder=placeholder;
		}
	}
	var num=$("input",$(".num")[0])[0];
	var placeholder=num.placeholder;
	num.onfocus=function(){	
		this.placeholder="";
	};
	num.onblur=function(){
		if(this.placeholder==""){
			this.placeholder=placeholder;
		}
	}
}