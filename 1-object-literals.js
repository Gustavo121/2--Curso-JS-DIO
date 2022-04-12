var obj = {
    prop1: 'Digital Innovation One'
}


// outra maneira

var prop1 = 'Digital Innovation One'

var obj = {
    prop1: prop1 // repete a palavra
};

console.log(obj)


// com ecma6


var prop1 = 'Digital Innovation One'

var obj = {
    prop1 // não precisa repetir a palavra
};

console.log(obj)


// usando em função (short hand)

function method1() {
    console.log('method called');
}

var obj = {
    method1
};

obj.method1();



// outra forma

var obj = {
    sum: function sum(a, b) {   // pode ser function anonima tambem ex. function(a, b)
        return a + b;
    }
};

console.log(obj.sum(1, 5));


// com ecma6   (short hand)

var obj = {
    sum(a, b) {
        return a + b;
    }
};
console.log(obj.sum(1, 5));
