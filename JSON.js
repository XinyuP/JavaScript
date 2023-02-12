// JSON: JavaScript Object Notation
// String representation of JS Objects
// Parse JSON strings with JSON.parse()
// convert Objects to string with JSON.stringify()

/*
Not a full representation though!
–Does not capture functions.
–Does not capture object references.
–Trouble with dates.


● Lightweight format for storing and transporting data 
● Limitations: 
    ○ Cannot get function output 
    ○ Cannot see equivalence between member variable values even after parse and stringify 
    
    ■ Solutions are to give IDs to places and compare those or use a serializer


    */

let hourlyEmployee = {
	name: 'Unassigned',
	hoursPerWeek: 40,
	computePay: function () {
		return this.hoursPerWeek * this.hourlyRate;
	},
	reportPay: function () {
		console.log(this.name + 'is paid ' + this.computePay());
	},
};

// Cannot get function output
console.log(JSON.stringify(hourlyEmployee)); // {"name":"Unassigned","hoursPerWeek":40}

console.log(myObject == JSON.parse(JSON.stringify(myObject))) // False, because the left and right side are two different objects.