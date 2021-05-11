// const obj1 = {}; // 'object literal' syntax
// const obj2 = new Object(); // 'object constructor' syntax

// function print(person){
//   console.log(person.name);
//   console.log(person.age);
// }

// const shim = {name:'shim', age:28};
// print(shim);
// // 가능은하지만 유지보수 능력이 떨어지므로 NO!
// shim.hasJob = true;
// console.log(shim.hasJob);
// delete shim.hasJob;
// console.log(shim.hasJob);

// console.log(shim.name);
// console.log(shim['name']);
// shim['hasJob'] = true;
// console.log(shim.hasJob);

// function printValue(obj, key){
//   console.log(`obj.key : ${obj.key}`);
//   console.log(`obj[key] : ${obj[key]}`);
// }
// printValue(shim, 'name');
// // obj.key : undefined
// // obj[key] : shim

const person1 = {name: 'bob', age:2};
const person2 = makePerson('shim', 28);

function makePerson(name, age){
  // key와 value의 이름이 동일하다면 생략가능하다.
  return{
    name: name,
    age
  };
}
console.log(person2); // { name: 'shim', age: 28 }

const person3 = new Person('shim', 28);
function Person(name, age){
  this.name = name;
  this.age = age;
}
console.log(person3);

console.log('name' in person3); // true
console.log('age' in person3); // true
console.log('random' in person3); // false
console.log(person3.random); // undefined

for(key in person3){
  console.log(key);
}

const array = [1, 2, 4, 5];
for(value of array){
  console.log(value);
}

console.clear();

const user = {name:'shim', age:'28'};
const user2 = user;
user2.name = 'coder';
console.log(user);
// { name: 'coder', age: '28' }

const user3 = {};
for(key in user){
  user3[key] = user[key];
}
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);

const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size:'big'};
const mixed1 = Object.assign({}, fruit1, fruit2);
console.log(mixed1);
// { color: 'blue', size: 'big' }
const mixed2 = Object.assign({}, [fruit1, fruit2]);
console.log(mixed2);
// { '0': { color: 'red' }, '1': { color: 'blue', size: 'big' } }