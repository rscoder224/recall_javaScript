// nested Destructuring


const users = [
    {name: "Shaurya", age:22 , 'contact number' : 9938384838 , product :'iphone'},
    {name: "Atish", age:19 , 'contact number' : 66238384838 , product :'iphone'},
    {name: "Surendra", age:56 , 'contact number' : 3383849833 , product :'iphone'},
    {name: "Ramesh", age:12 , 'contact number' : 7938384838 , product :'iphone'}
    ];
    
    
    let [{name:naam,...ks}, , ,{'contact number': number}] = users;
    
    
    console.log(naam , typeof naam);
    
    console.log(number, typeof number);
    
    
    
    
    
    
    
