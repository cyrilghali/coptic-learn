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
   // { maj: 'Ⳁ', min: 'ⳁ', name: 'pˢis ənše', transliteration: ['ssss'], pronunciation: ['[c:]', '[t͡s]'], displayLetter: 'usg±§!@#$%ˆ&*()_+' }
  ];

  readonly copticLetters2 = [
    {
      uppercaseImage: "File:Coptic Alpha-maj.svg",
      lowercaseImage: "File:Coptic Alpha-min.svg",
      uppercaseUnicode: "Ⲁ",
      lowercaseUnicode: "ⲁ",
      numericValue: 1,
      letterName: "Alfa",
      greekEquiv: "Α, α",
      transliteration: "A",
      sahidicPron: "a",
      bohairicPron: "æ, ɑ",
      lateCopticPron: "ä",
      grecoBohairicPron: "a"
    },
    {
      uppercaseImage: "File:Coptic Beta-maj.svg",
      lowercaseImage: "File:Coptic Beta-min.svg",
      uppercaseUnicode: "Ⲃ",
      lowercaseUnicode: "ⲃ",
      numericValue: 2,
      letterName: "Vida",
      greekEquiv: "Β, β",
      transliteration: "B/V",
      sahidicPron: "β",
      bohairicPron: "β (final b)",
      lateCopticPron: "w (final b)",
      grecoBohairicPron: "v (b often before a consonant or in a name)"
    },
    {
      uppercaseImage: "File:Coptic Gamma-maj.svg",
      lowercaseImage: "File:Coptic Gamma-min.svg",
      uppercaseUnicode: "Ⲅ",
      lowercaseUnicode: "ⲅ",
      numericValue: 3,
      letterName: "Gamma",
      greekEquiv: "Γ, γ",
      transliteration: "G/Gh/NG",
      sahidicPron: "k (marked Greek words)",
      bohairicPron: "",
      lateCopticPron: "g (ɣ before ⲁ, ⲟ, or ⲱ)",
      grecoBohairicPron: "ɣ, g (before e̞ or i), ŋ (before g or k)"
    },
    {
      uppercaseImage: "File:Coptic Dalda-maj.svg",
      lowercaseImage: "File:Coptic Dalda-min.svg",
      uppercaseUnicode: "Ⲇ",
      lowercaseUnicode: "ⲇ",
      numericValue: 4,
      letterName: "Delda",
      greekEquiv: "Δ, δ",
      transliteration: "TH/D",
      sahidicPron: "t (marked Greek words)",
      bohairicPron: "",
      lateCopticPron: "d (marked Greek words)",
      grecoBohairicPron: "ð (d in a name)"
    },
    {
      uppercaseImage: "File:Coptic Ei-maj.svg",
      lowercaseImage: "File:Coptic Ei-min.svg",
      uppercaseUnicode: "Ⲉ",
      lowercaseUnicode: "ⲉ",
      numericValue: 5,
      letterName: "Eie",
      greekEquiv: "Ε, ε",
      transliteration: "E",
      sahidicPron: "ɛ, ə (ⲉⲓ = iː, j)",
      bohairicPron: "ɛ, ə (ⲓⲉ = e)",
      lateCopticPron: "æ, ɑ (ⲓⲉ = e)",
      grecoBohairicPron: "e̞"
    },
    {
      uppercaseImage: "File:Coptic Sou.svg",
      lowercaseImage: "File:Coptic Sou.svg",
      uppercaseUnicode: "Ⲋ",
      lowercaseUnicode: "ⲋ",
      numericValue: 6,
      letterName: "Sou",
      greekEquiv: "ϛ (Stigma (letter)), Digamma cursive 07, Digamma cursive 04",
      transliteration: "(none)",
      sahidicPron: "dz",
      bohairicPron: "",
      lateCopticPron: "",
      grecoBohairicPron: ""
    },
    {
      uppercaseImage: "File:Coptic Zeta-maj.svg",
      lowercaseImage: "File:Coptic Zeta-min.svg",
      uppercaseUnicode: "Ⲍ",
      lowercaseUnicode: "ⲍ",
      numericValue: 7,
      letterName: "Zata",
      greekEquiv: "Ζ, ζ",
      transliteration: "Z",
      sahidicPron: "s (marked Greek words)",
      bohairicPron: "",
      lateCopticPron: "z (marked Greek words)",
      grecoBohairicPron: "z"
    },
    {
      uppercaseImage: "File:Coptic Eta-maj.svg",
      lowercaseImage: "File:Coptic Eta-min.svg",
      uppercaseUnicode: "Ⲏ",
      lowercaseUnicode: "ⲏ",
      numericValue: 8,
      letterName: "Hate",
      greekEquiv: "Η, η",
      transliteration: "EE",
      sahidicPron: "eː",
      bohairicPron: "e",
      lateCopticPron: "æ, ɑ, ɪ",
      grecoBohairicPron: "iː"
    },
    {
      uppercaseImage: "File:Coptic Theta-maj.svg",
      lowercaseImage: "File:Coptic Theta-min.svg",
      uppercaseUnicode: "Ⲑ",
      lowercaseUnicode: "ⲑ",
      numericValue: 9,
      letterName: "Thethe",
      greekEquiv: "Θ, θ",
      transliteration: "Th/T",
      sahidicPron: "tʰ",
      bohairicPron: "t",
      lateCopticPron: "θ",
      grecoBohairicPron: "θ"
    },
    {
      uppercaseImage: "File:Coptic Iota-maj.svg",
      lowercaseImage: "File:Coptic Iota-min.svg",
      uppercaseUnicode: "Ⲓ",
      lowercaseUnicode: "ⲓ",
      numericValue: 10,
      letterName: "Iauda",
      greekEquiv: "Ι, ι",
      transliteration: "I/J/Y",
      sahidicPron: "iː, j",
      bohairicPron: "i, j, ə (ⲓⲉ = e)",
      lateCopticPron: "ɪ, j (ⲓⲉ = e)",
      grecoBohairicPron: "i, j (before vowels), ɪ (after vowels to form diphthongs)"
    },
    {
      uppercaseImage: "File:Coptic Kappa-maj.svg",
      lowercaseImage: "File:Coptic Kappa-min.svg",
      uppercaseUnicode: "Ⲕ",
      lowercaseUnicode: "ⲕ",
      numericValue: 20,
      letterName: "Kapa",
      greekEquiv: "Κ, κ",
      transliteration: "K",
      sahidicPron: "k",
      bohairicPron: "kʼ, k",
      lateCopticPron: "k",
      grecoBohairicPron: "k"
    },
    {
      uppercaseImage: "File:Coptic Laula-maj.svg",
      lowercaseImage: "File:Coptic Laula-min.svg",
      uppercaseUnicode: "Ⲗ",
      lowercaseUnicode: "ⲗ",
      numericValue: 30,
      letterName: "Laula",
      greekEquiv: "Λ, λ",
      transliteration: "L",
      sahidicPron: "l",
      bohairicPron: "l",
      lateCopticPron: "l",
      grecoBohairicPron: "l"
    },
    {
      uppercaseImage: "File:Coptic Me-maj.svg",
      lowercaseImage: "File:Coptic Me-min.svg",
      uppercaseUnicode: "Ⲙ",
      lowercaseUnicode: "ⲙ",
      numericValue: 40,
      letterName: "Mi",
      greekEquiv: "Μ, μ",
      transliteration: "M",
      sahidicPron: "m",
      bohairicPron: "m",
      lateCopticPron: "m",
      grecoBohairicPron: "m"
    },
    {
      uppercaseImage: "File:Coptic Ne-maj.svg",
      lowercaseImage: "File:Coptic Ne-min.svg",
      uppercaseUnicode: "Ⲛ",
      lowercaseUnicode: "ⲛ",
      numericValue: 50,
      letterName: "Ni",
      greekEquiv: "Ν, ν",
      transliteration: "N",
      sahidicPron: "n",
      bohairicPron: "n",
      lateCopticPron: "n",
      grecoBohairicPron: "n"
    },
    {
      uppercaseImage: "File:Coptic Kxi-maj.svg",
      lowercaseImage: "File:Coptic Kxi-min.svg",
      uppercaseUnicode: "Ⲝ",
      lowercaseUnicode: "ⲝ",
      numericValue: 60,
      letterName: "Ksi",
      greekEquiv: "Ξ, ξ",
      transliteration: "X",
      sahidicPron: "ks (only in Greek loanwords)",
      bohairicPron: "ks (only in Greek loanwords)",
      lateCopticPron: "ks (usually following a consonant or sometimes when starting a word)",
      grecoBohairicPron: "ks (usually following a consonant or sometimes when starting a word)"
    },
    {
      uppercaseImage: "File:Coptic Ou-maj.svg",
      lowercaseImage: "File:Coptic Ou-min.svg",
      uppercaseUnicode: "Ⲟ",
      lowercaseUnicode: "ⲟ",
      numericValue: 70,
      letterName: "O",
      greekEquiv: "Ο, ο",
      transliteration: "O",
      sahidicPron: "ɔ (ⲟⲩ = uː, w)",
      bohairicPron: "o (ⲟⲩ = u, w)",
      lateCopticPron: "o̞ (ⲟⲩ = u)",
      grecoBohairicPron: "o̞"
    },
    {
      uppercaseImage: "File:Coptic Pi-maj.svg",
      lowercaseImage: "File:Coptic Pi-min.svg",
      uppercaseUnicode: "Ⲡ",
      lowercaseUnicode: "ⲡ",
      numericValue: 80,
      letterName: "Pi",
      greekEquiv: "Π, π",
      transliteration: "P",
      sahidicPron: "p",
      bohairicPron: "p",
      lateCopticPron: "b",
      grecoBohairicPron: "p"
    },
    {
      uppercaseImage: "File:Coptic Ro-maj.svg",
      lowercaseImage: "File:Coptic Ro-min.svg",
      uppercaseUnicode: "Ⲣ",
      lowercaseUnicode: "ⲣ",
      numericValue: 100,
      letterName: "Ro",
      greekEquiv: "Ρ, ρ",
      transliteration: "R",
      sahidicPron: "ɾ, r",
      bohairicPron: "ɾ, r",
      lateCopticPron: "ɾ, r",
      grecoBohairicPron: "ɾ, r"
    },
    {
      uppercaseImage: "File:Coptic Semma-maj.svg",
      lowercaseImage: "File:Coptic Semma-min.svg",
      uppercaseUnicode: "Ⲥ",
      lowercaseUnicode: "ⲥ",
      numericValue: 200,
      letterName: "Sima",
      greekEquiv: "Σ, σ, ς",
      transliteration: "S/C",
      sahidicPron: "s",
      bohairicPron: "s",
      lateCopticPron: "s",
      grecoBohairicPron: "s"
    },
    {
      uppercaseImage: "File:Coptic Tau-maj.svg",
      lowercaseImage: "File:Coptic Tau-min.svg",
      uppercaseUnicode: "Ⲧ",
      lowercaseUnicode: "ⲧ",
      numericValue: 300,
      letterName: "Tau",
      greekEquiv: "Τ, τ",
      transliteration: "T/D",
      sahidicPron: "t",
      bohairicPron: "tʼ, t",
      lateCopticPron: "d (final t)",
      grecoBohairicPron: "t"
    },
    {
      uppercaseImage: "File:Coptic He-maj.svg",
      lowercaseImage: "File:Coptic He-min.svg",
      uppercaseUnicode: "Ⲩ",
      lowercaseUnicode: "ⲩ",
      numericValue: 400,
      letterName: "Ua",
      greekEquiv: "Υ, υ",
      transliteration: "U/V/Y",
      sahidicPron: "w (ⲟⲩ = uː, w)",
      bohairicPron: "ɪ, w (ⲟⲩ = u, w)",
      lateCopticPron: "i, w (between ⲟ and another vowel except ⲱ), v (after ɑ (ⲁ) or e̞ (ⲉ)), u (digraph ⲟⲩ)",
      grecoBohairicPron: "i, w (between ⲟ and another vowel except ⲱ), v (after ɑ (ⲁ) or e̞ (ⲉ)), u (digraph ⲟⲩ)"
    },
    {
      uppercaseImage: "File:Coptic Phi-maj.svg",
      lowercaseImage: "File:Coptic Phi-min.svg",
      uppercaseUnicode: "Ⲫ",
      lowercaseUnicode: "ⲫ",
      numericValue: 500,
      letterName: "Fi",
      greekEquiv: "Φ, φ",
      transliteration: "F",
      sahidicPron: "pʰ",
      bohairicPron: "pʰ",
      lateCopticPron: "b, f",
      grecoBohairicPron: "f"
    },
    {
      uppercaseImage: "File:Coptic Khi-maj.svg",
      lowercaseImage: "File:Coptic Khi-min.svg",
      uppercaseUnicode: "Ⲭ",
      lowercaseUnicode: "ⲭ",
      numericValue: 600,
      letterName: "Khi",
      greekEquiv: "Χ, χ",
      transliteration: "K/Sh/Kh",
      sahidicPron: "kʰ",
      bohairicPron: "kʰ",
      lateCopticPron: "k (if the word is Coptic in origin), x (if the word is Greek in origin), ç (if the word is Greek in origin but before e̞ or i)",
      grecoBohairicPron: "k (if the word is Coptic in origin), x (if the word is Greek in origin), ç (if the word is Greek in origin but before e̞ or i)"
    },
    {
      uppercaseImage: "File:Coptic Pxi-maj.svg",
      lowercaseImage: "File:Coptic Pxi-min.svg",
      uppercaseUnicode: "Ⲯ",
      lowercaseUnicode: "ⲯ",
      numericValue: 700,
      letterName: "Psi",
      greekEquiv: "Ψ, ψ",
      transliteration: "PS",
      sahidicPron: "bs (only in Greek loanwords)",
      bohairicPron: "ps (only in Greek loanwords)",
      lateCopticPron: "ps (usually following a consonant)",
      grecoBohairicPron: "ps (usually following a consonant)"
    },
    {
      uppercaseImage: "File:Coptic O-maj.svg",
      lowercaseImage: "File:Coptic O-min.svg",
      uppercaseUnicode: "Ⲱ",
      lowercaseUnicode: "ⲱ",
      numericValue: 800,
      letterName: "Oou",
      greekEquiv: "Ω, ω",
      transliteration: "O/W",
      sahidicPron: "oː",
      bohairicPron: "o",
      lateCopticPron: "oː",
      grecoBohairicPron: "o̞ː"
    },
    {
      uppercaseImage: "File:Coptic Sai-maj.svg",
      lowercaseImage: "File:Coptic Sai-min.svg",
      uppercaseUnicode: "Ϣ",
      lowercaseUnicode: "ϣ",
      numericValue: null,
      letterName: "Shei",
      greekEquiv: "(none)",
      transliteration: "Sh",
      sahidicPron: "ʃ",
      bohairicPron: "ʃ",
      lateCopticPron: "ʃ",
      grecoBohairicPron: "ʃ"
    },
    {
      uppercaseImage: "File:Coptic Fai-maj.svg",
      lowercaseImage: "File:Coptic Fai-min.svg",
      uppercaseUnicode: "Ϥ",
      lowercaseUnicode: "ϥ",
      numericValue: 90,
      letterName: "Fei",
      greekEquiv: "ϙ (numerical value)",
      transliteration: "F",
      sahidicPron: "f",
      bohairicPron: "f",
      lateCopticPron: "f",
      grecoBohairicPron: "f"
    },
    {
      uppercaseImage: "File:Coptic Hai-maj.svg",
      lowercaseImage: "File:Coptic Hai-min.svg",
      uppercaseUnicode: "Ϧ (Ⳉ)",
      lowercaseUnicode: "ϧ (ⳉ)",
      numericValue: null,
      letterName: "Khei",
      greekEquiv: "(none)",
      transliteration: "Kh/Q",
      sahidicPron: "x",
      bohairicPron: "x",
      lateCopticPron: "x",
      grecoBohairicPron: "x"
    },
    {
      uppercaseImage: "File:Coptic Hori-maj.svg",
      lowercaseImage: "File:Coptic Hori-min.svg",
      uppercaseUnicode: "Ϩ",
      lowercaseUnicode: "ϩ",
      numericValue: null,
      letterName: "Hori",
      greekEquiv: "(none)",
      transliteration: "H",
      sahidicPron: "h",
      bohairicPron: "h",
      lateCopticPron: "h",
      grecoBohairicPron: "h"
    },
    {
      uppercaseImage: "File:Coptic Dandia-maj.svg",
      lowercaseImage: "File:Coptic Dandia-min.svg",
      uppercaseUnicode: "Ϫ",
      lowercaseUnicode: "ϫ",
      numericValue: null,
      letterName: "Gangia",
      greekEquiv: "(none)",
      transliteration: "G/J",
      sahidicPron: "t͡ʃ",
      bohairicPron: "t͡ʃʼ, t͡ʃ",
      lateCopticPron: "ɟ",
      grecoBohairicPron: "g, dʒ (before e̞ or i)"
    },
    {
      uppercaseImage: "File:Coptic Cima-maj.svg",
      lowercaseImage: "File:Coptic Cima-min.svg",
      uppercaseUnicode: "Ϭ",
      lowercaseUnicode: "ϭ",
      numericValue: null,
      letterName: "Shima",
      greekEquiv: "(none)",
      transliteration: "C/Ch",
      sahidicPron: "kʲ",
      bohairicPron: "t͡ʃʰ",
      lateCopticPron: "ʃ",
      grecoBohairicPron: "tʃ (usually following a consonant)"
    },
    {
      uppercaseImage: "File:Coptic Ti-maj.svg",
      lowercaseImage: "File:Coptic Ti-min.svg",
      uppercaseUnicode: "Ϯ",
      lowercaseUnicode: "ϯ",
      numericValue: null,
      letterName: "Dei",
      greekEquiv: "(none)",
      transliteration: "Ti",
      sahidicPron: "tiː",
      bohairicPron: "tʼi, tʼi, tʼə",
      lateCopticPron: "di",
      grecoBohairicPron: "ti"
    },
    {
      uppercaseImage: "File:Coptic Sampi.svg",
      lowercaseImage: "File:Coptic Sampi.svg",
      uppercaseUnicode: "Ⳁ",
      lowercaseUnicode: "ⳁ",
      numericValue: 900,
      letterName: "Sampi",
      greekEquiv: "Ϡ, ϡ (numerical value)",
      transliteration: "(none)",
      sahidicPron: "",
      bohairicPron: "",
      lateCopticPron: "",
      grecoBohairicPron: ""
    }
  ];

  playPronunciation(name: string) {
  this.audio.src = `assets/pronunciations/${name}.mp3`;
  this.audio.load();
  this.audio.play();
}

  constructor() {}

}
