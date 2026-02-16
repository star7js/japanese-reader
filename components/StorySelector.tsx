'use client';

import { Story } from '@/types/story';

interface StorySelectorProps {
  stories: Story[];
  currentStoryId: string;
  onSelectStory: (storyId: string) => void;
}

export default function StorySelector({
  stories,
  currentStoryId,
  onSelectStory,
}: StorySelectorProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-xl font-bold text-gray-800 mb-4">📖 Select a Lesson</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {stories.map((story, index) => {
          const isActive = story.id === currentStoryId;
          return (
            <button
              key={story.id}
              onClick={() => onSelectStory(story.id)}
              className={`p-4 rounded-lg border-2 text-left transition-all ${
                isActive
                  ? 'border-blue-500 bg-blue-50 shadow-md'
                  : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-bold text-gray-500">Lesson {index + 1}</span>
                {isActive && (
                  <span className="text-blue-600 text-xl">✓</span>
                )}
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{story.title}</h3>
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {story.level}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
