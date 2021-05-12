# Array

## `Declaration`

```javascript
const arr1 = new Array();
const arr2 = [1, 2];
```

<br/>

## `Index postion`

```javascript
const fruits = ["🍅", "🍌"];
console.log(fruits); // ["🍅", "🍌"];
console.log(fruits.length); // 2
console.log(fruits[0]); // 🍅
console.log(fruits[fruits.length - 1]); // 🍌
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
const fruits = ["🍅", "🍌"];
fruits.push("🍓", "🍑");
console.log(fruits);
// ["🍅", "🍌", "🍓", "🍑"]
```

### pop: remove an item from the end

```javascript
fruits.pop();
console.log(fruits);
// ["🍅", "🍌", "🍓"]
```

### unshift: add an item to the begining

```javascript
fruits.unshift("🍓", "🍋");
console.log(fruits);
// ["🍓", "🍋", "🍅", "🍌", "🍓"]
```

### shift: remove an item from the begining

```javascript
fruits.shift();
console.log(fruits);
// ["🍋", "🍅", "🍌", "🍓"]
```

### note! shift, unshift are slower than pop, push

- 배열안에 있는 모든 데이터가 움직여야하므로 shift, unshift는 느리다.

### splice: remove an item by index position

```javascript
const fruits = ["🍎", "🍌", "🍓", "🍑", "🍋"];
fruits.splice(1); // ["🍎"]
fruits.splice(1, 1); // ["🍎", "🍓", "🍑", "🍋"]
fruits.splice(1, 1, "🥝", "🍇");
// ["🍎", "🥝", "🍇", "🍓", "🍑", "🍋"]
```

### combine two arrays

```javascript
const fruits1 = ["🍎", "🍌"];
const fruits2 = ["🍓", "🍑"];
const newFruits = fruits1.concat(fruits2);
console.log(newFruits); // ["🍎", "🍌", "🍓", "🍑"]
```

<br/>

## `Searching`

### indexOf: find the index

```javascript
const fruits = ["🍎", "🍌", "🍓", "🍑", "🍋"];
console.log(fruits.indexOf("🍓")); // 2
console.log(fruits.indexOf("🍆")); // -1
```

### includes

```javascript
console.log(fruits.includes("🍓")); // true
console.log(fruits.includes("🍆")); // false
```

### lastIndexOf

```javascript
fruits.push("🍎");
console.log(fruits.indexOf("🍎")); // 0;
console.log(fruits.lastIndexOf("🍎")); // 5
```
