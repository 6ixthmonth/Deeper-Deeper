// 조작에 사용할 변수
let selectedCircleNumber = 1;
let rotateFunc = null;
let rotateDeg = circle1Deg = circle2Deg = circle3Deg = circle4Deg = 0;

$(document).keyup(function(e) {
	if (timerFunc) {
		if (e.keyCode == '37') {
			left();
		}
		if (e.keyCode == '38') {
			up();
		}
		if (e.keyCode == '39') {
			right();
		}
		if (e.keyCode == '40') {
			down();
		}
	}
})

function up() {
	if (selectedCircleNumber > 1) {
		selectedCircleNumber--;
		switch (selectedCircleNumber) {
		case 1:
			$("#arrow").attr("src", contextPath + "/resources/img/game/common/arrow1.png");
			break;
		case 2:
			$("#arrow").attr("src", contextPath + "/resources/img/game/common/arrow2.png");
			break;
		case 3:
			$("#arrow").attr("src", contextPath + "/resources/img/game/common/arrow3.png");
			break;
		case 4:
			$("#arrow").attr("src", contextPath + "/resources/img/game/common/arrow4.png");
			break;
		}
		new Audio(contextPath + "/resources/audio/updown.wav").play();
	}
}

function down() {
	if (selectedCircleNumber < 4) {
		selectedCircleNumber++;
		switch (selectedCircleNumber) {
		case 1:
			$("#arrow").attr("src", contextPath + "/resources/img/game/common/arrow1.png");
			break;
		case 2:
			$("#arrow").attr("src", contextPath + "/resources/img/game/common/arrow2.png");
			break;
		case 3:
			$("#arrow").attr("src", contextPath + "/resources/img/game/common/arrow3.png");
			break;
		case 4:
			$("#arrow").attr("src", contextPath + "/resources/img/game/common/arrow4.png");
			break;
		}
		new Audio(contextPath + "/resources/audio/updown.wav").play();
	}
}

function left() {
	if (!rotateFunc) {
		var temp = 0;
		
		switch (selectedCircleNumber) {
		case 1:
			temp = A[0];
			for (var i = 0; i < 7; i++) {
				A[i] = A[i + 1];
			}
			A[7] = temp;
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
		case 2:
			temp = B[0];
			for (var j = 0; j < 7; j++) {
				B[j] = B[j + 1];
			}
			B[7] = temp;
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
		case 3:
			temp = C[0];
			for (var k = 0; k < 7; k++) {
				C[k] = C[k + 1];
			}
			C[7] = temp;
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
		case 4:
			temp = D[0];
			for (var l = 0; l < 7; l++) {
				D[l] = D[l + 1];
			}
			D[7] = temp;
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
		var temp = 0;
		
		switch (selectedCircleNumber) {
		case 1:
			temp = A[7];
			for (var i = 7; i > 0; i--) {
				A[i] = A[i - 1];
			}
			A[0] = temp;
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
			}, 5);
			break;
		case 2:
			temp = B[7];
			for (var j = 7; j > 0; j--) {
				B[j] = B[j - 1];
			}
			B[0] = temp;
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
			}, 5);
			break;
		case 3:
			temp = C[7];
			for (var k = 7; k > 0; k--) {
				C[k] = C[k - 1];
			}
			C[0] = temp;
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
			}, 5);
			break;
		case 4:
			temp = D[7];
			for (var l = 7; l > 0; l--) {
				D[l] = D[l - 1];
			}
			D[0] = temp;
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
			}, 5);
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