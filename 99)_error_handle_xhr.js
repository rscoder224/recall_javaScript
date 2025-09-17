
const URL = "https://jsonplaceholder.typicode.com/posts"

const xhr = new XMLHttpRequest();

xhr.open('GET', URL)

xhr.onload = function (){
    const response = xhr.response;
    const dat = JSON.parse(response);
    console.log(dat);
}


xhr.send();


