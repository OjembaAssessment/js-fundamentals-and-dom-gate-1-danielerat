let myParagraph = document.querySelector("#myParagraph");
//Remove All new Lines and return from our paragraph
const sanitizedParagraph = myParagraph.textContent.replace(/[\r\n]+/g, "");
const splitedParagraph = sanitizedParagraph.split(" ");

const wordWithCout = splitedParagraph.reduce((acc, word) => {
  let wordLowerCase = word.toLocaleLowerCase();
  acc[wordLowerCase] = acc[wordLowerCase] + 1 || 1;
  return acc;
}, {});

// Convert the words to array so that i can sort them in Descending order
const sortedWordWithCount = Object.entries(wordWithCout);
sortedWordWithCount.sort((a, b) => b[1] - a[1]);

// Get the actual words from our paragraph aray of array
const actualWords = sortedWordWithCount.filter((word) => {
  return word[0].length >= 1;
});

// Get the first 5 Repeated words
const firstFive = Object.fromEntries(actualWords.splice(0, 5));
// Keys of all words that are mostly repeated.

let text = myParagraph.textContent;
Object.keys(firstFive).forEach((word) => {
  let exp = new RegExp(`${word}[?." ',]`, "g");
  text = text.replace(exp, `<mark>${word}</mark> `);
});
myParagraph.innerHTML = text;
