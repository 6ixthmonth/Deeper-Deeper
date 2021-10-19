// 페이지 설정 관련 변수
let contextPath;
let lang;

$(function() {
	contextPath = $("#contextPath").val();
	lang = $("#lang").val();
	
	$("input:button").click(startFunc);
});

// START 버튼 클릭 시 실행할 함수
function startFunc() {
	// 화면에서 기존 요소들을 제거
	removeStartBtn();
	
	// 화면에 게임 요소들을 추가
	setGameComponent();
	
	// 키보드 입력 이벤트를 설정(control.js 참고)
	setKeyupEvent();
	
	// 화면에 돌아가기 버튼을 추가
	setReturnBtn();
	
	// 다음 스테이지 이동 버튼을 추가
	setNextBtn();
	
	// 타이머를 설정
	setTimer();
}

// 화면에서 스테이지 타이틀과 START 버튼을 제거하고 본문 영역 위치를 설정하는 함수
function removeStartBtn() {
	$("h1").remove();
	$("input:button").remove();
	$("#title").css("top", "20px");
}

// 화면에 타이머와 원반, 조작 버튼을 추가하는 함수
function setGameComponent() {
	// 타이머를 표시할 영역 추가
	setTimerArea();
	
	// 원반 이미지를 표시할 영역 추가
	setStageArea();
	
	// 원반 이미지 추가
	setCircleImg();
	
	// 조작 버튼 추가
	setControlBtn();
}

// 타이머를 표시할 영역을 추가하는 함수
function setTimerArea() {
	$("title>.inner").append("<div></div>");
	$("div:last").attr("id", "timer");
	
	$("#timer").append("<span></span>");
	$("span:last").attr("id", "hour");
	$("#timer").append("<span>:</span>");
	$("#timer").append("<span></span>");
	$("span:last").attr("id", "min");
	$("#timer").append("<span>:</span>");
	$("#timer").append("<span></span>");
	$("span:last").attr("id", "sec");
}

// 원반 이미지를 표시할 영역을 추가하는 함수
function setStageArea() {
	$("body").append("<div></div>");
	$("div:last").attr("id", "circle");
	$("#circle").attr("class", "outer");
	$("#circle").append("<div></div>");
	$("div:last").attr("class", "inner");
}

// 원반 이미지를 추가하는 함수
function setCircleImg() {
	// 출발 원 이미지 추가
	$("div:last").append("<img>")
	$("img:last").attr("id", "startCircle");
	$("#startCircle").attr("class", "circle");
	$("#startCircle").attr("src", contextPath + startCircleImgPath);
	// 첫 번째 원 이미지 추가
	$("div:last").append("<img>")
	$("img:last").attr("id", "A");
	$("#A").attr("class", "circle");
	$("#A").attr("src", contextPath + circleOneImgPath);
	// 두 번째 원 이미지 추가
	$("div:last").append("<img>");
	$("img:last").attr("id", "B");
	$("#B").attr("class", "circle");
	$("#B").attr("src", contextPath + circleTwoImgPath);
	// 세 번째 원 이미지 추가
	$("div:last").append("<img>");
	$("img:last").attr("id", "C");
	$("#C").attr("class", "circle");
	$("#C").attr("src", contextPath + circleThreeImgPath);
	// 네 번째 원 이미지 추가
	$("div:last").append("<img>");
	$("img:last").attr("id", "D");
	$("#D").attr("class", "circle");
	$("#D").attr("src", contextPath + circleFourImgPath);
	// 목표 지점 원 이미지 추가
	$("div:last").append("<img>");
	$("img:last").attr("id", "finishCircle");
	$("#finishCircle").attr("class", "circle");
	$("#finishCircle").attr("src", contextPath + finishCircleImgPath);
	// 커서 이미지 추가
	$("div:last").append("<img>");
	$("img:last").attr("id", "arrow");
	$("#arrow").attr("class", "circle");
	$("#arrow").attr("src", contextPath + "/resources/img/game/common/arrow1.png");
}

// 조작 버튼을 추가하는 함수
function setControlBtn() {
	$("body").append("<div></div>");
	$("div:last").attr("id", "pack");
	$("#pack").attr("class", "outer");
	$("#pack").append("<div></div>");
	$("div:last").attr("class", "inner");
	$("div:last").append("<div></div>");
	$("div:last").append("<button>▲</button>");
	$("button").attr("onclick", "up()");
	$("#pack .inner").append("<div></div>");
	$("div:last").append("<button>◀</button>");
	$("button:last").attr("onclick", "left()");
	$("div:last").append("<button>▼</button>");
	$("button:last").attr("onclick", "down()");
	$("div:last").append("<button>▶</button>");
	$("button:last").attr("onclick", "right()");
}

// 메인 화면으로 이동하는 폼과 버튼을 추가하는 함수
function setReturnBtn() {
	$("body").append("<div></div>");
	$("div:last").attr("id", "back");
	$("#back").append("<form></form>");
	let action;
	if (stageNum > 1) action = contextPath + "/exit";
	else action = contextPath + "/main";
	$("form").attr("action", action);
	$("form").append("<input>");
	$("input:last").attr("type", "submit");
	
	let btnMsg;
	if (lang == "kr") btnMsg = "처음 화면으로";
	else if (lang == "jp") btnMsg = "トップへ戻る";
	else if (lang == "en") btnMsg = "Top Page";
	$("input:last").attr("value", btnMsg);
}

// 다음 스테이지로 이동하는 폼과 버튼을 추가하는 함수
function setNextBtn() {
	$("body").append("<div id='next'></div>");
	$("#next").append("<form id='nextForm' action='" + contextPath + "/stage" + stageNum + "_clear' method='POST'></form>");
	$("#nextForm").append("<input type='hidden' id='clearTime' name='clearTime'>");
	$("#nextForm").append("<input type='submit'>");
	let btnVal;
	if (lang == "kr") btnVal = "다음으로";
	else if (lang == "jp") btnVal = "次へ";
	else if (lang == "en") btnVal = "Next";
	$("#nextForm>input:submit").val(btnVal);
}

// 타이머에서 사용할 변수
let timerFunc = null;
let hourVal = minVal = secVal = 0;

// 타이머 값을 초기화하고 타이머를 시작하는 함수
function setTimer() {
	// 타이머 값을 초기화
	initTimerVal();
	
	timerFunc = setInterval(function() {
		if (++secVal > 59) {
			secVal = 0;
			if (++minVal > 59) {
				minVal = 0;
				++hourVal;
				$("#hour").html(hourVal < 10 ? "0" + hourVal : hourVal);
			}
			$("#min").html(minVal < 10 ? "0" + minVal : minVal);
		}
		$("#sec").html(secVal < 10 ? "0" + secVal : secVal);
	}, 1000);
}

// 타이머 값을 초기화하는 함수
function initTimerVal() {
	let playTime = parseInt($("#playTime").val());
	
	hourVal = parseInt(playTime / 3600);
	minVal = parseInt(playTime % 3600 / 60);
	secVal = playTime % 60;
	
	$("#hour").html(hourVal < 10 ? "0" + hourVal : hourVal);
	$("#min").html(minVal < 10 ? "0" + minVal : minVal);
	$("#sec").html(secVal < 10 ? "0" + secVal : secVal);
}