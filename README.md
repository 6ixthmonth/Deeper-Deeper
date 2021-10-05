# 웹 퍼즐 게임 DeeperDeeper
<img src="https://user-images.githubusercontent.com/42332051/136017134-9a4e0beb-be4c-4cfc-86ad-caec3282c486.gif">

## 개요
자바스크립트 위주로 구현한 웹 게임

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
   - <img src="https://user-images.githubusercontent.com/42332051/136020298-b057dcfd-de64-4bba-bb4f-3708d95bc2ff.gif">
   - 메뉴 버튼을 표시한다.
   - 사용자가 선택한 *언어 설정값을 세션에 저장*하고 **화면을 동적으로 표시**한다.
2. 게임 방법 페이지
   - <img src="https://user-images.githubusercontent.com/42332051/136020317-7c63c6b2-894e-48b8-8dd0-36f657c8911a.png"><img src="https://user-images.githubusercontent.com/42332051/136020321-39e8163c-2c25-4ce5-b1f7-193c0ceffce0.png">
   - 게임 방법을 소개한다.
3. 게임하기 페이지
   - <img src="https://user-images.githubusercontent.com/42332051/136020304-428fce9e-bed5-4105-a9b1-278f0e44f7a7.gif">
   - 이름을 입력하고 게임을 시작한다.
   - 이름을 입력하지 않았거나 10글자를 넘은 경우 알림 메시지를 표시한다.
   - START 버튼을 클릭하면 화면 상단에 플레이 시간을 기록한다.
   - *상하좌우 버튼을 이용해서 조작할 원반을 선택하고 회전*시킬 수 있다.
   - 원반이 회전하는 중에 다시 조작을 가해도 행동이 추가로 입력되지 않고 이전 동작을 마저 수행한다.
   - *모든 길을 맞춰 스테이지를 클리어*하면 다음 스테이지로 이동할 수 있는 버튼을 표시한다.
   - 스테이지 클리어 후에도 원반을 조작할 수 있지만 클리어 판정이 다시 표시되지 않는다.
   - 모든 스테이지를 클리어하면 총 클리어 시간을 표시하고 메인 페이지로 이동할 수 있는 버튼을 표시한다.
4. 랭킹 페이지
   - <img src="https://user-images.githubusercontent.com/42332051/136022913-d604f13c-7917-48e0-88fb-c0509262b632.png">
   - 클리어 스테이지 수, 클리어 시간 순으로 상위 10명의 기록을 표시한다.

## 게임 동작 원리
1. **스테이지 구조**
   - *하나의 원반*은 **4개의 검은색 길 모양**이 그려져 있으며, *하나의 길*은 **좌우 한쌍의 길 조각**으로 구성되어 있다.
   - *각각의 길 조각*에 **고유의 값**을 부여한다. ( ┗┓ 1 2 // ┏┛ 3 4 // ┗┛ 5 6 // ┏┓ 7 8 )
   - 따라서, *하나의 원반*은 **8개의 길 조각**으로 구성되어 있으며, 원반이 가지고 있는 각각의 길 조각 값을 12시 방향부터 시계 방향 순서로 배열에 저장한다.
   - 예1)<img src="https://user-images.githubusercontent.com/42332051/136029643-effb446f-7a58-41eb-bedf-3f8cae418d2c.png">이 원반은 [1, 2, 5, 6, 3, 4, 7, 8]로 표현된다.
   - 예2)<img src="https://user-images.githubusercontent.com/42332051/136030476-aa6bf96c-0f09-48ea-afc6-d0df795fcf62.png">이 원반은 [4, 7, 8, 1, 2, 5, 6, 3]으로 표현된다.
   - 이러한 원반을 스테이지마다 4개씩, 가장 중심의 목표 지점 원반까지 포함하여 **총 5개의 배열을 저장**한다.
2. **원반 조작**
3. **클리어 판정**
