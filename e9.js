function emailHider(email){
    let splittedEmail = email.split("@");
    let part1 = splittedEmail[0];
    let part2 = splittedEmail[1];
    let ave = part1.length / 2 ;
    part1 = part1.substring(0, (part1.length - ave));
    return part1 + "...@" + part2;
}
console.log(emailHider("robin_singh@example.com"));
