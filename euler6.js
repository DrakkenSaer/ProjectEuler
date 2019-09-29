'use strict';

function sumOfSquares(min, max) {
    let result = 0;
    for(let i=min;i<=max;i++) {
        result += i * i;
    }
    return result;
}

function squareOfSum(min, max) {
    let result = 0;
    for(let i=min;i<=max;i++) {
        result += i;
    }
    return result * result;
}

function sumSquareDifference(max) {
    return Math.abs(sumOfSquares(1, max) - squareOfSum(1, max));
}

console.log(sumSquareDifference(100));