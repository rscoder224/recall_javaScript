
// Mouse Over Event

const main_button = document.querySelector('.btn-headline');

main_button.addEventListener('mouseover', (e)=>{
    console.log('you hovered on me');
});


main_button.addEventListener('mouseleave', (e)=>{
    console.log('you leaved on me');
});

