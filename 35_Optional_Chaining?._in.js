// 35 Optional Chaining 
// optional Chaining Se hum error ko defend Kr sakte hai 
// optional Chaining ka Use ? mark laga Kr sakte hai
const user = {
    firstName: "Shaurya",
    // address: {houseNumber:'1234'}
}

console.log(user.firstName);
console.log(user?.address?.houseNumber);

