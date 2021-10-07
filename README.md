# 웹 퍼즐 게임 Deeper Deeper
<img width="640" height="320" src="https://user-images.githubusercontent.com/42332051/136017134-9a4e0beb-be4c-4cfc-86ad-caec3282c486.gif">

## 개요
자바스크립트 위주로 구현한 웹 게임. 게임 화면 출력, 시간 기록, 조작, 클리어 판정 등 핵심 기능들이 모두 자바스크립트로 구현되었다.

## 개발 환경 및 사용 API
1. Back-end 및 빌드 도구
   - Java 8
   - Spring Framework 3.1.1
   - Maven(4.0.0)
2. Front-end
   - HTML5(JSP 2.1), CSS3, JavaScript, jQuery(3.6.0)
3. Database
   - Oracle Database 11g2(Express edition)
   - MyBatis(3.5.7)
4. Web App Server
   - Apache Tomcat 9.0.50

## 주요 기능
1. 메인 페이지
   - <img width="640" height="320" src="https://user-images.githubusercontent.com/42332051/136020298-b057dcfd-de64-4bba-bb4f-3708d95bc2ff.gif">
   - 메뉴 버튼을 표시하고, 사용자가 선택한 *언어 설정값을 세션에 저장*하여 **화면을 동적으로 표시**한다.
2. 게임 방법 페이지
   - <img width="640" height="320" src="https://user-images.githubusercontent.com/42332051/136384032-356b5b1d-81ab-4c33-a29c-2850693a2132.png"><img width="640" height="320" src="https://user-images.githubusercontent.com/42332051/136384038-8e1e3db3-5f97-40c6-9f2a-1a9a8990ea7e.png">
   - 게임 방법을 소개한다.
3. 게임하기 페이지
   - <img width="640" height="320" src="https://user-images.githubusercontent.com/42332051/136020304-428fce9e-bed5-4105-a9b1-278f0e44f7a7.gif">
   - START 버튼을 클릭하면 자바스크립트를 통해 게임 요소를 동적으로 추가하고 화면 상단에 플레이 시간을 기록한다.
   - *상하좌우 버튼*을 이용해서 조작할 *원반을 선택하고 회전*시킬 수 있다.
   - *모든 길을 맞춰 스테이지를 클리어*하면 다음 스테이지로 이동할 수 있는 버튼을 표시한다.
4. 랭킹 페이지
   - <img src="https://user-images.githubusercontent.com/42332051/136022913-d604f13c-7917-48e0-88fb-c0509262b632.png">
   - 클리어 스테이지 수, 클리어 시간 순으로 상위 10명의 기록을 표시한다.

## 게임 동작 원리
1. **스테이지 구조**
   - *하나의 원반*은 **4개의 검은색 길 모양**이 그려져 있으며, *하나의 길*은 **좌우 한쌍의 길 조각**으로 구성된다. 따라서, *하나의 원반*은 **8개의 길 조각**으로 구성된다.
   - *각각의 길 조각*에 **고유의 값**을 부여한다. ( ┗┓ 1 2 // ┏┛ 3 4 // ┗┛ 5 6 // ┏┓ 7 8 )
   - 원반에 표시된 각각의 길 조각 값을 12시 방향부터 시계 방향 순서로 배열에 저장한다.
   - 예1)<img src="https://user-images.githubusercontent.com/42332051/136029643-effb446f-7a58-41eb-bedf-3f8cae418d2c.png">이 원반은 [1, 2, 5, 6, 3, 4, 7, 8]로 표현된다.
   - 예2)<img src="https://user-images.githubusercontent.com/42332051/136030476-aa6bf96c-0f09-48ea-afc6-d0df795fcf62.png">이 원반은 [4, 7, 8, 1, 2, 5, 6, 3]으로 표현된다.
   - 가장 중심의 목표 지점 원반까지 포함하여 **총 5개의 배열**을 차례대로 저장한다.
2. **원반 조작**
   - *상하 버튼*을 클릭하거나 키보드 *상하 화살표키*를 입력하면, 커서 이미지를 알맞게 바꾸고 **현재 선택 중인 원반의 번호** 값을 **증가/감소**시킨다.
   - *좌우 버튼*을 클릭하거나 키보드 *좌우 화살표키*를 입력하면, 원반의 이미지를 방향에 맞게 회전시키고 해당 **배열의 값을 회전한 만큼 한 칸씩 재설정**한다.
   - 예) [1, 2, 5, 6, 3, 4, 7, 8] => [2, 5, 6, 3, 4, 7, 8, 1]
3. **클리어 판정**
   - 가장 바깥쪽 원반의 12시 방향 길 조각부터 시작해서, 길 조각 값을 이용하여 스테이지 클리어 여부를 **재귀적으로** 판정한다(gameLogic.js 파일 check() 함수).
## 비고
1. 모든 이미지는 직접 제작하였음.
2. 조작 시 재생되는 사운드는 오픈 소스를 사용하였음.
