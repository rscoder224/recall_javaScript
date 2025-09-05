// sort method in js
// ye real array ko change karega 
const arr = [9,34,45,6,78,8,0,3];

const arr2= ["Shaurya","raju", "kumar","ritesh"];


const ans = arr.sort((a,b)=>{
    return a-b;
});


console.log(arr);
console.log(arr2);



    const users = [
    {name : "Shaurya", Product: "Iphone", id:23433, price:55400},
    {name : "Divyanshu", Product: "Laptop", id:67685, price:66000},
    {name : "Ayush", Product: "Desk", id:23433, price:15400},
    {name : "Parth", Product: "Motrola", id:23459, price:25400},
    {name : "Himanshu", Product: "Earbuds", id:234343, price:5400}
    ];
    
    
   const sorted  = users.sort((a,b)=>{
        return a.price-b.price;
    });
    
    console.log(users);
    console.log(sorted);
    
    

    
    
    
    
    
    
    
    
    
    
