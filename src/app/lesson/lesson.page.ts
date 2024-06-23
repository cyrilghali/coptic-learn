// src/app/lesson/lesson.page.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.page.html',
  styleUrls: ['./lesson.page.scss'],
})
export class LessonPage  {
  progress = 0;
  currentQuestionIndex = 0;
  writtenAnswer = '';

  questions = [
    {
      type: 'multiple-choice',
      question: 'What is the Coptic word for "hello"?',
      choices: ['Nehes', 'Emhotep', 'Anok', 'Khaire'],
      correctAnswer: 'Khaire'
    },
    {
      type: 'writing',
      question: 'Write the Coptic word for "water".',
      correctAnswer: 'Moou'
    },
    {
      type: 'listening',
      question: 'Select the word you hear.',
      audioSrc: 'path/to/audio.mp3',
      choices: ['Moou', 'Nehes', 'Anok', 'Khaire'],
      correctAnswer: 'Moou'
    },
    // Add more questions as needed
  ];

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  constructor() {}



  selectChoice(choice: string) {
    if (choice === this.currentQuestion.correctAnswer) {
      this.advance();
    } else {
      alert('Incorrect, try again.');
    }
  }

  submitWrittenAnswer() {
    if (this.writtenAnswer === this.currentQuestion.correctAnswer) {
      this.advance();
    } else {
      alert('Incorrect, try again.');
    }
  }

  playAudio(src: string) {
    const audio = new Audio();
    audio.src = src;
    audio.load();
    audio.play();
  }

  advance() {
    this.currentQuestionIndex++;
    this.progress = this.currentQuestionIndex / this.questions.length;
    this.writtenAnswer = '';
    if (this.currentQuestionIndex >= this.questions.length) {
      alert('Lesson complete!');
    }
  }
}
