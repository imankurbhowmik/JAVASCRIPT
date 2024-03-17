console.log("Ankur")
const accntId = 12345
let accntName = "Ankur"

// var is not used for issue of scope
var accntemail = "jbdksjb@google.com" 

// defining is recommended
accntPassword = "37462387"

// would show "undefined" if value is not put : no value assigned
let accntCity;

console.log(accntId)
console.log(accntName)

// accntId = 32674283 // assignment to const is not possible

accntName = "Bhowmik"
console.log(accntId)
console.log(accntName)
console.log(accntPassword);

// to get all the values in tabular form ||
console.table([accntId, accntName, accntPassword,accntCity])