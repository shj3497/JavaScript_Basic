const util = require('util');

util.log('1');
setTimeout(() => {
  util.log('2');
}, 1000);
util.log('3');

// Synchronous callback
function printImmediately(print){
  print();
}
printImmediately(() => util.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout){
  setTimeout(print, timeout);
}
printWithDelay(() => util.log('async callback'), 2000);

// Callback Hell example
// 1. 가독성이 떨어진다.
// 2. 유지보수도 어려워진다.
class UserStorage{
  loginUser(id, password, onSuccess, onError){
    // 실제로 백엔드를 연결하지 않았으니 2초를 준다고 하자
    setTimeout(() => {
      if(
        (id === 'shim' && password === 'hyeokjin') ||
        (id === 'coder' && password === 'academy')
      ){
        onSuccess(id);
      }else{
        onError(new Error('not Found'));
      }
    }, 2000);

  }

  getRoles(user, onSuccess, onError){
    setTimeout(() => {
      if(user === 'shim'){
        onSuccess({
          name:'shim', 
          role:'admin'
        });
      }else{
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
  id, 
  password, 
  user => {
    // 로그인에 성공하면 유저권한을 받아오는 콜백함수
    userStorage.getRoles(
      user, 
      userWithRole => {
        // userWithRole = getRoles에서 onSuccess라는 객체
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role}`)
      },
      error => {
        console.log(error);
      })
  }, 
  error => {
    console.log(error);
  }
)