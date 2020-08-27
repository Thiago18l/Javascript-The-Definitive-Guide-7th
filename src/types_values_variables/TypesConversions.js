/*
JavaScript is very flexible about the types of values it requires. We’ve
seen this for booleans: when JavaScript expects a boolean value, you
may supply a value of any type, and JavaScript will convert it as
needed. Some values (“truthy” values) convert to true and others
(“falsy” values) convert to false. The same is true for other types: if
JavaScript wants a string, it will convert whatever value you give it to a
string. If JavaScript wants a number, it will try to convert the value yougive it 
to a number (or to NaN if it cannot perform a meaningful conversion).
*/
const ten = 10;
console.log(ten + " Objects"); // output is 10 Objects, converting the number to a string
console.log("7" * "4") // converting the strings to numbers.
let n = 1 - "x"; // Not a number, string cant convert to a number...
console.log(n + " Objects"); // NaN converts to string "NaN"