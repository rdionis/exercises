"use strict";

// Q2
function reverse(str) {
	if (str === "") {
		return "";
	} else {
		return reverse(str.substr(1)) + str.charAt(0);
	}
}
console.log(reverse("alejandra"));


// Q3
function factorial(n) {
	if (n === 0) {
		return 1;
	}
	return n * factorial(n - 1);
}
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(10));
console.log(factorial(0));


// Q4
function fibonacci(n) {
	if (n <= 1) {
		return n;
	} else {
		return fibonacci(n - 1) + fibonacci(n - 2);
	}
}
console.log(fibonacci(2));