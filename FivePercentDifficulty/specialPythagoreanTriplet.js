'use strict';

function calculateTriple(a, b) {
    return Math.sqrt((a * a) + (b * b));
}

function specialPythagoreanTriplet(num) {
    let result = 0;
    let a = 1;
    let b = 1;
    let c = 1;
    while(result != num) {
        if (result > num) {
            a++;
            b = a;
            result = 0;
        } else {
            b++;
            c = calculateTriple(a, b);
            result = a + b + c;
        }
    }
    return a * b * c;
}

console.log(specialPythagoreanTriplet(1000));