/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let num = x.toString().split("");
    if (num.length < 2) return true;
    let currentNum;
    let matchingNum;
    const windowSize = Math.floor(num.length / 2);
    const extraWindow = num.length % 2 == 0 ? 0 : 1;

    for (let i = 0; i <= (num.length / 2 )- 1; i++){
        currentNum = num[i];
        matchingNum = num[i + windowSize + extraWindow];
        console.log(i, i+windowSize);
        if (currentNum != matchingNum) return false;
    }
    return true;
};