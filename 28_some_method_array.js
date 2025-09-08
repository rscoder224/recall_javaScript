// some method inside array 

const numbers = [3,5];
// kya ek bhi number aisa hai jo even hai 
// ek baar bhi conditon true hone pe true return karega
// ye boolean return Karega;


const ans = numbers.some((number)=> number%2 === 0);

console.log(ans);


const users = [
{userId:1 , userName: "Shaurya" , product:"Iphone", price: 60000},
{userId:2 , userName: "Kunal", product: "laptop", price: 80000},
{userId:3 , userName: "rajesh", product: "Phone Cover", price: 200},
{userId:4 , userName: "abhay", product: "game console", price: 900},
{userId:5 , userName:"nitesh" ,product: "ps3", price:25000},
{userId:6 , userName : "kallu", product: "guitar",price:5000}
];

const ans2 = users.some((user)=>{
    return user.price <= 200;
});

console.log(ans2);
