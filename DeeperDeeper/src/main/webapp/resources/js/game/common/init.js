// 페이지 설정 관련 변수
let contextPath;
let lang;

// 초기화 함수
$(function() {
	contextPath = $("#contextPath").val();
	lang = $("#lang").val();
	
	$("#start").on("click", startFunc);
});

// START 버튼 클릭 시 실행할 함수
function startFunc() {
	// 화면에서 기존 요소들을 제거하는 함수 실행
	removeTitleAndBtn();
	
	// 화면에 게임 요소를 추가하는 함수 실행
	setGameComponent();
	
	// 돌아가기 버튼을 추가하는 함수 실행
	setTitleBtn();
	
	// 타이머 설정 함수 실행
	setTimer();
}

// 화면에서 스테이지 타이틀과 START 버튼을 제거하고 본문 영역 위치를 설정하는 함수
function removeTitleAndBtn() {
	$("h1").remove();
	$("#start").remove();
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
	
	// 스테이지 클리어 효과를 표시할 영역 추가
	setClearArea();
}

// 타이머를 표시할 영역을 추가하는 함수
function setTimerArea() {
	$(".inner").append("<div></div>");
	$("div:last").attr("id", "timer");
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
	// 조작 버튼 추가
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

// 스테이지 클리어 효과를 표시할 영역을 추가하는 함수
function setClearArea() {
	$("body").append("<div></div>");
	$("div:last").attr("id", "clear");
}

// 메인 화면으로 이동하는 폼과 버튼을 추가하는 함수
function setTitleBtn() {
	$("body").append("<div></div>");
	$("div:last").attr("id", "back");
	$("#back").append("<form></form>");
	$("form").attr("action", "main");
	$("form").append("<input>");
	$("input:last").attr("type", "submit");
	
	let btnMsg;
	if (lang == "kr") {
		btnMsg = "처음 화면으로";
	}
	if (lang == "jp") {
		btnMsg = "トップへ戻る";
	}
	if (lang == "en") {
		btnMsg = "Top Page";
	}
	$("input:last").attr("value", btnMsg);
}

// 타이머에서 사용할 변수
let timerFunc = null;

let TS = "";
let HS = "";
let MS = "";
let S2 = "";

let HH = 0;
let MM = 0;
let SS = 0;

// 타이머를 설정하는 함수
function setTimer() {
	initTimerVal();
	
	timerFunc = setInterval(function() {
		if (HH < 10) {
			HS = "0" + HH;
		} else {
			HS = HH + "";
		}
		if (MM < 10) {
			MS = "0" + MM;
		} else {
			MS = MM + "";
		}
		if (SS < 10) {
			S2 = "0" + SS;
		} else {
			S2 = SS + "";
		}
		
		TS = HS + ":" + MS + ":" + S2;
		$("#timer").html(TS);
		
		SS++;
		if (SS > 59) {
			MM++;
			SS = 0;
		}
		if (MM > 60) {
			HH++;
			MM = 0;
		}
	}, 1000);
}

function initTimerVal() {
	HS = $("#HS").val();
	MS = $("#MS").val();
	S2 = $("#SS").val();
	
	if (!HS && !MS && !S2) {
		HH = HS * 1;
		MM = MS * 1;
		SS = S2 * 1;
	}
}