/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array 
***/
let quotes = [
    {
        quote: "Change your thoughts, and you change your world.",
        source: "Norman Vincent",
        tags: "A Quote for inspiration and Successs"
    }, 
    {
        quote: "It always seems impossible until it's done.",
        source: "Nelson Mandela",
        year: 2001,
        tags: "A Quote for Determination and Success"
    },
    {
        quote: "To live is the rarest thing in the world. Most people just exist.",
        source: "Oscar Wilde",
        citation: "The Soul of Man Under Socialism",
        year: 1891,
        tags: "A Quote for inspiration"
    },
    {
        quote: "It is never too late to be what you might have been.",
        source: "George Eliot",
        citation: "The Spanish Gypsy",
        year: 1983,
        tags: "A Quote about change"
    }, 
    {
        quote: "Doubt kills more dreams than failure ever will.",
        source: "Suzy Kassem",
        tags: "A Quote for Courage"
    }
];


/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
    let randomNumber = Math.floor(Math.random()* quotes.length);
    const getQuote = randomNumber;
    return quotes[getQuote];
    };   

 let colors = ["fuchsia", "purple", "red"];   

function randomColor() {
    let newColor = Math.floor(Math.random() * colors.length);
    return colors[newColor];
}; 
function changeColor() {
    document.body.style.backgroundColor = randomColor(); 
};
setInterval(changeColor, 2000);



/***
 * `printQuote` function and set an interval to change quote
***/
function printQuote() {
    let randomQuote = getRandomQuote();
    let html = ''; 
    html += `<p class="quote">` + randomQuote.quote + '</p>' + `<p class="source">` + randomQuote.source;
    if(randomQuote.citation) {
        html += `<span class="citation">` + randomQuote.citation + '</span>';
    } if(randomQuote.year) {
        html += `<span class="year">` + randomQuote.year + '</span>';
    } if(randomQuote.tags) {
        html += `<span class="tags">` + ", " + randomQuote.tags + '</span>';
    } html += '</p>';
    document.getElementById('quote-box').innerHTML = html; 
}; setInterval(printQuote, 10000);



/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);