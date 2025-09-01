// how to clone array 

// how to concatenate two arrays;

const array1 = ["kallu", "Babu", "shayamu", "ramu"];

const array2 = ["Shaurya", "Ayush", "Divayanshu", "Vansh"];

const array3 = [...array1,...array2];

console.log(array3);

const array4 = array3.slice();

const array5 = [].concat(array4);
console.log(array4);
console.log(array5);

const array6 = ["array6"];

// used normal for loop

// for(let i = 0; i < array5.length; i++){
//  array6.push(array5[i]);
 
// }

// used for of loop

// for(let items of array5){
//     array6.push(items);
// }

// used for in loop

// for(let item in array5){
//     array6.push(array5[item]);
// }

// using forEach Method of array
// 

// array5.forEach((item)=>{
//     array6.push(item);
// });

// Using While Loop 

let i = 0; 

while(i < array5.length){
    array6.push(array5[i]);
    i++;
}


console.log(array6);



