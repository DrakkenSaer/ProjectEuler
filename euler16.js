'use strict';

function powerDigitSum(num, pow) {
    let numArr = [1];

    for(let i=0; i<pow; i++) {
        let carryOver = 0;
        let count = numArr.length + 1;
        for(let j=0; j<count; j++) {
            const digit = (numArr[j] || 0) * num + carryOver;
            let result = 0;
            if(digit > 9) {
                result = digit % 10;
                carryOver = (digit - result) / 10;
            } else {
                result = digit;
                carryOver = 0;
            }
            numArr[j] = result;
        }
    }

    return numArr.reduce((x,y) => x+y);
}

console.log(powerDigitSum(2, 1000));