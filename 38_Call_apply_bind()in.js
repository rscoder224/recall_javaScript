
// call apply and bind

// call syntax 
// call is used to call a function 
// about.call()
// using call we can also set the value of the this for which we have to call the function
// ex--> functionName.call({this"for which we would like to call the function"},"parameter");
// call ka use kar ke hun kisi bhi function ko kisi bhi object ke liye call kara sakte hai.... 

 function about(hobby, favMusician){
        console.log(this.firstName,this.age,hobby,favMusician);
    }

const user1 = {
    firstName : "shaurya",
    age : 23,
    
}

function hello(){
    console.log('hello how are');
}

hello.call();


const user2 = {
    firstName : 'Divyanshu',
    age : 18
}

// call
about.call(user1,"Guitar","Muzart");


// apply
// apply and call both works as same 
// bss call me jahan hum parameters ko alag alag pass kar 
// rahe the wahin apply me humko 
// parameters ko hame ek array me pass karna hoga 
// baaki apply bhi internall call ko hi use karta hai
// example-->

about.apply(user2,["Reels","Bhura Dholak"]);


// Bind 
// bind function ko call nhi karta 
// usko return karta jise hum kisi bhi variable me store karke baabd me call kar sakte hai 

const myfun = about.bind(user1,"guitar","barch");

myfun();





















