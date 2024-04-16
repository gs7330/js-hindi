const accountid=123456789
let testaccountEmail="h1@google.com"
var testaccountpass="12345"
accountcity="jaipur"
let accountState

//accountid=2222
testaccountEmail="h2@g.com"
testaccountpass="54321"
accountcity="Pune"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountEmail,accountPassword,accountcity,accountState]);