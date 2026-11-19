//string homeassignment

let S = "test leaf";
let word = S.split(" ");
let lastwords = word[word.length - 1]
let length = lastwords.length;
console.log(length); 


function lastword(lengths) {
  let str = lengths.trim();
  let words = str.split(" ");
  let lastWord = words[words.length - 1];
  return lastWord.length;

}
console.log(lastword("test leaf playwright"));