/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const set = new Set();
    let maxCount = 0;
    let updatedCount = 0;

    [...s].forEach(function(char){
        if (set.has(char)){
            maxCount = Math.max(maxCount, updatedCount);
            updatedCount = 0;
            set.clear();
        }
        set.add(char);
        updatedCount++;
    });
    return Math.max(maxCount, updatedCount);
};
