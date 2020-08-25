/**
 * String literals
 */
"" // > empty string: it has no zero characters
let singlequotes = 'testing'
let doublequotes = "3.14"
let backticks = `"She said 'hi'", he said`

let msg = "Hello, " + "World";
let name = "Thiago";
let greeting = "Welcome to my blog," + " " + name;
console.log(greeting)

console.log(name.length);
console.log(name.substring(1, 4));
console.log(name.slice(1,4));
console.log(name.split("i"))
console.log(" test ".trim())

/**
 * Template Literals
 */
name = "Bill";
let greet = `Hello ${name}.`;
console.log(greet);

let regex = /^HTML/; // match the letters HTML at the start of a string.
let regex2 = /[1-9][0-9]*/; // Match a nonzero digit, followed by # of digits.
let text = "Testing: 1, 2, 3";
let pattern = /\d+/g;
console.log(pattern.test(text))
console.log(text.search(pattern))
console.log(text.match(pattern))
console.log(text.replace(pattern, "#"))
console.log(text.split(/\D+/))