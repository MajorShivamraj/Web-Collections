// here we create the function and then import it in the app.js module

function add(a,b) {
  return a+b;
}

function subtract(a,b) {
  return a-b;
}

export default {add,subtract};