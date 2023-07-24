const myParagraph = document.querySelector("#myParagraph").textContent;
//Remove All new Lines and return from our paragraph
const sanitizedParagraph = myParagraph.replace(/[\r\n]+/g, "");
const splitedParagraph = sanitizedParagraph.split(" ");

const wordWithCout = splitedParagraph.reduce((acc, word) => {
  let wordLowerCase = word.toLocaleLowerCase();
  acc[wordLowerCase] = acc[wordLowerCase] + 1 || 1;
  return acc;
}, {});
