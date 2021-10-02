<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Stage 3</title>
	<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/game/stage.css' />">
	<script type="text/javascript" src="<c:url value='/resources/js/common/jquery-3.6.0.min.js' />"></script>
	<script type="text/javascript" src="<c:url value='/resources/js/game/stage3.js' />"></script>
	<script type="text/javascript" src="<c:url value='/resources/js/game/gameLogic.js' />"></script>
</head>

<body>
	<input id="contextPath" type="hidden" value="${pageContext.servletContext.contextPath}">
	<input id="lang" type="hidden" name="lang" value="${lang}">
	
	<input id="HS" type="hidden" name="HS" value="${HS}">
	<input id="MS" type="hidden" name="MS" value="${MS}">
	<input id="SS" type="hidden" name="SS" value="${SS}">
	
	<div id="title" class="outer">
		<div class="inner">
			<h1>STAGE 3</h1>
			<input id="start" type="button" value="START">
		</div>
	</div>
</body>

</html>