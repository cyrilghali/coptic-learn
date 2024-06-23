// src/app/lesson/lesson.page.ts
import { Component } from '@angular/core';

interface Question {
  type: string;
  question: string;
  audioSrc?: string; // Made optional to accommodate multiple question types
  choices?: string[]; // Made optional for the same reason
  correctAnswer: string;
}

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.page.html',
  styleUrls: ['./lesson.page.scss'],
})
export class LessonPage {

  progress = 0;
  currentQuestionIndex = 0;
  currentChoice = '';
  writtenAnswer = '';
  audio = new Audio();

  copticWords = [
    "ϣⲁ",
    "ϫⲉ",
    "ⲇⲉ",
    "ⲉⲓ",
    "ⲙⲓ",
    "ⲛⲓ",
    "ⲝⲓ",
    "ⲡⲉ",
    "ⲡⲓ",
    "ⲣⲏ",
    "ⲣⲟ",
    "ⲧⲉ",
    "ⲭⲁ",
    "ϣⲏⲡ",
    "ϧⲉⲛ",
    "ϩⲱⲛ",
    "ϫⲏⲕ",
    "ⲃⲱⲕ",
    "ⲉⲙⲓ",
    "ⲍⲱⲏ",
    "ⲏⲣⲡ",
    "ⲏⲧⲁ",
    "ⲑⲁⲓ",
    "ⲑⲱⲕ",
    "ⲙⲉⲓ",
    "ⲛⲁⲓ",
    "ⲛⲁⲛ",
    "ⲛⲁⲩ",
    "ⲛⲉⲙ",
    "ⲛⲏⲃ",
    "ⲛⲓⲙ",
    "ⲣⲁⲛ",
    "ϩⲟⲗϫ",
    "ϯϫⲟⲙ",
    "ⲁⲃⲃⲁ",
    "ⲁⲗⲗⲁ",
    "ⲁⲗⲫⲁ",
    "ⲁⲙⲏⲛ",
    "ⲁⲛⲟⲕ",
    "ⲇⲟⲝⲁ",
    "ⲉⲛⲉϩ",
    "ⲍⲉⲧⲁ",
    "ⲍⲱⲟⲛ",
    "Ⲑⲉⲟⲥ",
    "ⲑⲏⲧⲁ",
    "ⲓⲱⲧⲁ",
    "ⲕⲁⲧⲁ",
    "ⲗⲁⲟⲥ",
    "ⲗⲱⲃϣ",
    "ⲙⲏⲓϥ",
    "ⲙⲓⲥⲓ",
    "ⲙⲟϣⲓ",
    "ⲛ̀ϫⲉ",
    "ⲛ̀ⲧⲉ",
    "ⲛⲟⲃⲓ",
    "ⲛⲟⲩⲃ",
    "ⲟⲩⲏⲃ",
    "ⲟⲩⲟϩ",
    "ⲟⲩⲟⲛ",
    "ⲡⲁⲡⲁ",
    "ⲣⲁⲥϯ",
    "ⲣⲱⲙⲓ",
    "ⲥⲁⲣⲝ",
    "ⲧ̀ⲫⲉ",
    "ⲧⲱⲃϩ",
    "ⲩⲓⲟⲥ",
    "ⲯⲩⲭⲏ",
    "ϣ̀ⲑⲏⲛ",
    "ϩⲓϫⲉⲛ",
    "ⲁϥⲥⲱϯ",
    "ⲁⲅⲓⲟⲥ",
    "ⲁⲛⲍⲏⲃ",
    "ⲁⲝⲓⲟⲥ",
    "ⲃⲁⲧⲟⲥ",
    "Ⲇⲁⲩⲓⲇ",
    "ⲇⲉⲗⲧⲁ",
    "ⲇⲱⲣⲟⲛ",
    "ⲉ̀ⲃⲟⲗ",
    "ⲉⲧϧⲉⲛ",
    "ⲑ̀ⲙⲁⲩ",
    "ⲑⲉⲗⲏⲗ",
    "ⲑⲩⲥⲓⲁ",
    "Ⲓⲥⲁⲁⲕ",
    "ⲕⲁⲡⲡⲁ",
    "ⲗⲉⲩⲗⲁ",
    "Ⲙⲁⲣⲓⲁ",
    "ⲛ̀ϫⲟⲥ",
    "ⲛ̀ⲧⲁⲛ",
    "ⲛⲓⲃⲉⲛ",
    "ⲡ̀ⲱⲛϧ",
    "ⲡⲓⲱⲟⲩ",
    "Ⲣⲁⲕⲟϯ",
    "ⲥ̀ⲙⲟⲩ",
    "ⲧⲉⲛⲱϣ",
    "Ⲫ̀ⲓⲱⲧ",
    "ⲱⲙⲉⲅⲁ",
    "ϩⲩⲙⲛⲟⲥ",
    "Ⲇⲁⲛⲓⲏⲗ",
    "ⲇⲓⲁⲕⲟⲛ",
    "ⲇⲓⲕⲉⲟⲥ",
    "ⲇⲓⲡⲛⲟⲛ",
    "ⲉ̀ϧⲟⲩⲛ",
    "ⲉ̀ⲣⲱⲟⲩ",
    "ⲉⲑⲟⲩⲁⲃ",
    "ⲉⲝⲟⲇⲟⲥ",
    "Ⲏⲣⲱⲇⲏⲥ",
    "Ⲓⲟⲩⲇⲁⲥ",
    "ⲕⲉⲙⲕⲉⲙ",
    "ⲕⲩⲣⲓⲟⲥ",
    "ⲗⲁⲙⲡⲁⲥ",
    "ⲛⲁϩⲙⲉⲛ",
    "Ⲡ̀ϭⲟⲓⲥ",
    "Ⲡⲁⲩⲗⲟⲥ",
    "ⲡ̀ⲕⲁϩⲓ",
    "ⲡⲉⲕⲓⲱⲧ",
    "ⲡⲉⲛⲓⲱⲧ",
    "ⲧⲁⲥⲱⲛⲓ",
    "ⲩⲯⲓⲗⲟⲛ",
    "Ⲫ̀ⲛⲟⲩϯ",
    "ⲭ̀ⲟⲩⲁⲃ",
    "ⲁⲥⲑⲉⲛⲏⲥ",
    "ⲉⲝⲟⲩⲥⲓⲁ",
    "ⲕⲁⲑⲁⲣⲟⲥ",
    "Ⲗⲁⲍⲁⲣⲟⲥ",
    "ⲟⲙⲓⲕⲣⲟⲛ",
    "Ⲁⲛⲧⲱⲛⲓⲟⲥ",
    "Ⲍⲁⲭⲁⲣⲓⲁⲥ",
    "ⲡⲁⲣⲑⲉⲛⲟⲥ",
    "ⲡⲓⲥⲧⲁⲩⲣⲟⲥ",
    "ⲡⲓⲭⲣⲓⲥⲧⲟⲥ",
    "ⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ"
  ]
  questions: Question[];

