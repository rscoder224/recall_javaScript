
const allbtns = document.querySelectorAll('.my-buttons button');



allbtns.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        // if(e.currentTarget.textContent === 'one'){
        //  e.currentTarget.style.bakgroundColor = "yellow";
        // }
        // if(e.currentTarget.textContent === 'two'){
        //     e.currentTarget.style.bakgroundColor = "green";
        // }

        // if(e.currentTarget.textContent === 'three'){
        //     e.currentTarget.style.bakgroundColor = "red";
        // }
         e.target.style.bakgroundColor = "red";

    });
});
