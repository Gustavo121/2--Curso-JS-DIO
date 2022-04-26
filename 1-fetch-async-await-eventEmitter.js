//Fetch api
/*
fetch('http://localhost:8080/data.json')
  .then(responseStream => {
      if (responseStream.status === 200) {
        return responseStream.json();
      } else {
          throw new Error('Request error');
      }
  })
  .then(data => {
      console.log(data);
  })
  .catch(err => {
      console.log('Error: ', err);
  });
  */






// ES7 -Async / Await
// constroi promises de maneira simples
/*
const simpleFunc = async () => {
  throw new Error('Oh no!');
    return 12345;;
};

simpleFunc()
  .then(data => {
      console.log(data);
  })
  .catch(err => {
      console.log(err);
  });
*/


// Resolve uma promise de cada vez sequencialmente

/*
const asyncTimer = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(12345);
    }, 1000)
  });

const simpleFunc = async () => {
  const data = await asyncTimer();
  console.log(data);
  const dataJSON = await fetch('/data.json').then(resStream => 
    resStream.json()
  );

  return dataJSON;
};

simpleFunc()
  .then(data => {
      console.log(data);
  })
  .catch(err => {
      console.log(err);
  });
*/



// Resolve todas de uma vez

const asyncTimer = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(12345);
    }, 1000)
  });

const simpleFunc = async () => {
  const data = await Promise.all([
      asyncTimer(),
      fetch('/data.json').then(resStream => resStream.json())
    ]);

  return data;
};

simpleFunc()
  .then(data => {
      console.log(data);
  })
  .catch(err => {
      console.log(err);
  });