export interface Word {
  japanese: string;
  reading: string;
  meaning: string;
  isNew?: boolean; // Highlight new vocabulary
}

export interface Sentence {
  id: string;
  words: Word[];
  translation: string;
}

export interface GrammarPoint {
  id: string;
  pattern: string;
  explanation: string;
  examples: string[];
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Story {
  id: string;
  title: string;
  level: string;
  sentences: Sentence[];
  grammarPoints: GrammarPoint[];
  questions: Question[];
}
