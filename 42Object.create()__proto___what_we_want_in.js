// hum kya chahte hai 
// ki hamare pass do object ho 
// ek obj a aur doosara obj b 
// ab hum chahte hai ki agar hum
// obj b se koi value fetch kare 
// toh agar woh obj b na ho toh
// JavaScript obj a me dekhke ki kya usme 
// woh value hai jo user fecth kar rha hai 
// agr hai toh de do 

const objA = {
    key1 : 'value1',
    key2 : 'value2'
}
// const objb = {
//     key3 : 'value3'
// }

// There is one more way to create an empty object in 
// javaScript

// Object.create()
// [[prototype]] ====> __proto__ both are same
const objb = Object.create(objA);

objb.key3 = "value3";

console.log(objb.key1);
