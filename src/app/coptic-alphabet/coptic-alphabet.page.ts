import { Component } from '@angular/core';

@Component({
  selector: 'app-coptic-alphabet',
  templateUrl: 'coptic-alphabet.page.html',
  styleUrls: ['coptic-alphabet.page.scss']
})
export class CopticAlphabetPage {
  audio = new Audio();
  readonly copticLetters = [
    { maj: 'Ⲁ', min: 'ⲁ', name: 'alpʰa', transliteration: ['a'], pronunciation: ['[a, ʕ, ʔ]'], displayLetter: 'a' },
    { maj: 'Ⲃ', min: 'ⲃ', name: 'bēta', transliteration: ['b'], pronunciation: ['[b, v, w]'], displayLetter: 'b' },
    { maj: 'Ⲅ', min: 'ⲅ', name: 'gamma', transliteration: ['g'], pronunciation: ['[k]', '[g, ŋ, ɣ]'], displayLetter: 'j' },
    { maj: 'Ⲇ', min: 'ⲇ', name: 'dalda', transliteration: ['d'], pronunciation: ['[d]', '[d, ð]'], displayLetter: 'd' },
    { maj: 'Ⲉ', min: 'ⲉ', name: 'ei', transliteration: ['e'], pronunciation: ['[e]'], displayLetter: 'e' },
    { maj: 'Ⲋ', min: 'ⲋ', name: 'soou', transliteration: ['sc', 'ss', 'c'], pronunciation: ['[sc]'], displayLetter: '6' },
    { maj: 'Ⲍ', min: 'ⲍ', name: 'zēta', transliteration: ['z'], pronunciation: ['[s]', '[z]'], displayLetter: 'z' },
    { maj: 'Ⲏ', min: 'ⲏ', name: 'ēta', transliteration: ['ē', 'ee'], pronunciation: ['[eː]', '[ɛː, i]'], displayLetter: '3' },
    { maj: 'Ⲑ', min: 'ⲑ', name: 'tʰēta', transliteration: ['tʰ'], pronunciation: ['[tʰ]', '[tʰ, θ]'], displayLetter: '0' },
    { maj: 'Ⲓ', min: 'ⲓ', name: 'iōta', transliteration: ['i', 'ï'], pronunciation: ['[i]', '[j]'], displayLetter: 'i' },
    { maj: 'Ⲕ', min: 'ⲕ', name: 'kappa', transliteration: ['k'], pronunciation: ['[k]'], displayLetter: 'k' },
    { maj: 'Ⲗ', min: 'ⲗ', name: 'laula', transliteration: ['l'], pronunciation: ['[l]'], displayLetter: 'l' },
    { maj: 'Ⲙ', min: 'ⲙ', name: 'mē', transliteration: ['m'], pronunciation: ['[m]'], displayLetter: 'm' },
    { maj: 'Ⲛ', min: 'ⲛ', name: 'nē', transliteration: ['n'], pronunciation: ['[n]'], displayLetter: 'n' },
    { maj: 'Ⲝ', min: 'ⲝ', name: 'kˢi', transliteration: ['kˢ', 'x'], pronunciation: ['[X]'], displayLetter: '7' },
    { maj: 'Ⲟ', min: 'ⲟ', name: 'ou', transliteration: ['o'], pronunciation: ['[o]'], displayLetter: 'o' },
    { maj: 'Ⲡ', min: 'ⲡ', name: 'pi', transliteration: ['p'], pronunciation: ['[p]'], displayLetter: 'p' },
    { maj: 'Ⲣ', min: 'ⲣ', name: 'rō', transliteration: ['r'], pronunciation: ['[r]'], displayLetter: 'r' },
    { maj: 'Ⲥ', min: 'ⲥ', name: 'sēmma', transliteration: ['s'], pronunciation: ['[s]'], displayLetter: 'c' },
    { maj: 'Ⲧ', min: 'ⲧ', name: 'tau', transliteration: ['t'], pronunciation: ['[t]', '[t, d]'], displayLetter: 't' },
    { maj: 'Ⲩ', min: 'ⲩ', name: 'he', transliteration: ['u', 'uh'], pronunciation: ['[u, w]', '[u, w, i, v]'], displayLetter: 'v' },
    { maj: 'Ⲫ', min: 'ⲫ', name: 'pʰi', transliteration: ['pʰ'], pronunciation: ['[pʰ]', '[pʰ, f]'], displayLetter: 'f' },
    { maj: 'Ⲭ', min: 'ⲭ', name: 'kʰi', transliteration: ['h', 'kh', 'Q'], pronunciation: ['[kʰ]', '[kʰ, χ, ʃ]'], displayLetter: 'x' },
    { maj: 'Ⲯ', min: 'ⲯ', name: 'pˢi', transliteration: ['pˢ'], pronunciation: ['[ps]'], displayLetter: 'y' },
    { maj: 'Ⲱ', min: 'ⲱ', name: 'ō', transliteration: ['ō', 'w'], pronunciation: ['[oː]', '[w]'], displayLetter: 'w' },
    { maj: 'Ϥ', min: 'ϥ', name: 'fai', transliteration: ['f'], pronunciation: ['[f]'], displayLetter: '4' },
    // Additional letters without numeric values
    { maj: 'Ϣ', min: 'ϣ', name: 'šai', transliteration: ['š'], pronunciation: ['[ʃ]'], displayLetter: '2' },
    { maj: 'Ϧ', min: 'ϧ', name: 'ḫai', transliteration: ['ḫ'], pronunciation: ['[x]'], displayLetter: 'q' },
    { maj: 'Ϩ', min: 'ϩ', name: 'hori', transliteration: ['h'], pronunciation: ['[h]'], displayLetter: 'h' },
    { maj: 'Ϫ', min: 'ϫ', name: 'ḏanḏia', transliteration: ['ḏ', 'j'], pronunciation: ['[d͡ʒ]', '[d͡ʒ, g]', '[j]'], displayLetter: 'g' },
    { maj: 'Ϭ', min: 'ϭ', name: 'qima', transliteration: ['q', 'ch'], pronunciation: ['[q]', '[t͡ʃ]', '[ch]'], displayLetter: 's' },
    { maj: 'Ϯ', min: 'ϯ', name: 'ti', transliteration: ['tt\''], pronunciation: ['[ti, T\']'], displayLetter: '5' },
    { maj: 'Ⳁ', min: 'ⳁ', name: 'pˢis ənše', transliteration: ['ssss'], pronunciation: ['[c:]', '[t͡s]'], displayLetter: 'usg±§!@#$%ˆ&*()_+' }
  ];
playPronunciation(name: string) {
  this.audio.src = `assets/pronunciations/${name}.mp3`;
  this.audio.load();
  this.audio.play();
}

  constructor() {}

}
