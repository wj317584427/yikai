

//储存cookie
function setCookie(c_name,value,expiredays)
{
var exdate=new Date()
exdate.setDate(exdate.getDate()+expiredays)
document.cookie=c_name+ "=" +escape(value)+
((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}

//取回cookie
function getCookie(c_name)
{
if (document.cookie.length>0)
  {
  c_start=document.cookie.indexOf(c_name + "=")
  if (c_start!=-1)
	{ 
	c_start=c_start + c_name.length+1 
	c_end=document.cookie.indexOf(";",c_start)
	if (c_end==-1) c_end=document.cookie.length
	return unescape(document.cookie.substring(c_start,c_end))
	} 
  }
return ""
}
	
//删除cookie
function delCookie(name) 
{ 
    var exp = new Date(); 
    exp.setTime(exp.getTime() - 1); 
    var cval=getCookie(name); 
    if(cval!=null) 
        document.cookie= name + "="+cval+";expires="+exp.toGMTString(); 
} 





(function($){
	$(function(){
		//导航点击事件
		$('.navN a span').bind('click',function(){
			$('.nav-none').stop().animate({
				height:0
			},1000,function(){
			   $('.nav-none').css('display','none')
			});
		});	
	//以下为轮播右边点击事件
	$('.bannerRTB>p').click(function(){
		$(this).css('border-bottom','1px solid #C7A774').siblings().css('border-bottom','none');
		$(this).children().css('color','#C7A774').end().siblings().children().css('color','#000');
	});
	$('.banner-right-topP1').click(function(){
		$('.banner-right-top>ul').css('display','block');
		$('.banner-right-top .banner-right-top-box').css('display','none');
	});
	$('.banner-right-topP2').click(function(){
		$('.banner-right-top>ul').css('display','none');
		$('.banner-right-top .banner-right-top-box').css('display','block');
	});
	$('.banner-right-topP3').click(function(){
		$('.banner-right-btn-box1').css('display','block');
		$('.banner-right-btn-box2').css('display','none');
	});
	$('.banner-right-topP4').click(function(){
		$('.banner-right-btn-box1').css('display','none');
		$('.banner-right-btn-box2').css('display','block');
	});
	//以上为轮播右边点击事件
	//以下为1F轮播
	var
	
	ocopyR=$('#copy1f')
	
	olist=$('#copy1f>ul')
	ogifboxA=$('#copybox1f>a')
	iindex=0
	iitimer=null;
	iwidth=-605
	
	ocopyR.mouseenter(function(){
		clearInterval(iitimer)
	})
	ocopyR.mouseleave(function(){
		move()
	})
	move()
	function move(){
			iitimer=setInterval(function(){
			iindex++
			if(iindex === 4){
				iindex=1;
				olist.css('left','-604px')
			}


			olist.stop().animate({
				left:(iindex+1)*iwidth
			},1000)
		
		ogifboxA.removeClass('active').eq(iindex).addClass('active')
		if (iindex === 3) {
		ogifboxA.removeClass('active').eq(0).addClass('active')
			
		}
		},2000)
	}
	
	ogifboxA.bind('click',function(){
		clearInterval(iitimer)
		$(this).addClass('active').siblings().removeClass('active');
		iindex=$(this).index();
		olist.stop().animate({
			left:iindex*iwidth
		},1000)
	});	
	//以下为2F轮播
	var
	
	oacopyR=$('#copy2f')
	
	oalist=$('#copy2f>ul')
	oagifboxA=$('#copybox2f>a')
	iaindex=0
	iaitimer=null;
	iawidth=-605
	
	oacopyR.mouseenter(function(){
		clearInterval(iaitimer)
	})
	oacopyR.mouseleave(function(){
		amove()
	})
	amove()
	function amove(){
			iaitimer=setInterval(function(){
			iaindex++
			if(iaindex === 4){
				iaindex=1;
				oalist.css('left','-604px')
			}


			oalist.stop().animate({
				left:(iaindex+1)*iawidth
			},1000)
		
		oagifboxA.removeClass('active').eq(iaindex).addClass('active')
		if (iaindex === 3) {
		oagifboxA.removeClass('active').eq(0).addClass('active')
			
		}
		},2000)
	}
	
	oagifboxA.bind('click',function(){
		clearInterval(iaitimer)
		$(this).addClass('active').siblings().removeClass('active');
		iaindex=$(this).index();
		oalist.stop().animate({
			left:iaindex*iawidth
		},1000)
	});	
	//以下为3F轮播
	var
	
	obcopyR=$('#copy3f')
	
	oblist=$('#copy3f>ul')
	obgifboxA=$('#copybox3f>a')
	ibindex=0
	ibitimer=null;
	ibwidth=-605
	
	obcopyR.mouseenter(function(){
		clearInterval(ibitimer)
	})
	obcopyR.mouseleave(function(){
		bmove()
	})
	bmove()
	function bmove(){
			ibitimer=setInterval(function(){
			ibindex++
			if(ibindex === 4){
				ibindex=1;
				oblist.css('left','-604px')
			}


			oblist.stop().animate({
				left:(ibindex+1)*ibwidth
			},1000)
		
		obgifboxA.removeClass('active').eq(ibindex).addClass('active')
		if (ibindex === 3) {
		obgifboxA.removeClass('active').eq(0).addClass('active')
			
		}
		},2000)
	}
	
	obgifboxA.bind('click',function(){
		clearInterval(ibitimer)
		$(this).addClass('active').siblings().removeClass('active');
		ibindex=$(this).index();
		oblist.stop().animate({
			left:ibindex*ibwidth
		},1000)
	});
	//4f 轮播图
	var
	
	occopyR=$('#copy4f')
	
	oclist=$('#copy4f>ul')
	ocgifboxA=$('#copybox4f>a')
	icindex=0
	icitimer=null;
	icwidth=-605
	
	occopyR.mouseenter(function(){
		clearInterval(icitimer)
	})
	occopyR.mouseleave(function(){
		cmove()
	})
	cmove()
	function cmove(){
			icitimer=setInterval(function(){
			icindex++
			if(icindex === 4){
				icindex=1;
				oclist.css('left','-604px')
			}


			oclist.stop().animate({
				left:(icindex+1)*icwidth
			},1000)
		
		ocgifboxA.removeClass('active').eq(icindex).addClass('active')
		if (icindex === 3) {
		ocgifboxA.removeClass('active').eq(0).addClass('active')
			
		}
		},2000)
	}
	
	ocgifboxA.bind('click',function(){
		clearInterval(icitimer)
		$(this).addClass('active').siblings().removeClass('active');
		icindex=$(this).index();
		oclist.stop().animate({
			left:icindex*icwidth
		},1000)
	});
	//5f 轮播图
	var
	
	odcopyR=$('#copy5f')
	
	odlist=$('#copy5f>ul')
	odgifboxA=$('#copybox5f>a')

	idindex=0
	iditimer=null;
	idwidth=-605
	
	odcopyR.mouseenter(function(){
		clearInterval(iditimer)
	})
	odcopyR.mouseleave(function(){
		dmove()
	})
	dmove()
	function dmove(){
			iditimer=setInterval(function(){
			idindex++
			if(idindex === 4){
				idindex=1;
				odlist.css('left','-604px')
			}


			odlist.stop().animate({
				left:(idindex+1)*idwidth
			},1000)
		
		odgifboxA.removeClass('active').eq(idindex).addClass('active')
		if (idindex === 3) {
		odgifboxA.removeClass('active').eq(0).addClass('active')
			
		}
		},2000)
	}
	
	odgifboxA.bind('click',function(){
		clearInterval(iditimer)
		$(this).addClass('active').siblings().removeClass('active');
		idindex=$(this).index();
		odlist.stop().animate({
			left:idindex*idwidth
		},1000)
	});
	//6f 轮播图
	var
	
	oecopyR=$('#copy6f')
	
	oelist=$('#copy6f>ul')
	oegifboxA=$('#copybox6f>a')
	
	ieindex=0
	ieitimer=null;
	iewidth=-605
	
	oecopyR.mouseenter(function(){
		clearInterval(ieitimer)
	})
	oecopyR.mouseleave(function(){
		emove()
	})
	emove()
	function emove(){
			ieitimer=setInterval(function(){
			ieindex++
			if(ieindex === 4){
				ieindex=1;
				oelist.css('left','-604px')
			}


			oelist.stop().animate({
				left:(ieindex+1)*iewidth
			},1000)
		
		oegifboxA.removeClass('active').eq(ieindex).addClass('active')
		if (ieindex === 3) {
		oegifboxA.removeClass('active').eq(0).addClass('active')
			
		}
		},2000)
	}
	
	oegifboxA.bind('click',function(){
		clearInterval(ieitimer)
		$(this).addClass('active').siblings().removeClass('active');
		ieindex=$(this).index();
		oelist.stop().animate({
			left:ieindex*iewidth
		},1000)
	});
	//7f 轮播图
	var
	
	ofcopyR=$('#copy7f')
	
	oflist=$('#copy7f>ul')
	ofgifboxA=$('#copybox7f>a')
	
	ifindex=0
	ifitimer=null;
	ifwidth=-605
	
	ofcopyR.mouseenter(function(){
		clearInterval(ifitimer)
	})
	ofcopyR.mouseleave(function(){
		fmove()
	})
	fmove()
	function fmove(){
			ifitimer=setInterval(function(){
			ifindex++
			if(ifindex === 4){
				ifindex=1;
				oflist.css('left','-604px')
			}


			oflist.stop().animate({
				left:(ifindex+1)*ifwidth
			},1000)
		
		ofgifboxA.removeClass('active').eq(ifindex).addClass('active')
		if (ifindex === 3) {
		ofgifboxA.removeClass('active').eq(0).addClass('active')
			
		}
		},2000)
	}
	
	ofgifboxA.bind('click',function(){
		clearInterval(ifitimer)
		$(this).addClass('active').siblings().removeClass('active');
		ifindex=$(this).index();
		oflist.stop().animate({
			left:ifindex*ifwidth
		},1000)
	});
	//8f 轮播图
	var
	
	ogcopyR=$('#copy8f')
	
	oglist=$('#copy8f>ul')
	oggifboxA=$('#copybox8f>a')
	
	igindex=0
	igitimer=null;
	igwidth=-605
	
	ogcopyR.mouseenter(function(){
		clearInterval(igitimer)
	})
	ogcopyR.mouseleave(function(){
		gmove()
	})
	gmove()
	function gmove(){
			igitimer=setInterval(function(){
			igindex++
			if(igindex === 4){
				igindex=1;
				oglist.css('left','-604px')
			}


			oglist.stop().animate({
				left:(igindex+1)*igwidth
			},1000)
		
		oggifboxA.removeClass('active').eq(igindex).addClass('active')
		if (igindex === 3) {
		oggifboxA.removeClass('active').eq(0).addClass('active')
			
		}
		},2000)
	}
	
	oggifboxA.bind('click',function(){
		clearInterval(igitimer)
		$(this).addClass('active').siblings().removeClass('active');
		igindex=$(this).index();
		oglist.stop().animate({
			left:igindex*igwidth
		},1000)
	});
	//9f 轮播图
	var
	
	ohcopyR=$('#copy9f')
	
	ohlist=$('#copy9f>ul')
	ohgifboxA=$('#copybox9f>a')
	
	ihindex=0
	ihitimer=null;
	ihwidth=-605
	
	ohcopyR.mouseenter(function(){
		clearInterval(ihitimer)
	})
	ohcopyR.mouseleave(function(){
		hmove()
	})
	hmove()
	function hmove(){
			ihitimer=setInterval(function(){
			ihindex++
			if(ihindex === 4){
				ihindex=1;
				ohlist.css('left','-604px')
			}


			ohlist.stop().animate({
				left:(ihindex+1)*ihwidth
			},1000)
		
		ohgifboxA.removeClass('active').eq(ihindex).addClass('active')
		if (ihindex === 3) {
		ohgifboxA.removeClass('active').eq(0).addClass('active')
			
		}
		},2000)
	}
	
	ohgifboxA.bind('click',function(){
		clearInterval(ihitimer)
		$(this).addClass('active').siblings().removeClass('active');
		ihindex=$(this).index();
		ohlist.stop().animate({
			left:ihindex*ihwidth
		},1000)
	});
	//咨询
	$('.zixun').hover(function(){
			$('.zixun').text('在线咨询')
		},function(){
			$('.zixun').text('')
		});
		//购物车--红色方块
		$('.Y-gou').hover(function(){
			$('.Y-gou').text('购物车')
			$('.Y-GO').css('display','block')
		},function(){
			$('.Y-gou').text('')
			$('.Y-GO').css('display','none')
		});
		//购物车自身显示隐藏
		$('.Y-GO').hover(function(){
			
			$('.Y-GO').css('display','block')
		},function(){
			
			$('.Y-GO').css('display','none')
		});
		//回到顶部
		$('.dingbu').click(function(){
					$('body,html').stop().animate({scrollTop:0},1000);
		})
	
  });
})(jQuery)

window.onload=function(){
	
	//轮播图
	var
	  obannerCtop		=document.getElementById("bannerC-top")//轮播图ul
	  obannerClist		=document.getElementById("bannerClist")//轮播图ul
	  obannerCli		=obannerClist.children//轮播图ul下的li
	 
	  obannerCclick		=document.getElementById("bannerCclick")//轮播图左右点击
	  obannerCleftbtn	=document.getElementById('bannerCleft-btn')//左点击
	  obannerCrightbtn	=document.getElementById('bannerCright-btn')//右点击
	  obannerCqiu		=document.getElementById('bannerCqiu')//小圆点父box
	  obannerCa			=obannerCqiu.children;//四个点击按钮
	
	
    //---------------------------以上为banner左边ul、li的弹窗js--------------------------------------
    
 obannerCtop.onmouseenter=function(){
    	clearInterval(imageInitailMove);
    	obannerCclick.style.display="block"
    	obannerCclick.style.zIndex="6666"
    };
    obannerCtop.onmouseleave=function(){
    	imageInitailMove = setInterval(function(){imageMove()}, 1500);
    	obannerCclick.style.display="none"
    	obannerCclick.style.zIndex="0"
    };
    
    function showImg(index){
  		for(var i=0;i<obannerCli.length;i++){
  			obannerCa[i].index=i
  			obannerCli[i].index=i;
  			//obannerCli[i].style.zIndex=100-i;//图片排序
  			obannerCli[i].style.opacity="0"
  			obannerCa[i].style.background ="white";//圆点北京色全部设置为白色
  		};
  			//将传入参数下标值的图片透明度赋值为 1
  			obannerCli[index].style.opacity="1";
  			//将传入参数下标值的图片的背景色赋值为红色
  			obannerCa[index].style.background ="red"
  	};
  	showImg(0);//初始设置下标为0的图片和圆点的样式
  	var count = 1;//获取计数器
  	//定义自动轮播函数
  	function imageMove() {// 判断count的值如果能被8整除，则将count重新赋值为0；
 		if (count % 6 == 0) {
 			count = 0;
 		};	
 			showImg(count);// 将count值当做参数传给函数showImage();
 			count++;//执行一次 ＋1
	};
 	var imageInitailMove = setInterval(function(){imageMove()}, 1500);
 	//左点击事件
 	obannerCleftbtn.onclick=function(){
 		clearInterval(imageInitailMove);
 		if(count==0){
 			count=6;
 		}
 			count--;
 		showImg(count);
 		
 	};
 	//右点击事件
 	obannerCrightbtn.onclick=function(){
 		clearInterval(imageInitailMove);//清除定时器
 		imageMove();//调用imageMove函数，因为右点击跟自动轮播方向相同所以不用设置count
 		
 	};
 	//圆点点击事件
 	for(var i=0;i<obannerCa.length;i++){
 		obannerCa[i].onclick=function(ev){
 			clearInterval(imageInitailMove);
 			count=ev.target.index;// 将当前点击的圆点的下标值赋值给count
 			showImg(count);//showimg函数的形参为重新赋值的count
 			
 		};
 	};
}
			
