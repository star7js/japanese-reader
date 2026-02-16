import { Story } from '@/types/story';
import { sampleStory } from './sampleStory';
import { story02 } from './story02';
import { story03 } from './story03';
import { story04 } from './story04';

export const allStories: Story[] = [
  sampleStory,
  story02,
  story03,
  story04,
];

export function getStoryById(id: string): Story | undefined {
  return allStories.find(story => story.id === id);
}
