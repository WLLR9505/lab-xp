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

interface Ponto { x: number; y: number };

class pontoXY {
    xy : Ponto;
    constructor (x : number , y : number) {
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

namespace Semana {
    export function diaDeTrabalho ( dia : diaSemana) {
        if (dia == diaSemana.domingo || dia == diaSemana.sabado) {
            return false;
        } else {
            return true;
        }
    }
}

input('Dia de trabalho?\n', function (x : number) {
    console.log(Semana.diaDeTrabalho(x));
});

input('Qual seu nome?\n', answer);
function answer(x) {
    console.log('Respondido: ' + x);
}
