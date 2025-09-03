// function returning Function
// Higher Order function
function myfunc(){
    // function add(a,b){
    //     console.log(a+b);
    // }
  return function add(a,b){
      console.log(a+b);
  }
}

const ans = myfunc();

ans(2,3);
