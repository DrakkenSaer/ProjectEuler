'use strict';

function sumOfAll3And5Divisors(num) {
    let sum = 0;
    for(let i=0;i<num;i++) {
        if (i % 3 == 0) {
            sum = sum + i;
        } else if (i % 5 == 0) {
            sum = sum + i;
        }
    }
    return sum;
};

console.log(sumOfAll3And5Divisors(1000));