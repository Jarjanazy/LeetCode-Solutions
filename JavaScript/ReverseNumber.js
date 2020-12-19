/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if (x === 0) return 0;
    let absoulteNumber = (x < 0) ? -1 * x : x;
    let absoulteResult = Number(absoulteNumber.toString().split("").reverse().join(""));

    if (overflows(absoulteResult)) return 0;

    return absoulteResult * x / absoulteNumber;
};

function overflows(num){
    return Math.imul(num, 1) !== num;
}