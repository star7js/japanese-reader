'use client';

import { useState } from 'react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

interface AITutorProps {
  storyContext: string;
}

export default function AITutor({ storyContext }: AITutorProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKeyMissing, setApiKeyMissing] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages([...messages, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, { role: 'user', content: userMessage }],
          storyContext,
        }),
      });

      if (!response.ok) {
        if (response.status === 401) {
          setApiKeyMissing(true);
          throw new Error('API key not configured');
        }
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setMessages([
        ...messages,
        { role: 'user', content: userMessage },
        { role: 'assistant', content: data.message },
      ]);
    } catch (error) {
      console.error('Error:', error);
      if (!apiKeyMissing) {
        setMessages([
          ...messages,
          { role: 'user', content: userMessage },
          {
            role: 'assistant',
            content: 'Sorry, I encountered an error. Please try again.',
          },
        ]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg border-2 border-gray-200 overflow-hidden">
      <div className="bg-blue-600 text-white p-4">
        <h2 className="text-xl font-bold">AI Tutor 🤖</h2>
        <p className="text-sm text-blue-100">Ask me anything about the story or grammar!</p>
      </div>

      {apiKeyMissing && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
          <p className="text-sm text-yellow-800">
            <strong>API Key Required:</strong> To use the AI tutor, add your Claude API key to a{' '}
            <code className="bg-yellow-100 px-1 rounded">.env.local</code> file:
          </p>
          <pre className="text-xs bg-yellow-100 p-2 rounded mt-2 overflow-x-auto">
            ANTHROPIC_API_KEY=your_key_here
          </pre>
          <p className="text-xs text-yellow-700 mt-2">
            Get your API key at{' '}
            <a
              href="https://console.anthropic.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              console.anthropic.com
            </a>
          </p>
        </div>
      )}

      <div className="h-96 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && !apiKeyMissing && (
          <div className="text-center text-gray-400 mt-20">
            <p>Ask me anything!</p>
            <p className="text-sm mt-2">
              Try: "Why is it は here and not が?" or "How do I pronounce です?"
            </p>
          </div>
        )}

        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 rounded-lg p-3 text-gray-500">
              <span className="animate-pulse">Thinking...</span>
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="border-t-2 border-gray-200 p-4">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask a question..."
            disabled={isLoading}
            className="flex-1 border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 disabled:bg-gray-100"
          />
          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
