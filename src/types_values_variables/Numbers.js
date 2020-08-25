/*
 JavaScript’s primary numeric type, Number, is used to represent
integers and to approximate real numbers. JavaScript represents
numbers using the 64-bit floating-point format defined by the IEEE
754 standard, 1 which means it can represent numbers as large as
±1.7976931348623157 × 10 308 and as small as ±5 × 10 −324 .

*/

0
3
10000000

0xff // > 255: (15*16 + 15)
0xBADCAFE // 195939070
console.log(0xBADCAFE)

// binary
let binary = 0b10101;
console.log(binary);

// octal
let octal = 0o377;
console.log(octal);

// floating points literals
3.14
2345.6789
.333333333333333333
6.02e23
// 6.02 × 1023
1.4738223E-32 // 1.4738223 × 10−32

Math.pow(2, 53);
Math.round(.6);
Math.ceil(.6);
Math.floor(.6);
Math.abs(-5);
Math.sqrt(3)
Math.pow(3, 1 / 3)
Math.sin(0)
Math.log(10)
Math.log(100) / Math.LN10
Math.log(512) / Math.LN2
Math.exp(3)

console.log(Math.cbrt(27))

let x = .3 - .2;

let y = .2 - .1;

console.log(x === y)

/**
 * Arbitrary precision integers with bigint
 */
let bigint = 0b111111n;
console.log(bigint)


/**
 * Dates and Times
 */

 let timestamp = Date.now();
 let now = new Date();
 let ms = now.getTime();
 let iso = now.toISOString();
 console.log(timestamp, now, ms, iso);