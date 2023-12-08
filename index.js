function identity(arg) {
  return arg;
}

function identityF(arg) {
  function id() {
    const outerArg = arg
    return outerArg;
  }
  return id;
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function increment(num) {
  return add(num, 1);
}

function addF(num) {
    function accumalate (val) {
      return num + val;
    }
  return accumalate;
}

function curry(func, num) {
  function applyFunc(arg){
    return func(num,arg);
  };
  return applyFunc;
}

function liftF(func) {
  function applyFunc(num1){
    function newFunc(num2){
      return func(num1,num2)
    };
    return newFunc;
  }
  return applyFunc;
}

function once(func){
  function runFunc (arg){
    return func(arg);
  }
  return runFunc;
}

function twice() {}

function composeU() {}

function composeB() {}

function limit() {}

function from() {}

function to() {}

function fromTo() {}

function element() {}

function collect() {}

function filter() {}

function concat() {}

function fibonacciF() {}

function genSymF() {}

function genSymFF() {}

function counter() {}

function revokable() {}

module.exports = {
  identity,
  identityF,
  add,
  subtract,
  multiply,
  increment,
  addF,
  curry,
  liftF,
  once,
  twice,
  composeU,
  composeB,
  limit,
  from,
  to,
  fromTo,
  element,
  collect,
  filter,
  concat,
  fibonacciF,
  genSymF,
  genSymFF,
  counter,
  revokable,
};
