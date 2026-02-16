'use client';

import { useState } from 'react';
import { Sentence, Word } from '@/types/story';
import { useSpeech } from '@/hooks/useSpeech';

interface InteractiveTextProps {
  sentences: Sentence[];
}

interface SelectedWord extends Word {
  position: { x: number; y: number };
}

export default function InteractiveText({ sentences }: InteractiveTextProps) {
  const [selectedWord, setSelectedWord] = useState<SelectedWord | null>(null);
  const [playingSentenceId, setPlayingSentenceId] = useState<string | null>(null);
  const { speak, stop, isSupported, isSpeaking } = useSpeech();

  const handleWordClick = (word: Word, event: React.MouseEvent) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    setSelectedWord({
      ...word,
      position: { x: rect.left, y: rect.bottom + window.scrollY },
    });
  };

  const handleSentenceSpeak = (sentence: Sentence) => {
    const japaneseText = sentence.words.map(w => w.japanese).join('');
    setPlayingSentenceId(sentence.id);
    speak(japaneseText);

    // Reset playing state after speech
    setTimeout(() => {
      setPlayingSentenceId(null);
    }, japaneseText.length * 200); // Rough estimate
  };

  const handleWordSpeak = (word: Word) => {
    speak(word.japanese);
  };

  const handlePlayAll = () => {
    stop();
    const allText = sentences.map(s => s.words.map(w => w.japanese).join('')).join('。');
    speak(allText);
  };

  const handleStop = () => {
    stop();
    setPlayingSentenceId(null);
  };

  return (
    <div className="space-y-6">
      {isSupported && (
        <div className="flex gap-2 mb-4">
          <button
            onClick={handlePlayAll}
            disabled={isSpeaking}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <span>🔊</span>
            <span>Play All</span>
          </button>
          {isSpeaking && (
            <button
              onClick={handleStop}
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              <span>⏹</span>
              <span>Stop</span>
            </button>
          )}
        </div>
      )}

      {sentences.map((sentence) => (
        <div key={sentence.id} className="space-y-2">
          <div className="flex items-start gap-2">
            {isSupported && (
              <button
                onClick={() => handleSentenceSpeak(sentence)}
                className={`flex-shrink-0 mt-1 p-2 rounded-full transition-colors ${
                  playingSentenceId === sentence.id
                    ? 'bg-green-100 text-green-600'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                }`}
                title="Play sentence"
              >
                <span className="text-lg">
                  {playingSentenceId === sentence.id ? '🔊' : '🔉'}
                </span>
              </button>
            )}
            <div className="flex-1">
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
              <div className="text-gray-600 text-sm italic mt-1">{sentence.translation}</div>
            </div>
          </div>
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
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{selectedWord.japanese}</div>
                {isSupported && (
                  <button
                    onClick={() => handleWordSpeak(selectedWord)}
                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                    title="Pronounce word"
                  >
                    <span className="text-lg">🔉</span>
                  </button>
                )}
              </div>
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
