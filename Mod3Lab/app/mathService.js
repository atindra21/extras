var mathService = {
    add: add,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    square:square,
    squareroot:squareroot
};

function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}

function square(first){
    return Math.pow(first,2);
}

function squareroot(first){
    return Math.sqrt(first);
}