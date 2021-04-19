<?php
	header("Content-Type: text/html; charset=UTF-8"); 

	// 캐쉬를 사용하지 않는 방법
	header("Cache-Control: no-cache, must-revalidate"); //HTTP 1.1
	header("Pragma: no-cache"); //HTTP 1.0
	header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past

    session_cache_expire(30);//세션유지시간을 30분으로 설정
    session_start();//세션 데이터 사용의 시작을 알림

    //메인메뉴 활성화 표시
    if($_GET["idx"]==null){
        $idx = "100";
    }else{
        $idx = $_GET["idx"];
    }

    //서브메뉴 활성화 표시
    if($_GET["sdx"]==null){
        $sdx = "100";
    }else{
        $sdx = $_GET["sdx"];
    }
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>송도연 포트폴리오</title>
    <link rel="stylesheet" href="./css/reset.css">
    <link rel="stylesheet" href="./css/style.css">
    <script src="./js/plugins/jquery.min.js"></script>
    <script src="./js/plugins/jquery.easing.min.js"></script>
    <script src="./js/gnb.js"></script>
    <script src="./js/footer.js"></script>
    <script src="./js/visual.js"></script>
    <script src="./js/aboutme.js"></script>
    <script src="./js/webpofol.js"></script>
    <script src="./js/graphic.js"></script>
</head>
<body>
    <div id="wrap">
        <div id="skip_nav" class="sr-only">
            <h1>UXUI 디자이너 송도연</h1>
            <p>skip navigation</p>
            <ul>
                <li><a href="#gnb">주메뉴 바로가기</a></li>
                <li><a href="#tot">전체메뉴 바로가기</a></li>
                <li><a href="#cont">본문내용 바로가기</a></li>
                <li><a href="#foot">제작자정보 바로가기</a></li>
            </ul>
        </div>
        <header>
            <div class="container">
                <nav>
                    <h2 class="logo">
                        <a href="/">
                            송도연 <span>포트폴리오</span> <br />
                            <small>I am always faithful to the basics</small>
                        </a>
                    </h2>

                    <!-- 서브메뉴의 배경 -->
                    <!-- <div class="bg_lnb"><span class="bar"></span></div> -->
                    <ol id="gnb">
                        <li <?php if($idx==0) echo 'class="on"' ?>>
                            <a href="/aboutme.php?idx=0"><span>AboutMe</span></a>
                        </li>

                        <li <?php if($idx==1) echo 'class="on"' ?>>
                            <a href="/webpofol.php?idx=1"><span>WebPofol</span></a>
                        </li>

                        <li <?php if($idx==2) echo 'class="on"' ?>>
                            <a href="/graphic.php?idx=2"><span>Graphics</span></a>
                        </li>

                        <li <?php if($idx==3) echo 'class="on"' ?>>
                            <a href="#"><span>MY-Project</span></a>
                            <div class="lnb">
                                <ul>
                                    <li <?php if($sdx==0) echo 'class="on"' ?>><a href="https://song-doy.github.io/game/" target="_blank">도와줘 마이숲</a></li>
                                </ul>
                            </div>                            
                        </li>
                    </ol>
                </nav>
            </div>
        </header>