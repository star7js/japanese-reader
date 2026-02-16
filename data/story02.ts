import { Story } from '@/types/story';

export const story02: Story = {
  id: 'beginner-002',
  title: 'まいにちのせいかつ (Daily Life)',
  level: 'Beginner',
  sentences: [
    {
      id: 's1',
      words: [
        { japanese: 'あさ', reading: 'あさ', meaning: 'morning', isNew: true },
        { japanese: '、', reading: '、', meaning: '[comma]' },
        { japanese: 'わたし', reading: 'わたし', meaning: 'I, me' },
        { japanese: 'は', reading: 'は', meaning: '[topic marker]' },
        { japanese: 'ろくじ', reading: 'ろくじ', meaning: '6 o\'clock', isNew: true },
        { japanese: 'に', reading: 'に', meaning: '[time marker]', isNew: true },
        { japanese: 'おきます', reading: 'おきます', meaning: 'wake up', isNew: true },
      ],
      translation: 'In the morning, I wake up at 6 o\'clock.',
    },
    {
      id: 's2',
      words: [
        { japanese: 'あさごはん', reading: 'あさごはん', meaning: 'breakfast', isNew: true },
        { japanese: 'を', reading: 'を', meaning: '[object marker]', isNew: true },
        { japanese: 'たべて', reading: 'たべて', meaning: 'eat and', isNew: true },
        { japanese: '、', reading: '、', meaning: '[comma]' },
        { japanese: 'コーヒー', reading: 'コーヒー', meaning: 'coffee', isNew: true },
        { japanese: 'を', reading: 'を', meaning: '[object marker]' },
        { japanese: 'のみます', reading: 'のみます', meaning: 'drink', isNew: true },
      ],
      translation: 'I eat breakfast and drink coffee.',
    },
    {
      id: 's3',
      words: [
        { japanese: 'それから', reading: 'それから', meaning: 'after that', isNew: true },
        { japanese: '、', reading: '、', meaning: '[comma]' },
        { japanese: 'がっこう', reading: 'がっこう', meaning: 'school', isNew: true },
        { japanese: 'に', reading: 'に', meaning: '[direction marker]' },
        { japanese: 'いきます', reading: 'いきます', meaning: 'go', isNew: true },
      ],
      translation: 'After that, I go to school.',
    },
    {
      id: 's4',
      words: [
        { japanese: 'よる', reading: 'よる', meaning: 'evening/night', isNew: true },
        { japanese: '、', reading: '、', meaning: '[comma]' },
        { japanese: 'しゅくだい', reading: 'しゅくだい', meaning: 'homework', isNew: true },
        { japanese: 'を', reading: 'を', meaning: '[object marker]' },
        { japanese: 'して', reading: 'して', meaning: 'do and', isNew: true },
        { japanese: '、', reading: '、', meaning: '[comma]' },
        { japanese: 'ねます', reading: 'ねます', meaning: 'sleep', isNew: true },
      ],
      translation: 'In the evening, I do homework and sleep.',
    },
  ],
  grammarPoints: [
    {
      id: 'g1',
      pattern: 'に (time marker)',
      explanation: 'に marks specific times (hours, days, dates). Use it to say when something happens.',
      examples: [
        'ろくじに おきます (wake up at 6 o\'clock)',
        'げつようびに がっこうに いきます (go to school on Monday)',
      ],
    },
    {
      id: 'g2',
      pattern: 'を (object marker)',
      explanation: 'を marks the direct object of a verb - the thing being acted upon.',
      examples: [
        'あさごはんを たべます (eat breakfast)',
        'にほんごを べんきょうします (study Japanese)',
      ],
    },
    {
      id: 'g3',
      pattern: 'て-form (connecting verbs)',
      explanation: 'て-form connects actions in sequence. たべて means "eat and..." して means "do and..."',
      examples: [
        'あさごはんを たべて、コーヒーを のみます (eat breakfast and drink coffee)',
        'しゅくだいを して、ねます (do homework and sleep)',
      ],
    },
    {
      id: 'g4',
      pattern: 'Time words',
      explanation: 'Time words like あさ (morning), よる (night) don\'t need に when used generally.',
      examples: [
        'あさ、おきます (wake up in the morning)',
        'よる、ねます (sleep at night)',
      ],
    },
  ],
  questions: [
    {
      id: 'q1',
      question: 'What time does the speaker wake up?',
      options: ['5 o\'clock', '6 o\'clock', '7 o\'clock', 'In the morning'],
      correctAnswer: 1,
      explanation: 'The sentence says ろくじに おきます (wake up at 6 o\'clock).',
    },
    {
      id: 'q2',
      question: 'What does the speaker drink for breakfast?',
      options: ['Tea', 'Water', 'Coffee', 'Milk'],
      correctAnswer: 2,
      explanation: 'The second sentence mentions コーヒーを のみます (drink coffee).',
    },
    {
      id: 'q3',
      question: 'What does the speaker do after homework?',
      options: ['Go to school', 'Eat breakfast', 'Sleep', 'Drink coffee'],
      correctAnswer: 2,
      explanation: 'The last sentence says しゅくだいを して、ねます (do homework and sleep).',
    },
  ],
};
