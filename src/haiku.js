import syllables from 'syllable';

export default class Haiku {
  constructor(text) {
    if (text === '') {
      this.text = this.generateHaiku();
    } else {
      this.text = text;
    }
  }

  isThreeLines() {
    if (this.text.split("\n").length === 3) {
      return true;
    } else {
      return false;
    }
  }

  isHaiku() {
    const [lineOne, lineTwo, lineThree] = this.text.split('\n');

    if (this.isThreeLines() &&
        (syllables(lineOne) === 5) &&
        (syllables(lineTwo) === 7) &&
        (syllables(lineThree) === 5)) {
      return true;
    } else {
      return false;
    }
  }

  generateHaiku() {
    return "";
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