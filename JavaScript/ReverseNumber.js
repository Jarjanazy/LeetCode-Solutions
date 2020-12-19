/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0) return 0;
    let absoulteNumber = (x < 0) ? -1 * x : x;
    let absoulteResult = Number(absoulteNumber.toString().split("").reverse().join(""));
    return absoulteResult * x / absoulteNumber;
};