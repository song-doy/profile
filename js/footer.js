//Top 바로가기
$(function(){

    //Top에 대한 클릭이벤트
    $("aside").on('click', function(evt){
        evt.preventDefault();
        $('html,body').stop().animate({
            scrollTop : 0
        });
    });

    //scrollTop 값에 따른 메뉴활성화
    $(window).on('scroll', function(){

        //현재 스크롤바의 top값을 변수에 저장
        let scrollTop = $(window).scrollTop();

        // console.log(scrollTop);


        //푸터가 화면에 노출되는 순간부터 Top 아이콘은 푸터 바로 위에 있게 하고 싶다.
        /**
         * footer의 offset().top값은 (scrollTop + 브라우저의 높이값) 를 합친것과 같다.
         * 
         * view = (scrollTop+브라우저높이값)-푸터의offset().top
         * 
         * 이때 view>0 크다면 푸터가 노출되었다는 것을 의미한다.        * 
         * 
         */

         let view = (scrollTop+$(window).height())-$('footer').offset().top-30

         if(view>0){//푸터가 화면에 노출된 상태
            $('aside').css({marginBottom:view});
         }else{
            $('aside').css({marginBottom:0});
         }
        

    });

});