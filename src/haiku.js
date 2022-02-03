// const syllable = require('syllable');

export default class Haiku {
  constructor(text) {
    this.text = text;
  }

  isThreeLines() {
    if (this.text.split("\n").length === 3) {
      return true;
    } else {
      return false;
    }
  }

  isHaiku() {
    let lineArray = [];
    let sylCounter = 0;
    let vowels = ["a", "e", "i", "o", "u"];
    lineArray = this.text.split("\n");
    for (let i = 0; i<lineArray.length; i++) {
      let wordArray = lineArray[i].split(" ");
      for (let j = 0; j < wordArray.length; j++){
        let letterArray = wordArray[j].split("");
        for (let k = 0; k < letterArray.length; k++){
          if (vowels.includes(letterArray[i])) {
            sylCounter ++;
          }
        }
      }
    }
    console.log("Counter:", sylCounter);
    return true;
  }
}


// if (word contains vowel)
//   syllable counter ++
// if (word ends in e)
//   syllable counter -1
// if (ends in le or les) 
//   +1 if preceded by consonant


// 'An ocean voyage. As waves break over the bow. The sea welcomes me.' -> split into sections -> check each section -> if all sections are true then it's a haiku

// 'An ocean voyage. As waves break over the bow. The sea welcomes me.' -> pre-split -> pass each as parameter -> check each parameter -> if each is # of syllables then it's a haiku

// let x = 'An ocean voyage. As waves break over the bow. The sea welcomes me.';

// console.log(syllable(x));

// let h = new Haiku(string from user);

// 'An ocean voyage.\nAs waves break over the bow.\nThe sea welcomes me.'

// "An ocean voyage.
// As waves break...
// "
// \n
// npm install babel-jest