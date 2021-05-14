# Promise

- 비동기를 간편하게 처리할수 있도록 도와주는 API
- Promise is a JavaScript object for asynchronous operation.

- State : pending(진행중) -> fulfilled(완료) or rejected(문제생김)
- Producer vs Consumer

## `Producer`

### when new Promise is created, the executor runs automatically.

```javascript
const promise = new Promise((resolve, reject) => {
  // doing some heavy work(network, read files)
  util.log("doing something...");
  setTimeout(() => {
    // resolve('shim'); // 성공했을 때를 정의
    reject(new Error("no netWork")); // 실패했을 때를 정의
  }, 2000);
});
```

<br/>

## `Consumer`

### then

### catch

- 예외 처리구문

### finally

- try구문에서 성공하든, 실패하든 무조건 실행시킨다.

```javascript
promise
  .then((value) => {
    // promise에서 정상적으로 통신된어서 리턴되어지는 resolve값이 넘어온다.
    util.log(value);
  })
  .catch((error) => {
    util.log(error);
  })
  .finally(() => {
    util.log("finally");
  });
/*
14 May 20:17:52 - doing something...
14 May 20:17:54 - Error: no netWork
14 May 20:17:54 - finally
*/
```

<br/>

## `Promise chaining`

```javascript
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
});

// then은 값을 리턴할 수 도 있고, Promise를 리턴할 수 도 있다.
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 1000);
    });
  })
  .then((num) => console.log(num)); // 5
```

<br/>

## `Error Handling`

```javascript
const getHen = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("🐔");
    }, 1000);
  });
};

const getEgg = (hen) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(`${hen} => 🥚`);
      reject(new Error(`error! ${hen} => 🥚`));
    }, 1000);
  });
};

const cook = (egg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${egg} => 🍳`);
    }, 1000);
  });
};

getHen()
  // 한가지의 변수만 받아오는 경우 생략가능하다.
  // .then(hen => getEgg(hen))
  .then(getEgg)
  .catch((error) => {
    return "🍔";
  })
  .then((egg) => cook(egg))
  .then((meal) => console.log(meal))
  .catch((error) => console.log(error));

// 1. getEgg가 resolve일 때
// 🐔 => 🥚 => 🍳
// 2. getEgg가 reject일 때
// 🍔 => 🍳
```

<br/>

## `Callback Hell example Refactoring`

### [Callback Hell example](../Callback/index.js)

### [Callback Hell example Refactoring](./callback-to-promise.js)

```javascript
class UserStorage {
  loginUser = (id, password) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === "shim" && password === "hyeokjin") ||
          (id === "coder" && password === "academy")
        ) {
          resolve(id);
        } else {
          reject(new Error("not Found"));
        }
      }, 2000);
    });

  getRoles = (user) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === "shim") {
          resolve({ name: "shim", role: "admin" });
        } else {
          reject(new Error("no access"));
        }
      }, 1000);
    });
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

userStorage
  .loginUser(id, password)
  .then((user) => userStorage.getRoles(user))
  .then((userWithRole) => {
    alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role}`);
  })
  .catch((error) => console.log(error));
```
