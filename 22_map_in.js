// map array Method
// map always create new array so we can strore that array
// map method sirf array me kaam karta hai
// aur new array generate kr ke retrun krta hai 
  // hum us array ko store kara sakte hai 

    const arr = [1,2,3,4,5,5,6,78,9];
    
    const square = function(num){
        return num*num;
    }
    
const squares  = arr.map(square);
    console.log(squares);
    
    const sq = squares.map(function(num)
    {
        return num*num
    });
    
    console.log(sq);
    
    
    
    
    const sy = squares.map((num)=>{
        return num*num;
    });
    
    
    
    console.log(sy);
    

    
    
    
    
    const users = [
    {name : "Shaurya", Product: "Iphone", id:23433, price:55400},
    {name : "Divyanshu", Product: "Laptop", id:67685, price:66000},
    {name : "Ayush", Product: "Desk", id:23433, price:15400},
    {name : "Parth", Product: "Motrola", id:23459, price:25400},
    {name : "Himanshu", Product: "Earbuds", id:234343, price:5400}
    ];
    
    const firstNames = users.map((item)=>{
        return item.name;
    })
    
    
    console.log(firstNames);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
