// Important array Methods

// foreach 
// map 
// filter 
// Reduce


// forEach

const arr = [1,2,3,4,5,6,7];


function fetch(arr,index){
        console.log(`${arr} at index ${index}`);
}
arr.forEach(fetch);

const arr2 =[];
const arr3 = [];
const arr4 = [];

const users = [
    {name : "Shaurya", Product: "Iphone", id:23433, price:55400},
    {name : "Divyanshu", Product: "Laptop", id:67685, price:66000},
    {name : "Ayush", Product: "Desk", id:23433, price:15400},
    {name : "Parth", Product: "Motrola", id:23459, price:25400},
    {name : "Kumar", Product: "Earbuds", id:234343, price:5400}
    ];
    
 
 const products = function(product){
     arr3.push(product.Product);
 }
 
 users.forEach(products);
 
 
 
    const naam = function(item){
        arr2.push(item.name);
    }
    
    
 
 users.forEach(function(item){
    arr4.push(item.price);
 });
 
 console.log(arr4);
 
 
    
    users.forEach(naam);
    
    console.log(arr2);
    console.log(arr3);
    
    
 
