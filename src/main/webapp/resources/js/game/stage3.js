// 페이지 설정 관련 변수
const stageNum = 3;

// 원반 이미지 경로
let imgPath = [
	"/resources/img/game/stage3/stage3_circle1.png",
	"/resources/img/game/stage3/stage3_circle2.png",
	"/resources/img/game/stage3/stage3_circle3.png",
	"/resources/img/game/stage3/stage3_circle4.png",
	"/resources/img/game/common/stage_bg1.png",
	"/resources/img/game/common/goal_circle2.png"
];

// 원 설정
let circles = [
	[ 1, 2, 7, 8, 3, 4, 7, 8 ],
	[ 3, 4, 9, 9, 1, 2, 9, 9 ],
	[ 4, 3, 4, 1, 2, 1, 2, 3 ],
	[ 2, 5, 6, 3, 4, 5, 6, 1 ],
	[ 0, 0, 0, 0, -1, 0, 0, 0 ]
];