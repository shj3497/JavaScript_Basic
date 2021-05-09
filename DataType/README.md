# Data Types

## `let`

mutable data type

<br/>

## `var`

don't ever use this!  
var hoisting (move declaration from bottom to top)  
심지어 블록스코프 안에 있는(지역변수) 변수로 선언 후 블록스코프 밖에서 출력을 하더라도 변수가 출력된다.

```javascript
age = 4;
var age;
console.log(age);
// 4
{
  name = "shim";
}
console.log(name);
// shim;
```

### `hoisting?`

어디에 선언 했느냐에 상관없이 항상 제일위로 선언을 끌어 올려주는 것!

<br/>

## `const`

favor immutable data type always for a few reasons:

- security
- thread safety
- reduce human mistakes

<br/>

# Variable Types

- primitive, single item: number, string, boolean, null, undefined, symbol
- object, box container
- function, first-class function

## `Number`

```javascript
const infinity = 1 / 0;
const negativeinfinity = -1 / 0;
console.log(infinity);
// Infinity
console.log(negativeinfinity);
// -Infinity
```

### `bigInt`

fairly new, don't use it yet

```javascript
큰 숫자를 표기할때 사용
const bigInt = 1234567890123456789012345678901234567890n;
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
// value: 1234567890123456789012345678901234567890, type: bigint

```

<br/>

## `String`

<br/>

## `boolean`

- false: 0, null, undefined, NaN, ''
- true: any other value;

### `null`

```javascript
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);
// value: null, type: object
```

### `undefined`

```javascript
let x = undefined;
console.log(`value: ${x}, ${typeof x}`);
// value: undefined, type: undefined
```

### `symbol`

- create unique identifiers for objects
- map이나 다른 자료구조에서 고유한 식별자가 필요하거나, 아니면 동시에 다발적으로 영향을 미치는 코드에서 우선순위를 주고 싶을 때 정말 고유한 식별자를 부여하고 싶을 때 사용

```javascript
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);
// false

// string이 똑같다면 동일한 symbol을 만든다.
const gSymbol1 = Symbol.for("id");
const gSymbol2 = Symbol.for("id");
console.log(gSymbol1 === gSymbol2);
// true

console.log(`value: ${gSymbol1}, type: ${typeof gSymbol1} `);
// Error

// .description을 붙여줘야 출력이 된다.
console.log(`value: ${gSymbol1.description}, type: ${typeof gSymbol1} `);
// value: id, type: symbol
```

<br/>

## `Object`

- real-life object, data structure
- 한번 선언된 object는 다른 object로 할당이 불가능하다.
- 하지만 변경은 가능

<br/>

# Dynamic typing

### `Dynamically type language`

- Javascript
- 선언할 때 어떤 type인지 선언하지 않고, runtime 할당된 값에 따라서 type이 변경 될 수 있다.

### `Statically type language`

- C, Java
- 변수를 선언 할 때 어떤 type인지 결정해서 타입을 같이 선언
