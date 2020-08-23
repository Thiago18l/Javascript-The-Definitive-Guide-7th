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

