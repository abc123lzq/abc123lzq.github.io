 ;$(function(){
  	$('#js-explain').on('click', function(){
  		$(this).addClass('kaifu_tab_current').siblings('li').removeClass('kaifu_tab_current');
  		$('#tab-one').show();
  		$('#tab-two').hide();
  	});
  	$('#js-reply').on('click', function(){
  		$(this).addClass('kaifu_tab_current').siblings('li').removeClass('kaifu_tab_current');
  		$('#tab-one').hide();
  		$('#tab-two').show();
  	});
  	$('#alink').on('click', function(){
  		$('#kaifu_tab #js-reply').addClass('kaifu_tab_current').siblings('li').removeClass('kaifu_tab_current');
  		$('#tab-one').hide();
  		$('#tab-two').show();
  	});
  });
;$(function(){
  $('.js-openmod').on('click',function(){
  		$('.modal-bg,.modal-share').show();
  });
  $('.js-close').on('click',function(){
  		$('.modal-bg,.modal-share').hide();
  });
});


// 评论
$(function(){
	  //详细页
	  var Wwidth=$(".head").width();
	  $(".area-one").width(Wwidth-82);
	  $(".area-two").width(Wwidth-32);
	  $(".comment-list li .p3 span").click(function(){
		  if($(this).attr("class")=="span_sel"){
			   $(this).removeClass("span_sel");
			   $(this).parent().next(".p4").hide();
			  }else{
				 $(this).addClass("span_sel");
			    $(this).parent().next(".p4").show();

				  }
		  })
		$(".new-release_bt").click(function(){
			$(this).parent(".p4").hide();
			$(this).parent(".p4").prev(".p3").children("span").attr("class","")
			})


		$(".comment-list li .p3 em").one("click",function(){
			  var Ival=$(this).children("i").text();
			  $(this).addClass("em_sel");
			  $(this).children("i").text(++Ival);
			  setTimeout(function(){$(".comment-list li .p3 em").attr("class","");},2000);
			})

	})
