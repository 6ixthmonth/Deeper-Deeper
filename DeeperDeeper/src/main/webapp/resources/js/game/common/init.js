// 페이지 설정 관련 변수
let contextPath;
let lang;

// 초기화 함수
$(function() {
	contextPath = $("#contextPath").val();
	lang = $("#lang").val();
	
	$("#start").on("click", startFunc);
});

function startFunc() {
	// start 버튼 제거
	$("h1").remove();
	$("#start").remove();
	$("#title").css("top", "20px");
	
	// 타이머를 표시할 영역 추가
	$(".inner").append("<div></div>");
	$("div:last").attr("id", "timer");
	
	// 스테이지 이미지를 표시할 영역 추가
	$("body").append("<div></div>");
	$("div:last").attr("id", "circle");
	$("#circle").attr("class", "outer");
	$("#circle").append("<div></div>");
	$("div:last").attr("class", "inner");
	
	// 백그라운드 이미지 태그 추가
	$("div:last").append("<img>")
	$("img:last").attr("id", "bg");
	$("img:last").attr("class", "circle");
	// 첫 번째 원 이미지 태그 추가
	$("div:last").append("<img>")
	$("img:last").attr("id", "A");
	$("#A").attr("class", "circle");
	// 두 번째 원 이미지 태그 추가
	$("div:last").append("<img>");
	$("img:last").attr("id", "B");
	$("#B").attr("class", "circle");
	// 세 번째 원 이미지 태그 추가
	$("div:last").append("<img>");
	$("img:last").attr("id", "C");
	$("#C").attr("class", "circle");
	// 네 번째 원 이미지 태그 추가
	$("div:last").append("<img>");
	$("img:last").attr("id", "D");
	$("#D").attr("class", "circle");
	// 마지막 원 이미지 태그 추가
	$("div:last").append("<img>");
	$("img:last").attr("id", "E");
	$("#E").attr("class", "circle");
	// 커서 이미지 추가
	$("div:last").append("<img>");
	$("img:last").attr("id", "arrow");
	$("#arrow").attr("class", "circle");
	$("#arrow").attr("src", contextPath + "/resources/img/game/common/arrow1.png");
	
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
	
	// 스테이지 클리어 효과를 표시할 영역 추가
	$("body").append("<div></div>");
	$("div:last").attr("id", "clear");
	
	// 메인 화면 이동 폼&버튼 추가
	$("body").append("<div></div>");
	$("div:last").attr("id", "back");
	$("#back").append("<form></form>");
	$("form").attr("action", "main");
	$("form").append("<input>");
	$("input:last").attr("type", "submit");
	if (lang == "kr") {
		$("input:last").attr("value", "처음 화면으로");
	}
	if (lang == "jp") {
		$("input:last").attr("value", "トップへ戻る");
	}
	if (lang == "en") {
		$("input:last").attr("value", "Top Page");
	}
	
	// 스테이지 이미지 설정 함수 시작
	initStageImg();
	// 타이머 함수 시작
	setTimer();
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
	
	if (HS != undefined && MS != undefined && S2 != undefined) {
		HH = HS * 1;
		MM = MS * 1;
		SS = S2 * 1;
	}
}