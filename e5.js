/* Ex.5
Write a JavaScript function to merge two arrays and remove all
duplicate elements.
Test data:
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));
[3, 2, 30, 1] */


    var arr = [1, 2, 3];
    var arr2 = [2, 30, 1];

    function mergingAndRemoving(a, a2){

    let merged = a.concat(a2);
    let final = [];

    for (let i = 0; i < merged.length; i++){
       if (final.indexOf(merged[i]) === -1){
           final.push(merged[i]);
       }
    }
    return final;
    }

    console.log(mergingAndRemoving(arr,arr2));


