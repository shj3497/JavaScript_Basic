# JSON

### JavaScript Object Notation (ES3)

- simplest data interchange format
- lightweight text-based format
- esay to read
- key-value pairs
- used for serialization(직렬화) and transmission of data between the network the network connection
- `independent programming language and platform`

#### AJAX : Asynchronous JavaScript And XML

#### XHR : XMLHttpRequest

<br/>

## Object to JSON

### stringfy(obj)

- JavaScript 값이나 객체를 JSON 문자열로 변환합니다.

```javascript
let json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(["apple", "banana"]);
console.log(json); // ["apple","banana"]

const rabit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${this.name} can jump!`);
  },
};

json = JSON.stringify(rabit);
console.log(json);
/* 
{
  "name":"tori",
  "color":"white",
  "size":null,
  "birthDate":"2021-05-12T16:21:16.932Z"
}
*/

json = JSON.stringify(rabit, ["name"]);
console.log(json); // {"name":"tori"}

json = JSON.stringify(rabit, (key, value) => {
  return key === "name" ? "shim" : value;
});
console.log(json);
/*
{
  "name":"shim",
  "color":"white",
  "size":null,
  "birthDate":"2021-05-12T16:26:18.128Z"
}
*/
```

<br/>

## JSON to Object

### parse(json)

- JSON 문자열의 구문을 분석하고, 그 결과에서 JavaScript 값이나 객체를 생성합니다.

```javascript
// json = rabit이라는 객체를 JSON으로 만들어 주었다.
json = JSON.stringify(rabit);
console.log(json);
// {"name":"tori","color":"white","size":null,"birthDate":"2021-05-12T16:36:53.595Z"}
// key and value를 "" 처리

// obj = rabit이라는 객체를 JSON으로 만들어서 다시 객체로 변환해주었다.
const obj = JSON.parse(json);
console.log(obj);
/*
{
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: '2021-05-12T16:37:17.497Z'
}
*/

console.log(rabit.birthDate.getDate()); // 13
console.log(obj.birthDate.getDate()); // Error
// obj.birthDate는 함수가 아니라 문자열이기 때문이다.
// 이유 : JSON파일에서 Object로 변환해주었기 때문에 문자열로 담겨있다.
```

```javascript
// callback함수로 JSON객체를 파싱하는 와중에 조건을 줬다.
const obj2 = JSON.parse(json, (key, value) => {
  return key === "birthDate" ? new Date(value) : value;
});
console.log(obj2);
/*
{                                    
  name: 'tori',                      
  color: 'white',                    
  size: null,                        
  birthDate: 2021-05-12T16:45:46.440Z
}                                    
*/
console.log(obj2.birthDate.getDate()); // 13
```
