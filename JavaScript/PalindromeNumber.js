/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let nums = x.toString().split("");
    if (nums.length <= 1) return true;
   
    const windowSize = Math.floor(nums.length / 2);
    let numsIndexFromEnd = nums.length - 1;

    for (let i = 0; i <= windowSize - 1; i++){
        if (nums[i] != nums[numsIndexFromEnd--]) return false;
    }
    return true;
};