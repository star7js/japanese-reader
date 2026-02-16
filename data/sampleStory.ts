import { Story } from '@/types/story';

export const sampleStory: Story = {
  id: 'beginner-001',
  title: 'はじめまして (Nice to Meet You)',
  level: 'Beginner',
  sentences: [
    {
      id: 's1',
      words: [
        { japanese: 'わたし', reading: 'わたし', meaning: 'I, me' },
        { japanese: 'は', reading: 'は', meaning: '[topic marker]', isNew: true },
        { japanese: 'がくせい', reading: 'がくせい', meaning: 'student', isNew: true },
        { japanese: 'です', reading: 'です', meaning: 'am/is/are', isNew: true },
      ],
      translation: 'I am a student.',
    },
    {
      id: 's2',
      words: [
        { japanese: 'にほんご', reading: 'にほんご', meaning: 'Japanese language', isNew: true },
        { japanese: 'が', reading: 'が', meaning: '[subject marker]', isNew: true },
        { japanese: 'すき', reading: 'すき', meaning: 'like', isNew: true },
        { japanese: 'です', reading: 'です', meaning: 'am/is/are' },
      ],
      translation: 'I like Japanese.',
    },
    {
      id: 's3',
      words: [
        { japanese: 'まいにち', reading: 'まいにち', meaning: 'every day', isNew: true },
        { japanese: 'べんきょう', reading: 'べんきょう', meaning: 'study', isNew: true },
        { japanese: 'します', reading: 'します', meaning: 'do', isNew: true },
      ],
      translation: 'I study every day.',
    },
    {
      id: 's4',
      words: [
        { japanese: 'ともだち', reading: 'ともだち', meaning: 'friend', isNew: true },
        { japanese: 'も', reading: 'も', meaning: 'also', isNew: true },
        { japanese: 'がくせい', reading: 'がくせい', meaning: 'student' },
        { japanese: 'です', reading: 'です', meaning: 'am/is/are' },
      ],
      translation: 'My friend is also a student.',
    },
  ],
  grammarPoints: [
    {
      id: 'g1',
      pattern: 'は (wa)',
      explanation: 'The topic particle は marks what you\'re talking about. It\'s read as "wa" not "ha" when used as a particle.',
      examples: [
        'わたしは がくせいです (I am a student)',
        'これは ほんです (This is a book)',
      ],
    },
    {
      id: 'g2',
      pattern: 'が (ga)',
      explanation: 'The subject particle が marks the subject of a sentence, especially with adjectives like すき (like).',
      examples: [
        'にほんごが すきです (I like Japanese)',
        'ねこが います (There is a cat)',
      ],
    },
    {
      id: 'g3',
      pattern: 'です (desu)',
      explanation: 'です is the polite copula, meaning "am/is/are". It\'s used to state what something is.',
      examples: [
        'がくせいです (am a student)',
        'せんせいです (am a teacher)',
      ],
    },
  ],
  questions: [
    {
      id: 'q1',
      question: 'What is the speaker?',
      options: ['A teacher', 'A student', 'A friend', 'Japanese'],
      correctAnswer: 1,
      explanation: 'The first sentence says わたしは がくせいです (I am a student).',
    },
    {
      id: 'q2',
      question: 'What does the speaker like?',
      options: ['Friends', 'Every day', 'Japanese language', 'Studying'],
      correctAnswer: 2,
      explanation: 'The second sentence says にほんごが すきです (I like Japanese).',
    },
    {
      id: 'q3',
      question: 'How often does the speaker study?',
      options: ['Sometimes', 'Every day', 'Never', 'On weekends'],
      correctAnswer: 1,
      explanation: 'The third sentence says まいにち べんきょうします (I study every day).',
    },
  ],
};
