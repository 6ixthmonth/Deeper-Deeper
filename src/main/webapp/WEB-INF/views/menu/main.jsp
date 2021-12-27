<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
	<title>
		<c:if test="${lang eq 'kr'}">
			메인
		</c:if>
		<c:if test="${lang eq 'jp'}">
			トップ
		</c:if>
		<c:if test="${lang eq 'en'}">
			Top Page
		</c:if>
	</title>
	<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/menu/main.css' />">
	<script type="text/javascript" src="<c:url value='/resources/js/common/jquery-3.6.0.min.js' />"></script>
	<script type="text/javascript" src="<c:url value='/resources/js/menu/main.js' />"></script>
</head>

<body>
	<img id="bg" src="<c:url value='/resources/img/menu/common/bg.png' />">
	
	<div id="title" class="outer">
		<div class="inner">
			<h1>Deeper Deeper</h1>
		</div>
	</div>
	
	<div id="circle" class="outer">
		<div class="inner">
			<img class="circle" src="<c:url value='/resources/img/game/demo/demo_bg.png' />">
			<img id="A" class="circle" src="<c:url value='/resources/img/game/demo/demo_circle1.png' />">
			<img id="B" class="circle" src="<c:url value='/resources/img/game/demo/demo_circle2.png' />">
			<img id="C" class="circle" src="<c:url value='/resources/img/game/demo/demo_circle3.png' />">
			<img id="D" class="circle" src="<c:url value='/resources/img/game/demo/demo_circle4.png' />">
			<img id="E" class="circle" src="<c:url value='/resources/img/game/common/goal_circle1.png' />">
		</div>
	</div>
	
	<div id="lang" class="outer">
		<div class="inner">
			<form class="lang" action="lang" method="GET">
				<input type="hidden" name="lang" value="kr">
				<input type="submit" value="한국어">
			</form>
			<form class="lang" action="lang" method="GET">
				<input type="hidden" name="lang" value="jp">
				<input type="submit" value="日本語">
			</form>
			<form class="lang" action="lang" method="GET">
				<input type="hidden" name="lang" value="en">
				<input type="submit" value="English">
			</form>
		</div>
	</div>
	
	<div id="menu" class="outer">
		<div class="inner">
			<form id="form" method="POST">
				<c:if test="${lang eq 'kr'}">
					<input id="how" type="button" value="게임 방법">
					<input id="play" type="button" value="게임 시작">
					<input id="rank" type="button" value="랭킹 보기">
				</c:if>
				<c:if test="${lang eq 'jp'}">
					<input id="how" type="button" value="プレイ方法">
					<input id="play" type="button" value="プレイする">
					<input id="rank" type="button" value="ランキングを見る">
				</c:if>
				<c:if test="${lang eq 'en'}">
					<input id="how" type="button" value="How to Play">
					<input id="play" type="button" value="Play">
					<input id="rank" type="button" value="Ranking">
				</c:if>
			</form>
		</div>
	</div>
</body>

</html>