import { Pipe, PipeTransform } from '@angular/core';
import { copticLetter } from 'src/app/shared/types/coptic-letter';
import { copticLetters } from 'src/app/shared/constants/coptic-letters';

@Pipe({
  name: 'copticTransliteration',
  standalone: true,
})
export class CopticTransliterationPipe implements PipeTransform {
  private transliterationFontMap: { [key: string]: string };

  constructor() {
    this.transliterationFontMap =
      this.createTransliterationFontMap(copticLetters);
  }

  transform(word: string): string {
    return this.transliterate(word.toLowerCase());
  }

  private createTransliterationFontMap(letters: copticLetter[]): {
    [key: string]: string;
  } {
    const map: { [key: string]: string } = {};
    letters.forEach((letter) => {
      map[letter.lowercaseUnicode] = letter.copticFontMapping;
    });
    return map;
  }

  private transliterate(word: string): string {
    return word
      .toLowerCase()
      .split('')
      .map((letter) => this.transliterationFontMap[letter] || letter)
      .join('');
  }
}
