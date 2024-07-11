import { CopticWord } from 'src/app/shared/types/coptic-word';

type questionType = 'listening' | 'reading' | 'writing' | 'speaking';

export interface Question {
  type: questionType;
  question: string;
  audioSrc?: string; // Made optional to accommodate multiple question types
  choices?: CopticWord[]; // Made optional for the same reason
  correctAnswer: CopticWord;
}
