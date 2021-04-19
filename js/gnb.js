//헤더영역-GNB
$(function(){

	const $gnb = $("#gnb");
        
    //동적으로 서브메뉴 배경와 활성화 표시Bar 요소 삽입
    $gnb.before('<div class="bg_lnb"><span class="bar"></span></div>');

	const $mainmnu = $("#gnb>li>a");//메인메뉴
	const $submnu = $gnb.find(".lnb");//서브메뉴
    const $bg_lnb = $("header>.container>nav>.bg_lnb");//배경변수	

	const $hasSubGnb = $gnb.children("li").has(".lnb");//서브메뉴를 보유한 메인메뉴

	const $bar = $bg_lnb.children(".bar");
	let barWidth = 0;//활성화 표식의 폭

	let nowGnbIdx = null;//마우스엔터한 gnb 인덱스
	//let hasSubGnbIdx = null;//서브메뉴를 보유한 gnb 인덱스
	let selectedMnuIdx = null;//선택된 메인메뉴의 인덱스번호 저장변수
	
	let marginGap = 0;//왼쪽여백값


	//7단계 - 활성화 표식을 위한 여백측정
	$(window).on('load resize', function(){
		marginGap = $("header").offset().left;
	});


	//8단계 - 활성화 표식 이동 함수
	const moveBar = function(idx){
		const $span = $mainmnu.eq(idx).children('span');
		barWidth = $span.width();

		if( parseInt($bar.css('left')) == 0){
			$bar.css({
				width : barWidth,
				left : $span.offset().left - marginGap
			});
		}else{
			$bar.stop().animate({
				width : barWidth,
				left : $span.offset().left - marginGap
			},300,"easeInOutCubic");
		}
	};


	//3단계 - 서브메뉴를 노출하는 함수
	const subShow = function(idx){
		$bg_lnb.show();

		//서브메뉴를 가지고있는 메인메뉴 중에서 idx에 해당하는 녀석만 노출
		$hasSubGnb.find(".lnb").hide().eq(idx).show();
	};


	//4단계 - 서브메뉴를 숨기는 함수
	const subHide = function(){
		$submnu.hide();
		$bg_lnb.hide();
	};


	//2단계 - 서브메뉴 유무 확인후 노출처리 함수
	const subShowHide = function(idx){

		//서브메뉴 유무 확인하는 변수 : 0, 1
		let existSub = $mainmnu.eq(idx).parent().find('.lnb').length;
		console.log(existSub);
		
		if(existSub>0){
			//서브메뉴를 가지고 있는 메인메뉴중에서 몇번째 것인지를 나타내는 인덱스를 추출
			const tmpIdx = $hasSubGnb.index($mainmnu.eq(idx).parent());

			subShow(tmpIdx);//서브메뉴 노출
			$bg_lnb.css({
				backgroundColor : "rgba(38,39,41,1)"
			});
		}else{
			subHide();//서브메뉴 숨김
			$bg_lnb.show().css({
				backgroundColor : "rgba(38,39,41,0)"
			});
		}
	};


	//1단계 - 페이지 로드시 선택된 메인메뉴 파악
	$(window).on('load', function(){
		for(let i=0;i<5;i++){
			if($gnb.children('li').eq(i).hasClass('on')){//해당li가 on을 가지고 있으면
				selectedMnuIdx = i;
				subShowHide(selectedMnuIdx);//서브메뉴 유무를 확인후 노출처리

				moveBar(selectedMnuIdx);
				break;
			}
		}
	});


	//5단계 - mouseenter한 메인메뉴에 대한 이벤트 구문
	$mainmnu.on("mouseenter", function(){
		nowGnbIdx = $mainmnu.index(this);
		subShowHide(nowGnbIdx);
		moveBar(nowGnbIdx);
	});


	//6단계 - GNB영역을 떠날경우 서브메뉴 숨김
	$gnb.on("mouseleave", function(){
		if($mainmnu.parent().hasClass('on')){
			subShowHide(selectedMnuIdx);
			moveBar(selectedMnuIdx);
		}else{
			subHide();
		}
	});


});