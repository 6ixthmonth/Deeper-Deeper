// 페이지 설정 관련 변수
const stageNum = 3;

// 원 설정
let A = [ 1, 2, 7, 8, 3, 4, 7, 8 ];
let B = [ 3, 4, 9, 9, 1, 2, 9, 9 ];
let C = [ 4, 3, 4, 1, 2, 1, 2, 3 ];
let D = [ 2, 5, 6, 3, 4, 5, 6, 1 ];
let E = [ 0, 0, 0, 0, 1, 0, 0, 0 ];

function initStageImg() {
	$("#bg").attr("src", contextPath + "/resources/img/game/common/stage_bg1.png");
	$("#A").attr("src", contextPath + "/resources/img/game/stage3/stage3_circle1.png");
	$("#B").attr("src", contextPath + "/resources/img/game/stage3/stage3_circle2.png");
	$("#C").attr("src", contextPath + "/resources/img/game/stage3/stage3_circle3.png");
	$("#D").attr("src", contextPath + "/resources/img/game/stage3/stage3_circle4.png");
	$("#E").attr("src", contextPath + "/resources/img/game/common/goal_circle2.png");
}