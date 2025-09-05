
// Ye nayi array nahi dega sirf wo array ke index pr rakha datatype  retrun karega jo callback function ki condition ko satisfy karega 

const arr = ['hello', 'raj', 'suresh','hritesh','aditya'];

function isLength(str){
    return str.length===3;
};

function isLength2(arr){
    return arr.name.length===5;
};



const users = [
  { name: 'Himanshu', Product: 'Earbuds', id: 234343, price: 5400 },
  { name: 'Ayush', Product: 'Desk', id: 23433, price: 15400 },
  { name: 'Parth', Product: 'Motrola', id: 23459, price: 25400 },
  { name: 'Shaurya', Product: 'Iphone', id: 23433, price: 55400 },
  { name: 'Divyanshu', Product: 'Laptop', id: 67685, price: 66000 }
];

// const ans = isLength('dog');




const ans = arr.find(isLength);
const ans2 = users.find(isLength2);

console.log(ans);

console.log(typeof ans);

console.log(ans2);
console.log(typeof ans2);
console.log(Array.isArray(ans2));





