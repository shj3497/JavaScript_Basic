# Array

## `Declaration`

```javascript
const arr1 = new Array();
const arr2 = [1, 2];
```

<br/>

## `Index postion`

```javascript
const fruits = ["π", "π"];
console.log(fruits); // ["π", "π"];
console.log(fruits.length); // 2
console.log(fruits[0]); // π
console.log(fruits[fruits.length - 1]); // π
```

<br/>

## `Looping over an array`

```javascript
// 1. for
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 2. for of
for (let item of fruits) {
  console.log(item);
}

// 3. forEach
fruits.forEach((item) => console.log(item));

// 4. map
fruits.map((item) => console.log(item));
```

<br/>

## `Addtion, deletion, copy`

### push: add an item to the end

```javascript
const fruits = ["π", "π"];
fruits.push("π", "π");
console.log(fruits);
// ["π", "π", "π", "π"]
```

### pop: remove an item from the end

```javascript
fruits.pop();
console.log(fruits);
// ["π", "π", "π"]
```

### unshift: add an item to the begining

```javascript
fruits.unshift("π", "π");
console.log(fruits);
// ["π", "π", "π", "π", "π"]
```

### shift: remove an item from the begining

```javascript
fruits.shift();
console.log(fruits);
// ["π", "π", "π", "π"]
```

### note! shift, unshift are slower than pop, push

- λ°°μ΄μμ μλ λͺ¨λ  λ°μ΄ν°κ° μμ§μ¬μΌνλ―λ‘ shift, unshiftλ λλ¦¬λ€.

### splice: remove an item by index position

```javascript
const fruits = ["π", "π", "π", "π", "π"];
fruits.splice(1); // ["π"]
fruits.splice(1, 1); // ["π", "π", "π", "π"]
fruits.splice(1, 1, "π₯", "π");
// ["π", "π₯", "π", "π", "π", "π"]
```

### combine two arrays

```javascript
const fruits1 = ["π", "π"];
const fruits2 = ["π", "π"];
const newFruits = fruits1.concat(fruits2);
console.log(newFruits); // ["π", "π", "π", "π"]
```

<br/>

## `Searching`

### indexOf: find the index

```javascript
const fruits = ["π", "π", "π", "π", "π"];
console.log(fruits.indexOf("π")); // 2
console.log(fruits.indexOf("π")); // -1
```

### includes

```javascript
console.log(fruits.includes("π")); // true
console.log(fruits.includes("π")); // false
```

### lastIndexOf

```javascript
fruits.push("π");
console.log(fruits.indexOf("π")); // 0;
console.log(fruits.lastIndexOf("π")); // 5
```
