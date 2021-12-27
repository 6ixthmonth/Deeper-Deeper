<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>

<head>
	<title>
		<c:if test="${lang eq 'kr'}">
			게임 방법
		</c:if>
		<c:if test="${lang eq 'jp'}">
			プレイ方法
		</c:if>
		<c:if test="${lang eq 'en'}">
			How to Play
		</c:if>
	</title>
	<link rel="stylesheet" type="text/css" href="<c:url value='/resources/css/menu/how.css' />">
</head>

<body>
	<img id="bg" src="<c:url value='/resources/img/menu/common/bg.png' />">
	
	<div>
		<h2>
			<c:if test="${lang eq 'kr'}">
				게임 목표
			</c:if>
			<c:if test="${lang eq 'jp'}">
				ゲームの目標	
			</c:if>
			<c:if test="${lang eq 'en'}">
				Goal of the game
			</c:if>
		</h2>
		<img src="<c:url value='/resources/img/menu/how/how1.png' />">
		<div>
			<c:if test="${lang eq 'kr'}">
				이 게임은 원을 회전시켜 <img src="<c:url value='/resources/img/menu/how/start.png' />">부터 중심까지 하나의 길을 잇는 것이 목표입니다.
			</c:if>
			<c:if test="${lang eq 'jp'}">
				このゲームでは、サークルを回しながら<img src="<c:url value='/resources/img/menu/how/start.png' />">から中心まで一つの道につなぐことが目標です。	
			</c:if>
			<c:if test="${lang eq 'en'}">
				In this game, you can rotate circle and make one route from <img src="<c:url value='/resources/img/menu/how/start.png' />"> to the center. 
			</c:if>
		</div>
		<br>
		<br>
		
		<h2>
			<c:if test="${lang eq 'kr'}">
				조작 설명
			</c:if>
			<c:if test="${lang eq 'jp'}">
				操作の方法	
			</c:if>
			<c:if test="${lang eq 'en'}">
				Control Description
			</c:if>
		</h2>
		<button>▲</button>
		<button>▼</button>
		<span>
			<c:if test="${lang eq 'kr'}">
				회전시킬 원을 선택합니다.
			</c:if>
			<c:if test="${lang eq 'jp'}">
				回転したいサークルを選択します。
			</c:if>
			<c:if test="${lang eq 'en'}">
				Select a circle which you want to rotate.
			</c:if>
		</span>
		<br>
		<button>◀</button>
		<span>
			<c:if test="${lang eq 'kr'}">
				선택한 원을 반시계 방향으로 회전시킵니다.
			</c:if>
			<c:if test="${lang eq 'jp'}">
				選択されたサークルを反時計回りに回転します。
			</c:if>
			<c:if test="${lang eq 'en'}">
				Rotate the selected circle counterclockwise.
			</c:if>
		</span>
		<br>
		<button>▶</button>
		<span>
			<c:if test="${lang eq 'kr'}">
				선택한 원을 시계 방향으로 회전시킵니다.
			</c:if>
			<c:if test="${lang eq 'jp'}">
				選択されたサークルを時計回りに回転します。
			</c:if>
			<c:if test="${lang eq 'en'}">
				Rotate the selected circle clockwise.
			</c:if>
		</span>
		<br>
		<br>
		<br>
		
		<h2>
			<c:if test="${lang eq 'kr'}">
				스테이지 클리어
			</c:if>
			<c:if test="${lang eq 'jp'}">
				ステージクリア
			</c:if>
			<c:if test="${lang eq 'en'}">
				Stage Clear
			</c:if>
		</h2>
		<img src="<c:url value='/resources/img/menu/how/how2.png' />">
		<div>
			<c:if test="${lang eq 'kr'}">
				길을 하나로 이으면 다음 스테이지를 진행하실 수 있습니다.
			</c:if>
			<c:if test="${lang eq 'jp'}">
				道を一つにつなぐと次のステージに進むことができます。
			</c:if>
			<c:if test="${lang eq 'en'}">
				If you make one route, You can proceed to the next stage.
			</c:if>		
		</div>
		<br>
		<c:if test="${lang eq 'kr'}">
			<img src="<c:url value='/resources/img/menu/how/how3_kr.png' />">
		</c:if>
		<c:if test="${lang eq 'jp'}">
			<img src="<c:url value='/resources/img/menu/how/how3_jp.png' />">
		</c:if>
		<c:if test="${lang eq 'en'}">
			<img src="<c:url value='/resources/img/menu/how/how3_en.png' />">
		</c:if>
		<div>
			<c:if test="${lang eq 'kr'}">
				또한 클리어 결과를 메인 화면의 랭킹 보기를 통해 확인하실 수 있습니다.
			</c:if>
			<c:if test="${lang eq 'jp'}">
				また、クリア結果をメイン画面の「ランキングを見る」で確認できます。
			</c:if>
			<c:if test="${lang eq 'en'}">
				You can also see the results of the clear in the 'Ranking' on the main screen.
			</c:if>
		</div>
		<br>
		<br>
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