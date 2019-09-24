'use strict';

function isPalindrome(value) {
    const valueStringified = value.toString();
    const reverseValue = valueStringified.split("").reverse().join("");
    return valueStringified === reverseValue;
}

function largestPalindromeNumbe(length) {
    const max = parseInt(new Array(length).fill(9).join(''));
    let result = 0;
    let position = 1;

    while(position < max) {
        for (let i = 1; i < max; i++) {
            const current = position * i;
            if(isPalindrome(current) && current > result) {
                result = current;
            }
        }
        position++;
    }

    return result;
}

console.log(largestPalindromeNumbe(3));