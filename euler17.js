'use strict';

const singles = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tens = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const words = ['thousand', 'hundred'];

function numberLetterCount(num) {
    const wordSequence = [];
    for(let i=1; i<=num; i++) {
        const numArr = i.toString().split('').map(str => parseInt(str));
        const distance = numArr.length;
        const result = [];
        numArr.forEach((digit, index) => {
            const position = distance - index;
            if (position === 4 && digit > 0) {
                result.push(singles[digit - 1]);
                result.push('thousand');
            } else if (position === 3 &&  digit > 0) {
                result.push(singles[digit - 1]);
                result.push('hundred');
            } else if (position === 2 && digit > 1) {
                if (words.includes(result[result.length - 1])) {
                    result.push('and');
                }
                result.push(tens[digit - 1]);
            } else if (position === 1 && numArr[index - 1] === 1) {
                if (words.includes(result[result.length - 1])) {
                    result.push('and');
                }
                if (digit === 0) {
                    result.push(tens[digit]);
                } else {
                    result.push(teens[digit - 1]);
                }
            } else if (position === 1 && digit > 0) {
                if (words.includes(result[result.length - 1])) {
                    result.push('and');
                }
                result.push(singles[digit - 1]);
            }
        })
        wordSequence.push(...result);
    }

    return wordSequence.map(str => str.length).reduce((x,y) => x+y);
}

console.log(numberLetterCount(1000));