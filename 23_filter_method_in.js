// filter method of array
// ye boolean value generate karta agar condition true huyi
// toh new array generate hogi aur usme saara true conditon wale 
// chale jayenge aur agr false hui toh false huyi toh woh element nhi jaayeyega
// ye array ke har index ke liye condition ko check kregaa

const number = [1,2,3,4,5,6,7];

const fil = function(num){
    return num%2!==0;
}

const ans = number.filter(fil);

console.log(ans);


