import { Story } from '@/types/story';

export const story03: Story = {
  id: 'beginner-003',
  title: 'レストランで (At a Restaurant)',
  level: 'Beginner',
  sentences: [
    {
      id: 's1',
      words: [
        { japanese: 'きょう', reading: 'きょう', meaning: 'today', isNew: true },
        { japanese: '、', reading: '、', meaning: '[comma]' },
        { japanese: 'レストラン', reading: 'レストラン', meaning: 'restaurant', isNew: true },
        { japanese: 'に', reading: 'に', meaning: '[direction marker]' },
        { japanese: 'いきたい', reading: 'いきたい', meaning: 'want to go', isNew: true },
        { japanese: 'です', reading: 'です', meaning: 'am/is/are' },
      ],
      translation: 'Today, I want to go to a restaurant.',
    },
    {
      id: 's2',
      words: [
        { japanese: 'ラーメン', reading: 'ラーメン', meaning: 'ramen', isNew: true },
        { japanese: 'を', reading: 'を', meaning: '[object marker]' },
        { japanese: 'たべたい', reading: 'たべたい', meaning: 'want to eat', isNew: true },
        { japanese: 'です', reading: 'です', meaning: 'am/is/are' },
      ],
      translation: 'I want to eat ramen.',
    },
    {
      id: 's3',
      words: [
        { japanese: 'ともだち', reading: 'ともだち', meaning: 'friend' },
        { japanese: 'も', reading: 'も', meaning: 'also' },
        { japanese: 'ラーメン', reading: 'ラーメン', meaning: 'ramen' },
        { japanese: 'が', reading: 'が', meaning: '[subject marker]' },
        { japanese: 'すき', reading: 'すき', meaning: 'like' },
        { japanese: 'です', reading: 'です', meaning: 'am/is/are' },
      ],
      translation: 'My friend also likes ramen.',
    },
    {
      id: 's4',
      words: [
        { japanese: 'いっしょに', reading: 'いっしょに', meaning: 'together', isNew: true },
        { japanese: 'たべます', reading: 'たべます', meaning: 'eat', isNew: false },
      ],
      translation: 'We eat together.',
    },
    {
      id: 's5',
      words: [
        { japanese: 'とても', reading: 'とても', meaning: 'very', isNew: true },
        { japanese: 'おいしい', reading: 'おいしい', meaning: 'delicious', isNew: true },
        { japanese: 'です', reading: 'です', meaning: 'am/is/are' },
      ],
      translation: 'It\'s very delicious.',
    },
  ],
  grammarPoints: [
    {
      id: 'g1',
      pattern: 'たい (want to)',
      explanation: 'Add たい to the verb stem to say "want to do something". たべます → たべたい (want to eat), いきます → いきたい (want to go).',
      examples: [
        'ラーメンを たべたいです (want to eat ramen)',
        'がっこうに いきたいです (want to go to school)',
        'にほんごを べんきょうしたいです (want to study Japanese)',
      ],
    },
    {
      id: 'g2',
      pattern: 'い-adjectives',
      explanation: 'おいしい is an い-adjective. These adjectives end in い and can directly modify nouns or be used with です.',
      examples: [
        'おいしいです (is delicious)',
        'おいしい ラーメン (delicious ramen)',
      ],
    },
    {
      id: 'g3',
      pattern: 'とても (very)',
      explanation: 'とても is an adverb meaning "very" that intensifies adjectives.',
      examples: [
        'とても おいしいです (very delicious)',
        'とても すきです (like very much)',
      ],
    },
    {
      id: 'g4',
      pattern: 'いっしょに (together)',
      explanation: 'いっしょに means "together" and describes doing something with someone else.',
      examples: [
        'ともだちと いっしょに たべます (eat together with friend)',
        'いっしょに べんきょうします (study together)',
      ],
    },
  ],
  questions: [
    {
      id: 'q1',
      question: 'Where does the speaker want to go?',
      options: ['School', 'Home', 'Restaurant', 'Friend\'s house'],
      correctAnswer: 2,
      explanation: 'The first sentence says レストランに いきたいです (want to go to a restaurant).',
    },
    {
      id: 'q2',
      question: 'What does the speaker want to eat?',
      options: ['Sushi', 'Ramen', 'Breakfast', 'Coffee'],
      correctAnswer: 1,
      explanation: 'The second sentence says ラーメンを たべたいです (want to eat ramen).',
    },
    {
      id: 'q3',
      question: 'How does the food taste?',
      options: ['Bad', 'Okay', 'Good', 'Very delicious'],
      correctAnswer: 3,
      explanation: 'The last sentence says とても おいしいです (very delicious).',
    },
  ],
};
