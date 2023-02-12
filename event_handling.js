// • Event loop fires events when user does something
// • Listeners listen for specific events
// • When a listener “hears” an event, it calls a callback function



/*

Three parts:
– Event Handler Property specifies the event type it 
listens for.
– Listener is the code that receives the message.
– Event Handler Function (“callback function”) is the 
code that runs when the listener hears about an 
event which type it listens for.


In JavaScript, we add event listeners to HTML elements.
• JS provides the listener. We specify:
– Event Handler Property specifies the event type it listens for.
– Event Handler Function (“callback function”) is the 
code that runs when the listener hears about an event which type it listens for.


Multiple ways to do this:

Inside of HTML elements:
<button id=”myBtn” onclick="changeColor()"/>

Inside of JavaScript code:
var myButton = document.getElementById('myBtn');
myButton.addEventListener('click', changeColor);


* Defining a click listener
document.getElementById(”myBtn").addEventListener("click", changeColor);
function changeColor() {     
    document.getElementById(”myBtn").style.color = ”red";
}

* Defining a double click listener
document.getElementById(”myBtn").addEventListener(”dblclick", changeColor);
function changeColor() {     
    document.getElementById(”myBtn").style.color = ”red";
}

*/