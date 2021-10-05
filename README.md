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
   - 사용자가 선택한 언어 설정값을 세션에 저장하고 화면을 동적으로 표시한다.
2. 게임 방법 페이지
   - <img src="https://user-images.githubusercontent.com/42332051/136020317-7c63c6b2-894e-48b8-8dd0-36f657c8911a.png"><img src="https://user-images.githubusercontent.com/42332051/136020321-39e8163c-2c25-4ce5-b1f7-193c0ceffce0.png">
   - 게임 방법을 소개한다.
3. 게임하기 페이지
   - <img src="https://user-images.githubusercontent.com/42332051/136020304-428fce9e-bed5-4105-a9b1-278f0e44f7a7.gif">
   - 이름을 입력하고 게임을 시작한다.
   - 이름을 입력하지 않거나 10글자를 넘은 경우 알림 메시지를 표시한다.
   - 상단에 플레이 시간을 기록한다.
   - 스테이지를 클리어하면 다음 스테이지로 이동한다.
   - 모든 스테이지를 클리어하면 총 클리어 시간을 표시하고 메인 페이지로 이동할 수 있게 한다.
4. 랭킹 페이지
   - <img src="https://user-images.githubusercontent.com/42332051/136022913-d604f13c-7917-48e0-88fb-c0509262b632.png">
   - 클리어 스테이지 수, 클리어 시간 순으로 상위 10명의 기록을 표시한다.

## 게임 방법

## 게임 동작 원리
