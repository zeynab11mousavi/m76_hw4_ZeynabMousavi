function capitalizingFirstLetters(str){

    let arr = str.split(" ");
    let result = " ";
    for (let i = 0; i < arr.length; i++){
        let newArr = Array.from(arr[i]);
        let upper = newArr[0].toUpperCase();
        let strArr = upper; 
        for (let j = 1; j < newArr.length;  j++){
            strArr += newArr[j];
        }    
        result += strArr + " ";

    }
    console.log(result);
}  
capitalizingFirstLetters('the quick brown fox is so cute');
/*Write a JavaScript function that accepts a string as a
parameter and converts the first letter of each word of the
string in upper case.
Example string: 'the quick brown fox'
Expected Output: 'The Quick Brown Fox '*/