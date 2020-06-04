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
	$("form#calculator").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("#input1").val());
		const number2 = parseInt($("#input2").val());
		const operator = $("input:radio[name=operator]:checked").val();
		let result;
		if (operator === "add") {
			result = add(number1, number2);
		}
		else if (operator === "subtract") {
			result = sub(number1, number2);
		}
		else if (operator === "multiply") {
			result = mult(number1, number2);
		}
		else if (operator === "divide") {
			result = div(number1, number2);
		}
		$("#output").text(result);
	});
});