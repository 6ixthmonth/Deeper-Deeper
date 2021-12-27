$(document).ready(function() {
	initTimerVal();
	
	var a = b = c = d = e = 0;
	
	setInterval(function() {
		if (a >= 360) {
			a = 0;
		}
		a++;
		$("#A").css({
			"-webkit-transform" : "rotate(" + a + "deg)",
			"-moz-transform" : "rotate(" + a + "deg)",
			"-ms-transform" : "rotate(" + a + "deg)",
			"-o-transform" : "rotate(" + a + "deg)",
			"transform" : "rotate(" + a + "deg)"
		});
	}, 5);
	
	setInterval(function() {
		if (b <= 0) {
			b = 360;
		}
		b--;
		$("#B").css({
			"-webkit-transform" : "rotate(" + b + "deg)",
			"-moz-transform" : "rotate(" + b + "deg)",
			"-ms-transform" : "rotate(" + b + "deg)",
			"-o-transform" : "rotate(" + b + "deg)",
			"transform" : "rotate(" + b + "deg)"
		});
	}, 5);
	
	setInterval(function() {
		if (c >= 360) {
			c = 0;
		}
		c++;
		$("#C").css({
			"-webkit-transform" : "rotate(" + c + "deg)",
			"-moz-transform" : "rotate(" + c + "deg)",
			"-ms-transform" : "rotate(" + c + "deg)",
			"-o-transform" : "rotate(" + c + "deg)",
			"transform" : "rotate(" + c + "deg)"
		});
	}, 5);
	
	setInterval(function() {
		if (d <= 0) {
			d = 360;
		}
		d--;
		$("#D").css({
			"-webkit-transform" : "rotate(" + d + "deg)",
			"-moz-transform" : "rotate(" + d + "deg)",
			"-ms-transform" : "rotate(" + d + "deg)",
			"-o-transform" : "rotate(" + d + "deg)",
			"transform" : "rotate(" + d + "deg)"
		});
	}, 5);
	
	setInterval(function() {
		if (e >= 360) {
			e = 0;
		}
		e++;
		$("#E").css({
			"-webkit-transform" : "rotate(" + e + "deg)",
			"-moz-transform" : "rotate(" + e + "deg)",
			"-ms-transform" : "rotate(" + e + "deg)",
			"-o-transform" : "rotate(" + e + "deg)",
			"transform" : "rotate(" + e + "deg)"
		});
	}, 5);
});

function initTimerVal() {
	let playTime = parseInt($("#playTime").val());
	
	hourVal = parseInt(playTime / 3600);
	minVal = parseInt(playTime % 3600 / 60);
	secVal = playTime % 60;
	
	$("#hour").html(hourVal < 10 ? "0" + hourVal : hourVal);
	$("#min").html(minVal < 10 ? "0" + minVal : minVal);
	$("#sec").html(secVal < 10 ? "0" + secVal : secVal);
}