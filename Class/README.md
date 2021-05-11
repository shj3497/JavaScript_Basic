# Class

- Object-oriented programming
- Class : template
- Object : instance of class

### JavaScript Classes

- Introduced in ES6
- Syntactical sugar over prototype-based inheritance

<br/>

## `Class declarations`

```javascript
class Person {
  // constructor
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const shim = new Person("shim", 28);
console.log(shim.name); // shim
console.log(shim.age); // 28
shim.speak(); // shim: hello!
```

<br/>

## `Getter and Setters`

```javascript
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    // this.age => get age()
    // age; => set age()
    this.age = age;
  }

  // 값을 리턴
  get age() {
    return this._age;
  }

  // 값을 설정
  set age(value) {
    // this.age라고 할 경우 Call stack이 가득찬다.
    // 명명규칙을 다르게 해줘야한다. >> this._age
    // if(value<0){
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("HyeokJin", "Shim", -1);
console.log(user1);
/* User { 
  firstName: 'HyeokJin', 
  lastName: 'Shim', 
  _age: 0 }
*/
console.log(user1.firstName); // HyeokJin
console.log(user1.lastName); // Shim
console.log(user1.age); // 0
```

<br/>

## `Fields (public, private)`

### Too soon!

```javascript
class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined
```

<br/>

## `Static properties and methods`

### Too soon!

```javascript
// static으로 정의되어있는 객체들은 Class이름을 사용하여 출력해야한다.
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher); // Dream Coding
Article.printPublisher(); // Dream Coding
```

<br/>

## `Inheritance (상속)`

- a way for one class to extend another class.

```javascript
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing color of ${this.color}`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  // Overriding 새롭게 정의한다.
  draw() {
    // super을 사용하면 부모의 메소드를 출력한다.
    super.draw();
    console.log("🔺");
  }
  getArea() {
    return this.width * this.height * 0.5;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw(); // drawing color of blue
console.log(rectangle.getArea()); // 400

const triangle = new Triangle(20, 20, "red");
triangle.draw();
// drawing color of red 🔺
console.log(triangle.getArea()); // 200
```

### Class checking: instanceOf

```javascript
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true
```
