// reduce method
// ye method koi array return nahi Karega sirf number return hoga bro
// reduce ke pass do cheeze hoti hai 
// current Value 
// accumalator

const nums = [1,2,3,4,5];

const hs = nums.reduce((currentValue,accumalator)=>{
    return currentValue  + accumalator;
},0);

console.log(hs);


    // real world waale me sirf ek me hi dot opreator ka use kr ke 
    // addtion hoga NaN aagega result
    
    const users = [
    {name : "Shaurya", Product: "Iphone", id:23433, price:55400},
    {name : "Divyanshu", Product: "Laptop", id:67685, price:66000},
    {name : "Ayush", Product: "Desk", id:23433, price:15400},
    {name : "Parth", Product: "Motrola", id:23459, price:25400},
    {name : "Himanshu", Product: "Earbuds", id:234343, price:5400}
    ];
    

const total = users.reduce((currentValue,accumalator)=>{
    return currentValue + accumalator.price;
},0);


console.log(typeof total);






