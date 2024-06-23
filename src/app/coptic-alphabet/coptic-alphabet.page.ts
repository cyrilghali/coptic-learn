import { Component } from '@angular/core';

@Component({
  selector: 'app-coptic-alphabet',
  templateUrl: 'coptic-alphabet.page.html',
  styleUrls: ['coptic-alphabet.page.scss']
})
export class CopticAlphabetPage {
  audio = new Audio();
  copticLetters = [
    { maj: 'Ⲁ', min: 'ⲁ', name: 'alpʰa', transliteration: ['a'], pronunciation: ['[a, ʕ, ʔ]'] },
    { maj: 'Ⲃ', min: 'ⲃ', name: 'bēta', transliteration: ['b'], pronunciation: ['[b, v, w]'] },
    { maj: 'Ⲅ', min: 'ⲅ', name: 'gamma', transliteration: ['g'], pronunciation: ['[k]', '[g, ŋ, ɣ]'] },
    { maj: 'Ⲇ', min: 'ⲇ', name: 'dalda', transliteration: ['d'], pronunciation: ['[d]', '[d, ð]'] },
    { maj: 'Ⲉ', min: 'ⲉ', name: 'ei', transliteration: ['e'], pronunciation: ['[e]'] },
    { maj: 'Ⲋ', min: 'ⲋ', name: 'soou', transliteration: ['sc', 'ss', 'c'], pronunciation: ['[sc]'] },
    { maj: 'Ⲍ', min: 'ⲍ', name: 'zēta', transliteration: ['z'], pronunciation: ['[s]', '[z]'] },
    { maj: 'Ⲏ', min: 'ⲏ', name: 'ēta', transliteration: ['ē', 'ee'], pronunciation: ['[eː]', '[ɛː, i]'] },
    { maj: 'Ⲑ', min: 'ⲑ', name: 'tʰēta', transliteration: ['tʰ'], pronunciation: ['[tʰ]', '[tʰ, θ]'] },
    { maj: 'Ⲓ', min: 'ⲓ', name: 'iōta', transliteration: ['i', 'ï'], pronunciation: ['[i]', '[j]'] },
    { maj: 'Ⲕ', min: 'ⲕ', name: 'kappa', transliteration: ['k'], pronunciation: ['[k]'] },
    { maj: 'Ⲗ', min: 'ⲗ', name: 'laula', transliteration: ['l'], pronunciation: ['[l]'] },
    { maj: 'Ⲙ', min: 'ⲙ', name: 'mē', transliteration: ['m'], pronunciation: ['[m]'] },
    { maj: 'Ⲛ', min: 'ⲛ', name: 'nē', transliteration: ['n'], pronunciation: ['[n]'] },
    { maj: 'Ⲝ', min: 'ⲝ', name: 'kˢi', transliteration: ['kˢ', 'x'], pronunciation: ['[X]'] },
    { maj: 'Ⲟ', min: 'ⲟ', name: 'ou', transliteration: ['o'], pronunciation: ['[o]'] },
    { maj: 'Ⲡ', min: 'ⲡ', name: 'pi', transliteration: ['p'], pronunciation: ['[p]'] },
    { maj: 'Ⲣ', min: 'ⲣ', name: 'rō', transliteration: ['r'], pronunciation: ['[r]'] },
    { maj: 'Ⲥ', min: 'ⲥ', name: 'sēmma', transliteration: ['s'], pronunciation: ['[s]'] },
    { maj: 'Ⲧ', min: 'ⲧ', name: 'tau', transliteration: ['t'], pronunciation: ['[t]', '[t, d]'] },
    { maj: 'Ⲩ', min: 'ⲩ', name: 'he', transliteration: ['u', 'uh'], pronunciation: ['[u, w]', '[u, w, i, v]'] },
    { maj: 'Ⲫ', min: 'ⲫ', name: 'pʰi', transliteration: ['pʰ'], pronunciation: ['[pʰ]', '[pʰ, f]'] },
    { maj: 'Ⲭ', min: 'ⲭ', name: 'kʰi', transliteration: ['h', 'kh', 'Q'], pronunciation: ['[kʰ]', '[kʰ, χ, ʃ]'] },
    { maj: 'Ⲯ', min: 'ⲯ', name: 'pˢi', transliteration: ['pˢ'], pronunciation: ['[ps]'] },
    { maj: 'Ⲱ', min: 'ⲱ', name: 'ō', transliteration: ['ō', 'w'], pronunciation: ['[oː]', '[w]'] },
    { maj: 'Ϥ', min: 'ϥ', name: 'fai', transliteration: ['f'], pronunciation: ['[f]'] },
    // Additional letters without numeric values
    { maj: 'Ϣ', min: 'ϣ', name: 'šai', transliteration: ['š'], pronunciation: ['[ʃ]'] },
    { maj: 'Ϧ', min: 'ϧ', name: 'ḫai', transliteration: ['ḫ'], pronunciation: ['[x]'] },
    { maj: 'Ϩ', min: 'ϩ', name: 'hori', transliteration: ['h'], pronunciation: ['[h]'] },
    { maj: 'Ϫ', min: 'ϫ', name: 'ḏanḏia', transliteration: ['ḏ', 'j'], pronunciation: ['[d͡ʒ]', '[d͡ʒ, g]', '[j]'] },
    { maj: 'Ϭ', min: 'ϭ', name: 'qima', transliteration: ['q', 'ch'], pronunciation: ['[q]', '[t͡ʃ]', '[ch]'] },
    { maj: 'Ϯ', min: 'ϯ', name: 'ti', transliteration: ['tt\''], pronunciation: ['[ti, T\']'] },
    { maj: 'Ⳁ', min: 'ⳁ', name: 'pˢis ənše', transliteration: ['ssss'], pronunciation: ['[c:]', '[t͡s]'] }
  ];
playPronunciation(name: string) {
  this.audio.src = `assets/pronunciations/${name}.mp3`;
  this.audio.load();
  this.audio.play();
}

  constructor() {}

}
