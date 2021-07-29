console.log("-----------TASK 1-----------");

let call =
  "Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!";

console.log("All sentences");
let sentences = call.split(". ");
sentences = sentences.map((elem) => {
  return elem.split("? ");
});
sentences = sentences.flat();
console.log(sentences);

console.log("Sentences w/ more than 3 words");
let newSentences = [];
sentences.forEach((sentence) => {
  if (sentence.split(" ").length > 3) newSentences.push(sentence);
});
console.log(newSentences);

console.log("Sentences w/ blacked info");
newSentences = newSentences.map((sentence) => {
  return sentence.replace(new RegExp("[0-9]", "g"), "X");
});
console.log(newSentences);

console.log("---------------------------");
