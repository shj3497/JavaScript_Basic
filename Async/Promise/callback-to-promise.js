class UserStorage{
  loginUser = (id, password) => new Promise((resolve, reject) => {
    setTimeout(() => {
      if(
        (id === 'shim' && password === 'hyeokjin') ||
        (id === 'coder' && password === 'academy')
      ){
        resolve(id);
      }else{
        reject(new Error('not Found'));
      }
    }, 2000)
  });

  getRoles = (user) => new Promise((resolve, reject) => {
    setTimeout(() => {
      if(user === 'shim'){
        resolve({name:'shim', role:'admin'});
      }else{
        reject(new Error('no access'));
      }
    }, 1000)
  })
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(id, password)
  .then(user => userStorage.getRoles(user))
  .then(userWithRole => {
    alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role}`)
  })
  .catch(error => console.log(error))