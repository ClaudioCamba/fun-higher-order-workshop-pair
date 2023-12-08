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
  let result = false;

    function runFunc (arg){
      if (result === false){
        result = func(arg);
        return result;
      } else {
        return result;
      }
    }

  return runFunc;
}

function twice(func) {
  function doubleFunc(arg){
    return func(arg, arg);
  };
  return doubleFunc;
}

function composeU(func1, func2) {
  function unary (arg) {
    return func2(func1(arg));
  };
  return unary;
}

function composeB(func1,func2) {
  function runTwofunc(arg1,arg2,arg3){
    return func2(func1(arg1,arg2),arg3);
  }
  return runTwofunc
}

function limit(func,num) {
  let count = 0;

    function limiRun(arg1,arg2){
      if (count < num){
        count++;
        return func(arg1,arg2);
      }
    }

  return limiRun;
}

// const add_ltd = limit(add, 1);
// add_ltd(3, 4); // 7
// add_ltd(3, 5); // undefined

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
