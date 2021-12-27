// 페이지 설정 관련 변수
const stageNum = 1;

// 원반 이미지 경로
let imgPath = [
	"/resources/img/game/demo/demo_circle1.png",
	"/resources/img/game/demo/demo_circle2.png",
	"/resources/img/game/demo/demo_circle3.png",
	"/resources/img/game/demo/demo_circle4.png",
	"/resources/img/game/common/stage_bg1.png",
	"/resources/img/game/common/goal_circle1.png"
];

// 원 설정
let circles = [
	[ 1, 2, 5, 6, 3, 4, 7, 8 ],
	[ 8, 1, 2, 5, 6, 3, 4, 7 ],
	[ 7, 8, 1, 2, 5, 6, 3, 4 ],
	[ 4, 7, 8, 1, 2, 5, 6, 3 ],
	[ -1, 0, 0, 0, 0, 0, 0, 0 ]
];