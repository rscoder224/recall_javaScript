// how to iterate objects in JavaScript

const person = {
    name : "Shaurya",
    age : 22,
    email : "ltsmartofficial@gmail.com"
}

console.log(person);

// using forIn loop for Iterating Objects

for(objects in person){
  
    console.log(`${objects} : ${person[objects]}`);
}

// Using Object.keys for Iterating Objects

  // Object.keys(objects);
  
// console.log(Object.keys(person));

for(let item of Object.keys(person)){
   console.log( item + " " +  person[item] );    
}


  
  
  
  
  
  
  
  
  
  
  
  
  
  
