import InteractiveText from '@/components/InteractiveText';
import GrammarSidebar from '@/components/GrammarSidebar';
import ComprehensionQuiz from '@/components/ComprehensionQuiz';
import AITutor from '@/components/AITutor';
import { sampleStory } from '@/data/sampleStory';

export default function Home() {
  const storyContext = `Story: ${sampleStory.title}
Level: ${sampleStory.level}

Text:
${sampleStory.sentences.map((s) => s.words.map((w) => w.japanese).join('')).join(' ')}

Vocabulary:
${Array.from(
  new Set(
    sampleStory.sentences
      .flatMap((s) => s.words)
      .map((w) => `${w.japanese} (${w.reading}): ${w.meaning}`)
  )
).join('\n')}

Grammar points covered:
${sampleStory.grammarPoints.map((g) => `- ${g.pattern}: ${g.explanation}`).join('\n')}`;

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
        <div className="mb-6 bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-2xl font-bold text-gray-800">{sampleStory.title}</h2>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
              {sampleStory.level}
            </span>
          </div>
          <p className="text-sm text-gray-600">
            New vocabulary is highlighted in <span className="text-blue-600 font-semibold">blue</span>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <InteractiveText sentences={sampleStory.sentences} />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Comprehension Quiz</h2>
              <ComprehensionQuiz questions={sampleStory.questions} />
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <AITutor storyContext={storyContext} />
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-4">
              <GrammarSidebar grammarPoints={sampleStory.grammarPoints} />
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
