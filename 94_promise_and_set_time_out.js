
function myPromise(){
    return new Promise((resolve,reject)=>{
        const var1 = false;
          setTimeout(()=>{
            if(var1){
                resolve()}
                else{
                    reject()
                }
          },2000)
        })
}




myPromise()
.then(()=>{console.log("promise is resolved")})
.catch((err)=>{console.log("promise is rejected")})



