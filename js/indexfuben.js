window.onload=function(){

//顶部导航
	var yintai=getClass('yintai',document)[0];
	var xiala=getClass('xiala',document)[0];
	yintai.onmouseover=function(){
		xiala.style.display='block';
		xiala.style.zIndex=20;
		// yintai.style.background='#fff';
	}
	yintai.onmouseout=function(){
		xiala.style.display='none';
		// xiala.style.zIndex=20;
		// yintai.style.background='#fff';
	}


/*// banner效果开始-层级
		var wheelBox=getClass('wheel-box',document)[0];
		var lists=getClass('img-box',wheelBox)[0];
		var as=lists.getElementsByTagName('img',lists);
		// alert(as.length)
		var innerBox=getClass('inner-box',wheelBox)[0];
		var inners=getClass('inner',innerBox);
		// alert(inners.length)
		var left=getClass('left',wheelBox)[0];
		var right=getClass('right',wheelBox)[0];
		// alert(right);


		var num=0;//声明一个变量 作为下标使用


		as[0].style.zIndex=10;
		inners[0].style.background='#e5004f';


		var t=setInterval(move,2000)
		function move(){
			num++;
			if (num==as.length) {
				num=0;
			};
			for (var i = 0; i < as.length; i++) {
				as[i].style.zIndex=0;inners[i].style.background='';
			};
			as[num].style.zIndex=10;
			inners[num].style.background='#e5004f';
		}


		wheelBox.onmouseover=function(){
			clearInterval(t);
		}
		wheelBox.onmouseout=function(){
			t=setInterval(move,2000);
		}

		for (var i = 0; i < inners.length; i++) {
			inners[i].index=i;
			inners[i].onclick=function(){
				for (var j = 0; j < inners.length; j++) {
					as[j].style.zIndex=0;
					inners[j].style.background='';
			};
				as[this.index].style.zIndex=10;
				inners[this.index].style.background='#e5004f';
			}
		};


		right.onclick=function(){
			move()
		}
		left.onclick=function(){
			// num=as.length;
			num--;
			if (num<0) {
				num=as.length-1;
			};
			for (var i = 0; i < as.length; i++) {
				as[i].style.zIndex=0;inners[i].style.background='';
			};
			as[num].style.zIndex=10;
			inners[num].style.background='#e5004f';
		}		
// banner效果结束*/
//banner 动画轮播开始
    var wheelBox=$('.wheel-box')[0];
    var imgBox=$('.img-box',wheelBox)[0];
    var imgs=$('img',imgBox);
    // alert(imgs.length)
    var innerBox=$('.inner-box')[0];
    var inners=$('.inner',innerBox);
    var btn=$('.btn',wheelBox)[0];
    var left=$('.left',btn)[0];
    var right=$('.right',btn)[0];
    var imgwidth=parseInt(getStyle(imgs[0],'width'));
    imgBox.style.width=imgs.length*imgwidth+'px';
    inners[0].style.background='#e5004f'
    var xia=0;
    var t1=setInterval(move3,2000);
    function move3(){
    	// alert(1)
    	xia++;
    	if (xia==imgs.length) {
    		xia=0;
    	};
    	animate(imgBox,{left:-xia*imgwidth},500)
    	for (var i = 0; i < inners.length; i++) {
    		inners[i].style.background=''
    	};
    	inners[xia].style.background='#e5004f'

    }
    wheelBox.onmouseover=function(){
    	clearInterval(t1);
    }
     wheelBox.onmouseout=function(){
    	t1=setInterval(move3,2000);
    }
    for (var i = 0; i < inners.length; i++) {
    	inners[i].index=i;
    	inners[i].onclick=function(){
    		animate(imgBox,{left:-this.index*imgwidth},500)
    		for (var j = 0; j < inners.length; j++) {
    		inners[j].style.background=''
    	};
    	inners[this.index].style.background='#e5004f';
    	xia=this.index;
    	}
    };

    right.onclick=function(){
    	move3()
    }
    left.onclick=function(){
    	xia--;
    	if (xia<0) {
    		xia=imgs.length-1;
    	};
    	animate(imgBox,{left:-xia*imgwidth},500)

    	for (var j = 0; j < inners.length; j++) {
    		inners[j].style.background=''
    	};
    	inners[xia].style.background='#e5004f';
    }
//banner 动画结束


// 热卖开始
	// 元素获取
		var temaiBox=getClass('temai_box',document)[0];
		var temaiTltleBox=getClass('temai_title_box',temaiBox)[0];
		var temaiTltle=getClass('temai_title',temaiTltleBox);
		var temaiTiaoBox=getClass('temai_tiao_box',temaiBox)[0];
		var temaiTiao=getClass('temai_tiao',temaiTiaoBox);



		var temaiZhuanXiangBox=getClass('temai_zhuanxiang_box',temaiBox)[0];
		var temaiZhuanXiang=getClass('temai_zhuanxiang',temaiZhuanXiangBox);//集合  3
		// var temaiZhuanXiangTu=getClass('temai_zhuanxiang_tu',temaiZhuanXiang)
		// alert(temaiZhuanXiangTu.length)
		var san=getClass('san',document)

			// alert(temaiZhuanXiang.length)
			temaiTiao[2].style.background='#e5004f';
			temaiZhuanXiang[2].style.display='block';
			san[2].style.display='block'
			san[0].style.display='none'
			san[1].style.display='none'



	//选项卡开始
		for (var i = 0; i < temaiTltle.length; i++) {
			temaiTltle[i].index=i;
			// alert(i)
			temaiTltle[i].onclick=function(){
				for (var j = 0; j < temaiZhuanXiang.length; j++) {
					temaiZhuanXiang[j].style.display='none';
					temaiTiao[j].style.background='';
					san[j].style.display='none'
				};
				temaiTiao[this.index].style.background='#e5004f';
				temaiZhuanXiang[this.index].style.display='block';
				san[this.index].style.display='block'
			}
		};

	// 热卖选项卡结束

	
	//热卖图片优化
		var arr1=[];
		// alert(temaiBox)
		var temaiimgs=$('img',temaiBox);
		// alert(temaiimgs.length)//13
		var top1s=temaiBox.offsetTop;
		arr1.push(top1s)
		// alert(arr1)
		// on(window,scroll,function(){
		// 	alert(22)




		// })



	//热卖图片优化
// 热卖结束


//银泰百货开始
		var baiHuo=getClass('baihuo',document)[0];
		var baihuoXiaotuTitleBox=getClass('baihuo_xiaotu_title_box',baiHuo)[0];
		var baihuoXiaotuTitleZi=getClass('baihuo_xiaotu_title_zi',baihuoXiaotuTitleBox);//集合
		var baihuoXiaotuTiao=getClass('baihuo_xiaotu_title_tiao',baihuoXiaotuTitleBox);//集合
		var san1=getClass('san1',document)// 2
		// alert(san1.length)
		// alert(baihuoXiaotuTitleZi.length)
		var baihuoInnerBox=$('.baihuo-inner-box',baiHuo)[0];
		var baihuoInners=$('.baihuo-inner1',baihuoInnerBox);
		// alert(baihuoInners.length)//2
		baihuoXiaotuTiao[0].style.background='#e70050'
		san1[0].style.display='block';


		for (var i = 0; i < baihuoXiaotuTitleZi.length; i++) {
			baihuoXiaotuTitleZi[i].index=i;
			baihuoXiaotuTitleZi[i].onclick=function(){
				for (var j = 0; j < baihuoXiaotuTiao.length; j++) {
					baihuoXiaotuTiao[j].style.background='';
					san1[j].style.display='none'
					baihuoInners[j].style.display='none';

				};
				baihuoXiaotuTiao[this.index].style.background='#e70050'
				san1[this.index].style.display='block'
				baihuoInners[this.index].style.display='block';

			}
		};


		//边框动画
			var maozi=$('.maozi',baiHuo);
			// alert(maozi.length)//8
			for (var i = 0; i < maozi.length; i++) {
				maozi[i].aaa=i;
				maozi[i].onmouseover=function(){
					// var baibt=$('.border_top',this);
					// alert(baibt.length)
					animate($('.border_top',this)[0],{width:197},500);
					animate($('.border_bottom',this)[0],{width:197},500);
					animate($('.border_left',this)[0],{height:260},500);
					animate($('.border_right',this)[0],{height:260},500);
				}
				maozi[i].onmouseout=function(){
					// var baibt=$('.border_top',this);
					// alert(baibt.length)
					animate($('.border_top',this)[0],{width:0},500);
					animate($('.border_bottom',this)[0],{width:0},500);
					animate($('.border_left',this)[0],{height:0},500);
					animate($('.border_right',this)[0],{height:0},500);
				}
			};

		//图片优化
			var baihuotubox=$('.baihuo_tu_box',baiHuo);
			// alert(baihuotubox.length)//1


			var baihuoimgs=$('img',baihuotubox[0]);
			// alert(baihuoimgs.length)//15
			var baitop=baiHuo.offsetTop;
			// alert(baitop)
			// var ee=0;
			var baihuoflag=true;
			on(window,"scroll",function(){
				var baistop=document.documentElement.scrollTop||document.body.scrollTop;
				if (baistop+ch1>baitop&&baihuoflag) {
					// ee++;
					// document.title=ee;
					baihuoflag=false;
					for (var i = 0; i < baihuoimgs.length; i++) {
						baihuoimgs[i].src=baihuoimgs[i].getAttribute('asrc')
					};
				};





			})

//银泰百货结束


//侧导与详情开始
		var banner=getClass('banner',document)[0];
		var cedaoXiangBox=getClass('cedao_xiang_box',banner)[0];
		var cedaoXiang=getClass('cedao_xiang',cedaoXiangBox);//集合
		var cedao=getClass('cedao',banner);//集合
		// alert(cedaoXiang.length);


		for (var i = 0; i < cedao.length; i++) {
			cedao[i].index=i;
			// cedaoXiang[i].style.display=210;

			cedao[i].onmouseover=function(){
				for (var j = 0; j < cedaoXiang.length; j++) {
					cedaoXiang[j].style.display='none';
				};
				cedaoXiang[this.index].style.display='block';
			}
			cedao[i].onmouseout=function(){
				for (var j = 0; j < cedaoXiang.length; j++) {
					cedaoXiang[j].style.display='none';
				};
				cedaoXiang[this.index].style.display='none';
			}
		};
//侧导与详情结束
//户外运动主图轮播开始
		//1.获取类名和JS实现的
		var zhutus=getClass('yundong_zhutu',document);//9
		// alert(zhutus.length)
		for (var n = 0; n < zhutus.length; n++) {
			
			if (!(n==1||n==2||n==8)) {
				lunbo(zhutus[n])
			};
		};
		function lunbo(range){
			var imgboxs=$('.zhutu-img-box',range)[0];
			// alert(imgboxs)
			var imgss=$('img',imgboxs)	
			// alert(imgss.length)
			var zhutuLeft=$('.zhutu_left',range)[0]	
			// alert(zhutuLeft)
			var zhutuRight=$('.zhutu_right',range)[0]
			var lunboBox=$('.zhutu_lunbo_box',range)[0];
			var lunbos=$('.zhutu_lunbo',lunboBox)
			// alert(lunBos.length)
			var imgw=parseInt(getStyle(imgss[0],'width'))	
			imgboxs.style.width=imgw*imgss.length+'px';
			lunbos[0].style.background='#e5004f';

			var A=0;
			//自动轮播开始
				/*var t2=setInterval(mo,2000)
				function mo(){
					A++;
					if (A==imgss.length) {
						A=0;
					};
					animate(imgboxs,{left:-A*imgw},500)
					for (var i = 0; i < lunbos.length; i++) {
						lunbos[i].style.background=''
					};
					lunbos[A].style.background='#e5004f'
				}
				imgboxs.onmouseover=function(){
					clearInterval(t2)
				}
				imgboxs.onmouseout=function(){
					t2=setInterval(mo,2000)
				}*/
			//自动轮播结束


			for (var i = 0; i < lunbos.length; i++) {
				lunbos[i].index=i;
				lunbos[i].onclick=function(){
					animate(imgboxs,{left:-this.index*imgw},500)
					for (var j = 0; j < lunbos.length; j++) {
					lunbos[j].style.background=''
				};
				lunbos[this.index].style.background='#e5004f'
				// A=this.index
				}
			};

			zhutuLeft.onclick=function(){
				A--;
				if (A<0) {
					A=0
				};
				animate(imgboxs,{left:A*imgw},1000)

				for (var j = 0; j < lunbos.length; j++) {
					lunbos[j].style.background=''
				};
				lunbos[A].style.background='#e5004f'
			}
			zhutuRight.onclick=function(){
				A++;
				if (A==imgss.length) {
					A=imgss.length-1
					// A=0
					// return
				};
				animate(imgboxs,{left:-A*imgw},1000)
				for (var j = 0; j < lunbos.length; j++) {
					lunbos[j].style.background=''
				};
				lunbos[A].style.background='#e5004f'
				// mo()
				// if (A==imgss.length-1) {
				// 	A=imgss.length-1
				// };
			}
			



		}



		//2.动画 实现

			/*var yundongZhutus=$('.yundong_zhutu');
			var yundongZhutu=yundongZhutus[0];

			var yundongZhutuImg=$('img',yundongZhutu);//2
			var zhutuLeft=$('.zhutu_left',yundongZhutu)[0];//1
			var zhutuRight=$('.zhutu_right',yundongZhutu)[0];//1

			var zhutuLunboBox=$('.zhutu_lunbo_box',yundongZhutu)[0]

			var zhutuLunbo=$('.zhutu_lunbo',zhutuLunboBox);
				// alert(zhutuLunbo.length)

			yundongZhutuImg[0].style.zIndex=10;
			zhutuLunbo[0].style.background='#e5004f'
			var bb=0;
			setInterval(move2,1000)
			function move2(){
				bb++;
				animate(yundongZhutuImg[bb],{zIndex})
			}



//户外运动主图轮播结束*/

	

//边框动画
		var xiaotuBox=$('.yundong_xiaotu_box')[0];
		// alert(xiaotuBox.length)

		
		var border=$('.yundong_xiaotu')

		// alert(border.length)
		for (var i = 0; i < border.length; i++) {
			border[i].onmouseover=function(){
				animate($('.border_top',this)[0],{width:264},500);
				animate($('.border_bottom',this)[0],{width:264},500);
				animate($('.border_left',this)[0],{height:176},500);
				animate($('.border_right',this)[0],{height:176},500);
			}
			border[i].onmouseout=function(){
				animate($('.border_top',this)[0],{width:0},500)
				animate($('.border_bottom',this)[0],{width:0},500)
				animate($('.border_left',this)[0],{height:0},500)
				animate($('.border_right',this)[0],{height:0},500)
			}

			

			
		};

//无缝动画 侧导logo
	var cedao2=$('.yundong_cedao2')//9
	// alert(cedao2.length)
	for (var i = 0; i < cedao2.length; i++) {
		wufeng(cedao2[i])
	};
	// wufeng(cedao)
	function wufeng(range){
		var container=$('.container',range)[0];//9
		// alert(container.length)
		var logBox=$('.yundong_logo_box',container)
		// alert(logBox.length)
		var leftBtn=$('.left',$('.btn',range)[0])[0]
		var rightBtn=$('.right',$('.btn',range)[0])[0]
		// alert(leftBtn)
		var logwid=parseInt(getStyle(container,'width'))
		// alert(logwid)
		var dang=0;
		var next=0;
		logBox[0].style.left='0px'

		rightBtn.onclick=function(){
			next++;
			if (next==logBox.length) {
				next=0;
			};
			logBox[next].style.left=logwid+'px';
			animate(logBox[dang],{left:-logwid},500);
			animate(logBox[next],{left:0},500);
			dang=next;
		}
		leftBtn.onclick=function(){
			next--;
			if (next==-1) {
				next=logBox.length-1
			};
			logBox[next].style.left=-logwid+'px';
			animate(logBox[dang],{left:logwid},500);
			animate(logBox[next],{left:0},500);
			dang=next;
		}

	}
	
//楼层跳转
	var tops=[];
	var yundongs=$('.yundong');
	// alert(yundongs.length)//9
	for (var i = 0; i < yundongs.length; i++) {
		tops.push(yundongs[i].offsetTop)
	};
	// alert(tops)
	var fix=$('.fix')[0];
	// alert(fix.length)//1
	var fixs=$('.fix_icon')
	// alert(fixs.length)//9
	var fixzhe=$('.fix_zhezhao')
	// alert(fixzhe.length)//9

	var flag3=true;
	var sss=0;
	//楼层标识
	window.onscroll=function(){
		var stop=document.body.scrollTop||document.documentElement.scrollTop;
		for (var i = 0; i < tops.length; i++) {
			//楼层识别
			if (tops[i]<stop+260) {
				for (var j = 0; j < fixzhe.length; j++) {
					fixzhe[j].style.display='none'
				};
				fixzhe[i].style.display='block'
			};
			//楼层显示 隐藏
			
			
		};
		if (stop>1870) {
			if (flag3) {
				sss++;
				document.title=sss;
				flag3=false;

				animate(fix,{marginLeft:594},500)
				// fix.style.marginLeft='594px';
			}
		}else{
			if (!flag3) {
				flag3=true;
				animate(fix,{marginLeft:684},500)
			// fix.style.marginLeft='684px'

			};
		
				
		};
	}//滚动条事件结束




	//楼层跳转
	for (var i = 0; i < fixs.length; i++) {
		fixs[i].bb=i;
		fixs[i].onclick=function(){
			// document.documentElement.scrollTop=tops[this.bb]
			// document.body.scrollTop=tops[this.bb];
			animate(document.body,{scrollTop:tops[this.bb]},500);
			animate(document.documentElement,{scrollTop:tops[this.bb]},500);
		}
	};





	
		
		




}//加载结束