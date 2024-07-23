// complete this js code
function Person(name, age) {
	this.name = name;
	this.age = age;
	greet = function (){
		console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`)
	}
	
}

function Employee(name, age, jobTitle) {
	this.name =name;
	this.age= age;
	this.jobTitle = jobTitle;
	jobGreet = function () {
	  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${jobTitle}`)
	}
}
	
Employee.__Prototype__= Person




// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
