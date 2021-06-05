// snatched from https://github.com/haowen737/react-typewriter-hook/blob/master/src/typeWriter.ts

export class TypeWriter {
  constructor() {
    this.dummyQueue = [];
    this.eventQueue = [];
  }

  startTypeWord(str) {
    this.erasing = true;
    this.nextWord = str;
    this.dummyQueue.pop();
    this.word = this.dummyQueue.join('');
    return this.word;
  }

  typing() {
    // earsing to last character, start write next word
    if (this.erasing && !this.word) {
      return this.restartTypeWriter();
    }
    // earsing
    if (this.erasing && this.word) {
      return this.erase();
    }
    // write end
    if (this.word === this.memoWord) {
      return this.word;
    }
    // writing
    const el = this.eventQueue.shift();
    this.dummyQueue.push(el);
    this.word = this.dummyQueue.join('');
    return this.word;
  }

  restartTypeWriter() {
    this.memoWord = this.nextWord;
    this.eventQueue = this.nextWord ? this.nextWord.split('') : [];
    this.erasing = false;
    return '';
  }

  erase() {
    this.dummyQueue.pop();
    this.word = this.dummyQueue.join('');
    return this.word;
  }

  rd() {
    const r = Math.random();
    return r > 0.1 || r < 0.07 ? this.rd() : r * 1000;
  }
}
