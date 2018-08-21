console.log('Hello TypeScript');

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
