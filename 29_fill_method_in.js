
// fill method inside array
// value ,start index , end index

// it creates an array of 10 indexes where all 10 are filled with -1
const myArray = new Array(10).fill(-1);
console.log(myArray);


const array1 = new Array(40).fill(45);

console.log(array1);


const myarry2 = [1,2,3,4,5,6,7,8,9];

// this will change original Array
myarry2.fill(-1,5,8);


console.log(myarry2);
