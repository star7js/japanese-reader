'use client';

import { useState } from 'react';
import { Sentence, Word } from '@/types/story';

interface InteractiveTextProps {
  sentences: Sentence[];
}

interface SelectedWord extends Word {
  position: { x: number; y: number };
}

export default function InteractiveText({ sentences }: InteractiveTextProps) {
  const [selectedWord, setSelectedWord] = useState<SelectedWord | null>(null);

  const handleWordClick = (word: Word, event: React.MouseEvent) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    setSelectedWord({
      ...word,
      position: { x: rect.left, y: rect.bottom + window.scrollY },
    });
  };

  return (
    <div className="space-y-6">
      {sentences.map((sentence) => (
        <div key={sentence.id} className="space-y-2">
          <div className="text-2xl leading-relaxed">
            {sentence.words.map((word, idx) => (
              <span key={idx} className="inline-block">
                <button
                  onClick={(e) => handleWordClick(word, e)}
                  className={`hover:bg-blue-100 rounded px-1 transition-colors ${
                    word.isNew ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  <ruby>
                    {word.japanese}
                    <rt className="text-xs text-gray-500">{word.reading}</rt>
                  </ruby>
                </button>
              </span>
            ))}
          </div>
          <div className="text-gray-600 text-sm italic">{sentence.translation}</div>
        </div>
      ))}

      {selectedWord && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setSelectedWord(null)}
          />
          <div
            className="fixed z-50 bg-white border-2 border-blue-500 rounded-lg shadow-xl p-4 max-w-xs"
            style={{
              left: `${selectedWord.position.x}px`,
              top: `${selectedWord.position.y + 5}px`,
            }}
          >
            <div className="space-y-2">
              <div className="text-2xl font-bold">{selectedWord.japanese}</div>
              <div className="text-sm text-gray-600">{selectedWord.reading}</div>
              <div className="text-lg">{selectedWord.meaning}</div>
              {selectedWord.isNew && (
                <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded inline-block">
                  New vocabulary
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
