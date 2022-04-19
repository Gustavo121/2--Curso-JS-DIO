// Symbols
// não pode ser chamado com new Symbol();
// Symbols é um identificador unico, nao é uma string, nem um texto.

//ex.
/*
const uniqueId = Symbol();

console.log(uniqueId);
*/







// mesmo com valores iguais, ele emite um false

// ex.
/*
const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

console.log(uniqueId === uniqueId2);
*/






// utilizado como uma propriedade "privada", onde você deseja que nao seja alterado por outra pessoa

// ex.
/*
const uniqueId = Symbol('Hello');

const obj = {
    [uniqueId]: 'Hello'
};

console.log(obj)

para visualizar, chamar esse symbols deve usar: Object.getOwnPropertySymbols(obj)
*/





// Well known symbols

Symbol.iterator
Symbol.split
Symbol.toStringTag

// adicionando propriedade para um obj
/*
const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator] () {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                value: this.values[i - 1],
                done: i > this.values.length
            };
        }
    };
}
*/

// ex. 2 usando for of
/*
for (let value of obj) {
    console.log(value);
}
*/

//ex. spread
/*
const arr2 = [...obj];

console.log(arr2);
*/





// assim ele consegue listar dados dentro de um array, invocando um a um

// ex.
/*
const arr = [1, 2, 3, 4];

const it = arr[Symbol.iterator]();
*/

/*
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
*/



//ex. 2
/*
Symbol.iterator;

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One';

console.log(arr[Symbol.iterator]().next());
*/





//ex. while
/*
while (true) {
    let { value, done } = it.next();

    if (done) {
        break;
    }

    console.log(value);
}
*/






//ex. for of
/*
const arr = [1, 2, 3, 4];

for (let value of arr) {
    console.log(value);
}
*/