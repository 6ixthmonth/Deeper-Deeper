// 스테이지 클리어 여부 판정에 사용할 변수
let x = 1;
let y = 0;
let z = 0;

// 스테이지 클리어 설정에 사용할 변수
let stageCleared = false;
let effectDeg = 0;

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