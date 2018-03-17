/*获取category数据-------------------------------------------------------------------*/
$.ajax({
	url:'./json/category.json',
	type:'GET',
	dataType:'json',
	success:function(data){
		var data=data.QueryIndexCategorysDtos;				
		var str="<ul>";
		for(var i=0;i<data.length;i++){
			str+=
			`<li class='ui-category-list'>
                <a  href='#' class='ui-category-second'>
					<i class='ui-cate-icon ui-cate-icon${i+1}'></i>
					<i class='ui-cate-arr'></i>${data[i]['VchCateName']}
				</a>
				<div class='ui-category-third'>
					<div class='ui-cate-left' id='ui-cate-left-11'>
						<div class='ui-cate-left-box'>
						</div>
					</div>
				</div>
			</li>`
		}
		str+="</ul>"
		$('.ui-category').html(str)			
		$('#ui-silder-nav').mouseenter(function(){			
			$('.ui-category .ui-category-list').mouseenter(function(){
				$(this).addClass('ui-category-list-hover').siblings().removeClass('ui-category-list-hover')
				var index=$(this).index();					
				var str="";					
				var data1=data[index]['GetTwoCategory'];
				for(var i=0;i<data1.length;i++){
					var str1="<dd>";
					for(var j=0;j<data1[i]['TwoCatetory']["ThreeCategory"].length;j++){
						str1+=`<a href='#' >${data1[i]['TwoCatetory']["ThreeCategory"][j]["VchCateName"]}</a>
						<span>| </span>`
					}
					str1+="</dd>"
					
					str+=`
						<dl>
							<dt><a href='#' >${data1[i]['TwoCatetory']['VchCateName']}</a></dt>
							${str1}
						</dl>`
					}
				$(this).find('.ui-category-third .ui-cate-left-box').html(str)
				var aDD=$('.ui-cate-left-box dd')
				for(var m=0;m<aDD.length;m++){
					$(aDD[m]).find('span').last().html("")
				}
				
			})
		})
	}			
})
	