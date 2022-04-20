function month_name(date){

    // let month = date.getMonth() + 1;

    const monthNames = ['January','February', 'March','April','May','June','July',
    'August', 'September','October','November', 'December'];

    return monthNames[date.getMonth()];
}
console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));



/* 9
function protect_email (user_email) {
let avg, splitted, part1, part2;
splitted = user_email.split("@");
part1 = splitted[0];
avg = part1.length / 2;
part1 = part1.substring(0, (part1.length - avg));
part2 = splitted[1];
return part1 + "...@" + part2;
};
console.log(protect_email("robin_singh@example.com"));
*/
/*function protect_email(user_email) {
let splitted = user_email.split("@");
let part1 = splitted[0];
let avg = part1.length / 2;
part1 = part1.substring(0, (part1.length - avg));
let part2 = splitted[1];
return part1 + "...@" + part2;
};
console.log(protect_email(("robin_singh@example.com")));
*/
/*function remove_first_occurrence(str, searchstr) {
let index = str.indexOf(searchstr);
if (index === -1) {
return str;
}
return str.slice(0, index) + str.slice(index + searchstr.length);
}
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
*/