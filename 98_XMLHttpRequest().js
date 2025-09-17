// Error handling 


const URL = "https://jsonplaceholder.typicode.com/posts"

const xhr  = new XMLHttpRequest();

// console.log(xhr);

// step 1 : use open method


// xhr.open("GET",URL);

// xhr.onreadystatechange = function(){
// if(xhr.readyState === 4){
// const response = xhr.response;
// const data = JSON.parse(response);
// console.log(data);
// }
// }

// xhr.send();



const ss = new XMLHttpRequest();

ss.open("GET",URL);

// ss.onreadystatechange = function(){
//     if(ss.readyState === 4){
//       const response2 = ss.response;
//       const rawdata = JSON.parse(response2);
//       console.log(rawdata);
//     }
// }

ss.onload = function(){

    if(xhr.status >= 200 && xhr.status < 300){
        const response2 = ss.response;
        const rawdata = JSON.parse(response2);
        console.log(rawdata)
        const id = rawdata[3].id;
        const xhr2 = XMLHttpRequest();
        const URL2 = "https://jsonplaceholder.typicode.com/posts"+id;
        xhr2.open("GET",  URL2);
        xhr2.onload = function(){
        if(xhr2.status >= 200 && xhr2.status < 300){
            const response3 = xhr2.response;
            const rawdata2 = JSON.parse(response3)
            console.log(rawdata2);
            xhr2.send();
    }else{
        console.log("Error: something went wrong" );
    }

    
}

}else{
    console.log("Error: something went wrong" );
} }

// xhr.onerror = ()=>{
//     console.log("Network Error: please check your internet connection");
// }

