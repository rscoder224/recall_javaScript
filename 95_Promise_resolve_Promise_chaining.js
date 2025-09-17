
// Promise.resolve
// Promise Chaining


// const my = Promise.resolve('Success');

// then() hamesha promise return karta hai 



// my.then((mess)=>{
//     console.log(mess)
// })
// .catch((err)=>{
//     console.log(err)
// });


function myp(){
    return new Promise((resolve,reject)=>{
        resolve("foo");
    })

}



// myp().then((res)=>{
//     console.log(res);
//     res += 'kallu';
//     // return res;
//     return Promise.resolve(res);
// }).then((res)=>{
//     console.log(res);
// })

// this code is same like above code 

myp().then((res)=>{
    console.log(res);
    res += 'kallu';
    // return value;
    return res;
}).then((res)=>{
    console.log(res);
    res += 'bhaiyaa'
    return res;

}).then((res)=>{
    console.log(res);
})


