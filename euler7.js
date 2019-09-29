'use strict';

function isPrimeNum(num) {
    for (let i=2;i<num;i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function nthPrimeNumber(num) {
    const primeSequence = [];
    for(let i=1;primeSequence.length<num;i++) {
        if (isPrimeNum(i)) {
            primeSequence.push(i);
        }
    }
    return primeSequence[primeSequence.length - 1];
}

console.log(nthPrimeNumber(10001));