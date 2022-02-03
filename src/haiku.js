import syllables from 'syllable';
import randomWords from 'random-words';

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
    // let words = ['i', 'am', 'the', 'what', 'hi', 'bus', 'car', 'cat', 'dog', 'phone', 'plant', "nightmare", "devote", "quote", "talented", "ruin", "discuss", "slip", "redeem", "the", "no", "is", "crocs", "creamer", "old", "trick", "up", "sandwich", "alphabet", "death", "every", "fur", "fermentation", "chainsaw", "lunch", "ricebag", "eventually", "soda", "orange", "sugar", "beat"];
    // function randomWord() { 
    //   return words[Math.floor(Math.random()*words.length)];
    // }
    let lineOne = [];
    let lineTwo = [];
    let lineThree = [];
    while (syllables(lineOne.join(' ')) !== 5) {
      lineOne.push(randomWords());
      if (syllables(lineOne.join(' ')) > 5) {
        lineOne.pop();
      }
    }
    while (syllables(lineTwo.join(' ')) !== 7) {
      lineTwo.push(randomWords());
      if (syllables(lineTwo.join(' ')) > 7) {
        lineTwo.pop();
      }
    }
    while (syllables(lineThree.join(' ')) !== 5) {
      lineThree.push(randomWords());
      if (syllables(lineThree.join(' ')) > 5) {
        lineThree.pop();
      }
    }

    // function capWord(wordArray) {
    //   return wordArray.map((word) => {
    //     return word[0].toUpperCase() + word.substring(1); 
    //   });
    // }

    // console.log('Line 1: ' + lineOne.join(" ") + " " + syllables(lineOne.join(' ')));
    // console.log('Line 2: ' + lineTwo.join(" ") + " " + syllables(lineTwo.join(' ')));
    // console.log('Line 3: ' + lineThree.join(" ") + " " + syllables(lineThree.join(' ')));
    // let reasonableString = lineOne.join(' ') + '<br>' + lineTwo.join(' ') + '<br>' + lineThree.join(' ');
    // return capWord(reasonableString.split()).join(' ');
    //console.log()
    //return reasonableString.toUpperCase();
    console.log([lineOne.join(' '), lineTwo.join(' '), lineThree.join(' ')].join('\n'));
    return ([lineOne.join(' '), lineTwo.join(' '), lineThree.join(' ')].join('\n'));
  }
}