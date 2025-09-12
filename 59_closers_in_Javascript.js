


// closers 
// functions can return functions

// function myfunc(){
//   function hello(){
//     console.log('Hello');
//   }
  
//   return hello;
// }

// const fun = myfunc();
// console.log(fun);
// fun();
// fun();
// fun();
// fun();


function printFullName(firstName,lastName){
  function printName(){
    console.log(firstName,lastName);
  }
  
  return printName;
}

const ans = printFullName("Shaurya","Tiwari");

console.log(ans);

ans();
ans();
ans();
ans();



