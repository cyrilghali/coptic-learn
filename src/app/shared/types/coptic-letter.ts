export interface copticLetter {
    uppercaseImage: string;
    lowercaseImage: string;
    uppercaseUnicode: string;
    lowercaseUnicode: string;
    numericValue: number | null;
    letterName: string;
    greekEquiv: string;
    transliteration: string;
    sahidicPron: string;
    bohairicPron: string;
    lateCopticPron: string;
    grecoBohairicPron: string;
    copticFontMapping: string;
    sound: {
        pronunciation: string;
    };
}