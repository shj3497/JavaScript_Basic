# More Information

### `hasOwnProperty`

hasOwnProperty 란?

객체가 특정 프로퍼티에 대한 소유여부를 반환한다.

```javascript
const obj = {
  a: 1,
};
obj.hasOwnProperty("a"); // true
obj.hasOwnProperty("b"); // false
```

`단, 프로토타입 체인은 확인하지 않고, 해당 객체가 스스로 정의한 프로퍼티만을 판단한다.`

```javascript
obj.b = 2;
Object.prototype.c = 3;
console.log(obj); // {a: 1, b: 2}
obj.b; // 2
obj.c; // 3 : 출력되는 이유 : prototype에 추가되어있다.

obj.hasOwnProperty("b"); // true
obj.hasOwnProperty("c"); // false
```
