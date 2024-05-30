const accountId = 8081247554
let accountEmail = 'brijesh@goole.com'
var accountPassword = '80812475'
accountCity = 'Bhatpar Rani'

// accountId = 2 // not allowed

/*
prefer not use to var 
because of issue in block scope and functional scope
*/

accountEmail = 'brijeshkushwaha@goole.com'
accountPassword = '82546565'
accountCity = 'Deoria'



console.log(accountId)

console.table([accountEmail , accountPassword , accountCity])