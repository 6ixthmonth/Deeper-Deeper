<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>
		<c:if test="${lang eq 'kr'}">
			랭킹
		</c:if>
		<c:if test="${lang eq 'jp'}">
			ランキング
		</c:if>
		<c:if test="${lang eq 'en'}">
			Ranking
		</c:if>
	</title>
	<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/menu/rank.css' />">
</head>

<body>
	<img id="bg" src="<c:url value='/resources/img/menu/common/bg.png' />">
	
	<div id="table" class="outer">
		<div class="inner">
			<h1>TOP 10</h1>
			<table>
				<tr>
					<th></th>
					<th>
						<c:if test="${lang eq 'kr'}">
							플레이어명
						</c:if>
						<c:if test="${lang eq 'jp'}">
							プレイヤー名
						</c:if>
						<c:if test="${lang eq 'en'}">
							Player Name
						</c:if>
					</th>
					<th>
						<c:if test="${lang eq 'kr'}">
							스테이지 번호
						</c:if>
						<c:if test="${lang eq 'jp'}">
							ステージ番号
						</c:if>
						<c:if test="${lang eq 'en'}">
							Stage No.
						</c:if>
					</th>
					<th>
						<c:if test="${lang eq 'kr'}">
							클리어 시간
						</c:if>
						<c:if test="${lang eq 'jp'}">
							クリア時間
						</c:if>
						<c:if test="${lang eq 'en'}">
							Clear Time
						</c:if>
					</th>
					<th>
						<c:if test="${lang eq 'kr'}">
							클리어 일자
						</c:if>
						<c:if test="${lang eq 'jp'}">
							クリアした日
						</c:if>
						<c:if test="${lang eq 'en'}">
							Clear Date
						</c:if>
					</th>
				</tr>
				<c:forEach items="${list}" var="a" begin="0" end="9" step="1" varStatus="b">
					<tr>
						<td>${b.count}
						<td>${a.playerName}</td>
						<td>${a.stageNum}</td>
						<td>${a.clearTime}</td>
						<td>${a.clearWhen}</td>
					</tr>
				</c:forEach>
			</table>
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