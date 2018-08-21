console.log('Hello TypeScript');
import readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function input(text, callback) {
    rl.question(text, function (x) {
        rl.close();
        callback(x);
    })
}


class pontoXY {
    x : number;
    y : number;
    constructor (x : number, y : number) {
        this.x = x;
        this.y = y;
    }
}

var p1 = new pontoXY(5, 9);
console.log(p1);

enum diaSemana {
    domingo,    //0
    segunda,
    terca,
    quarta,
    quinta,
    sexta,
    sabado
}

console.log(diaSemana[3])   //out: quarta

input('Qual seu nome?\n', answer);
function answer(x) {
    console.log('Respondido: ' + x);
}
