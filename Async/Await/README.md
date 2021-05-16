# Async Await

- clear style of using promise
- 예제코드

```javascript
function fetchUser() {
  // do network request in 10 secs...
  return new Promise((resolve, reject) => {
    // return 'shim';
    resolve("shim");
  });
}
const user = fetchUser();
console.log(user); // Promise {<fulfilled>: "shim"}
user.then(console.log); // shim
```

## `async`

```javascript
async function fetchUser() {
  // do network request in 10 secs...
  return "shim";
}
const user = fetchUser();
console.log(user); // Promise {<fulfilled>: "shim"}
user.then(console.log); // shim
```

<br/>

## `await`

- async가 붙은 함수 안에서만 쓸 수 있다.

```javascript
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(1000);
  return "🍎";
}

// function getBanana(){
//   return delay(1000).then(() => '🍌')
// }

async function getBanana() {
  await delay(1000);
  return "🍌";
}

// 1. 기존의 then()함수를 써서 리턴
// function pickFruits(){
//   return getApple().then(apple => {
//     return getBanana().then(banana => `${apple} + ${banana}`)
//   })
// }

// 2. async await을 적용하여 간편하게 표기
async function pickFruits() {
  const apple = await getApple(); // 1초
  const banana = await getBanana(); // 1초

  // 총 2초가 걸린다.
  return `${apple} + ${banana}`;
}

// 3. 현재 getApple()과 getBanana()는 서로 연관이 없으므로 동시에 처리
async function pickFruits() {
  // getApple()과 getBanana()가 동시에 만들어진다.
  // 병렬적으로 생성
  const applePromise = getApple();
  const bananaPromsie = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromsie;

  // 총 1초가 걸린다.
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);
```

<br/>

## `useful Promise APIs`

### Promise.all()

```javascript
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then((fruits) =>
    fruits.join(" + ")
  );
}
pickAllFruits().then(console.log);
// 🍎 + 🍌
```

### Promise.race()

- 리턴되어지는것 중 가장 빠른것만 출력한다.

```javascript
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000);
  return "🍎";
}

async function getBanana() {
  await delay(1000);
  return "🍌";
}

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);
// 🍌
```
