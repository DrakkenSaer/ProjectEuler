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

function highlyDivisibleTriangleNumber(max) {
    let position = 0;
    let final = [];
    const sequence = [];
    do {
        position++;
        sequence.push(position);
        final = findAllFactors(sequence.reduce((x,y) => x+y));
    } while(final.length < max);

    return sequence.reduce((x,y) => x+y);
}

console.log(highlyDivisibleTriangleNumber(500));