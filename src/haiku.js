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
    return ([lineOne.join(' '), lineTwo.join(' '), lineThree.join(' ')].join('\n'));
  }
}