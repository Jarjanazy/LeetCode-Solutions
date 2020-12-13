/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if (nums.length === 0 ) return 0;
    if(nums.length === 1) return nums[0];

    let max = Number.NEGATIVE_INFINITY;

    for(let i = 0; i <= nums.length - k; i++){

        let result = getAverage(nums.slice(i, i + k));

        max = Math.max(result, max);
    }
    return max
};

function getAverage(array){
    return array.reduce((total, current) => total + current) / array.length;
}