/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxCapacity = 0;
    for (let i=0; i < height.length; i++){
        maxCapacity = Math.max(maxCapacity, getMaxCapacityForIndex(height, i));
    }
    return maxCapacity;
};

function getMaxCapacityForIndex(height, startIndex){
    let maxResult = 0;
    let endPoint,heightOfWall;
    for (let i = startIndex; i < height.length; i++){
        endPoint = height[i];
        heightOfWall = Math.min(endPoint, height[startIndex]);
        maxResult = Math.max(maxResult, heightOfWall * (i - startIndex));
    }
    return maxResult;
}