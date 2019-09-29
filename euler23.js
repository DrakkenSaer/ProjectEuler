'use strict';

function findProperDivisors(num) {
    const numArr = [];
    let i = 1;
    do {
        if(num % i === 0) {
            numArr.push(i);
        }
        i++;
    } while(i < num);

    return numArr;
}

function findAllAbundantNumbers(max) {
    const numArrGroup = [];
    for(let i=1; i<max; i++) {
        numArrGroup.push([i, findProperDivisors(i).reduce((x,y) => x+y)]);
    }
    return numArrGroup.filter(numGroup => numGroup[0] < numGroup[1])
                        .map(arr => arr[0]);
}

function nonAbundantSums(max) {
    const abundantNums = findAllAbundantNumbers(max);
    const abundantSums = [];
    for (let i = 0; i < abundantNums.length; i++) {
        for (let j = i; j < abundantNums.length; j++) {
            const sum = abundantNums[i] + abundantNums[j];
            if (sum <= max) {
                abundantSums[sum] = true;
            } else {
                break;
            }
        }
    }

    let result = 0;
    for(let i = 1; i < max; i++) {
        if(!abundantSums[i]) {
            result += i;
        }
    }

    return result;
}

console.log(nonAbundantSums(28123));