const URL = "https://jsonplaceholder.typicode.com/posts"

function sendRequests(method, URL){
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,URL);
xhr.onload = ()=>{
    if(xhr.status >= 200 && xhr.status < 300){
    const response = xhr.response;
    const data = JSON.parse(response);
      resolve(xhr.response);
}else{
    reject("Something Went Wrong Brother");
}
xhr.onerror = ()=>{
  reject( new Error("Network Error hogya bacche ka bhagwan"));
}

xhr.send();

 } })
}


const p = sendRequests("GET",URL);

p.then(res=>{
    const data = JSON.parse(res);
    return data;
}).then((data)=>{
    const id = data[3].id;
    return id;
}).then((id)=>{
    const URL2 = `${URL}/${id}`;
    return sendRequests("GET",URL2);
})
