// splice method of array 
// Start Index , no. of items want to Delete , Insert


const myArray = ["item","item2","item3","item4"];
myArray.splice(1,1);



myArray.splice(1,0,"item2");

console.log(myArray);


// splice method of an Array 
// in This method we can Delete as well as insert element at a time 
// inside an array 
// splice method se hum kisi bhi existing array ko modify kar sakte hai
// usme Item delete ya insert kar sakte hai
// ishke liye hame
// array.splice(start_index,no_of_item_want_to_delete,"item_want_to_insert");

const array4 = [1,2,3,4,5,6,7,8,9];


array4.splice(0,3,"babu",'raju');

console.log(array4);




// splice method of an Array 
// in This method we can Delete as well as insert element at a time 
// inside an array 
// splice method se hum kisi bhi existing array ko modify kar sakte hai
// usme Item delete ya insert kar sakte hai
// ishke liye hame
// array.splice(start_index,no_of_item_want_to_delete,"item_want_to_insert");

// we can also store deleted item later

const array4 = [1,2,3,4,5,6,7,8,9];


const deleted_items = array4.splice(0,3,"babu",'raju');


console.log(array4);

console.log(deleted_items);



