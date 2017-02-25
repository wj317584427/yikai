
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



$(function(){
	
	//所有商品列表下的box显示隐藏
	$('#navca').hover(function(){
		$('#banner-none1').css('display','block')
		$('#banner-none1').css('z-index','999')
	},function(){
		$('#banner-none1').css('display','none')
		$('#banner-none1').css('z-index','0')
	});
	$('#banner-none1').hover(function(){
		$('#banner-none1').css('display','block')
		$('#banner-none1').css('z-index','999')
	},function(){
		$('#banner-none1').css('display','none')
		$('#banner-none1').css('z-index','0')
	});
	//固定定位搜索框左边的所有商品列表显示隐藏
	$('#navca2').hover(function(){
		$('#banner-none2').css('display','block')
		$('#banner-none2').css('z-index','999')
	},function(){
		$('#banner-none2').css('display','none')
		$('#banner-none2').css('z-index','0')
	});
	$('#banner-none2').hover(function(){
		$('#banner-none2').css('display','block')
		$('#banner-none2').css('z-index','999')
	},function(){
		$('#banner-none2').css('display','none')
		$('#banner-none2').css('z-index','0')
	});
	//让隐藏的搜索框显示
	$(window).scroll(function(){
		var
			ogundong=$(this).scrollTop();
			
			if(ogundong>158){
				$('.soushuo-none').css('display','block')
			};
			if(ogundong<158){
				$('.soushuo-none').css('display','none')
			}
	});
	//主体左边ul列表点击弹出下滑菜单
	$('.zhutiL-i').click(function(){
		if($(this).siblings('.zhutiL-list').css('display')==='none'){
			$(this).addClass('on')
			$(this).siblings('ul').slideDown(1000);
			if($(this).parent('.zhutiLh3').siblings('.zhutiLh3').children('ul').css('display')==='block'){
				$(this).parents('.zhutiLh3').siblings('.zhutiLh3').children('.zhutiL-list').slideUp(1000);
				alert(1)
				$(this).parents('.zhutiLh3').siblings('.zhutiLh3').children('i').removeClass('on')
			}
		}
		else{
			$(this).removeClass('on')
			$(this).siblings('ul').slideUp(1000)
		}
	});
		//左侧固定定位。咨询
		$('.zixun').hover(function(){
			$('.zixun').text('在线咨询')
		},function(){
			$('.zixun').text('')
		});
		//购物车--红色方块
		$('.Y-gou').hover(function(){
			$('.Y-gou').text('购物车')
			$('.Y-GO').css('display','block');
			
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
		
	
	
	
})