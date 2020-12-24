/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */


var fourSum = function(nums, target) {
    let allPossibleSubArrays =  getAllPossibleSubArrays(nums);
    nums = null;
    let resultSubArrays = [];
    [...allPossibleSubArrays].forEach(function(subArray){
        if (subArray.reduce((prev, val) => prev + val, 0) === target){
            if (!isAlreadyAdded(subArray, resultSubArrays)) resultSubArrays.push(subArray);
        }
    });

    return resultSubArrays;
}; 

function isAlreadyAdded(newSubArray, existingSubArrays){
    for (let i = 0; i < existingSubArrays.length; i++){
        let resultSubArray = new Set(existingSubArrays[i]);
        let newSubArraySet = new Set(newSubArray);
        if(resultSubArray.size === newSubArraySet.size){
            const allElementsOfNewListExisit = [...newSubArraySet].every(element => resultSubArray.has(element));
            if (allElementsOfNewListExisit) return true;
        }  
    }
    return false;
}


function getAllPossibleSubArrays(numsArray){
    let baseArray = [];
    for (let i = 0; i < numsArray.length - 3; i++){
        addAllPossibleSubArraysFromStartIndex(baseArray, numsArray,i);
    }
    return baseArray;
}

function addAllPossibleSubArraysFromStartIndex(baseArray, numsArray,startIndex){
        for(let j = startIndex + 1; j < numsArray.length - 2; j++){
            for(let k = j + 1; k < numsArray.length - 1; k++){
                for(let l = k + 1; l < numsArray.length; l++){
                    let subArray = [numsArray[startIndex], numsArray[j], numsArray[k], numsArray[l]]
                    baseArray.push(subArray);
                }
            }
        }
}