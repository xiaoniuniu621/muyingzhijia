$(function(){	
	/*固定导航栏及搜索框*/
	$(window).scroll(function(){
		if($(document).scrollTop()>=600){
			$('.ui-fixed-top').fadeIn()
		}else{
			$('.ui-fixed-top').fadeOut()
		}
	})

	/*轮播图*/
	lunbo()
	function lunbo(){
		var i=0
		var $liWidth=$('.slideArea li').width()
		$('.slideArea').width($liWidth*$('.slideArea li').length+'px')
		var len=$('.slideArea li').length
		
		var timer=setInterval(function(){
			move()
		},3000);
		
		
		
		
		//角标改变
		$('#slide-btnArea span').mouseover(function(){
			i=$(this).index();
			i--;
			move()
			
		})
		
		$('.sileBox').hover(function(){
			clearInterval(timer)
		},function(){
			timer=setInterval(function(){
				move()
			},3000)
		})
		
		function move(){
			i++;
			if(i==len){
				$('.slideArea').css({'left':0})
				i=1;
				
			}
			if(i==len-1){
				$('#slide-btnArea span').eq(0).addClass('bannercur').siblings().removeClass('bannercur')
			}else{
				$('#slide-btnArea span').eq(i).addClass('bannercur').siblings().removeClass('bannercur')
			}
			
			
			$('.slideArea').animate({'left':-i*$liWidth+'px'},500)
		
		}
	}
	
	
	
	
	
})