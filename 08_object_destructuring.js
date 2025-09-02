// Object Destructuring

const obj = {
    name : 'raju',
    age : 22,
    email : 'lshhdhd@gmail.com'
}


let {name:saalaName,...ks} = obj;

let {age:umar,...jj} = obj;

console.log(umar);
console.log(saalaName);

// console.log(Array.isArray(obj)); 


const band = {
    bandName :'ledzaplin',
    famousSong : 'stairway to Heaven'
};



let {bandName:name , ...all} = band;




console.log(band);
console.log(name);

















