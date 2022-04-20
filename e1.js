/* Ex. 1
Write a JavaScript program to compute the exponent of a number
PS:use Recursion */




function exponent(num, pow){

    if (pow === 0){
        return 1;

    } else if (pow > 0){
    
        return num * exponent(num, pow-1);
    };
}
console.log(exponent (2,3));