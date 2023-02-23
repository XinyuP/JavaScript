// jQuery is a layer above JavaScript that provides simplifications

// • more easily traverse the DOM
// • more easily attach event handlers
// • more easily manipulate the DOM

// <!doctype html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8">
//     <title>html demo</title>
//     <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
//   </head>
// <body>
// ...

/*
Suppose in your HTML you have:
<button id="myButton" class="formButton">Submit</button>
?*/
// To add a callback function submitForm to the onclick listener using JavaScript:
document
	.getElementById('myButton')
	.addEventListener('click', submitForm, false);

// The same, using jQuery:
$('myButton').click(submitForm);
//JQuery selector|Listener|Callback function

//Select a specific element by its ID:
$('#myButton');

//Select elements by class:
$('.formButton');

//Select elements by element name and class:
$('button.formButton');

//Select the whole document:
$(document);

//To add a callback function submitForm to the onclick listener:
$('#myButton').click(submitForm);

//To add a callback function submitForm to the ondoubleclick listener:
$('#myButton').doubleclick(submitForm);

//To add a callback function showInstructions to the mouseover listener:
$('#myButton').mouseover(showInstructions);

// Generic:
$('#myButton').on('eventName', showInstructions);

// Suppose you want to addthis button to the body of your HTML:
<button id='myButton' class='formButton'>
	Submit
</button>;

//Using JQuery Modifying DOM:
$(document.body).append(
	'<button id="myButton" class="formButton">Submit</button>'
);

//To getthe text of this button:
$('#myButton').html();

//To set the text of this button to ”Submit Form”: :
$('#myButton').html('Submit Form');

//jQuery Modifying CSS:

//Syntax to set any CSS parameter to a particular value:
// $('#myButton').css(<parameter>, <value>);

//</value>For example, to set the background color to yellow:
$('#myButton').css('background-color', 'yellow');

//Suppose you have this button in your HTML:
{
	/* <button id="myButton" class="formButton">Submit</button>
<p>Description of what the button does</p> */
}

$('#myButton').click(function () {
	$(this).next().css('background-color', 'red');
});



$(document).ready() 
// is a method in jQuery that allows you to run code as soon as the DOM(Document Object Model) is ready and loaded.

$(document).ready(function () {
  // code to run when the DOM is ready
});
// This method is used to ensure that the code inside the function is executed only after the DOM is fully loaded,
// and all the elements of the HTML page are available to the JavaScript code.

// to ensure that your jQuery code executes only after the HTML document has been fully loaded and is ready to be manipulated by JavaScript.



// It is also common to use the shorthand version of $(document).ready() which is:
$(function () {
  // code to run when the DOM is ready
});
