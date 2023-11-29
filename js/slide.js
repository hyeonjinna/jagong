$(function(){
	//slider
	start();//함수를 구동시킨다.
	var ilis = 2;//0,1,2 총 3개의 이미지를 변수에 저장한다.
	var now = 0;//0번째부터 시작, now변수에 저장한다.
	
	function start(){//스타트 함수 만들기.
		$(".best_product> li").eq(0).siblings().css({"top":"0px"});//slide 이미지의 첫번째 요소와 형제들에게 css 위치값을 지정한다.
		setInterval(function(){slide();},2000);//2초 간격으로 slide함수를 호출해서 실행한다.
	};
	
	function slide(){//슬라이드 함수 만들기.
		now=now==imgs?0:now+=1;//변수 now와 변수 img의 값이 같다면 now의 값에 1을 더한 값을 대입한다.
		$(".best_product> li").eq(now-1).css({"top":"-600px"});//이전이미지는 위치를 밖으로 나가게 위치값을 준다.
		$(".best_product> li").eq(now).css({"top":"0px"});//이전이미지는 위치를 밖으로 나가게 위치값을 준다.
	};
});