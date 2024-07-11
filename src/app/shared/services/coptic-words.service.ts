import { Injectable } from '@angular/core';
import { copticLetter } from "src/app/shared/types/coptic-letter";
import { copticLetters } from "src/app/shared/constants/coptic-letters";
import {copticWordsList} from "src/app/shared/constants/coptic-words-list";
import {CopticWord} from "src/app/shared/types/coptic-word";

@Injectable({
  providedIn: 'root'
})
export class CopticWordsService {
  private transliterationFontMap: { [key: string]: string };

  constructor() {
    this.transliterationFontMap = this.createTransliterationFontMap(copticLetters);
  }

  private createTransliterationFontMap(letters: copticLetter[]): { [key: string]: string } {
    const map: { [key: string]: string } = {};
    letters.forEach(letter => {
      map[letter.uppercaseUnicode] = letter.copticFontMapping;
      map[letter.lowercaseUnicode] = letter.copticFontMapping;
    });
    return map;
  }

  public transliterate(word: string): string {
    return word.split('').map(letter => this.transliterationFontMap[letter] || letter).join('');
  }

  public getCopticWords(): CopticWord[] {
    return copticWordsList.map((word) => {
      return {
        unicodeWord: word,
        sound: `assets/words/${word}.mp3`,
        copticFontMapping: this.transliterate(word)
      };
    });
  }
}
