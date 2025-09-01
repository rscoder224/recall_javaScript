// array destructuring

const myArray = ["value", "value1", "value2" , "value3"];

let jiju = myArray[3];
console.log(jiju);

let [raju, , ,kallu] = myArray;

console.log(raju);
console.log(kallu);


let [sankhya1, sankhya2, ...taau] = myArray;

console.log(sankhya1);
console.log(sankhya2);
console.log(taau);
