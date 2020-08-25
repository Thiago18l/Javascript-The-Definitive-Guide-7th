let x;
x = 0;
console.log(x);
x = 1;
x = 0.01;

console.log(x);

x = "hello world";
console.log(x);
x = "Javascript";

x = true;
x = false;
x = null;
x = undefined;

/**
 *  Objects
 */

 let book = {
     topic: "Javascript",
     edition: "7th"
 }

console.log(book.topic, book.edition);

book.author = "Flanagan";

console.log(book.author);

/**
 * Arrays
 */

let primes = [2, 3, 5, 7];
console.log(primes[0])
primes.length
console.log(primes[primes.length - 1]);

let points = [
    { x: 0, y: 0 },
    { x: 1, y: 2 }, 
]

let data = {
    trial1: [[1, 2], [3, 4]],
    trial2: [[2, 3], [4, 5]], 
}

points.forEach((x, y) => {
    console.log(x, y)
});

data.trial1.forEach((data) => {
    console.log(data);
});
data.trial2.forEach((data) => {
    console.log(data);
})

/**
 * use of operators
 */

let value = 3 + 2; // => 5: addition
console.log(value)
value = 3 - 2; // 1: substraction
value = 3 * 2; // 6: multiplication
value = 3 / 2; // 1.5: division

console.log(points[1].y - points[0].y) // outputs 2

const stringConcat = "3" + "2";
console.log(stringConcat);

/**
 * Shorthand operators
 */
let count = 0;
count++;
count--;
count += 2;

count *= 3;
console.log(count) // output is 6

/**
 * equality and relational operators test whether two values are equal
 */
x = 2, y = 3;
console.log(x === y) // output is false
console.log(x !== y) // output is true
console.log(x < y); // output is true
console.log(x > y); // output is false
console.log(x <= y); // output is false
console.log(x >= y); // output is false

/**
 * Functions
 */
function plus1 (value) {
    return value + 1;
}
value = 3;
console.log(plus1(value)) // output is 4
let square = function (x) {
    return x * x;
}
console.log(square(64))

/**
 * Arrow functions
 */
const plusOne = x => x + 1;
console.log(plusOne(20))

const squareFunction = x => x * x;

squareFunction(4); // output is 16

/**
 * When we use functions with objects, we get methods...
 */

let array = [];
array.push(1, 2, 3, 4, 5); // add elements to array

array.reverse();
console.log(array);

points.dist = function () {
    let p1 = this[0];
    let p2 = this[1];
    let a = p2.x - p1.x;
    let b = p2.y - p1.y;
    return Math.sqrt(a * a + b * b)
}

console.log(points.dist())

function sum(array) {
    let sum = 0;
    for (let x of array) {
        sum += x;
    }
    return sum;
}
console.log(sum(array))

function factorial (n) {
    let product = 1;
    while (n > 1) {
        product *= n;
        n--;
    }
    return product;
}
console.log(factorial(5))

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    distance () {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
}
let p = new Point(10, 5);

console.log(p.distance())