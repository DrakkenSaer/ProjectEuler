'use strict';

function generateFibonacciSequence(max) {
    const sequence = [1, 2];
    while(true) {
        let nextSequence = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        if (nextSequence > max) {
            return sequence;
        } else {
            sequence.push(nextSequence);
        }
    }
};

function sumEvenFibonacciNumbers(max) {
    const fibonacciSequence = generateFibonacciSequence(max);
    return fibonacciSequence.filter(int => int % 2 === 0).reduce((x,y) => x+y);
};

console.log(sumEvenFibonacciNumbers(4000000));