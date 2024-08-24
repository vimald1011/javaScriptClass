const str = "How are you mate";
const words = str.split(" ");
const capitalizedWords = [];
for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const firstLetter = word[0].toUpperCase();
    const lastLetter = word[word.length - 1].toUpperCase();
    const middleLetters = word.slice(1, word.length - 1);
    capitalizedWords.push(firstLetter + middleLetters + lastLetter);
}
const uppercaseStr = capitalizedWords.join(" ");
console.log(uppercaseStr);