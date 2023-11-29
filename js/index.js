$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100                                                          ) {
        $('.h_fix').fadeIn();
    } else {
        $('.h_fix').fadeOut();
    }
});

$(function(){
	$("#board>li").click(function(){
		$(this).addClass("on").siblings().removeClass("on");
	});
});//.addClass클래스 추가
	 //.removeClass 클래스삭제
	 //.siblings 형제
	 
$("#scroll").click(function() {
    $('html,body').animate({
        scrollTop: $(".bs").offset().top},
        'slow');
});




















