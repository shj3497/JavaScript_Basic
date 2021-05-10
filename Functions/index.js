// print(); // Error

const print = function () {
  console.log("print");
};

print(); // print

const printAgain = print;
printAgain(); // print

print11();
function print11(){
  console.log("print11");
}