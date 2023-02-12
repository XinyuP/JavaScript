/*
What can JavaScript do?
• Change HTML content
document.getElementById(”myDiv").innerHTML = "Hello World!";
• Change HTML Element Attributes–document.getElementById(‘myImg’).src = 'new_image.png';
• Change Styles–document.getElementById(‘myDiv’).style.color = 'red'
• It can even add and remove elements in DOM!



JavaScript embedded in html file 
–Inside <head>
–Inside <body>
–Inline (e.g., inside an event handler property)


JavaScript included from an external file
–Inside <head>
–Preferred way, but using it as the only way could get very complicated very quickly!



In HTML file: writing JS inside Script Tag
<script>
// JS code goes here 
</script>

Including JS in an External .js file 
<script src="scripts/external.js"></script>


Almost everything in JavaScript is an object.
Except a few primitives (e.g., null, undefined, numbers, strings, booleans)
- Even functions are first-class objects. 
What is special about functions is that they can be called


////// Anonymous Functions:
• JS functions don’t actually neednames


////// Objects:
Objects are lists of property/value pairs.

var favoriteStarWarsCharacter = {
    firstName:”Steve”,
    lastName:”Rogers”,
    catchphrase:”thank u, next”
}

Access properties using 
- square brackets --- favoriteStarWarsCharacter["firstName"]
- dot notation --- favoriteStarWarsCharacter.firstName


Object property values can be primitives or other objects, including functions.


var favoriteStarWarsCharacter = {
    firstName:”Steve”,
    lastName:”Rogers”,
    catchphrase:”thank u, next”,
    fullName: function() {
        return this.firstName + “ ” + this.lastName;
    }
}
Call using: favoriteStarWarsCharacter.fullName()



///// this in JavaScript /////


In JavaScript this is a keyword that refers to an object.

Which object it is depends on where it is used.
• In an object method, it refers to the object.
• In a function (or alone) it refers to the global 
object (e.g., in a browser that would be the 
browser window)
• In an event handler property... we will learn about 
that later.





*/


/**
 * When it comes to inheritance, JavaScript only has one construct: objects
 * Each object has a private property which holds a link to another object called its prototype.
 * That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype.
 * By definition, null has no prototype, and acts as the final link in this prototype chain.
 * It is possible to mutate any member of the prototype chain or even swap out the prototype at runtime, so concepts like static dispatching do not exist in JavaScript.
 * 
 * 
 * the prototypical inheritance model itself is, in fact, more powerful than the classic model. 
 * 
 * Although classes are now widely adopted and have become a new paradigm in JavaScript, classes do not bring a new inheritance pattern.
 * 
 * JavaScript objects are dynamic "bags" of properties (referred to as own properties). 
 * 
 * JavaScript objects have a link to a prototype object. 
 * 
 * When trying to access a property of an object, 
 * the property will not only be sought on the object but on the prototype of the object, 
 * the prototype of the prototype, and so on until 
 * either a property with a matching name is found 
 * or the end of the prototype chain is reached.
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
















 */

 //When an inherited function is executed, the value of this points to the inheriting object, not to the prototype object where the function is an own property.

const parent = {
  value: 2,
  method() {
    return this.value + 1;
  },
};

console.log(parent.method()); // 3
// When calling parent.method in this case, 'this' refers to parent

// child is an object that inherits from parent
const child = {
  __proto__: parent,
};
console.log(child.method()); // 3
// When child.method is called, 'this' refers to child.
// So when child inherits the method of parent,
// The property 'value' is sought on child. However, since child
// doesn't have an own property called 'value', the property is
// found on the [[Prototype]], which is parent.value.

child.value = 4; // assign the value 4 to the property 'value' on child.
// This shadows the 'value' property on parent.
// The child object now looks like:
// { value: 4, __proto__: { value: 2, method: [Function] } }
console.log(child.method()); // 5
// Since child now has the 'value' property, 'this.value' means