const quote = document.getElementById("quote");

async function getquotes(){
    const response = await fetch("https://api.quotable.io/random");
    var data = await response.json();
    quote.innerHTML = data.content;

}
