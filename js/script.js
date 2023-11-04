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
        source: "Norman Vincent"
    }, 
    {
        quote: "It always seems impossible until it's done.",
        source: "Nelson Mandela",
        year: 2001
    },
    {
        quote: "To live is the rarest thing in the world. Most people just exist.",
        source: "Oscar Wilde",
        citation: "The Soul of Man Under Socialism",
        year: 1891
    },
    {
        quote: "It is never too late to be what you might have been.",
        source: "George Eliot",
        citation: "The Spanish Gypsy",
        year: 1983
    }, 
    {
        quote: "Doubt kills more dreams than failure ever will.",
        source: "Suzy Kassem"
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





/***
 * `printQuote` function
***/
function printQuote() {
    let randomQuote = getRandomQuote();
    let html = ''; 
    html += `<p class="quote">` + randomQuote.quote + '</p>' + `<p class="source">` + randomQuote.source;
    if(randomQuote.citation) {
        html += `<span class="citation">` + randomQuote.citation + '</span>';
    } if(randomQuote.year) {
        html += `<span class="year">` + randomQuote.year + '</span>';
    } html += '</p>';
    document.getElementById('quote-box').innerHTML = html; 
};


/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);