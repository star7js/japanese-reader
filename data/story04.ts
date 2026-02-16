import { Story } from '@/types/story';

export const story04: Story = {
  id: 'beginner-004',
  title: 'きのう (Yesterday)',
  level: 'Beginner',
  sentences: [
    {
      id: 's1',
      words: [
        { japanese: 'きのう', reading: 'きのう', meaning: 'yesterday', isNew: true },
        { japanese: '、', reading: '、', meaning: '[comma]' },
        { japanese: 'わたし', reading: 'わたし', meaning: 'I, me' },
        { japanese: 'は', reading: 'は', meaning: '[topic marker]' },
        { japanese: 'としょかん', reading: 'としょかん', meaning: 'library', isNew: true },
        { japanese: 'に', reading: 'に', meaning: '[direction marker]' },
        { japanese: 'いきました', reading: 'いきました', meaning: 'went', isNew: true },
      ],
      translation: 'Yesterday, I went to the library.',
    },
    {
      id: 's2',
      words: [
        { japanese: 'ほん', reading: 'ほん', meaning: 'book', isNew: true },
        { japanese: 'を', reading: 'を', meaning: '[object marker]' },
        { japanese: 'よみました', reading: 'よみました', meaning: 'read', isNew: true },
      ],
      translation: 'I read a book.',
    },
    {
      id: 's3',
      words: [
        { japanese: 'それから', reading: 'それから', meaning: 'after that' },
        { japanese: '、', reading: '、', meaning: '[comma]' },
        { japanese: 'ともだち', reading: 'ともだち', meaning: 'friend' },
        { japanese: 'に', reading: 'に', meaning: '[target marker]' },
        { japanese: 'あいました', reading: 'あいました', meaning: 'met', isNew: true },
      ],
      translation: 'After that, I met a friend.',
    },
    {
      id: 's4',
      words: [
        { japanese: 'いっしょに', reading: 'いっしょに', meaning: 'together' },
        { japanese: 'コーヒー', reading: 'コーヒー', meaning: 'coffee' },
        { japanese: 'を', reading: 'を', meaning: '[object marker]' },
        { japanese: 'のみました', reading: 'のみました', meaning: 'drank', isNew: true },
      ],
      translation: 'We drank coffee together.',
    },
    {
      id: 's5',
      words: [
        { japanese: 'たのしかった', reading: 'たのしかった', meaning: 'was fun', isNew: true },
        { japanese: 'です', reading: 'です', meaning: 'am/is/are' },
      ],
      translation: 'It was fun.',
    },
  ],
  grammarPoints: [
    {
      id: 'g1',
      pattern: 'ました (past tense)',
      explanation: 'Change ます to ました to make the past tense. いきます → いきました (went), たべます → たべました (ate).',
      examples: [
        'としょかんに いきました (went to the library)',
        'ほんを よみました (read a book)',
        'コーヒーを のみました (drank coffee)',
      ],
    },
    {
      id: 'g2',
      pattern: 'でした (past copula)',
      explanation: 'です in the past becomes でした. Use it to say "was/were".',
      examples: [
        'がくせいでした (was a student)',
        'たのしかったです (was fun)',
      ],
    },
    {
      id: 'g3',
      pattern: 'い-adjective past',
      explanation: 'For い-adjectives, change い to かった. たのしい → たのしかった (was fun), おいしい → おいしかった (was delicious).',
      examples: [
        'たのしかったです (was fun)',
        'おいしかったです (was delicious)',
      ],
    },
    {
      id: 'g4',
      pattern: 'Time expressions',
      explanation: 'きのう (yesterday), きょう (today), あした (tomorrow) don\'t need particles.',
      examples: [
        'きのう いきました (went yesterday)',
        'きょう いきます (go today)',
        'あした いきます (will go tomorrow)',
      ],
    },
  ],
  questions: [
    {
      id: 'q1',
      question: 'When did the speaker go to the library?',
      options: ['Today', 'Yesterday', 'Tomorrow', 'Every day'],
      correctAnswer: 1,
      explanation: 'The first sentence says きのう、としょかんに いきました (yesterday, went to the library).',
    },
    {
      id: 'q2',
      question: 'What did the speaker do at the library?',
      options: ['Studied', 'Read a book', 'Met a friend', 'Drank coffee'],
      correctAnswer: 1,
      explanation: 'The second sentence says ほんを よみました (read a book).',
    },
    {
      id: 'q3',
      question: 'How did the speaker feel about the day?',
      options: ['Boring', 'Difficult', 'Fun', 'Delicious'],
      correctAnswer: 2,
      explanation: 'The last sentence says たのしかったです (was fun).',
    },
  ],
};
