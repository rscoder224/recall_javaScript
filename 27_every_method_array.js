//  every method if condition becomes true for every index present inside the array than it only return true else it retrun False

// it will return boolean value 

const users = [
{userId:1 , userName: "Shaurya" , product:"Iphone", price: 60000},
{userId:2 , userName: "Kunal", product: "laptop", price: 80000},
{userId:3 , userName: "rajesh", product: "Phone Cover", price: 200},
{userId:4 , userName: "abhay", product: "game console", price: 900},
{userId:5 , userName:"nitesh" ,product: "ps3", price:25000},
{userId:6 , userName : "kallu", product: "guitar",price:5000},
];



const greater$fifty = users.every((a)=>{
    return a["price"] >= 50000;
});

console.log(greater$fifty);
