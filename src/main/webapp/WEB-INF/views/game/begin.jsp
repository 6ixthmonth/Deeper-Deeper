<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE>
<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>
		<c:if test="${lang eq 'kr'}">
			이름 입력
		</c:if>
		<c:if test="${lang eq 'jp'}">
			名前入力
		</c:if>
		<c:if test="${lang eq 'en'}">
			Enter Name
		</c:if>
	</title>
	<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/game/begin.css' />">
	<script type="text/javascript" src="<c:url value='/resources/js/common/jquery-3.6.0.min.js' />"></script>
	<script type="text/javascript" src="<c:url value='/resources/js/game/begin.js' />"></script>
</head>

<body>
	<img id="bg" src="<c:url value='/resources/img/menu/common/bg.png' />">
	
	<input id="lang" type="hidden" name="lang" value="${lang}">
	<div class="outer">
		<div class="inner">
			<h2>
				<c:if test="${lang eq 'kr'}">
					이름을 입력해주세요.
				</c:if>
				<c:if test="${lang eq 'jp'}">
					お名前を入力してください。
				</c:if>
				<c:if test="${lang eq 'en'}">
					Please Enter Your Name
				</c:if>
			</h2>
			<form id="form" action="stage1" method="POST">
				<input id="name" type="text" name="playerName">
			</form>
			<c:if test="${lang eq 'kr'}">
				<input id="submit" type="button" value="확인">
			</c:if>
			<c:if test="${lang eq 'jp'}">
				<input id="submit" type="button" value="確認">
			</c:if>
			<c:if test="${lang eq 'en'}">
				<input id="submit" type="button" value="Confirm">
			</c:if>
		</div>
	</div>
	
	<div id="back">
		<form action="main">
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