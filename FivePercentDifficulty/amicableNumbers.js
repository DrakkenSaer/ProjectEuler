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

function amicableNumbers(num) {
    const numArrGroup = [];
    for(let i=1; i<num; i++) {
        numArrGroup.push([i, findProperDivisors(i).reduce((x,y) => x+y)]);
    }

    const amicableNumArr = [];
    numArrGroup.forEach(numGroup => {
        const reflectedGroup = numArrGroup[numGroup[1] - 1];
        if(reflectedGroup != undefined 
            && reflectedGroup[1] === numGroup[0]
            && numGroup[1] !== numGroup[0]) {
            amicableNumArr.push(numGroup[1]);
        }
    });

    return amicableNumArr.reduce((x,y) => x+y);
}

console.log(amicableNumbers(10000));