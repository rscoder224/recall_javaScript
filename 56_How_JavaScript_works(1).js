// Javascript is a Synchronous Programming language
// Synchronous Programming language ka matlab hai ki line by line execution hoga
// single threaded hai
// matlab single thread hi Line by line code ko Execute karega
// Asynchronous Javascript features Javascript ke khud ke nahi hai
// ye features use browser provide krta hai


// compilation 
// a) Tokenizing/Lexing
// b) code Execution 

// in compilation phase 
// early error checking performed
// determing appropriate scope of variables

console.log(this);
// console.log(window);
var firstName = "Shaurya" ;
console.log(firstName);


// code Execution Phase 

// Global Execution context Create Hoga

// Ishke andar do phase honge

// Creation Phase
// var ke case me variables ki value undefined set hogi
// phir this ki value browser ke case me window ke equal set hogi
// window ek object hai jiske bahut saare key value pairs me functions add hai
// ye saari cheezen global memory me present hongi

// Execution Phase
// 1.  line execution me this == window object set hoga {}
// 2. window object print {}
// 3. line me pahele variable ki value Undefined set hogi 
// 4. phir firstName ki value Undefined se hat kar assinged value ("Shaurya") set hogi
// 5. line me firstName ki print ho jaayegi
















