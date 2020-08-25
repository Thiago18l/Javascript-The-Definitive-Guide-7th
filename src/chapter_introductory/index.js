// Exercices

for (let linha = "#"; linha.length < 8; linha += "#") console.log(linha)



let hashtag = '';
for (let i = 0; i < 7; i++) {
    console.log(hashtag += "#")
}

for (let n  = 1; n < 100; n++) {
    let saida = "";
    if (n % 3 == 0) saida += "Fizz"
    if (n % 5 == 0) saida += "Buzz"
    console.log(saida || n);
}

let size = 8;
let board = '';
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if ((j + i) % 2 == 0) {
            board += " ";
        } else {
            board += "#"
        }
    }
    board += "\n";
}
console.log(board)