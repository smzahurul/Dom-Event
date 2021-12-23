function addNumber(num1, num2) {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num
    }
    return sum;
}
var result = addNumber(10, 11, 12, 25, 46, 58, 101);
console.log(result);


//Same Function one parameter:
function addNumber(num1) {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num
    }
    return sum;
}
var result = addNumber(10, 11, 12, 25, 46, 58, 101);
console.log(result);


//Same Function with out parameter:
function addNumber() {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num
    }
    return sum;
}
var result = addNumber(10, 11, 12, 25, 46, 58, 101);
console.log(result);