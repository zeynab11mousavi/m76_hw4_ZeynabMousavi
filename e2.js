/* Ex. 2
Write a JavaScript program to compute the sum of an array of
integers. Go to the editor
Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21 */


var array = [1, 2, 3, 4, 5, 6];

let sumOfAnArrayWithReduce = array.reduce(function (acc , numberIndexes){
    return acc + numberIndexes;
})

console.log(sumOfAnArrayWithReduce);