/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * `quotes` array. Listed 5 random quotes with source, tags, citation, and year. 
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
 * `getRandomQuote` function. In the function body, I created a variable to store a random number ranging from zero to the index of the last item in the quotes array. The function returns a random quote object. Utilizing the random number created previously to access that index in the quotes array using bracket notation.
The getRandomQuote function creates a random number, and use that random number to return a random quote object from the quotes array.
***/

function getRandomQuote() {
    let randomNumber = Math.floor(Math.random()* quotes.length);
    const getQuote = randomNumber;
    return quotes[getQuote];
    };   

/***Color function, changes the background color to a new color, I utilized the math random to provide a random number between the 3 colors provided in the colors array. ***/

 let colors = ["fuchsia", "purple", "red"];   

function randomColor() {
    let newColor = Math.floor(Math.random() * colors.length);
    return colors[newColor];
}; 




/***
 * `printQuote` function, This function is used to perform three tasks: call the getRandomQuote function, used the returned quote object to build a string of HTML and quote properties, then use that string to display a random quote in the browser.
I created two if statements if the quotes contained a citation, tags, and year. Created a timing function with the setInterval() method to print a new quote and background color to the page at regular intervals, like every 10 seconds.
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
    document.body.style.backgroundColor = randomColor(); 

}; setInterval(printQuote, 10000);



/***
 * click event listener for the print quote button. the function displays a new quote each time the user clicks the "Show another quote" button using a printQuote function.
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);