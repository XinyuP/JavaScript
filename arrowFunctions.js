function sum(a, b) {
    return a + b
}

let sum2 = (a, b) => a + b

function isPositive(number) {
    return number > 0
}

let isPositive2 = number => number > 0


function randomNumber() {
    return Math.random
}


randomNumber2 = () => Math.random // function with 0 argument must put () there


document.addEventListener('click', function () {
    console.log('Click')
})



document.addEventListener('click', () => console.log('Click'))


// arrow functions shorthand for Anonymous functions