'use strict';

function collatzSequence(num) {
    const sequence = [num];
    let current = num;
    do {
        if (current % 2 === 0) {
            current = current/2;
        } else {
            current = (current * 3) + 1;
        }
        sequence.push(current);
    } while (current != 1)
    return sequence;
}

function longestCollatzSequence(max) {
    let longestSequence = [];
    let result = 0;
    for (let i=1; i<max; i++) {
        const sequence = collatzSequence(i);
        if (sequence.length > longestSequence.length) {
            longestSequence = sequence;
            result = i;
        }
    }

    return result;
}

console.log(longestCollatzSequence(1000000));