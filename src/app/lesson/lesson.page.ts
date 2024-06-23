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

  copticWords = ['Ⲇⲁⲩⲓⲇ',
    'ϧⲁⲧⲉⲛ',
    'ⲁⲅⲓⲟⲥ',
    'Ⲏⲣⲱⲇⲏⲥ',
    'ⲍⲉⲧⲁ',
    'ⲉⲓ',
    'Ⲙⲁⲣⲓⲁ',
    'ⲉϫⲱⲣϩ',
    'ⲃⲱⲕ',
    'ϯϣⲟⲩⲣⲏ',
    'ϧⲉⲛ',
    'ⲁϥⲥⲱϯ',
    'ⲁⲙⲏⲛ',
    'ⲡⲗⲁⲥⲙⲁ',
    'ⲥⲁϫⲓ',
    'ⲛ̀ⲧⲉ',
    'ⲑⲩⲥⲓⲁ',
    'ⲥⲱⲙⲁ',
    'ⲛⲟⲃⲓ',
    'ⲧⲁⲩ',
    'ⲁⲝⲓⲟⲥ',
    'ⲥⲱⲧⲉⲙ',
    'ⲙⲉⲓ',
    'ϫⲁϭⲏ',
    'ϯ',
    'ⲅⲣⲁⲫⲏ',
    'ⲡⲁⲛⲧⲁ',
    'Ⲇⲁⲛⲓⲏⲗ',
    'ⲙⲁⲣⲉⲥⲓ̀',
    'ⲡⲉⲛⲱⲓⲕ',
    'ⲙⲟⲛⲁⲭⲟⲥ',
    'ⲯⲩⲭⲏ',
    'ϩⲟⲗϫ',
    'ⲯⲓⲧ',
    'ⲫⲓ',
    'ⲣⲁⲥϯ',
    'ⲅⲁⲙⲙⲁ',
    'ⲁⲗⲫⲁ',
    'ⲗⲁⲙⲡⲁⲥ',
    'ϣⲁϣϥ',
    'ⲇⲉ',
    'ϫⲉⲙϯⲡⲓ',
    'ⲗⲩⲭⲛⲓⲁ',
    'ⲉⲝⲟⲇⲟⲥ',
    'ⲧ̀ⲫⲉ',
    'ⲯⲓ',
    'Ⲅⲉⲱⲣⲅⲓⲟⲥ',
    'ϫⲱⲙ',
    'ⲛ̀ⲧⲉⲛⲭⲱ',
    'ⲑⲏⲧⲁ',
    'ⲁⲣⲭⲏ',
    'ⲕⲟⲥⲙⲟⲥ',
    'Ⲭ̀ⲟⲩⲁⲃ',
    'ⲥ̀ⲙⲟⲩ',
    'ⲟⲙⲓⲕⲣⲟⲛ',
    'ϩ̀ⲣⲏⲓ',
    'Ⲙⲁⲅⲓ',
    'Ⲡⲁⲩⲗⲟⲥ',
    'ⲛⲁⲛ',
    'ⲓⲥⲭⲩⲣⲟⲥ',
    'Ⲫ̀ⲛⲟⲩϯ',
    'ϫⲁϫⲓ',
    'ⲇⲓⲕⲉⲟⲥ',
    'ϣ̀ⲑⲏⲛ',
    'ⲑⲁⲓ',
    'ⲣⲟ',
    'Ⲁⲗⲗⲏⲗⲟⲩⲓⲁ',
    'ϯⲡⲁⲣⲑⲉⲛⲟⲥ',
    'ⲃⲏⲧⲁ',
    'ⲍⲱⲏ',
    'ϩⲱⲣⲓ',
    'ⲡ̀ⲱⲛϧ',
    'ⲗⲱⲃϣ',
    'ⲉⲛⲧⲟⲗⲏ',
    'ⲉⲩⲁⲅⲅⲉⲗⲓⲟⲛ',
    'ϭⲓⲥⲓ',
    'ⲟⲩϣⲉⲡϩ̀ⲙⲟⲧ',
    'ⲙⲓ',
    'ⲛ̀ⲛⲏⲉⲧⲉ',
    'ⲛⲏⲉⲧⲉⲣⲟⲛ',
    'ⲁⲛⲍⲏⲃ',
    'Ⲫ̀ⲓⲱⲧ',
    'ⲧⲁⲗϭⲟ',
    'ⲇⲱⲣⲟⲛ',
    'ⲙ̀ⲫ̀ⲣⲏϯ',
    'ⲧⲟⲩⲃⲟ',
    'ⲩⲯⲓⲗⲟⲛ',
    'ⲟⲩϫⲁⲓ',
    'ⲛⲓⲃⲉⲛ',
    'ϧⲁⲓ',
    'ⲛ̀ⲙ̀ⲡ̀ϣⲁ',
    'ⲗⲉⲩⲗⲁ',
    'ⲁϥⲭⲁ',
    'ⲛⲓ',
    'ϩⲟϫϩⲉϫ',
    'ⲥ̀ⲑⲉⲣⲧⲉⲣ',
    'ⲭ̀ⲣⲱⲙ',
    'ⲁⲅⲅⲉⲗⲟⲥ',
    'ⲛⲁⲩ',
    'ⲡⲓⲕⲁϩⲓ',
    'ⲁⲗⲗⲁ',
    'ⲙⲏⲓϥ',
    'ⲁⲣⲓⲯⲁⲗⲓⲛ',
    'ⲏⲧⲁ',
    'ⲛⲟⲩⲃ',
    'ⲗⲁⲟⲥ',
    'ⲙⲁⲩ',
    'ⲓⲱⲧⲁ',
    'ⲃⲁⲧⲟⲥ',
    'ⲡⲉⲛϭⲟⲓⲥ',
    'ϣⲁⲓ',
    'ⲏⲣⲡ',
    'ϯⲱⲟⲩ',
    'ⲁⲛⲁⲅⲛⲱⲥⲓⲥ',
    'ⲁⲥⲑⲉⲛⲏⲥ',
    'Ⲑⲉⲟⲥ',
    'ⲉⲅⲭⲟⲥ',
    'ⲟⲛⲧⲱⲥ',
    'ⲥ̀ⲑⲟⲓⲛⲟⲩϥⲓ',
    'ϫⲓϫ',
    'ⲭⲱ',
    'ⲕⲉⲙⲕⲉⲙ',
    'ⲥ̀ϧⲁⲓ',
    'ⲟⲩⲟϩ',
    'ⲉ̀ϧⲟⲩⲛ',
    'ⲡⲓⲣⲁⲥⲙⲟⲥ',
    'ⲁϥⲓ̀',
    'ⲅⲏ',
    'ⲛⲉⲙ',
    'ⲉ̀ⲃⲟⲗ',
    'ϥⲁⲓ',
    'ϩⲓⲧⲉⲛ',
    'ϯϭⲣⲟⲙⲡⲓ',
    'ⲭⲟⲣⲟⲥ',
    'ⲛ̀ⲧⲁⲛ',
    'ⲛⲓϣϯ',
    'ⲟⲩⲏⲃ',
    'Ⲓⲟⲩⲇⲁⲥ',
    'ⲭⲓ',
    'ⲉⲛⲉϩ',
    'ⲟⲩⲛⲟϥ',
    'ϯⲙⲉⲧⲟⲩⲣⲟ',
    'ⲛⲓⲙ',
    'ⲕⲩⲣⲓⲟⲥ',
    'ⲕⲁⲑⲁⲣⲟⲥ',
    'ⲁⲛⲟⲕ',
    'ⲫⲁⲓ',
    'ⲅⲁⲣ',
    'ⲛⲓϥⲓ',
    'ⲛ̀ϫⲉ',
    'ⲭ̀ⲟⲩⲁⲃ',
    'ⲡⲉⲛⲓⲱⲧ',
    'ⲥⲁⲣⲝ',
    'ⲡⲓⲱⲟⲩ',
    'ⲛ̀ϫⲟⲥ',
    'ⲃⲁⲕⲓ',
    'ⲙⲁⲣⲉϥϣⲱⲡⲓ',
    'ⲑⲉⲗⲏⲗ',
    'ⲭⲁⲣⲓⲥ',
    'ⲭⲉⲣⲉ',
    'ⲛⲓⲫⲏⲟⲩⲓ',
    'ⲯⲁⲗⲙⲟⲥ',
    'ϫⲁⲛϫⲁ',
    'ⲟⲣⲑⲟⲇⲟⲝⲟⲥ',
    'ⲡⲉⲧⲉϩⲛⲁⲕ',
    'ⲧⲱⲃϩ',
    'ⲧⲉ',
    'ⲙⲟⲛⲟⲅⲉⲛⲏⲥ',
    'ⲁⲅⲁⲡⲏ',
    'ϣⲉⲙϣⲓ',
    'ⲡⲉ',
    'ⲁⲅⲁⲑⲟⲥ',
    'ϩⲁ',
    'ⲉⲩⲭⲏ',
    'ⲡⲓⲡⲛⲉⲩⲙⲁ',
    'ⲭⲁ',
    'ⲡⲉⲕⲓⲱⲧ',
    'ⲉⲩⲭⲁⲣⲓⲥⲧⲓⲁ',
    'ⲇⲟⲝⲁ',
    'ⲛⲟϩⲉⲙ',
    'ⲉⲧϧⲉⲛ',
    'Ⲗⲁⲍⲁⲣⲟⲥ',
    'ⲉ̀ⲃⲟⲗϩⲁ',
    'ⲱⲙⲉⲅⲁ',
    'ϣⲉ',
    'ϩⲱⲥ',
    'ⲩⲓⲟⲥ',
    'ϫⲏⲕ',
    'ϭⲓⲙⲁ',
    'ⲟⲩⲣⲟ',
    'ⲥ̀ⲙⲁⲣⲱⲟⲩⲧ',
    'ⲇⲓⲁⲕⲟⲛ',
    'ⲧⲁⲥⲱⲛⲓ',
    'ⲉ̀ⲣⲱⲟⲩ',
    'ⲣⲏ',
    'ⲡⲁⲛⲧⲱⲛ',
    'ⲙ̀ⲡⲉⲣⲉⲛⲧⲉⲛ',
    'ϣⲁϣⲛⲓ',
    'ⲫⲁϧⲣⲓ',
    'ϫⲉ',
    'ⲇⲓⲡⲛⲟⲛ',
    'ⲥⲓⲙⲁ',
    'ⲡⲉⲕⲣⲁⲛ',
    'ϣⲁ',
    'ⲣⲁⲛ',
    'ⲧⲉⲛⲱϣ',
    'ⲡⲓⲭⲣⲓⲥⲧⲟⲥ',
    'Ⲭⲏⲙⲓ',
    'ⲡ̀ⲕⲁϩⲓ',
    'ⲉⲝⲟⲩⲥⲓⲁ',
    'ⲛⲏⲃ',
    'ⲁⲥⲡⲁⲥⲙⲟⲥ',
    'ⲑⲱⲕ',
    'ⲥⲱⲧⲏⲣ',
    'Ⲉⲩⲁ',
    'ϣⲏⲡ',
    'ⲙ̀ⲫⲟⲟⲩ',
    'ⲕⲁⲡⲡⲁ',
    'ⲡⲁⲣⲑⲉⲛⲟⲥ',
    'ⲧⲉⲛⲟⲩⲱϣⲧ',
    'ⲁⲛⲁⲅⲕⲏ',
    'ⲡⲓⲡⲉⲧϩⲱⲟⲩ',
    'ⲝⲓ',
    'ⲁⲫⲉ',
    'ⲑ̀ⲙⲁⲩ',
    'Ⲁⲣⲓⲧⲉⲛ',
    'Ⲍⲁⲭⲁⲣⲓⲁⲥ',
    'ⲯⲁⲗⲧⲏⲥ',
    'ⲍⲱⲟⲛ',
    'ⲕⲁⲧⲁ',
    'ⲉⲙⲓ',
    'ⲭ̀ⲗⲟⲙ',
    'ⲙⲁⲣⲉϥⲧⲟⲩⲃⲟ',
    'ϩⲓϫⲉⲛ',
    'Ⲓⲥⲁⲁⲕ',
    'Ⲁⲛⲧⲱⲛⲓⲟⲥ',
    'Ⲣⲁⲕⲟϯ',
    'ⲡⲁⲛⲧⲟⲕⲣⲁⲧⲱⲣ',
    'ⲟⲩⲟⲛ',
    'ⲣⲱⲙⲓ',
    'ⲉⲑⲟⲩⲁⲃ',
    'ⲉ̀ⲡⲓⲣⲁⲥⲙⲟⲥ',
    'ⲛⲁϩⲙⲉⲛ',
    'ϩⲩⲙⲛⲟⲥ',
    'Ⲓⲏⲥⲟⲩⲥ',
    'ⲁⲡⲟⲥⲧⲟⲗⲟⲥ',
    'ⲇⲉⲗⲧⲁ',
    'ϯϫⲟⲙ',
    'ⲙⲟϣⲓ',
    'ⲡⲁⲡⲁ',
    'ϩⲱⲛ',
    'ⲙⲓⲥⲓ',
    'ⲁⲃⲃⲁ',
    'ⲛⲁⲓ',
    'ⲧⲉⲕⲙⲉⲧⲟⲩⲣⲟ',
    'ⲡⲓⲥⲧⲁⲩⲣⲟⲥ',
    'ⲡⲓ',
    'Ⲡ̀ϭⲟⲓⲥ',
    'ⲥⲁⲗⲡⲓⲅⲝ']
  questions: Question[];

  generateQuestions(copticWords: string[]): Question[] {
    const questions: Question[] = [];

    copticWords.forEach((word) => {
      // Select 3 random incorrect choices
      const incorrectChoices = copticWords.filter(w => w !== word);
      const choices = this.shuffle([word, ...this.getRandomChoices(incorrectChoices, 3)]);

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
