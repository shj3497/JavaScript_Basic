# Function

- fundamental building block in the program
- subprogram can be used multiple times
- performs a task or calculates a value

## `Function declaration`

- function name(param1, param2){body... return;}
- one function === one thing
- naming: doSomething, command, verb
- e.g. createCardAndPoint -> createCard, createPoint
- function is object in JS

<br/>

## `Parameters`

- premitive parameters: passed by value
- object parameters: passed by reference

<br/>

## `Default parameters (added in ES6)`

```javascript
function showMessage(message, from) {
  console.log(`${message} by ${from}`);
}
showMessage(`Hi!`);
// Hi! by undefined

// ----------------------------------- //

// ES6에 추가된 문법으로 변수에 값이 정의되지 않을때 default값을 정의해 줄 수 있다.
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage(`Hi!`);
// Hi! by unknown
```

<br/>

## `Rest parameters (added in ES6)`

```javascript
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  // for loop를 사용하지 않고 간단하게 출력
  for (const arg of args) {
    console.log(arg);
  }

  // forEach()를 사용하여 출력
  args.forEach((arg) => console.log(arg));
}
printAll("dream", "coding", "shim");
// ...은 배열로 받는다.
```

<br/>

## `Local scope`

```javascript
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello"; // local variable
  console.log(message);
  console.log(globalMessage);
}
```

<br/>

## `Return a value`

```javascript
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`);
// sum: 3
```

<br/>

## `Early return, early exit`

### Bad

```javascript
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
    // 가독성이 떨어진다.
  }
}
```

### Good

```javascript
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}
```

<br/>

# First-class function

- functions are treated like any other variable
- can be assigned as a value to variable
- can be passed as an argument to other functions.
- can be returned by another function

## `Function expression`

- a function declaration can be called earlier than it is defined. (hoisted)
- a function expression is created when the execution reaches it.

```javascript
print(); // Error >> 호이스팅 되지 않는다.
const print = function () {
  console.log("print");
};
print(); // print
const printAgain = print;
printAgain(); // print
```

```javascript
print(); // print 출력된다. >> 호이스팅된다.
// named function
// better debugging in debugger's stack traces.
// recursions(재귀)
function print() {
  console.log("print");
}
```

<br/>

## `Callback function using function expression`

```javascript
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log("yes!");
};
const printNo = function () {
  console.log("no!");
};
randomQuiz("love you", printYes, printNo);
```

<br/>

## `Arrow function`

- Always anonymous

```javascript
const simplePrint = function () {
  console.log("simplePrint!");
};

const simplePrint = () => console.log("simplePrint");
const add = (a, b) => a + b; // 자동 return
// 박스로 묶여있으면 return; 을 써줘야한다.
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};
```

<br/>

## `IIFE`

### Immeiately Invoked Function Expression

```javascript
// 따로 호출하지 않아도 선언과 동시에 출력이 된다.
(function hello() {
  console.log("IIFE");
})();
// IIFE
```
