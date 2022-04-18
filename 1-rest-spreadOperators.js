// antes do ecma6, usava "arguments" dessa forma:

function sum(a, b) {
    console.log(arguments);

    return a + b;
}

console.log(sum(5, 5, 5, 2, 3));




// forma normal utilizando FOR

function sum(a, b) {
    var value = 0;

    for (var i = 0; i < arguments.length; i++) {
        value += arguments[i];
    }

    return value;
}

console.log(sum(5, 5, 5, 2, 3));



// REST OPERATOR = ...    
// diferente de arguments que tras um object, rest operator tras um array para manipulação de elementos


function sum(...args) {
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(sum(5, 5, 5, 2, 3));


// pode ser utilizado para pegar o restante dos argumentos da função.

const sum = (a, b, ...rest) => {
    console.log(a ,b, rest);
}

console.log(sum(5, 5, 5, 2, 3));



// rest operator, spread operator
//  spread - utilizado em strings, arrays, objects e objetos iteraveis

const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => {
    return multiply(...rest);
};

console.log(sum(5, 5, 5, 2, 3));

// ex. spread quebrando cada letra da frase(string) e passar para uma proxima função

const str = 'Digital Innovation One';

function logArgs(...args) {
    console.log(args);
}

logArgs(...str);


//ex.2 com array

const arr = [1, 2, 3, 4];

function logArgs() {
    console.log(arguments);
}

logArgs(...arr);

// ex. cada item, como argumento - spread operator

const strr = 'Digital Innovation One';
const arrr = [1, 2, 3, 4];

function logArgs(a, b, c) {
    console.log(a, b, c);
}

logArgs(...arr);

//ex. juntar os 2 arrays

const arr2 = [5, 6, 7].concat(arr);

console.log(arr2)

// ex. para ordem fica certa

const arr2 = arr.concat([5, 6, 7]);

console.log(arr2);


// ex com spread operator

const arr2 = [...arr, 5, 6, 7];
const arr2 = [5, 6, 7, ...arr];
console.log(arr2);


//ex juntando 2 arrays e colocando mais 3 conteudos

const arr3 = [...arr2, ...arr, 0, 0, 0];
console.log(arr3)

// ex podemos clonar array

const arrClone = [...arr];

console.log(arrClone)




// Objetos literals - com spread so pode ser usado para construir novos objetos.
// caso vc coloque as chaves com os mesmos nomes, prevalece o valor sempre da primeira chamada.

const obj = {
    test: 123
};

const obj2 = {
    ...obj,
    test2: 'hello'
}

console.log(obj2);

// shadow clone, clone raso.

const obj = {
    test: 123,
    subObj: {
        test: 123
    }
};

const obj2 = { ...obj };

obj2.subObj.test = 456;

console.log(obj);

//ex para nao ter propriedades alterada

const obj2 = { ...obj, subObj: { ...obj.subObj } };

obj2.subObj.test = 456;

console.log(obj);