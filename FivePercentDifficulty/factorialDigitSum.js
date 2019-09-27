'use strict';

function factorialDigitSum(num) {
    let numArr = num.toString().split('').map(str => parseInt(str)).reverse();

    for(let i=num-1; i > 0; i--) {
        let carryOver = 0;
        let count = numArr.length + 1;
        for(let j=0; j<count; j++) {
            const digit = (numArr[j] || 0) * i + carryOver;
            let result = 0;
            if(digit > 9) {
                result = digit % 10;
                carryOver = (digit - result) / 10;
            } else {
                result = digit;
                carryOver = 0;
            }

            if(carryOver > 0 && j + 1 === count) {
                count++;
            }

            numArr[j] = result;
        }
    }

    return numArr.reduce((x,y) => x+y);
}

console.log(factorialDigitSum(100));