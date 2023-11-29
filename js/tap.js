$(function(){
	$("#board>li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	});
});//.addClass클래스 추가
	 //.removeClass 클래스삭제
	 //.siblings 형제