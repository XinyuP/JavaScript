/**
 * JavaScript is prototypes based.
 * No multiple inheritance.
 * Each object has a private property called prototype.
 * The prototype property points to another object.
 * except for Object which prototype is null.
 * Each object inherits all properties from its prototype.
 * The object is not its prototype! It inherits from its prototype.
**/

/**
 * The relationship between __proto__ and prototype
 * __proto__ is an object in every class instance that points to the prototype it was created from.
 * newPhone.__proto__ is a reference to iPhone.prototype
 * By having a __proto__ property identical to iPhone.prototype, newPhone is essentially saying,
 *  “Look, since I’m an iPhone 11, I have the exact same features as any other iPhone 11! I’ve got Face ID, 4K video, you name it.”
 * I
 * n reality, the only true difference between prototype and __proto__ is that 
 * prototype is a property of a class constructor, 
 * while __proto__ is a property of a class instance
 * 
 * iPhone.prototype provides a blueprint for building an iPhone, 
 * newPhone.__proto__ affirms that the iPhone has indeed been built according to that specific blueprint. 
 * But with regards to the properties and methods present in those two objects… well, they’re exactly the same.
 * 
 * 
 * __proto__: Object
 * newPhone.__proto__ is actually a JavaScript object, and JavaScript objects are also built according to a specific “blueprint”
 * newPhone.__proto__.__proto__ refers to Object.prototype which is the prototype or blueprint that all JavaScript objects are based on.
 * 
 * 
 */


// prototype is link between the object instance and its prototype __proto__ property
// is derived from the prototype property on the constructor

// set up by the class constructor

// let log = console.log;

// let myObj = {}; // new Object()
// log(myObj.constructor); // function Object(){}
// log(myObj.__proto__ === myObj.constructor.prototype);

// function Cat() {
// 	//constructor for kitty
// }
// let kitty = new Cat();
// log(kitty.__proto__ === Cat.prototype);
// log(kitty.__proto__.__proto__ === Object.prototype);
// log(Object.prototype.__proto__);

// function Animal() {}

// Object.setPrototypeOf(Cat.prototype, Animal.prototype);
// log(kitty.__proto__); // Cat{}
// log(kitty.__proto__.__proto__); // Animal {}
// log(kitty.__proto__.__proto__.__proto__); // {}
// log(kitty.__proto__.__proto__.__proto__.__proto__); // null

/////////////////////////////////
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

let sam = { name: 'Sam' };
console.log(sam.__proto__); // [Object: null prototype] {}
sam.__proto__ = hourlyEmployee;
console.log(sam.__proto__);
// {
//   name: 'Unassigned',
//   hoursPerWeek: 40,
//   computePay: [Function: computePay],
//   reportPay: [Function: reportPay]
// }

sam.hourlyRate = 10.0;
sam.reportPay();
hourlyEmployee.hoursPerWeek = 35;
console.log(sam.__proto__); // Samis paid 400
// {
//   name: 'Unassigned',
//   hoursPerWeek: 35,
//   computePay: [Function: computePay],
//   reportPay: [Function: reportPay]
// }
sam.reportPay(); // Samis paid 350
