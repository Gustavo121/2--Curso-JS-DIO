// promises

const doSomethingPromise = () => new Promise((resolve,reject) => {
  // throw new Error('Something went wrong'); // acusa error
  setTimeout(function() {
      // did something
      resolve('First data');
  }, 1000);
});

const doOtherThingPromise = () => new Promise((resolve,reject) => {
  setTimeout(function() {
        // did something
    resolve('Second data');
  }, 1000);
});
                                                // para tratar o erro coloca cath, não precisa de try
// doSomethingPromise.then(data => console.log(data)).catch(error => console.log(error));

Promise.all([doSomethingPromise(), doOtherThingPromise()]).then((data) => { //executa as duas chamando em 2 arrays
  // console.log(data);
  // caso queira letras separadas
  console.log(data[0].split(''));
  console.log(data[1].split(''));
});

// Promise.race([doSomethingPromise(), doOtherThingPromise()]).then((data) => { //executa as duas chamando em 2 arrays
//   console.log(data)          a promise que resolve primeiro retorna.




/*
doSomethingPromise()
  .then(data => { 
    console.log(data.split(''));        chama sequencial, uma apos a outra.
    return doOtherThingPromise() 
  })
  .then(data2 => console.log(data2.split('')));
*/ 

// Promise tem 3 estados
// Pending - Pendente
// Fulfilled - Terminou de executar
// Rejected - caso aconteça algum erro


/*
// callbacks
function doSomething(callback) {
  setTimeout(function() {
    // did something
    callback('First data');
  }, 1000);
}

function doOtherThing(callback) {
  setTimeout(function() {
    // did other thing
    callback('Second data');
  }, 1000);
}

function doAll() {
  doSomething(function(data) {
    var processedData = data.split('');

      doOtherThing(function(data2) {
        var processedData2 = data2.split('');

          setTimeout(function() {
            console.log(processedData, processedData2);
          }, 1000)
        });
    });
}

doAll();


// tratamento de erro  "cath()"
/*

function doAll() {
    try {
        doSomething(function(data) {
            var processedData = data.split('');

            try {
              doOtherThing(function(data2) {
                  var processedData2 = data2.split('');
                
                  try {
                    setTimeout(function() {
                        console.log(processedData, processedData2);
                    }, 1000)
                } catch(err) {
                    // handle error
                }
              });
            } catch(err) {
                // handle error
            }
        });
    } catch(err) {
    // handle error
    }
}

doAll();

*/

