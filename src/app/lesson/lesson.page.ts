// src/app/lesson/lesson.page.ts
import { Component, OnInit } from '@angular/core';
import { CopticWord } from 'src/app/shared/types/coptic-word';
import { CopticWordsService } from 'src/app/shared/services/coptic-words.service';
import { Question } from 'src/app/shared/types/question';
import { AudioService } from 'src/app/shared/services/audio.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.page.html',
  styleUrls: ['./lesson.page.scss'],
})
export class LessonPage implements OnInit {
  progress = 0;
  currentQuestionIndex = 0;
  currentChoice = '';

  questions: Question[] = [];
  public copticWords: CopticWord[] = [];

  constructor(
    private copticWordsService: CopticWordsService,
    private audioService: AudioService,
  ) {}

  ngOnInit(): void {
    this.copticWords = this.copticWordsService.getCopticWords();
    this.questions = this.generateQuestions(this.copticWords);}

  generateQuestions(copticWords: CopticWord[]): Question[] {
    const questions: Question[] = [];

    copticWords.forEach((word) => {
      try {
        this.audioService.loadSound(`assets/words/${word.unicodeWord}.mp3`);
      } catch (error) {
        return;
      }
      const incorrectChoices = copticWords.filter((w) => w !== word);
      const choices = this.shuffle([
        word,
        ...this.getRandomChoices(incorrectChoices, 3),
      ]);

      const question: Question = {
        type: 'listening',
        question: 'Select the word you hear.',
        audioSrc: `assets/words/${word.unicodeWord}.mp3`,
        choices: choices,
        correctAnswer: word,
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

  getRandomChoices(array: CopticWord[], num: number): string[] {
    const shuffled = this.shuffle(array.slice());
    return shuffled.slice(0, num);
  }
  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

  selectChoice(choice: string) {
    // Play the audio of the selected word
    this.playAudio(`assets/words/${choice}.mp3`);
    this.currentChoice = choice;
  }

  submit() {
    if (this.currentChoice === this.currentQuestion.correctAnswer) {
      this.progress += 100 / this.questions.length;
      this.playAudio('assets/sounds-effects/duolingo-correct.mp3');
      this.advanceQuestion();
    } else {
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
