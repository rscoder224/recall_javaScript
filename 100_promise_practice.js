



function makePromise(){
 const arr = ["vegetables","rice","salt"]; 
     return new Promise((resolve,reject)=>{
        if(arr.includes("vegetables")&&arr.includes("rice")&&arr.includes("salt")){
         resolve("Yeh! Eat fried rice Now")
        }else{
            reject("No! you can't eat")
        }
        
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
 
 
makePromise().then((mes)=>{
     mes += " Bhatar mere bhai";
     return mes;
 }).then((mes)=>{
     console.log(mes);
 })
 
 
 
 
 
