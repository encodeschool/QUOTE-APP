const API_URL = 'https://api.quotable.io/random';
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

async function getQuote() {
    const response = await fetch(API_URL);
    let data = await response.json();
    quote.innerHTML = data['content'];
    author.innerHTML = '<div></div>' + data['author'];
    console.log(data);
}

getQuote();