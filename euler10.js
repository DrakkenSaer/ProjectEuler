'use strict';

function isPrimeNum(num) {
    for (let i=2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function summationOfPrimes(max) {
    let result = 0;
    for(let i = 2; i < max; i++) {
        if (isPrimeNum(i)) {
            result += i;
        }
    }
    return result;
}

console.log(summationOfPrimes(2000000));