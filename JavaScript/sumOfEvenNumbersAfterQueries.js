/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
    let result = []
    queries.forEach(function(element, index){
        performQuery(A, element);
        result[index] = getSumOfEvenNumbers(A);
    })
    return result;
};


function performQuery(A, query){
    A[query[1]] += query[0];
}

function getSumOfEvenNumbers(list){
    return list.reduce(function(total, currentValue){
        if (currentValue % 2 === 0) total += currentValue;
        return total;
    }, 0);
}