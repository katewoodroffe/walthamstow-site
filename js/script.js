alert("Welcome to my awesome I <3 Walthamstow website!");
document.write("Injecting code here");

function getRandomNumber(lower, upper) {
	return Math.floor(Math.random() * (upper-lower +1)) + lower;
}

console.log(getRandomNumber(5,55));
console.log(getRandomNumber(100,1000));
console.log(getRandomNumber(1,5));
console.log(getRandomNumber(60,555));
