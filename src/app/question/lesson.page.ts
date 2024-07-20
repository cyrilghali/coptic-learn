import { Component } from '@angular/core';
import { CopticWord } from 'src/app/shared/types/coptic-word';
import { Question } from 'src/app/shared/types/question';
import { AudioService } from 'src/app/shared/services/audio.service';
import { COPTIC_WORDS } from 'src/app/shared/constants/coptic-words-list';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '',
  templateUrl: './lesson.page.html',
  styleUrls: ['./lesson.page.scss'],
})
export class LessonPage {
  progress = 0;
  currentQuestionIndex = 0;
  currentChoice: CopticWord = { unicodeWord: '', sound: '' };

  questions: Question[] = [];

  constructor(public audioService: AudioService) {
    this.questions = this.generateQuestions(COPTIC_WORDS);
  }

  get currentQuestion() {
    return this.questions[this.currentQuestionIndex];
  }

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

  shuffle(array: any[]): any[] {
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

  selectChoice(choice: CopticWord) {
    this.audioService.playSound(`assets/words/${choice.unicodeWord}.mp3`);
    this.currentChoice = choice;
  }

  submit() {
    if (this.currentChoice === this.currentQuestion.correctAnswer) {
      this.progress += 100 / this.questions.length;
      this.audioService.playSound('assets/sounds-effects/duolingo-correct.mp3');
      this.advanceQuestion();
    } else {
      this.audioService.playSound('assets/sounds-effects/duolingo-wrong.mp3');
    }
  }

  advanceQuestion() {
    this.currentQuestionIndex++;
  }
}
