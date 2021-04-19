$(function(){
    const $slides = $("#aboutme>.visual>div");
    const $tit = $slides.find("h3");
    const $desc = $tit.next();
    let nowIdx = 0;

    $slides.on('mouseenter', function(){
        nowIdx = $slides.index(this);

        $tit.eq(nowIdx).css({top:350,opacity:0}).stop().animate({
            top:380,opacity:1
        },400,"easeInOutCubic");

        $desc.eq(nowIdx).css({top:470,opacity:0}).stop().animate({
            top:440,opacity:1
        },400,"easeInOutCubic");
    });
});