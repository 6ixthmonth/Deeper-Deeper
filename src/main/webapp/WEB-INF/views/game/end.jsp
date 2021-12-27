<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>All Clear</title>
	<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/game/end.css' />">
	<script type="text/javascript" src="<c:url value='/resources/js/common/jquery-3.6.0.min.js' />"></script>
	<script type="text/javascript" src="<c:url value='/resources/js/game/end.js' />"></script>
</head>
<body>
	<input id="playTime" type="hidden" value="${playTime}">
	
	<img id="bg" src="<c:url value='/resources/img/menu/common/bg.png' />">
	
	<div id="title" class="outer">
		<div class="inner">
			<c:if test="${lang eq 'kr'}">
				<h1>축하합니다!</h1>
				<h1>당신은 모든 스테이지를 클리어하셨습니다!</h1>
			</c:if>
			<c:if test="${lang eq 'jp'}">
				<h1>おめでとうございます！</h1>
				<h1>あなたはすべてのステージをクリアしました！</h1>
			</c:if>
			<c:if test="${lang eq 'en'}">
				<h1>Congratulations!</h1>
				<h1>You cleared all stages!</h1>
			</c:if>
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
	
	<div id="timer" class="outer">
		<div class="inner">
			<c:if test="${lang eq 'kr'}">
				<h1>클리어 시간</h1>
			</c:if>
			<c:if test="${lang eq 'jp'}">
				<h1>クリア時間</h1>
			</c:if>
			<c:if test="${lang eq 'en'}">
				<h1>Clear Time</h1>
			</c:if>
			<span id="hour"></span>
			<span>:</span>
			<span id="min"></span>
			<span>:</span>
			<span id="sec"></span>
		</div>
	</div>
	
	<div id="back">
		<form action="<c:url value='/main' />">
			<c:if test="${lang eq 'kr'}">
				<input type="submit" value="처음 화면으로">
			</c:if>
			<c:if test="${lang eq 'jp'}">
				<input type="submit" value="トップへ戻る">
			</c:if>
			<c:if test="${lang eq 'en'}">
				<input type="submit" value="Top Page">
			</c:if>
		</form>
	</div>
</body>
</html>