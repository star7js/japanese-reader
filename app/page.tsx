'use client';

import { useState } from 'react';
import InteractiveText from '@/components/InteractiveText';
import GrammarSidebar from '@/components/GrammarSidebar';
import ComprehensionQuiz from '@/components/ComprehensionQuiz';
import AITutor from '@/components/AITutor';
import StorySelector from '@/components/StorySelector';
import { allStories } from '@/data/allStories';

export default function Home() {
  const [currentStoryId, setCurrentStoryId] = useState(allStories[0].id);

  const currentStory = allStories.find(s => s.id === currentStoryId) || allStories[0];

  const storyContext = `Story: ${currentStory.title}
Level: ${currentStory.level}

Text:
${currentStory.sentences.map((s) => s.words.map((w) => w.japanese).join('')).join(' ')}

Vocabulary:
${Array.from(
  new Set(
    currentStory.sentences
      .flatMap((s) => s.words)
      .map((w) => `${w.japanese} (${w.reading}): ${w.meaning}`)
  )
).join('\n')}

Grammar points covered:
${currentStory.grammarPoints.map((g) => `- ${g.pattern}: ${g.explanation}`).join('\n')}`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800">
            📚 Interactive Japanese Reader
          </h1>
          <p className="text-gray-600 mt-1">
            Click any word to see its meaning • Complete the quiz • Ask the AI tutor
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <StorySelector
          stories={allStories}
          currentStoryId={currentStoryId}
          onSelectStory={setCurrentStoryId}
        />

        <div className="mb-6 bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold text-gray-800">{currentStory.title}</h2>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              {currentStory.level}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            New vocabulary is highlighted in <span className="text-blue-600 font-semibold">blue</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <InteractiveText sentences={currentStory.sentences} />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Comprehension Quiz</h2>
              <ComprehensionQuiz key={currentStoryId} questions={currentStory.questions} />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <AITutor key={currentStoryId} storyContext={storyContext} />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <GrammarSidebar grammarPoints={currentStory.grammarPoints} />
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600 text-sm">
          <p>Built with Next.js, TypeScript, and Claude AI</p>
        </div>
      </footer>
    </div>
  );
}
