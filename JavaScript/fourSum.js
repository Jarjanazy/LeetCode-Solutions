/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let allPossibleSubArrays =  getAllPossibleSubArrays(nums);
    let resultSubArrays = [];
    [...allPossibleSubArrays].forEach(function(subArray){
        if (subArray.reduce((prev, val) => prev + val, 0) === target){
            resultSubArrays.push(subArray);
        }
    });

    return resultSubArrays;
}; 



function getAllPossibleSubArrays(numsArray){
    let baseArray = [];
    for (let i = 0; i < numsArray.length - 3; i++){
        addAllPossibleSubArraysFromStartIndex(baseArray, numsArray,i);
    }
    return baseArray;
}

function addAllPossibleSubArraysFromStartIndex(baseArray, numsArray,startIndex){
    
    for (let i = startIndex; i < numsArray.length - 3; i++){
        let subArray = [numsArray[i], numsArray[i + 1], numsArray[i + 2], numsArray[i + 3]]
        baseArray.push(subArray);
    }
}