import { Component } from '@angular/core';
import { copticLetter } from 'src/app/shared/types/coptic-letter';
import { copticLetters } from 'src/app/shared/constants/coptic-letters';

@Component({
  selector: 'app-coptic-alphabet',
  templateUrl: 'coptic-alphabet.page.html',
  styleUrls: ['coptic-alphabet.page.scss'],
})
export class CopticAlphabetPage {
  audio = new Audio();
  protected readonly copticLetters = copticLetters;

  constructor() {}
}
