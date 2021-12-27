$(document).ready(function() {
	$("#submit").on("click", function() {
		var a = $("#lang").val();
		var b = $("#name");
		
		if (a == "kor" && b.val() <= 0) {
			alert("이름을 입력해주세요.");
			b.focus();
			return;
		}
		
		if (a == "jap" && b.val() <= 0) {
			alert("お名前を入力してください。");
			b.focus();
			return;
		}
		
		if (a == "eng" && b.val() <= 0) {
			alert("Please enter your name.");
			b.focus();
			return;
		}
		
		if (a == "kor" && b.val().length > 10) {
			alert("이름은 10글자 이하로 입력해주세요.");
			b.focus();
			return;
		}
		
		if (a == "jap" && b.val().length > 10) {
			alert("お名前は10文字以内で入力してください。");
			b.focus();
			return;
		}
		
		if (a == "eng" && b.val().length > 10) {
			alert("Please enter your name as 10 characters or less.");
			b.focus();
			return;
		}
		
		$("#form").submit();
	});
});