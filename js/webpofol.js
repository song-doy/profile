//사전면접 리스트
$(function(){

    const $slides = $('#webpofol .visual>.visual_container>.visual_slides');
    const $indicator = $('#webpofol .visual>.visual_container>.visual_indicator>li>a');
    
    const $imgCont = $('#webpofol .visual>.visual_container>.visual_slides>li>a');
    const $fullImg = $('#webpofol .visual>.visual_container>.visual_slides>li>a>img');

    const $tit = $("#webpofol .apply>dl>dt>a");

    let nowIdx = 0;

    $indicator.on('click',function(evt){
        evt.preventDefault();
        nowIdx = $indicator.index(this);
        
        $('#webpofol .visual>.visual_container>p').fadeOut(300);
        
        $slides.stop().animate({
            left : -1100 * nowIdx
        },1000);
        
        $('#webpofol .visual>.visual_container>p').delay(500).fadeIn(300);

        $(this).parent().addClass('on').siblings().removeClass('on');
    });

    $imgCont.on('mouseover',function(){
        let ah = 280;
        let imgh = $(this).find('img').height();
        console.log('imgh =',imgh);

        $fullImg.stop().animate({
            top : ah-imgh
        },8000);

        $('#webpofol .visual>.visual_container>.visual_slides>li:nth-of-type(2)>a>img').stop().animate({
            top : ah-imgh
        },1500);

        $(this).parents('li').siblings().find('img').stop();
    });
    $imgCont.on('mouseout',function(){
        $fullImg.stop().animate({
            top : 0
        },3000);

    });

    $tit.on('click', function(evt){
        evt.preventDefault();
        $(this).parent().toggleClass('on').next().slideToggle(150);
    });
});