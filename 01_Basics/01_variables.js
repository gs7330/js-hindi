const accountid=123456789
let accountEmail="h1@google.com"
var accountPassword="12345"
accountcity="jaipur"
let accountState

//accountid=2222
accountEmail="h2@g.com"
accountPassword="54321"
accountcity="Pune"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountEmail,accountPassword,accountcity,accountState]);