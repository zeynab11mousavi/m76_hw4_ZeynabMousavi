function removeItems(array){
    let arr=[];
    for(let i=0; i< array.length; i++){
    if(array[i]===null || array[i]===NaN || array[i]===0 || array[i]===false || array[i]==="" || array[i]===undefined )
    continue;
    else
    arr.push(array[i]);
    }
    return arr;
    }
    let array = [undefined, 79, "Good Days",null, "", "String", 67, undefined]; 
    let result = removeItems(array);
    console.log(result);