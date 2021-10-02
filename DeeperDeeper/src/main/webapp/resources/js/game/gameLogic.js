// 조작에 사용할 변수
var selectedCircleNumber = 1;
var rotateFunc = null;
var rotateDeg = circle1Deg = circle2Deg = circle3Deg = circle4Deg = 0;


// 스테이지 클리어 여부 판정에 사용할 변수
var x = 1;
var y = 0;
var z = 0;


// 스테이지 클리어 설정에 사용할 변수
var stageCleared = false;
var effectDeg = 0;


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

function check() {
	switch (x) {
	case 1:
		switch (A[y]) {
		case 1:
			switch (z) {
			case 0:
				x++;
				y++;
				if (y > 7) {
					y = 0;
				}
				break;
			case 1:
				return 0;
			}
			break;
		case 2:
			switch (z) {
			case 0:
				return 0;
			case 1:
				x--;
				y--;
				if (y < 0) {
					y = 7;
				}
				break;
			}
			break;
		case 3:
			switch (z) {
			case 0:
				return 0;
			case 1:
				x--;
				y++;
				if (y > 7) {
					y = 0;
				}
				break;
			}
			break;
		case 4:
			switch (z) {
			case 0:
				x++;
				y--;
				if (y < 0) {
					y = 7;
				}
				break;
			case 1:
				
				return 0;
			}
			break;
		case 5:
			switch (z) {
			case 0:
				x--;
				y++;
				if (y > 7) {
					y = 0;
				}
				z = 1;
				break;
			case 1:
				return 0;
			}
			break;
		case 6:
			switch (z) {
			case 0:
				x--;
				y--;
				if (y < 0) {
					y = 7;
				}
				z = 1;
				break;
			case 1:
				return 0;
			}
			break;
		case 7:
			switch (z) {
			case 0:
				return 0;
			case 1:
				x++;
				y++;
				if (y > 7) {
					y = 0;
				}
				z = 0;
				break;
			}
			break;
		case 8:
			switch (z) {
			case 0:
				return 0;
			case 1:
				x++;
				y--;
				if (y < 0) {
					y = 7;
				}
				z = 0;
				break;
			}
			break;
		case 9:
			switch (z) {
			case 0:
				x++;
				break;
			case 1:
				x--;
				break;
			}
			break;
		default:
			return 0;
		}
		break;
	case 2:
		switch (B[y]) {
		case 1:
			switch (z) {
			case 0:
				x++;
				y++;
				if (y > 7) {
					y = 0;
				}
				break;
			case 1:
				return 0;
			}
			break;
		case 2:
			switch (z) {
			case 0:
				return 0;
			case 1:
				x--;
				y--;
				if (y < 0) {
					y = 7;
				}
				break;
			}
			break;
		case 3:
			switch (z) {
			case 0:
				return 0;
			case 1:
				x--;
				y++;
				if (y > 7) {
					y = 0;
				}
				break;
			}
			break;
		case 4:
			switch (z) {
			case 0:
				x++;
				y--;
				if (y < 0) {
					y = 7;
				}
				break;
			case 1:
				
				return 0;
			}
			break;
		case 5:
			switch (z) {
			case 0:
				x--;
				y++;
				if (y > 7) {
					y = 0;
				}
				z = 1;
				break;
			case 1:
				return 0;
			}
			break;
		case 6:
			switch (z) {
			case 0:
				x--;
				y--;
				if (y < 0) {
					y = 7;
				}
				z = 1;
				break;
			case 1:
				return 0;
			}
			break;
		case 7:
			switch (z) {
			case 0:
				return 0;
			case 1:
				x++;
				y++;
				if (y > 7) {
					y = 0;
				}
				z = 0;
				break;
			}
			break;
		case 8:
			switch (z) {
			case 0:
				return 0;
			case 1:
				x++;
				y--;
				if (y < 0) {
					y = 7;
				}
				z = 0;
				break;
			}
			break;
		case 9:
			switch (z) {
			case 0:
				x++;
				break;
			case 1:
				x--;
				break;
			}
			break;
		default:
			return 0;
		}
		break;
	case 3:
		switch (C[y]) {
		case 1:
			switch (z) {
			case 0:
				x++;
				y++;
				if (y > 7) {
					y = 0;
				}
				break;
			case 1:
				return 0;
			}
			break;
		case 2:
			switch (z) {
			case 0:
				return 0;
			case 1:
				x--;
				y--;
				if (y < 0) {
					y = 7;
				}
				break;
			}
			break;
		case 3:
			switch (z) {
			case 0:
				return 0;
			case 1:
				x--;
				y++;
				if (y > 7) {
					y = 0;
				}
				break;
			}
			break;
		case 4:
			switch (z) {
			case 0:
				x++;
				y--;
				if (y < 0) {
					y = 7;
				}
				break;
			case 1:
				
				return 0;
			}
			break;
		case 5:
			switch (z) {
			case 0:
				x--;
				y++;
				if (y > 7) {
					y = 0;
				}
				z = 1;
				break;
			case 1:
				return 0;
			}
			break;
		case 6:
			switch (z) {
			case 0:
				x--;
				y--;
				if (y < 0) {
					y = 7;
				}
				z = 1;
				break;
			case 1:
				return 0;
			}
			break;
		case 7:
			switch (z) {
			case 0:
				return 0;
			case 1:
				x++;
				y++;
				if (y > 7) {
					y = 0;
				}
				z = 0;
				break;
			}
			break;
		case 8:
			switch (z) {
			case 0:
				return 0;
			case 1:
				x++;
				y--;
				if (y < 0) {
					y = 7;
				}
				z = 0;
				break;
			}
			break;
		case 9:
			switch (z) {
			case 0:
				x++;
				break;
			case 1:
				x--;
				break;
			}
			break;
		default:
			return 0;
		}
		break;
	case 4:
		switch (D[y]) {
		case 1:
			switch (z) {
			case 0:
				x++;
				y++;
				if (y > 7) {
					y = 0;
				}
				break;
			case 1:
				return 0;
			}
			break;
		case 2:
			switch (z) {
			case 0:
				return 0;
			case 1:
				x--;
				y--;
				if (y < 0) {
					y = 7;
				}
				break;
			}
			break;
		case 3:
			switch (z) {
			case 0:
				return 0;
			case 1:
				x--;
				y++;
				if (y > 7) {
					y = 0;
				}
				break;
			}
			break;
		case 4:
			switch (z) {
			case 0:
				x++;
				y--;
				if (y < 0) {
					y = 7;
				}
				break;
			case 1:
				
				return 0;
			}
			break;
		case 5:
			switch (z) {
			case 0:
				x--;
				y++;
				if (y > 7) {
					y = 0;
				}
				z = 1;
				break;
			case 1:
				return 0;
			}
			break;
		case 6:
			switch (z) {
			case 0:
				x--;
				y--;
				if (y < 0) {
					y = 7;
				}
				z = 1;
				break;
			case 1:
				return 0;
			}
			break;
		case 7:
			switch (z) {
			case 0:
				return 0;
			case 1:
				x++;
				y++;
				if (y > 7) {
					y = 0;
				}
				z = 0;
				break;
			}
			break;
		case 8:
			switch (z) {
			case 0:
				return 0;
			case 1:
				x++;
				y--;
				if (y < 0) {
					y = 7;
				}
				z = 0;
				break;
			}
			break;
		case 9:
			switch (z) {
			case 0:
				x++;
				break;
			case 1:
				x--;
				break;
			}
			break;
		default:
			return 0;
		}
		break;
	case 5:
		switch (E[y]) {
		case 1:
			return 1;
		default:
			return 0;
		}
	default:
		return 0;
	}
	
	return check();
}

