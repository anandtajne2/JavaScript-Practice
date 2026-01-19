// 1 using constant - value does not gets change

const accountId = 144355;

// let  - resolve scope issue
let accountEmail = "anand.tajne@gmail.com";

// var 
var accountPassword = "12308";
/*
prefer not to use var 
because of issue in block scope and functional scope 
*/

// not providing let | var | const 
accountCity="Pune";

// const var value can not be change
//accountId = 22;

accountEmail = "hc@vc.com"
accountPassword = "12312343245"
accountCity = "Mumbai"

console.log(accountId);

// console.log(accountEmail);
// console.log(accountPassword);
// console.log(accountCity);

let accountState;

// to avoid print separatly using console table fun 

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// ┌─────────┬───────────────┐
// │ (index) │ Values        │
// ├─────────┼───────────────┤
// │ 0       │ 144355        │
// │ 1       │ 'hc@vc.com'   │
// │ 2       │ '12312343245' │
// │ 3       │ 'Mumbai'      │
// └─────────┴───────────────┘