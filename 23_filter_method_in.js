
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

// real world Example



    const users = [
    {name : "Shaurya", Product: "Iphone", id:23433, price:55400},
    {name : "Divyanshu", Product: "Laptop", id:67685, price:66000},
    {name : "Ayush", Product: "Desk", id:23433, price:15400},
    {name : "Parth", Product: "Motrola", id:23459, price:25400},
    {name : "Himanshu", Product: "Earbuds", id:234343, price:5400}
    ];
    
    const res = users.filter((item)=>{
        return item.price >15000;
    });
    
    console.log(res);
    
    
    






