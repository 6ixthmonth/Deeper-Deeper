// 키보드 입력 이벤트를 설정하는 함수
function setKeyupEvent() {
	$(document).keyup(function(e) {
		switch (e.keyCode) {
			case 37: left(); break;
			case 38: up(); break;
			case 39: right(); break;
			case 40: down(); break;
		}
	});
}

// up, down 함수에 사용할 변수
let selectedCircleNumber = 0;
let arrowImgPath = [
	"/resources/img/game/common/arrow1.png",
	"/resources/img/game/common/arrow2.png",
	"/resources/img/game/common/arrow3.png",
	"/resources/img/game/common/arrow4.png"
];

function up() {
	if (selectedCircleNumber > 0) {
		selectedCircleNumber--;
		$("#arrow").attr("src", contextPath + arrowImgPath[selectedCircleNumber]);
		new Audio(contextPath + "/resources/audio/updown.wav").play();
	}
}

function down() {
	if (selectedCircleNumber < 3) {
		selectedCircleNumber++;
		$("#arrow").attr("src", contextPath + arrowImgPath[selectedCircleNumber]);
		new Audio(contextPath + "/resources/audio/updown.wav").play();
	}
}

// left, right 함수에 사용할 변수
let rotateFunc = null;
let rotateDeg = 0;
let circleIdList = ["A", "B", "C", "D"];
let circleDegList = [0, 0, 0, 0];

function left() {
	if (!rotateFunc) {
		var temp = circles[selectedCircleNumber][0];
		for (var i = 0; i < 7; i++) {
			circles[selectedCircleNumber][i] = circles[selectedCircleNumber][i + 1];
		}
		circles[selectedCircleNumber][7] = temp;
		
		rotateFunc = setInterval(function() {
			circleDegList[selectedCircleNumber]--;
			$("#" + circleIdList[selectedCircleNumber]).css({
				"-webkit-transform" : "rotate(" + circleDegList[selectedCircleNumber] + "deg)",
				"-moz-transform" : "rotate(" + circleDegList[selectedCircleNumber] + "deg)",
				"-ms-transform" : "rotate(" + circleDegList[selectedCircleNumber] + "deg)",
				"-o-transform" : "rotate(" + circleDegList[selectedCircleNumber] + "deg)",
				"transform" : "rotate(" + circleDegList[selectedCircleNumber] + "deg)"
			});
			if (++rotateDeg >= 45) {
				clearInterval(rotateFunc);
				rotateFunc = null;
				rotateDeg = 0;
			}
		}, 4 - selectedCircleNumber);
		
		new Audio(contextPath + "/resources/audio/left.wav").play();
		
		if (isCleared(0, 0, 0)) clear();
	}
}

function right() {
	if (!rotateFunc) {
		var temp = circles[selectedCircleNumber][7];
		for (var i = 7; i > 0; i--) {
			circles[selectedCircleNumber][i] = circles[selectedCircleNumber][i - 1];
		}
		circles[selectedCircleNumber][0] = temp;
		
		rotateFunc = setInterval(function() {
			circleDegList[selectedCircleNumber]++;
			$("#" + circleIdList[selectedCircleNumber]).css({
				"-webkit-transform" : "rotate(" + circleDegList[selectedCircleNumber] + "deg)",
				"-moz-transform" : "rotate(" + circleDegList[selectedCircleNumber] + "deg)",
				"-ms-transform" : "rotate(" + circleDegList[selectedCircleNumber] + "deg)",
				"-o-transform" : "rotate(" + circleDegList[selectedCircleNumber] + "deg)",
				"transform" : "rotate(" + circleDegList[selectedCircleNumber] + "deg)"
			});
			if (++rotateDeg >= 45) {
				clearInterval(rotateFunc);
				rotateFunc = null;
				rotateDeg = 0;
			}
		}, 4 - selectedCircleNumber);
		
		new Audio(contextPath + "/resources/audio/right.wav").play();
		
		if (isCleared(0, 0, 0)) clear();
	}
}