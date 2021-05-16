// function fetchUser() {
//   // do network request in 10 secs...

//   return new Promise((resolve, reject) => {
//     // return 'shim';
//     resolve('shim');
//   })
// }
// const user = fetchUser();
// console.log(user); // Promise {<fulfilled>: "shim"}
// user.then(console.log); // shim

// 1. async
async function fetchUser() {
  // do network request in 10 secs...
  return 'shim';
}
const user = fetchUser();
console.log(user);
user.then(console.log);

// 2. await
function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(){
  await delay(2000);
  return '🍎';
}

// function getBanana(){
//   return delay(1000).then(() => '🍌')
// }

async function getBanana(){
  await delay(1000);
  return '🍌';
}


// function pickFruits(){
//   return getApple().then(apple => {
//     return getBanana().then(banana => `${apple} + ${banana}`)
//   })
// }

// async function pickFruits(){
  
//   const apple = await getApple(); // 1초
//   const banana = await getBanana(); // 1초
  
  // 총 2초가 걸린다.
//   return `${apple} + ${banana}`
// }

async function pickFruits(){
  
  // getApple()과 getBanana()가 동시에 만들어진다.
  // 병렬적으로 생성
  const applePromise = getApple();
  const bananaPromsie = getBanana();
  const apple = await applePromise; 
  const banana = await bananaPromsie; 
  
  // 총 1초가 걸린다.
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log)

// 3. useful Promise APIs
function pickAllFruits(){
  return Promise.all([getApple(), getBanana()]).then(fruits => fruits.join(' + '));
}
pickAllFruits().then(console.log);

function pickOnlyOne(){
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);