const myParagraph = document.querySelector("#myParagraph").textContent;
//Remove All new Lines and return from our paragraph
const sanitizedParagraph = myParagraph.replace(/[\r\n]+/g, "");
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
