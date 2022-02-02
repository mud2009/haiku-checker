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
    return "";
  }
}
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