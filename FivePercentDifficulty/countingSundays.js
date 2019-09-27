'use strict';

function countingSundays(yearFrom, yearTo) {
    let result = 0;
    for(let year=yearFrom; year <= yearTo; year++) {
        for(let month=0; month < 12; month++) {
            const firstOfMonth = new Date(year, month, 1);
            if(firstOfMonth.getDay() === 0) {
                result++;
            }
        }
    }

    return result;
}

console.log(countingSundays(1901, 2000));