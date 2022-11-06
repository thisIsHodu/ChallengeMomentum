const quotes=[
  {
    quote: "Change the world by being yourself.",
    author: "Amy Poehler"
  },
  {
    quote: "Every moment is a fresh beginning.",
    author: "T.S Eliot"
  },
  {
    quote: "Never regret anything that made you smile.",
    author: "Mark Twain"
  },
  {
    quote: "Everything you can imagine is real.",
    author: "Pablo Picasso"
  },
  {
    quote: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci"
  },
  {
    quote: "Whatever you do, do it well.",
    author: "Walt Disney"
  },
  {
    quote: "Tough times never last but tough people do.",
    author: "Robert H. Schiuller"
  },
  {
    quote: "Problems are not stop signs, they are guidelines.",
    author: "Robert H. Schiuller"
  },
  {
    quote: "Have enough courage to start and enough heart to finish.",
    author: "Jessica N. S. Yourko"
  },
  {
    quote: "Hate comes from intimidation, love comes from appreciation.",
    author: "Tyga"
  }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;