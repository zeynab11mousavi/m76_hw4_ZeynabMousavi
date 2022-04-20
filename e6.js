
    const numbers = [15.5, 2.3, 1.1, 4.7];
    let sum= numbers.reduce(function(acc, indexNumber){
        return acc + indexNumber;
    })
 console.log(Math.ceil(sum));