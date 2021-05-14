// 1. Producer
// when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  // doing some heavy work(network, read files)
  console.log('doing something...')
  setTimeout(() => {
    resolve('shim'); // 성공했을 때를 정의
    reject(new Error('no netWork')) // 실패했을 때를 정의
  }, 2000)
});

// 2. Consumers: then, catch, finally
promise.then((value) => {
  // promise에서 정상적으로 통신된어서 리턴되어지는 resolve값이 넘어온다.
  console.log(value); 

}).catch(error => {
  console.log(error);
}).finally(() => {
  console.log('finally');
});


// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 1000)
})

fetchNumber
  .then(num => num *2)
  .then(num => num*3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 1000)
    })
  }).then(num => console.log(num));


console.clear();

// 4. Error Handling
const getHen = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('🐔');
    }, 1000)
  })
};

const getEgg = hen => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${hen} => 🥚`);
      // reject(new Error(`error! ${hen} => 🥚`));
    }, 1000)
  })
};

const cook = egg => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(`${egg} => 🍳`)
    }, 1000);
  })
};

getHen()
  // 한가지의 변수만 받아오는 경우 생략가능하다.
  // .then(hen => getEgg(hen))
  .then(getEgg)
  .catch(error => {
    return '🍔'
  })
  .then(egg => cook(egg))
  .then(meal => console.log(meal))
  .catch(error => console.log(error));
