const square = function (x) {
	return x * x;
}

// const squareArrow = (x) => {
// 	return x * x;
// }


const squareArrow = (x) => x * x;

console.log(square(8));
console.log(squareArrow(5));

//Challenge

const getFirstName = (name) => {
	return name.split(" ")[0];
}

const getFirstNameArrow = (name) => 
name.split(" ")[0];

console.log("getFirstName", getFirstName("Mike Smith"));
console.log("getFirstNameArrow", getFirstNameArrow("Mike Smith"));