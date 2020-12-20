/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let maxCount = 0;
    let startIndex = 0;
    let list = s.split("");

    for (let i = 0; i < list.length; i++){
        let countFromCurrentIndex = countSubStringWithoutReapaetingChars(i, list);
        maxCount = Math.max(maxCount, countFromCurrentIndex);
    }
    return maxCount;
};

function countSubStringWithoutReapaetingChars(startIndex, list){
    let count = 0;
    const set = new Set();
    for (let i = startIndex; i < list.length; i++){
        if (set.has(list[i])) return count;
        else{
            count++;
            set.add(list[i]);
        }
    }
    return count;
}