  generateQuestions(copticWords: string[]): Question[] {
    const questions: Question[] = [];

    copticWords.forEach((word) => {
      // Select 3 random incorrect choices
      const a1 = new Audio();
      a1.src = `assets/words/${word}.mp3`;
      a1.load();
      if (a1.error) {
        return;
      }
      const incorrectChoices = copticWords.filter(w => w !== word);
      const choices = this.shuffle([word, ...this.getRandomChoices(incorrectChoices, 3)]);

      // check the path assets/words/${word}.mp3 exists
      // if not, skip this word



      // Create the question object
      const question: Question = {
        type: 'listening',
        question: 'Select the word you hear.',
        audioSrc: `assets/words/${word}.mp3`,
        choices: choices,
        correctAnswer: word
      };

      questions.push(question);
    });

    return questions;
  }
  shuffle(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  getRandomChoices(array: string[], num: number): string[] {
    const shuffled = this.shuffle(array.slice());
    return shuffled.slice(0, num);
  }
  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  constructor() {
    this.questions = this.generateQuestions(this.copticWords);
    console.log(this.questions);

  }

  selectChoice(choice: string) {
    // Play the audio of the selected word
    this.playAudio(`assets/words/${choice}.mp3`);
    this.currentChoice = choice;
  }

  submit(){
    if (this.currentChoice === this.currentQuestion.correctAnswer) {
      this.progress += 100 / this.questions.length;
      this.playAudio('assets/sounds-effects/duolingo-correct.mp3');
      this.advanceQuestion()
    } else{
      this.playAudio('assets/sounds-effects/duolingo-wrong.mp3');
    }

  }
  playAudio(src: string) {
    this.audio.src = src;
    this.audio.load();
    this.audio.play();
  }

  advanceQuestion() {
    this.currentQuestionIndex++;
  }
}
