'use strict';

function factorial(n) {
    if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function binomialCoefficient(n, k) {
    return (factorial(n) / (factorial(k) * factorial(n - k)));
}

function latticePaths(height, width) {
    const totalSize = height + width;
    // Choosing height or width produces the same binomial coefficient result
    return binomialCoefficient(totalSize, height);
}

console.log(latticePaths(20, 20));