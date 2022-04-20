function dateToString(separator){
    
    let date = new Date("11/13/2014");

    let strDate = date.getDate();
    let strMonth = date.getMonth() +1;
    let strYear = date.getFullYear();

    let strFullDate = strMonth + separator+ strDate+ separator+ strYear;

    return strFullDate;
}
console.log(dateToString('/'));
console.log(dateToString('-'));