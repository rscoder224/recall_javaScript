// Map Data Structure
// Map
// Map is An Iterable
// Store Data in Ordered Fasion

// Store Key Value Pairs Like Objects
// objects are also called object Literals
// Duplicate keys are now allowed like objects

// Difference Between Maps and objects;
// objects can only have string or symbol as key

// In maps you can use anything as key 
// like array , number , string;


// const person = {
//     name : "shaurya",
//     email : 'shauryax224@gmail.com'
// }


// for(let key in person){
//     console.log(`${key} : ${person[key]}`)
// }


// for(let keys of Object.keys(person)){
//     console.log(`${keys} ${person[keys]}` )
// }



// console.log(person["email"]);
// console.log(person.name);

const person = new  Map();

person.set('firstName','Shaurya');
person.set('age',22);
person.set('email','shaurya227@gmail.com');

console.log(person);

// map ke paas get Method hota hai ;
// Jisse hum koyi bhi value get kar sakte hai
//  key pair ka use kar ke

const ary = person.get('firstName');

console.log(ary);

for(let items of person){
   console.log(items)
        }
        
const persons = new  Map();

persons.set('firstName','Shaurya');
persons.set('age',22);
persons.set('email','shaurya227@gmail.com');
persons.set('phone',7384035462);
persons.set('DOB','13/June/2004');

        for




























