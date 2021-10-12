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
let rotateDeg = circle1Deg = circle2Deg = circle3Deg = circle4Deg = 0;

function left() {
	if (!rotateFunc) {
		var temp = circles[selectedCircleNumber][0];
		for (var i = 0; i < 7; i++) {
			circles[selectedCircleNumber][i] = circles[selectedCircleNumber][i + 1];
		}
		circles[selectedCircleNumber][7] = temp;
		
		switch (selectedCircleNumber) {
		case 0:
			rotateFunc = setInterval(function() {
				circle1Deg--;
				$("#A").css({
					"-webkit-transform" : "rotate(" + circle1Deg + "deg)",
					"-moz-transform" : "rotate(" + circle1Deg + "deg)",
					"-ms-transform" : "rotate(" + circle1Deg + "deg)",
					"-o-transform" : "rotate(" + circle1Deg + "deg)",
					"transform" : "rotate(" + circle1Deg + "deg)"
				});
				if (++rotateDeg >= 45) {
					clearInterval(rotateFunc);
					rotateFunc = null;
					rotateDeg = 0;
				}
			}, 4);
			break;
		case 1:
			rotateFunc = setInterval(function() {
				circle2Deg--;
				$("#B").css({
					"-webkit-transform" : "rotate(" + circle2Deg + "deg)",
					"-moz-transform" : "rotate(" + circle2Deg + "deg)",
					"-ms-transform" : "rotate(" + circle2Deg + "deg)",
					"-o-transform" : "rotate(" + circle2Deg + "deg)",
					"transform" : "rotate(" + circle2Deg + "deg)"
				});
				if (++rotateDeg >= 45) {
					clearInterval(rotateFunc);
					rotateFunc = null;
					rotateDeg = 0;
				}
			}, 3);
			break;
		case 2:
			rotateFunc = setInterval(function() {
				circle3Deg--;
				$("#C").css({
					"-webkit-transform" : "rotate(" + circle3Deg + "deg)",
					"-moz-transform" : "rotate(" + circle3Deg + "deg)",
					"-ms-transform" : "rotate(" + circle3Deg + "deg)",
					"-o-transform" : "rotate(" + circle3Deg + "deg)",
					"transform" : "rotate(" + circle3Deg + "deg)"
				});
				if (++rotateDeg >= 45) {
					clearInterval(rotateFunc);
					rotateFunc = null;
					rotateDeg = 0;
				}
			}, 2);
			break;
		case 3:
			rotateFunc = setInterval(function() {
				circle4Deg--;
				$("#D").css({
					"-webkit-transform" : "rotate(" + circle4Deg + "deg)",
					"-moz-transform" : "rotate(" + circle4Deg + "deg)",
					"-ms-transform" : "rotate(" + circle4Deg + "deg)",
					"-o-transform" : "rotate(" + circle4Deg + "deg)",
					"transform" : "rotate(" + circle4Deg + "deg)"
				});
				if (++rotateDeg >= 45) {
					clearInterval(rotateFunc);
					rotateFunc = null;
					rotateDeg = 0;
				}
			}, 1);
			break;
		}
		new Audio(contextPath + "/resources/audio/left.wav").play();

		switch (check()) {
		case 0:
			reset();
			break;
		case 1:
			clear();
			break;
		}
	}
}

function right() {
	if (!rotateFunc) {
		var temp = circles[selectedCircleNumber][7];
		for (var i = 7; i > 0; i--) {
			circles[selectedCircleNumber][i] = circles[selectedCircleNumber][i - 1];
		}
		circles[selectedCircleNumber][0] = temp;
		
		switch (selectedCircleNumber) {
		case 0:
			rotateFunc = setInterval(function() {
				circle1Deg++;
				$("#A").css({
					"-webkit-transform" : "rotate(" + circle1Deg + "deg)",
					"-moz-transform" : "rotate(" + circle1Deg + "deg)",
					"-ms-transform" : "rotate(" + circle1Deg + "deg)",
					"-o-transform" : "rotate(" + circle1Deg + "deg)",
					"transform" : "rotate(" + circle1Deg + "deg)"
				});
				if (++rotateDeg >= 45) {
					clearInterval(rotateFunc);
					rotateFunc = null;
					rotateDeg = 0;
				}
			}, 4);
			break;
		case 1:
			rotateFunc = setInterval(function() {
				circle2Deg++;
				$("#B").css({
					"-webkit-transform" : "rotate(" + circle2Deg + "deg)",
					"-moz-transform" : "rotate(" + circle2Deg + "deg)",
					"-ms-transform" : "rotate(" + circle2Deg + "deg)",
					"-o-transform" : "rotate(" + circle2Deg + "deg)",
					"transform" : "rotate(" + circle2Deg + "deg)"
				});
				if (++rotateDeg >= 45) {
					clearInterval(rotateFunc);
					rotateFunc = null;
					rotateDeg = 0;
				}
			}, 3);
			break;
		case 2:
			rotateFunc = setInterval(function() {
				circle3Deg++;
				$("#C").css({
					"-webkit-transform" : "rotate(" + circle3Deg + "deg)",
					"-moz-transform" : "rotate(" + circle3Deg + "deg)",
					"-ms-transform" : "rotate(" + circle3Deg + "deg)",
					"-o-transform" : "rotate(" + circle3Deg + "deg)",
					"transform" : "rotate(" + circle3Deg + "deg)"
				});
				if (++rotateDeg >= 45) {
					clearInterval(rotateFunc);
					rotateFunc = null;
					rotateDeg = 0;
				}
			}, 2);
			break;
		case 3:
			rotateFunc = setInterval(function() {
				circle4Deg++;
				$("#D").css({
					"-webkit-transform" : "rotate(" + circle4Deg + "deg)",
					"-moz-transform" : "rotate(" + circle4Deg + "deg)",
					"-ms-transform" : "rotate(" + circle4Deg + "deg)",
					"-o-transform" : "rotate(" + circle4Deg + "deg)",
					"transform" : "rotate(" + circle4Deg + "deg)"
				});
				if (++rotateDeg >= 45) {
					clearInterval(rotateFunc);
					rotateFunc = null;
					rotateDeg = 0;
				}
			}, 1);
			break;
		}
		new Audio(contextPath + "/resources/audio/right.wav").play();

		switch (check()) {
		case 0:
			reset();
			break;
		case 1:
			clear();
			break;
		}
	}
}