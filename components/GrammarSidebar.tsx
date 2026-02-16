'use client';

import { useState } from 'react';
import { GrammarPoint } from '@/types/story';

interface GrammarSidebarProps {
  grammarPoints: GrammarPoint[];
}

export default function GrammarSidebar({ grammarPoints }: GrammarSidebarProps) {
  const [expandedId, setExpandedId] = useState<string | null>(grammarPoints[0]?.id || null);

  return (
    <div className="bg-gray-50 rounded-lg p-6 space-y-4">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Grammar Points</h2>
      {grammarPoints.map((point) => (
        <div key={point.id} className="border-b border-gray-200 pb-4 last:border-b-0">
          <button
            onClick={() => setExpandedId(expandedId === point.id ? null : point.id)}
            className="w-full text-left"
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold text-lg text-blue-600">{point.pattern}</h3>
              <span className="text-gray-400">
                {expandedId === point.id ? '−' : '+'}
              </span>
            </div>
          </button>
          {expandedId === point.id && (
            <div className="mt-3 space-y-3">
              <p className="text-gray-700">{point.explanation}</p>
              <div className="space-y-1">
                <p className="text-sm font-semibold text-gray-600">Examples:</p>
                {point.examples.map((example, idx) => (
                  <div key={idx} className="text-sm text-gray-600 pl-3 border-l-2 border-blue-200">
                    {example}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
