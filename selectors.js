// use selectors to interact with DOM (instance tree)

// VanillaJS accomplishes this, but so does jQuery

// VanillaJS:
document.getElementById('name');
document.getElementsByClassName('name');

document.getElementById('section1').addEventListener('click', clickFunction);
function clickFunction() {
	document.getElementById('section1').style.fontSize = 'xx-large';
}

// jQuery:
$(selector).action();
// $ sign: denotes jQuery function
// selector: select the HTML element
// . : separator 
// action() :perform action on selected element