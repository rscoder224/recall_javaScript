// Promises(future value) in JavaScript
// Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// Promise ek aisi value hai jo hame abhi nahi pata but future me pata chalegi


const bucket = [ 'oil', 'vegetables', "salt" , 'rice'];

// create a promise
// promise status Pending
// promise status fullfilled



const myPromise = new Promise((resolve,reject)=>{
    if(bucket.includes("vegetables") && bucket.includes("oil") && bucket.includes('salt')&& bucket.includes("rice")){
        resolve("Friedrice");
    }else{
        reject("couldn't do it ");
    }
});

// we produced promise
// now we have to consume 


// consume
// how to consume

// myPromise.then((myrice)=>{
//     // ye tab chalega jab promise resolve h0oga
// console.log("Lets Eat fried Rice")
// },
// // ye tab chalega promise reject hoga
// (err)=>{
//     console.log(err);
// });

// myPromise.then((myrice)=>{
//     null
// },
// // ye tab chalega promise reject hoga
// (err)=>{
//     console.log(err);
// }
// );

//  Promises are added into Microtask queue


 myPromise.then((myrice)=>{
        // ye tab chalega jab promise resolve h0oga
    console.log("Lets Eat fried Rice")
    // ye tab chalega jab promise resolve nhi hoga
    }).catch((err)=>{
        console.log(err)
    });


    // for(let i = 0; i < 100; i++){
    //    console.log(Math.floor(Math.random()*100),i);
    // }



//     const baby =[ 
//         {
//         id:1,
//         name:"kumari",
//         age:22,
//         no: 2828737447,
//         beatyScore:36
//     },
//         {
//         id:1,
//         name:"kumari",
//         age:22,
//         no: 2828737447,
//         beatyScore:67
//     },
//         {
//         id:2,
//         name:"Aneeta",
//         age:16,
//         no: 2828737447,
//         beatyScore:99
//     },
//         {
//         id:3,
//         name:"Rashi",
//         age:21,
//         no: 2828737447,
//         beatyScore:45
//     },
//         {
//         id:4,
//         name:"Shivani",
//         age:18,
//         no: 2828737447,
//         beatyScore:89
//     },
//         {
//         id:5,
//         name:"jaya",
//         age:19,
//         no: 2428737447,
//         beatyScore:65
//     }
// ]

// const newbaby = baby.map((baby)=>{
//     return `The name of the baby is ${baby.name} and it's beautiScroce is ${baby.beatyScore}`
// }); 

// console.log(newbaby);




// const baby_select = new Promise((resolve,reject)=>{
//   baby.forEach((dasy)=>{
//     if(dasy.beatyScore>92 && dasy.age<23){
//         resolve("we finded baby");
//     }else{
//         reject("Unable To find baby")
//     }

//   });
// });


// baby_select.then((baby)=>{
//     console.log(`we achived!!`)
// }).catch((err)=>{
//     console.log("we didn't find any baby for you");
// });

// `Baby name is  ${baby.name} her age is ${baby.age} and she is really hot because her beautiscore is ${baby.beatyScore}`



// const baby_select = new Promise((resolve,reject)=>{
// const baby_finder = baby.some((baby)=>{
//  return baby.beatyScore > 92 && baby.age < 23;
// });
// if(baby_finder){
//     resolve(baby_finder);
// }else{
// reject("unable to find baby for you");
// }
// });



// baby_select.then((massage)=>{
//     console.log(massage)
// }).catch((err)=>{
//     console.log(err);
// });


// const find_my_baby = new Promise((resolve,reject)=>{
//     const achived = baby.filter((baby)=>{
//         if(baby.age<23&& baby.beatyScore>92)
//         return`Baby name is  ${baby.name} her age is ${baby.age} and she is really hot because her beautiscore is ${baby.beatyScore}` ;
//     }
// );
//     if(achived.length>1){
//         const  arr = [];
//         for(let items in achived){
//             arr.push(`Baby name is ${achived[items].name} and baby age is ${achived[items].age} she is really hot cause her beautiScore is ${achived[items].beatyScore}`);
     
//         }
//   resolve(arr);
//     }else{
//         reject("Baby is not achived !! ");
//     }
// });


// find_my_baby.then((massage)=>{
//     console.log(massage);
// }).catch((err)=>{
//     console.log(err);
// });




