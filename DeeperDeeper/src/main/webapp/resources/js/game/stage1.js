// 페이지 설정 관련 변수
const stageNum = 1;

// 원 설정
let A = [ 1, 2, 5, 6, 3, 4, 7, 8 ];
let B = [ 8, 1, 2, 5, 6, 3, 4, 7 ];
let C = [ 7, 8, 1, 2, 5, 6, 3, 4 ];
let D = [ 4, 7, 8, 1, 2, 5, 6, 3 ];
let E = [ 1, 0, 0, 0, 0, 0, 0, 0 ];

function initStageImg() {
	$("#bg").attr("src", contextPath + "/resources/img/game/common/stage_bg1.png");
	$("#A").attr("src", contextPath + "/resources/img/game/demo/demo_circle1.png");
	$("#B").attr("src", contextPath + "/resources/img/game/demo/demo_circle2.png");
	$("#C").attr("src", contextPath + "/resources/img/game/demo/demo_circle3.png");
	$("#D").attr("src", contextPath + "/resources/img/game/demo/demo_circle4.png");
	$("#E").attr("src", contextPath + "/resources/img/game/common/goal_circle1.png");
}