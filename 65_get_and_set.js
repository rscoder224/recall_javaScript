// get and set

const link = document.querySelector('a');

// getAttribute
console.log(link.getAttribute('href').slice(1));

// setAttribute
link.setAttribute('href', 'https://www.bing.com');

link.getAttribute('href');
