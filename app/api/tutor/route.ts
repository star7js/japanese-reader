import Anthropic from '@anthropic-ai/sdk';
import { NextRequest, NextResponse } from 'next/server';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || '',
});

export async function POST(req: NextRequest) {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 401 }
      );
    }

    const { messages, storyContext } = await req.json();

    const systemPrompt = `You are a friendly Japanese language tutor helping a beginner learn Japanese.

Context of the current lesson:
${storyContext}

Your role:
- Answer questions about Japanese grammar, vocabulary, and pronunciation
- Explain concepts in simple, beginner-friendly terms
- Give examples to clarify your explanations
- Be encouraging and supportive
- Keep responses concise but thorough

When explaining grammar or words, relate them back to the story context when relevant.`;

    const response = await anthropic.messages.create({
      model: 'claude-sonnet-4-5-20250929',
      max_tokens: 1024,
      system: systemPrompt,
      messages: messages.map((msg: { role: string; content: string }) => ({
        role: msg.role,
        content: msg.content,
      })),
    });

    const messageContent = response.content[0];
    const text = messageContent.type === 'text' ? messageContent.text : '';

    return NextResponse.json({ message: text });
  } catch (error) {
    console.error('Error calling Claude API:', error);
    return NextResponse.json(
      { error: 'Failed to get response from AI tutor' },
      { status: 500 }
    );
  }
}
