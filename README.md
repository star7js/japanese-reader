# 📚 Interactive Japanese Reader

An interactive web app for learning Japanese through reading. Designed to solve the problem of boring, disconnected language learning by providing **context-first learning with immediate payoff**.

## Features

- **Interactive Text** - Click any word to see instant definitions, readings, and meanings
- **Text-to-Speech** - Listen to native Japanese pronunciation for sentences and words (built-in, no API needed!)
- **Furigana Support** - Readings displayed above Japanese text
- **Grammar Sidebar** - Contextual grammar explanations for patterns in the story
- **Comprehension Quiz** - Test your understanding with immediate feedback
- **AI Tutor** - Ask questions about grammar, vocabulary, or pronunciation (requires API key)
- **Visual Vocabulary Highlighting** - New words highlighted in blue
- **Progressive Lessons** - 4 beginner lessons that build on each other

## Why This Exists

Current Japanese learning apps have issues:
- **Duolingo**: Too simple, easy to forget, pieces don't fit together
- **Textbooks**: Boring drills with no immediate payoff
- **Flashcards alone**: Tedious without context
- **Video-focused apps**: Need written content as primary medium

This app focuses on:
- **Reading-first approach** - Learn by reading actual stories
- **Context over drills** - Everything connects into a whole
- **Immediate application** - Use what you learn right away
- **Written as primary** - With audio/AI as supplemental support

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### (Optional) Enable AI Tutor

The app works without an API key, but to use the AI tutor feature:

1. Get a free API key from [console.anthropic.com](https://console.anthropic.com/)
   - New accounts get $5 in free credits
   - Personal use typically costs $1-5/month

2. Create a `.env.local` file in the project root:

```bash
cp .env.local.example .env.local
```

3. Add your API key to `.env.local`:

```
ANTHROPIC_API_KEY=your_actual_api_key_here
```

4. Restart the development server

## Tech Stack

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Claude AI** (Sonnet 4.5) - AI tutor functionality
- **Anthropic SDK** - API integration

## Project Structure

```
japanese-reader/
├── app/
│   ├── api/tutor/       # AI tutor API endpoint
│   └── page.tsx         # Main page
├── components/
│   ├── InteractiveText.tsx      # Clickable Japanese text with TTS
│   ├── GrammarSidebar.tsx       # Grammar explanations
│   ├── ComprehensionQuiz.tsx    # Quiz component
│   ├── AITutor.tsx              # AI chat interface
│   └── StorySelector.tsx        # Lesson selector
├── data/
│   ├── sampleStory.ts   # Lesson 1: Nice to Meet You
│   ├── story02.ts       # Lesson 2: Daily Life
│   ├── story03.ts       # Lesson 3: At a Restaurant
│   ├── story04.ts       # Lesson 4: Yesterday
│   └── allStories.ts    # Story collection
├── hooks/
│   └── useSpeech.ts     # Text-to-speech hook
└── types/
    └── story.ts         # TypeScript interfaces
```

## Current Lessons

1. **はじめまして (Nice to Meet You)** - Basic particles (は, が, です), self-introduction
2. **まいにちのせいかつ (Daily Life)** - Time/object markers (に, を), て-form verb conjugation
3. **レストランで (At a Restaurant)** - たい-form (want to), い-adjectives, food vocabulary
4. **きのう (Yesterday)** - Past tense (ました, でした, かった), time expressions

## Adding More Stories

Create new story files in `data/` following this structure:

```typescript
{
  id: 'story-id',
  title: 'Story Title',
  level: 'Beginner',
  sentences: [...],
  grammarPoints: [...],
  questions: [...]
}
```

Then add them to `data/allStories.ts`.

## Future Ideas

- [x] Multiple stories at different levels
- [x] Text-to-speech for pronunciation
- [ ] User accounts and progress tracking
- [ ] Spaced repetition system for vocabulary
- [ ] Writing practice (typing Japanese)
- [ ] Import your own content
- [ ] Mobile app version
- [ ] Vocabulary list with all learned words
- [ ] Speed control for text-to-speech

## License

MIT

## Feedback

This is a personal learning project. If you try it and have feedback on what would make it more engaging, please share!
