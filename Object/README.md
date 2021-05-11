# Object

- one of the JavaScript's data types.
- a collection of related data and/or functionality.
- Nearly all objects in JavaScript are instances of Object.
- object = { key : value };

## `Literals and Properties`

```javascript
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const shim = { name: "shim", age: 28 };
print(shim); // shim 28

// with JavaScript magic(dynamically typed language)
// can add properties later
// 유지보수 능력이 떨어지므로 권장X
shim.hasJob = true;
console.log(shim.hasJob); // true

// can delete properties later
delete shim.hasJob;
console.log(shim.hasJob); // undefined
```

<br/>

## `Computed properties`

- key should be always string

```javascript
console.log(shim.name); // shim
console.log(shim["name"]); // shim
console.log(shim[name]); // undefined

shim["hasJob"] = true;
console.log(shim.hasJob);

function printValue(obj, key) {
  console.log(`obj.key : ${obj.key}`);
  console.log(`obj[key] : ${obj[key]}`);
}
printValue(shim, "name");
// obj.key : undefined
// obj[key] : shim
```

<br/>

## `Property value shorthand`

```javascript
const person1 = { name: "bob", age: 2 };
const person2 = makePerson("shim", 28);

function makePerson(name, age) {
  // key와 value의 이름이 동일하다면 생략가능하다.
  return {
    name: name,
    age,
  };
}
console.log(person4); // { name: 'shim', age: 28 }
```

<br/>

## `Constructor Function`

### 순수하게 Object만 생성하는 함수의 경우

- 함수이름은 대문자로 시작
- return 없이 class에서 constructor로 생성하는것 처럼 한다.

```javascript
const person3 = new Person("shim", 28);
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}
console.log(person3);
// Person { name: 'shim', age: 28 }
```

<br/>

## `in operator`

### property existence check (key in obj)

```javascript
console.log("name" in person3); // true
console.log("age" in person3); // true
console.log("random" in person3); // false
console.log(person3.random); // undefined
```

<br/>

## `for..in VS for..of`

### for (key in obj)

```javascript
for (key in person3) {
  console.log(key);
}
```

### for (value of iterable)

```javascript
const array = [1, 2, 4, 5];
for (value of array) {
  console.log(value);
}
```

<br/>

## `Fun cloning`

```javascript
const user = { name: "shim", age: "28" };
const user2 = user;
user2.name = "coder";
console.log(user);
// { name: 'coder', age: '28' }
```

### old way

```javascript
const user = { name: "shim", age: "28" };
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.log(user3);
// { name: "shim", age: "28" };
```

### Object.assign(dest, [obj1, obj2, obj3...])

```javascript
const user = { name: "shim", age: "28" };
const user4 = Object.assign({}, user);
console.log(user4);
// { name: "shim", age: "28" };
```

```javascript
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };

const mixed1 = Object.assign({}, fruit1, fruit2); // key가 중복되면 뒤에 선언된것으로 덮어쓰여진다.
console.log(mixed1);
// { color: 'blue', size: 'big' }

const mixed2 = Object.assign({}, [fruit1, fruit2]);
console.log(mixed2);
// { '0': { color: 'red' }, '1': { color: 'blue', size: 'big' } }
```
