$(function(){
	start();//함수를 구동시킨다.
	var imgs = 2;//0번째 부터 시작하기 때문에 총 3개의 이미지를 변수에 저장할 때 2로 표시한다.
	var now = 0;//0번째 부터 시작, now변수에 저장한다.
	
	function start(){
		$(".best_product> li").eq(0).siblings().css({"left":"0px"});//slide 이미지의 첫번째요소와 형제들에게 css위치값을 저장한다.
		setInterval(function(){slide();},2000);//2초 간격으로 slide함수를 호출한다.
	};
	
	function slide(){
		now=now==imgs?0:now+=1//변수 now와 변수img의 값이 같다면 now의 값에 1을 더한 값을 대입한다.
		$(".best_product> li").eq(now-1).css({"left":"-2000px"});//이전이미지의 위치는 밖으로 나가게 위치값을 준다.
		$(".best_product> li").eq(now).css({"left":"0px"});//현재이미지의 위치는 보일 수 있게 위치값을 준다.
	};
});