'use strict';

function divisibleBetwixt(num, min, max) {
    for (let i=min;i<max;i++) {
        if (num % i != 0) {
            return false;
        }
    }
    return true;
}

function smallestEvenlyDivisibleNumber(min, max) {
    let result = 0;

    do {
        result++;
    } while(!divisibleBetwixt(result, min, max));

    return result;
}

console.log(smallestEvenlyDivisibleNumber(1, 20));