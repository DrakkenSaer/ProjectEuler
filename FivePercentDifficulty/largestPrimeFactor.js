'use strict';

function findAllFactors(num) {
    const factors = [];
    for (let i=1; i*i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
            if (i * i != num) {
                factors.push(num/i);
            }
        }
    }
    return factors;
}

function isPrimeNum(num) {
    for (let i=2;i<num;i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function largestPrimeFactor(num) {
    const factors = findAllFactors(num);
    const primeFactors = factors.filter(isPrimeNum);
    return Math.max(...primeFactors);
}

console.log(largestPrimeFactor(600851475143));