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

