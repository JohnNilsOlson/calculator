const add = function(number1, number2) {
	return number1 + number2;
};

const sub = function(number1, number2) {
	return number1 - number2;
};

const mult = function(number1, number2) {
	return number1 * number2;
};

const div = function(number1, number2) {
	return number1 / number2;
};

$(document).ready(function() {
	$("form#add").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("#add1").val());
		const number2 = parseInt($("#add2").val());
		const result = add(number1, number2);
		$("#output-add").text(result);
	});

	$("form#sub").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("#sub1").val());
		const number2 = parseInt($("#sub2").val());
		const result = sub(number1, number2);
		$("#output-sub").text(result);	
	});

	$("form#mult").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("#mult1").val());
		const number2 = parseInt($("#mult2").val());
		const result = mult(number1, number2);
		$("#output-mult").text(result);	
	});

	$("form#div").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("#div1").val());
		const number2 = parseInt($("#div2").val());
		const result = div(number1, number2);
		$("#output-div").text(result);	
	});
});