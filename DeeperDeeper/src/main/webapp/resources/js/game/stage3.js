// 페이지 설정 관련 변수
var stageNum = 3;
var contextPath;
var lang;


// 타이머에서 사용할 변수
var timerFunc = null;

var TS = "";
var HS = "";
var MS = "";
var S2 = "";

var HH = 0;
var MM = 0;
var SS = 0;


// 초기화 함수
$(function() {
	contextPath = $("#contextPath").val();
	lang = $("#lang").val();
	
	HS = $("#HS").val();
	MS = $("#MS").val();
	S2 = $("#SS").val();
	
	HH = HS * 1;
	MM = MS * 1;
	SS = S2 * 1;
	
	$("#start").on("click", startFunc);
});

function startFunc() {
	$("h1").remove();
	$("#start").remove();
	$("#title").css("top", "20px");
	
	$(".inner").append("<div></div>");
	$("div:last").attr("id", "timer");
	
	$("body").append("<div></div>");
	$("div:last").attr("id", "circle");
	$("#circle").attr("class", "outer");
	$("#circle").append("<div></div>");
	$("div:last").attr("class", "inner");
	
	// 백그라운드 이미지 추가
	$("div:last").append("<img>")
	$("img:last").attr("class", "circle");
	$("img:last").attr("src", contextPath + "/resources/img/game/common/stage_bg1.png");
	// 첫 번째 원 이미지 추가
	$("div:last").append("<img>")
	$("img:last").attr("id", "A");
	$("#A").attr("class", "circle");
	$("#A").attr("src", contextPath + "/resources/img/game/stage3/stage3_circle1.png");
	// 두 번째 원 이미지 추가
	$("div:last").append("<img>");
	$("img:last").attr("id", "B");
	$("#B").attr("class", "circle");
	$("#B").attr("src", contextPath + "/resources/img/game/stage3/stage3_circle2.png");
	// 세 번째 원 이미지 추가
	$("div:last").append("<img>");
	$("img:last").attr("id", "C");
	$("#C").attr("class", "circle");
	$("#C").attr("src", contextPath + "/resources/img/game/stage3/stage3_circle3.png");
	// 네 번째 원 이미지 추가
	$("div:last").append("<img>");
	$("img:last").attr("id", "D");
	$("#D").attr("class", "circle");
	$("#D").attr("src", contextPath + "/resources/img/game/stage3/stage3_circle4.png");
	// 마지막 원 이미지 추가
	$("div:last").append("<img>");
	$("img:last").attr("id", "E");
	$("#E").attr("class", "circle");
	$("#E").attr("src", contextPath + "/resources/img/game/common/goal_circle2.png");
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
	
	$("body").append("<div></div>");
	$("div:last").attr("id", "clear");
	
	$("body").append("<div></div>");
	$("div:last").attr("id", "back");
	$("#back").append("<form></form>");
	$("form").attr("action", "exit");
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
	
	// 타이머 함수 시작
	setTimer();
}

function setTimer() {
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


// 원 설정
var A = [ 1, 2, 7, 8, 3, 4, 7, 8 ];
var B = [ 3, 4, 9, 9, 1, 2, 9, 9 ];
var C = [ 4, 3, 4, 1, 2, 1, 2, 3 ];
var D = [ 2, 5, 6, 3, 4, 5, 6, 1 ];
var E = [ 0, 0, 0, 0, 1, 0, 0, 0 ];