function reset() {
	x = 1;
	y = 0;
	z = 0;
}

function clear() {
	if (!stageCleared) {
		clearInterval(timerFunc);
		
		$("#circle div").append("<img>");
		$("img:last").attr("id", "clearEffect");
		$("#clearEffect").attr("class", "circle");
		$("#clearEffect").attr("src", contextPath + "/resources/img/game/common/clear_circle.png");
		setInterval(function() {
			effectDeg++;
			$("#clearEffect").css({
				"-webkit-transform" : "rotate(" + effectDeg + "deg)",
				"-moz-transform" : "rotate(" + effectDeg + "deg)",
				"-ms-transform" : "rotate(" + effectDeg + "deg)",
				"-o-transform" : "rotate(" + effectDeg + "deg)",
				"transform" : "rotate(" + effectDeg + "deg)"
			});
		}, 100);
		
		$("#clear").append("<form id='clearForm' action='stage" + stageNum + "_clear' method='POST'></form>");
		$("#clearForm").append("<input type='hidden' name='clearTime' value='" + TS + "'>");
		if (lang == "kr") {
			$("#clearForm").append("<input type='submit' value='다음으로'>");
			/*alert("스테이지 클리어!\n클리어 시간 : " + TS);*/
		}
		if (lang == "jp") {
			$("#clearForm").append("<input type='submit' value='次へ'>");
			/*alert("ステージクリア!\nクリア時間 : " + TS);*/
		}
		if (lang == "en") {
			$("#clearForm").append("<input type='submit' value='Next'>");
			/*alert("Stage Clear!\nClear Time : " + TS);*/
		}
		
		new Audio(contextPath + "/resources/audio/clear.wav").play();
		
		stageCleared = true;
	}
	
	reset();
}