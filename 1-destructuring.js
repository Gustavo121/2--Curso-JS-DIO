// forma muito grande de pegar cada parametro do array
 /*
var arr = ['Apple', 'Banana', 'Orange',['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];
*/





// forma muito grande de pegar cada parametro obj
/*
var obj = {
    name: 'Celso'
}

var name = obj.name;
*/








// Destructuring Assignment

//ex. arrays 

/*
var [apple2, banana2, orange2, [tomato2]] = [
    'Apple', 
    'Banana', 
    'Orange',
    ['tomato']
];

console.log(tomato2);
*/





//ex. objetos

/*
var obj = {
    name: 'Gustavo'
};

var { name } = obj;

console.log(name);
*/




//destruindo name

/*
var { name: name2 } = obj;

console.log(name2);
*/





//obj dentro de obj

/*
var obj = {
    name: 'Gustavo',
    props: {
        age:26
    }
};

var {
    props: { age }
} = obj;

console.log(age);
*/




//array dentro de objetos

/*
var obj = {
    name: 'Gustavo',
    props: {
        age:26,
        favoriteColors: ['black', 'blue']
    }
};

// modo trabalhoso
var color1 = obj.props.favoriteColors[0];

//destructuring
var {
    props: { age: age2, favoriteColors: [color1, color2] }
} = obj;

console.log(age2);
*/

//ex.

/*
var arr = [{ name: 'Apple', type: 'fruit' }];

var fruit1 = arr[0].name;
*/

// destructuring

/*
var [{ name: fruitName }] = arr;

console.log(fruitName);
*/




//functions

function sum(arr) {
    return arr[0] + arr [1];
}

console.log(sum([5, 5]));

//destructuring

function sum([a, b] = []) {
    return a + b;
}

console.log(sum([5, 5]));


//valor default

function sum([a, b] = [0, 0]) {
    return a + b;
}

console.log(sum([5, 5]));

//object

function sum({a, b}) {
    return a + b;
}

console.log(sum({ a: 5 , b: 5}));