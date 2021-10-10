// 페이지 설정 관련 변수
const stageNum = 2;

// 원 설정
let A = [ 4, 7, 8, 7, 8, 7, 8, 3 ];
let B = [ 5, 6, 5, 6, 5, 6, 3, 4 ];
let C = [ 8, 7, 8, 7, 8, 3, 4, 7 ];
let D = [ 5, 6, 5, 6, 3, 4, 5, 6 ];
let E = [ 1, 0, 0, 0, 0, 0, 0, 0 ];

function initStageImg() {
	$("#bg").attr("src", contextPath + "/resources/img/game/common/stage_bg1.png");
	$("#A").attr("src", contextPath + "/resources/img/game/stage2/stage2_circle1.png");
	$("#B").attr("src", contextPath + "/resources/img/game/stage2/stage2_circle2.png");
	$("#C").attr("src", contextPath + "/resources/img/game/stage2/stage2_circle3.png");
	$("#D").attr("src", contextPath + "/resources/img/game/stage2/stage2_circle4.png");
	$("#E").attr("src", contextPath + "/resources/img/game/common/goal_circle1.png");
}