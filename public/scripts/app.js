"use strict";

var square = function square(x) {
	return x * x;
};

// const squareArrow = (x) => {
// 	return x * x;
// }


var squareArrow = function squareArrow(x) {
	return x * x;
};

console.log(square(8));
console.log(squareArrow(5));

//Challenge

var getFirstName = function getFirstName(name) {
	return name.split(" ")[0];
};

var getFirstNameArrow = function getFirstNameArrow(name) {
	return name.split(" ")[0];
};

console.log("getFirstName", getFirstName("Mike Smith"));
console.log("getFirstNameArrow", getFirstNameArrow("Mike Smith"));
