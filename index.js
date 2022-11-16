//Задание 3
console.log("Hello world!");

//Задание 4
function sayHi() 
{
    console.log('Привет, ребята!');
}
  
setTimeout(sayHi, 1000);
let i = 1
setInterval(function print() {
  console.log(i)
  i++
}, 1000)
//Задание 5
const ProgressBar = require("progress");

const bar = new ProgressBar(":bar", { total: 10 });
const timer = setInterval(() => {
	bar.tick();
	if (bar.complete) {
		console.log("\nПотрачено");
		clearInterval(timer);
	}
}, 200);
