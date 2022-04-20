// Generators

// ex. dando pausas na chamada de uma fuction
// coloca * na function*, e em cada pausa coloca yield.
/*
function* hello() {
    console.log('Hello');
    yield;  // pode colocar valores ex. yield1;  yield2;

    console.log('From');
    yield;

    console.log('Function');
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next());
*/

// ex. colocando dados de formas diferentes
/*
function* hello() {
    console.log('Hello');
    yield 1; 

    console.log('From');
    const value = yield 2;

    console.log(value);
}

const it = hello();

console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));
*/







//ranges numeros infinitos
/*
function* naturalNumbers() {
    let number = 0;
    while (true) {
        yield number;
        number++;
    }
}

const it = naturalNumbers();

console.log(it.next()); // percorre o while conforme quantas vezes eu chamar
console.log(it.next());
console.log(it.next());
console.log(it.next());
*/




//ex. Generator em objetos

const obj = {
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i]
        }
    }
};

for (let value of obj) {
    console.log(value);
}
