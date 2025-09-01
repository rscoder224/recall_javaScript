// Primitive Vs Referece DataTypes
// Premitive DataTypes are Stored in Stack ;
// Ex-- Each Variable have own Memory Allocation

// let num1 = 6;

// let num2 = num1;

// console.log(num1);
// console.log(num2);

// num1++;


// console.log(num1);
// console.log(num2);


// reference data Types
// Reference data are stored inside the heap 

let array1 = ["item1", "item2"];

let array2 = array1;

console.log(array1);
console.log(array2);

// array1.pop();

console.log(array1);
console.log(array2);


array1.push("item3");

// array1.shift("Kaaju");



console.log(array1);
console.log(array2);

array2.unshift("kallu");
console.log(array2);

