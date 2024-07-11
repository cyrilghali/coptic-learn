import { Component } from '@angular/core';

@Component({
  selector: 'app-coptic-alphabet',
  templateUrl: 'coptic-alphabet.page.html',
  styleUrls: ['coptic-alphabet.page.scss']
})
export class CopticAlphabetPage {
  audio = new Audio();

  readonly copticLetters = [
    {
      uppercaseImage: "assets/letters/Coptic Alpha-maj.svg",
      lowercaseImage: "assets/letters/Coptic Alpha-min.svg",
      uppercaseUnicode: "Ⲁ",
      lowercaseUnicode: "ⲁ",
      numericValue: 1,
      letterName: "Alfa",
      greekEquiv: "Α, α",
      transliteration: "A",
      sahidicPron: "a",
      bohairicPron: "æ, ɑ",
      lateCopticPron: "ä",
      grecoBohairicPron: "a",
      displayFontLetter: "a",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      }
    },
    {
      uppercaseImage: "assets/letters/Coptic Beta-maj.svg",
      lowercaseImage: "assets/letters/Coptic Beta-min.svg",
      uppercaseUnicode: "Ⲃ",
      lowercaseUnicode: "ⲃ",
      numericValue: 2,
      letterName: "Vida",
      greekEquiv: "Β, β",
      transliteration: "B/V",
      sahidicPron: "β",
      bohairicPron: "β (final b)",
      lateCopticPron: "w (final b)",
      grecoBohairicPron: "v (b often before a consonant or in a name)",
      displayFontLetter: "b",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      }
    },
    {
      uppercaseImage: "assets/letters/Coptic Gamma-maj.svg",
      lowercaseImage: "assets/letters/Coptic Gamma-min.svg",
      uppercaseUnicode: "Ⲅ",
      lowercaseUnicode: "ⲅ",
      numericValue: 3,
      letterName: "Gamma",
      greekEquiv: "Γ, γ",
      transliteration: "G/Gh/NG",
      sahidicPron: "k (marked Greek words)",
      bohairicPron: "",
      lateCopticPron: "g (ɣ before ⲁ, ⲟ, or ⲱ)",
      grecoBohairicPron: "ɣ, g (before e̞ or i), ŋ (before g or k)",
      displayFontLetter: "j",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      }
    },
    {
      uppercaseImage: "assets/letters/Coptic Dalda-maj.svg",
      lowercaseImage: "assets/letters/Coptic Dalda-min.svg",
      uppercaseUnicode: "Ⲇ",
      lowercaseUnicode: "ⲇ",
      numericValue: 4,
      letterName: "Delda",
      greekEquiv: "Δ, δ",
      transliteration: "TH/D",
      sahidicPron: "t (marked Greek words)",
      bohairicPron: "",
      lateCopticPron: "d (marked Greek words)",
      grecoBohairicPron: "ð (d in a name)",
      displayFontLetter: 'd',
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      }
    },
    {
      uppercaseImage: "assets/letters/Coptic Ei-maj.svg",
      lowercaseImage: "assets/letters/Coptic Ei-min.svg",
      uppercaseUnicode: "Ⲉ",
      lowercaseUnicode: "ⲉ",
      numericValue: 5,
      letterName: "Eie",
      greekEquiv: "Ε, ε",
      transliteration: "E",
      sahidicPron: "ɛ, ə (ⲉⲓ = iː, j)",
      bohairicPron: "ɛ, ə (ⲓⲉ = e)",
      lateCopticPron: "æ, ɑ (ⲓⲉ = e)",
      grecoBohairicPron: "e̞",
      displayFontLetter: "e",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      }
    },
    {
      uppercaseImage: "assets/letters/Coptic Sou.svg",
      lowercaseImage: "assets/letters/Coptic Sou.svg",
      uppercaseUnicode: "Ⲋ",
      lowercaseUnicode: "ⲋ",
      numericValue: 6,
      letterName: "Sou",
      greekEquiv: "ϛ (Stigma (letter)), Digamma cursive 07, Digamma cursive 04",
      transliteration: "(none)",
      sahidicPron: "dz",
      bohairicPron: "",
      lateCopticPron: "",
      grecoBohairicPron: "",
      displayFontLetter: "6",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      }
    },
    {
      uppercaseImage: "assets/letters/Coptic Zeta-maj.svg",
      lowercaseImage: "assets/letters/Coptic Zeta-min.svg",
      uppercaseUnicode: "Ⲍ",
      lowercaseUnicode: "ⲍ",
      numericValue: 7,
      letterName: "Zata",
      greekEquiv: "Ζ, ζ",
      transliteration: "Z",
      sahidicPron: "s (marked Greek words)",
      bohairicPron: "",
      lateCopticPron: "z (marked Greek words)",
      grecoBohairicPron: "z",
      displayFontLetter: "z",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      }
    },
    {
      uppercaseImage: "assets/letters/Coptic Eta-maj.svg",
      lowercaseImage: "assets/letters/Coptic Eta-min.svg",
      uppercaseUnicode: "Ⲏ",
      lowercaseUnicode: "ⲏ",
      numericValue: 8,
      letterName: "Hate",
      greekEquiv: "Η, η",
      transliteration: "EE",
      sahidicPron: "eː",
      bohairicPron: "e",
      lateCopticPron: "æ, ɑ, ɪ",
      grecoBohairicPron: "iː",
      displayFontLetter: "3",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      }
    },
    {
      uppercaseImage: "assets/letters/Coptic Theta-maj.svg",
      lowercaseImage: "assets/letters/Coptic Theta-min.svg",
      uppercaseUnicode: "Ⲑ",
      lowercaseUnicode: "ⲑ",
      numericValue: 9,
      letterName: "Thethe",
      greekEquiv: "Θ, θ",
      transliteration: "Th/T",
      sahidicPron: "tʰ",
      bohairicPron: "t",
      lateCopticPron: "θ",
      grecoBohairicPron: "θ",
      displayFontLetter: "0",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      }
    },
    {
      uppercaseImage: "assets/letters/Coptic Iota-maj.svg",
      lowercaseImage: "assets/letters/Coptic Iota-min.svg",
      uppercaseUnicode: "Ⲓ",
      lowercaseUnicode: "ⲓ",
      numericValue: 10,
      letterName: "Iauda",
      greekEquiv: "Ι, ι",
      transliteration: "I/J/Y",
      sahidicPron: "iː, j",
      bohairicPron: "i, j, ə (ⲓⲉ = e)",
      lateCopticPron: "ɪ, j (ⲓⲉ = e)",
      grecoBohairicPron: "i, j (before vowels), ɪ (after vowels to form diphthongs)",
      displayFontLetter: "i",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      }
    },
    {
      uppercaseImage: "assets/letters/Coptic Kappa-maj.svg",
      lowercaseImage: "assets/letters/Coptic Kappa-min.svg",
      uppercaseUnicode: "Ⲕ",
      lowercaseUnicode: "ⲕ",
      numericValue: 20,
      letterName: "Kapa",
      greekEquiv: "Κ, κ",
      transliteration: "K",
      sahidicPron: "k",
      bohairicPron: "kʼ, k",
      lateCopticPron: "k",
      grecoBohairicPron: "k",
      displayFontLetter: "k",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      }
    },
    {
      uppercaseImage: "assets/letters/Coptic Laula-maj.svg",
      lowercaseImage: "assets/letters/Coptic Laula-min.svg",
      uppercaseUnicode: "Ⲗ",
      lowercaseUnicode: "ⲗ",
      numericValue: 30,
      letterName: "Laula",
      greekEquiv: "Λ, λ",
      transliteration: "L",
      sahidicPron: "l",
      bohairicPron: "l",
      lateCopticPron: "l",
      grecoBohairicPron: "l",
      displayFontLetter: "l",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      }
    },
    {
      uppercaseImage: "assets/letters/Coptic Me-maj.svg",
      lowercaseImage: "assets/letters/Coptic Me-min.svg",
      uppercaseUnicode: "Ⲙ",
      lowercaseUnicode: "ⲙ",
      numericValue: 40,
      letterName: "Mi",
      greekEquiv: "Μ, μ",
      transliteration: "M",
      sahidicPron: "m",
      bohairicPron: "m",
      lateCopticPron: "m",
      grecoBohairicPron: "m",
      displayFontLetter: "m"
    },
    {
      uppercaseImage: "assets/letters/Coptic Ne-maj.svg",
      lowercaseImage: "assets/letters/Coptic Ne-min.svg",
      uppercaseUnicode: "Ⲛ",
      lowercaseUnicode: "ⲛ",
      numericValue: 50,
      letterName: "Ni",
      greekEquiv: "Ν, ν",
      transliteration: "N",
      sahidicPron: "n",
      bohairicPron: "n",
      lateCopticPron: "n",
      grecoBohairicPron: "n",
      displayFontLetter: "n",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      }
    },
    {
      uppercaseImage: "assets/letters/Coptic Kxi-maj.svg",
      lowercaseImage: "assets/letters/Coptic Kxi-min.svg",
      uppercaseUnicode: "Ⲝ",
      lowercaseUnicode: "ⲝ",
      numericValue: 60,
      letterName: "Ksi",
      greekEquiv: "Ξ, ξ",
      transliteration: "X",
      sahidicPron: "ks (only in Greek loanwords)",
      bohairicPron: "ks (only in Greek loanwords)",
      lateCopticPron: "ks (usually following a consonant or sometimes when starting a word)",
      grecoBohairicPron: "ks (usually following a consonant or sometimes when starting a word)",
      displayFontLetter: "7",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      }
    },
    {
      uppercaseImage: "assets/letters/Coptic Ou-maj.svg",
      lowercaseImage: "assets/letters/Coptic Ou-min.svg",
      uppercaseUnicode: "Ⲟ",
      lowercaseUnicode: "ⲟ",
      numericValue: 70,
      letterName: "O",
      greekEquiv: "Ο, ο",
      transliteration: "O",
      sahidicPron: "ɔ (ⲟⲩ = uː, w)",
      bohairicPron: "o (ⲟⲩ = u, w)",
      lateCopticPron: "o̞ (ⲟⲩ = u)",
      grecoBohairicPron: "o̞",
      displayFontLetter: "o",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      }
    },
    {
      uppercaseImage: "assets/letters/Coptic Pi-maj.svg",
      lowercaseImage: "assets/letters/Coptic Pi-min.svg",
      uppercaseUnicode: "Ⲡ",
      lowercaseUnicode: "ⲡ",
      numericValue: 80,
      letterName: "Pi",
      greekEquiv: "Π, π",
      transliteration: "P",
      sahidicPron: "p",
      bohairicPron: "p",
      lateCopticPron: "b",
      grecoBohairicPron: "p",
      displayFontLetter: "p",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      }
    },
    {
      uppercaseImage: "assets/letters/Coptic Ro-maj.svg",
      lowercaseImage: "assets/letters/Coptic Ro-min.svg",
      uppercaseUnicode: "Ⲣ",
      lowercaseUnicode: "ⲣ",
      numericValue: 100,
      letterName: "Ro",
      greekEquiv: "Ρ, ρ",
      transliteration: "R",
      sahidicPron: "ɾ, r",
      bohairicPron: "ɾ, r",
      lateCopticPron: "ɾ, r",
      grecoBohairicPron: "ɾ, r",
      displayFontLetter: "r",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      },
    },
    {
      uppercaseImage: "assets/letters/Coptic Semma-maj.svg",
      lowercaseImage: "assets/letters/Coptic Semma-min.svg",
      uppercaseUnicode: "Ⲥ",
      lowercaseUnicode: "ⲥ",
      numericValue: 200,
      letterName: "Sima",
      greekEquiv: "Σ, σ, ς",
      transliteration: "S/C",
      sahidicPron: "s",
      bohairicPron: "s",
      lateCopticPron: "s",
      grecoBohairicPron: "s",
      displayFontLetter: "c",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      },
    },
    {
      uppercaseImage: "assets/letters/Coptic Tau-maj.svg",
      lowercaseImage: "assets/letters/Coptic Tau-min.svg",
      uppercaseUnicode: "Ⲧ",
      lowercaseUnicode: "ⲧ",
      numericValue: 300,
      letterName: "Tau",
      greekEquiv: "Τ, τ",
      transliteration: "T/D",
      sahidicPron: "t",
      bohairicPron: "tʼ, t",
      lateCopticPron: "d (final t)",
      grecoBohairicPron: "t",
      displayFontLetter: "t",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      },
    },
    {
      uppercaseImage: "assets/letters/Coptic He-maj.svg",
      lowercaseImage: "assets/letters/Coptic He-min.svg",
      uppercaseUnicode: "Ⲩ",
      lowercaseUnicode: "ⲩ",
      numericValue: 400,
      letterName: "Ua",
      greekEquiv: "Υ, υ",
      transliteration: "U/V/Y",
      sahidicPron: "w (ⲟⲩ = uː, w)",
      bohairicPron: "ɪ, w (ⲟⲩ = u, w)",
      lateCopticPron: "i, w (between ⲟ and another vowel except ⲱ), v (after ɑ (ⲁ) or e̞ (ⲉ)), u (digraph ⲟⲩ)",
      grecoBohairicPron: "i, w (between ⲟ and another vowel except ⲱ), v (after ɑ (ⲁ) or e̞ (ⲉ)), u (digraph ⲟⲩ)",
      displayFontLetter: "v",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      },
    },
    {
      uppercaseImage: "assets/letters/Coptic Phi-maj.svg",
      lowercaseImage: "assets/letters/Coptic Phi-min.svg",
      uppercaseUnicode: "Ⲫ",
      lowercaseUnicode: "ⲫ",
      numericValue: 500,
      letterName: "Fi",
      greekEquiv: "Φ, φ",
      transliteration: "F",
      sahidicPron: "pʰ",
      bohairicPron: "pʰ",
      lateCopticPron: "b, f",
      grecoBohairicPron: "f",
      displayFontLetter: "f",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      },
    },
    {
      uppercaseImage: "assets/letters/Coptic Khi-maj.svg",
      lowercaseImage: "assets/letters/Coptic Khi-min.svg",
      uppercaseUnicode: "Ⲭ",
      lowercaseUnicode: "ⲭ",
      numericValue: 600,
      letterName: "Khi",
      greekEquiv: "Χ, χ",
      transliteration: "K/Sh/Kh",
      sahidicPron: "kʰ",
      bohairicPron: "kʰ",
      lateCopticPron: "k (if the word is Coptic in origin), x (if the word is Greek in origin), ç (if the word is Greek in origin but before e̞ or i)",
      grecoBohairicPron: "k (if the word is Coptic in origin), x (if the word is Greek in origin), ç (if the word is Greek in origin but before e̞ or i)",
      displayFontLetter: "x",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      },
    },
    {
      uppercaseImage: "assets/letters/Coptic Pxi-maj.svg",
      lowercaseImage: "assets/letters/Coptic Pxi-min.svg",
      uppercaseUnicode: "Ⲯ",
      lowercaseUnicode: "ⲯ",
      numericValue: 700,
      letterName: "Psi",
      greekEquiv: "Ψ, ψ",
      transliteration: "PS",
      sahidicPron: "bs (only in Greek loanwords)",
      bohairicPron: "ps (only in Greek loanwords)",
      lateCopticPron: "ps (usually following a consonant)",
      grecoBohairicPron: "ps (usually following a consonant)",
      displayFontLetter: "y",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      },
    },
    {
      uppercaseImage: "assets/letters/Coptic O-maj.svg",
      lowercaseImage: "assets/letters/Coptic O-min.svg",
      uppercaseUnicode: "Ⲱ",
      lowercaseUnicode: "ⲱ",
      numericValue: 800,
      letterName: "Oou",
      greekEquiv: "Ω, ω",
      transliteration: "O/W",
      sahidicPron: "oː",
      bohairicPron: "o",
      lateCopticPron: "oː",
      grecoBohairicPron: "o̞ː",
      displayFontLetter: "w",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      },
    },
    {
      uppercaseImage: "assets/letters/Coptic Sai-maj.svg",
      lowercaseImage: "assets/letters/Coptic Sai-min.svg",
      uppercaseUnicode: "Ϣ",
      lowercaseUnicode: "ϣ",
      numericValue: null,
      letterName: "Shei",
      greekEquiv: "(none)",
      transliteration: "Sh",
      sahidicPron: "ʃ",
      bohairicPron: "ʃ",
      lateCopticPron: "ʃ",
      grecoBohairicPron: "ʃ",
      displayFontLetter: "2",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      },
    },
    {
      uppercaseImage: "assets/letters/Coptic Fai-maj.svg",
      lowercaseImage: "assets/letters/Coptic Fai-min.svg",
      uppercaseUnicode: "Ϥ",
      lowercaseUnicode: "ϥ",
      numericValue: 90,
      letterName: "Fei",
      greekEquiv: "ϙ (numerical value)",
      transliteration: "F",
      sahidicPron: "f",
      bohairicPron: "f",
      lateCopticPron: "f",
      grecoBohairicPron: "f",
      displayFontLetter: "4",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      },
    },
    {
      uppercaseImage: "assets/letters/Coptic Hai-maj.svg",
      lowercaseImage: "assets/letters/Coptic Hai-min.svg",
      uppercaseUnicode: "Ϧ (Ⳉ)",
      lowercaseUnicode: "ϧ (ⳉ)",
      numericValue: null,
      letterName: "Khei",
      greekEquiv: "(none)",
      transliteration: "Kh/Q",
      sahidicPron: "x",
      bohairicPron: "x",
      lateCopticPron: "x",
      grecoBohairicPron: "x",
      displayFontLetter: "q",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      },
    },
    {
      uppercaseImage: "assets/letters/Coptic Hori-maj.svg",
      lowercaseImage: "assets/letters/Coptic Hori-min.svg",
      uppercaseUnicode: "Ϩ",
      lowercaseUnicode: "ϩ",
      numericValue: null,
      letterName: "Hori",
      greekEquiv: "(none)",
      transliteration: "H",
      sahidicPron: "h",
      bohairicPron: "h",
      lateCopticPron: "h",
      grecoBohairicPron: "h",
      displayFontLetter: "h",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      },
    },
    {
      uppercaseImage: "assets/letters/Coptic Dandia-maj.svg",
      lowercaseImage: "assets/letters/Coptic Dandia-min.svg",
      uppercaseUnicode: "Ϫ",
      lowercaseUnicode: "ϫ",
      numericValue: null,
      letterName: "Gangia",
      greekEquiv: "(none)",
      transliteration: "G/J",
      sahidicPron: "t͡ʃ",
      bohairicPron: "t͡ʃʼ, t͡ʃ",
      lateCopticPron: "ɟ",
      grecoBohairicPron: "g, dʒ (before e̞ or i)",
      displayFontLetter: "g",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      },
    },
    {
      uppercaseImage: "assets/letters/Coptic Cima-maj.svg",
      lowercaseImage: "assets/letters/Coptic Cima-min.svg",
      uppercaseUnicode: "Ϭ",
      lowercaseUnicode: "ϭ",
      numericValue: null,
      letterName: "Shima",
      greekEquiv: "(none)",
      transliteration: "C/Ch",
      sahidicPron: "kʲ",
      bohairicPron: "t͡ʃʰ",
      lateCopticPron: "ʃ",
      grecoBohairicPron: "tʃ (usually following a consonant)",
      displayFontLetter: "s",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      },
    },
    {
      uppercaseImage: "assets/letters/Coptic Ti-maj.svg",
      lowercaseImage: "assets/letters/Coptic Ti-min.svg",
      uppercaseUnicode: "Ϯ",
      lowercaseUnicode: "ϯ",
      numericValue: null,
      letterName: "Dei",
      greekEquiv: "(none)",
      transliteration: "Ti",
      sahidicPron: "tiː",
      bohairicPron: "tʼi, tʼi, tʼə",
      lateCopticPron: "di",
      grecoBohairicPron: "ti",
      displayFontLetter: "5",
      sound: {
        pronunciation: "assets/pronunciations/.mp3"
      },
    },/*
    {
      uppercaseImage: "assets/letters/Coptic Sampi.svg",
      lowercaseImage: "assets/letters/Coptic Sampi.svg",
      uppercaseUnicode: "Ⳁ",
      lowercaseUnicode: "ⳁ",
      numericValue: 900,
      letterName: "Sampi",
      greekEquiv: "Ϡ, ϡ (numerical value)",
      transliteration: "(none)",
      sahidicPron: "",
      bohairicPron: "",
      lateCopticPron: "",
      grecoBohairicPron: "",
      displayFontLetter: ""
    }*/
  ];

  playPronunciation(name: string) {
  this.audio.src = `assets/pronunciations/${name}.mp3`;
  this.audio.load();
  this.audio.play();
}

  constructor() {}

}
