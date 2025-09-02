
// functions in JavaScript
// types of Functions
// 1. ==> Function Declaration
// 2. ==> Function Expression
// 3. ==> Arrow Functions

// function Declaration

function sum(a,b){
    return a+b;
}

console.log(sum(2,4));

// function Expression

const subtwo = function(a,b){
      return a+b;    
};

let res = subtwo(99,1);

console.log(res);

// Arrow Functions


const multwo = (a,b)=>a*b;

let ans = multwo(2,5);

console.log(ans);


const array = [1,2,3,4,5,6,7,8,99,199,1000];

// const achiver = function(arr,tar){
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i]===tar){
//             return `Taget  ${tar} Achived at index ${[i]}`;
//         }
//     }
    
//     return `No ${tar} not inside the array`;
    
// }



const achiver = (arr,tar)=>{
    for(let i = 0; i< arr.length; i++){
        if(arr[i]===tar){
            return `Taget  ${tar} Achived at index ${[i]}`;
        }
    }
    
    return `No ${tar} not inside the array`;
    
}




let res2 = achiver(array,19);

console.log(res2);


















