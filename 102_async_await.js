// async and await in JS


const URL = 'https://jsonplaceholder.typicode.com/posts';

async function getpost(){
   const resposnse = await fetch(URL);
   console.log(resposnse);
   const data = await resposnse.json();
   return data;
}

// fetch(URL).then((res)=>{
//     if(res.ok){
//         return res.json()
//     }else{
//         throw new Error("Something went Wrong");
//     }
// }).then((data)=>{
//     console.log(data);
// })

// // const re = getpost();


// console.log(typeof re, re);



getpost().then((data)=>{
  console.log(data);
}).catch((err)=>{
    console.log("Error");
})


