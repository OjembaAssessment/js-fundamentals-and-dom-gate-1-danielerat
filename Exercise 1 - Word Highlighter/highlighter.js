let myParagraph = document.querySelector("#myParagraph");
myParagraph.innerHTML = markRepeatedUnderlineUpperCaseWords(myParagraph, 5);
// Helper Function to process the paragraph
function markRepeatedUnderlineUpperCaseWords(myParagraph, firstx) {
  //Remove All new Lines,return, and [.!?'"] from our paragraph
  const sanitizedParagraph = myParagraph.textContent.replace(
    /[\r\n.!?'"]+/g,
    " "
  );
  // Split our string on a space
  const splitedParagraph = sanitizedParagraph.split(" ");
  // Create an object of word as key and their count as values
  const wordWithCout = splitedParagraph.reduce((acc, word) => {
    let wordLowerCase = word.toLocaleLowerCase();
    acc[wordLowerCase] = acc[wordLowerCase] + 1 || 1;
    return acc;
  }, {});

  // Convert the words to array so that i can sort them in Descending order
  const sortedWordWithCount = Object.entries(wordWithCout);
  sortedWordWithCount.sort((a, b) => b[1] - a[1]); //sort them out

  // Get the actual words from our paragraph aray of array
  const actualWords = sortedWordWithCount.filter((word) => {
    return word[0].length >= 1;
  });

  // Get the first x Repeated words
  const firstFive = Object.fromEntries(actualWords.splice(0, firstx));

  // Use our original paragraph
  let text = myParagraph.textContent;
  //   Loop through our first x words,
  // find them in our original paragraph and surround them with mark
  // If they start with uppercase, underline them.
  Object.keys(firstFive).forEach((word) => {
    let UpperCaseWord = word[0].toUpperCase() + word.slice(1);
    let expLow = new RegExp(`${word}[?." ',]`, "g");
    let expUp = new RegExp(`${UpperCaseWord}[?." ',]`, "g");
    text = text.replace(expLow, `<mark>${word}</mark> `);
    text = text.replace(
      expUp,
      `<mark style="text-decoration:underline;">${UpperCaseWord}</mark> `
    );
  });

  return text;
}
