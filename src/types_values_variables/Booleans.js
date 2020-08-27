/*
A boolean value represents truth or falsehood, on or off, yes or no.
There are only two possible values of this type. The reserved words
true and false evaluate to these two values.
*/
let a = 4;
let b = 0;
console.log(a === 4); // output is true

if (a === 4) {
    b += 4;
}
console.log(b)

let c = true;
c.toString(); // boolean values has a toString method.