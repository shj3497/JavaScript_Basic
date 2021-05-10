## `Increment and decrement operators`

### preIncrement

```javascript
let counter = 2;
const preIncrement = ++counter;
// counter = counter + 1;
// preIncrement = counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
// preIncrement: 3, counter: 3
```

### postIncrement

```javascript
let counter = 2;
const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
// postIncrement: 2, counter: 3
```

<br/>

## `Logical operators`

### || (or)

- finds the first truthy value
- 하나라도 true면 true를 리턴하므로 첫 비교 연산자가 true면 나머지는 무시한다.

### && (and)

- finds the first falsy value
- 하나라도 false면 false를 리턴하므로 첫 비교 연산자가 false면 나머지는 무시한다.

### ! (not)

<br/>

## `Equality`

### loose equality(==), with type conversion

- type은 검사하지 않는다.

```javascript
const stringFive = "5";
const numberFive = 5;
console.log(stringFive == numberFive);
console.log(stringFive != numverFive);
// ture;
// false;
```

### strict equality(===), no type conversion

- type도 검사한다.

```javascript
const stringFive = "5";
const numberFive = 5;
console.log(stringFive === numberFive);
console.log(stringFive !== numverFive);
// false;
// true;
```

```javascript
// object equality by reference
const myInfo1 = { name: "shim" };
const myInfo2 = { name: "shim" };
const myInfo3 = myInfo1;
console.log(myInfo1 == myInfo2); // false
console.log(myInfo1 === myInfo2); // false
console.log(myInfo1 === myInfo3); // true
```

<br/>

## `Conditional operators`

- if
- else if
- else

<br/>

## `Thrnary operator`

- condition ? value1 : value2;

```javascript
console.log(name === "shim" ? "yes" : "no");
```

<br/>

## `Switch statement`

- use for multiple if checks
- use for enum-like value check
- use for multiple type checks in JS

```javascript
const browser = "IE";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("love you!");
    break;
  default:
    console.log("same all!");
    break;
}
```

<br/>

## `Loops`

### while

- while loop, while the condition is truthy
- body code is executed.

```javascript
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}
// while: 3
// while: 2
// while: 1
```

### do while

- body code is executed first
- then check the condition.

```javascript
let i = 0;
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);
// do while: 0
// do를 무조건 시행한다.
```

### for

- for(begin; condition; step)

```javascript
for (let i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}
```
