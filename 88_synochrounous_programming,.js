// synchronous Programming Language
// Synchroous Programming Single Threaded
// in synchronous programming, the code is executed in a single thread, one line at a time, in the order it is written.
//  This means that each line of code must complete before
// because of this our code can be blocked

// Asynchronous Programming  in JavaScript

// setTimeout

// function sayHello(){
//     console.log("Hello");
// }

const set = setTimeout(()=>{
    console.log("Hello after 2 seconds");
},2000);

console.log("script Started");
console.log("script ended");

const item = document.querySelector('.parent');
// setTimeout(sayHello,2000);
// clearTimeout(set);
console.log(set);

