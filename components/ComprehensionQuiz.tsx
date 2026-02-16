'use client';

import { useState } from 'react';
import { Question } from '@/types/story';

interface ComprehensionQuizProps {
  questions: Question[];
}

export default function ComprehensionQuiz({ questions }: ComprehensionQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(false);

  const question = questions[currentQuestion];

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return; // Already answered

    setSelectedAnswer(answerIndex);
    setShowExplanation(true);

    if (answerIndex === question.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setCompleted(true);
    }
  };

  const handleReset = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setCompleted(false);
  };

  if (completed) {
    return (
      <div className="bg-white rounded-lg p-6 border-2 border-green-500">
        <h2 className="text-2xl font-bold text-green-600 mb-4">Quiz Complete! 🎉</h2>
        <p className="text-xl mb-4">
          Your score: {score} / {questions.length}
        </p>
        <div className="mb-4">
          {score === questions.length && (
            <p className="text-green-600 font-semibold">Perfect score! すごい! (Amazing!)</p>
          )}
          {score >= questions.length * 0.7 && score < questions.length && (
            <p className="text-blue-600 font-semibold">Great job! いいですね! (Nice!)</p>
          )}
          {score < questions.length * 0.7 && (
            <p className="text-orange-600 font-semibold">Good try! がんばって! (Keep trying!)</p>
          )}
        </div>
        <button
          onClick={handleReset}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 border-2 border-gray-200">
      <div className="mb-4">
        <span className="text-sm text-gray-600">
          Question {currentQuestion + 1} of {questions.length}
        </span>
      </div>

      <h3 className="text-xl font-semibold mb-6">{question.question}</h3>

      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          let bgColor = 'bg-gray-50 hover:bg-gray-100';

          if (selectedAnswer !== null) {
            if (index === question.correctAnswer) {
              bgColor = 'bg-green-100 border-green-500';
            } else if (index === selectedAnswer) {
              bgColor = 'bg-red-100 border-red-500';
            }
          }

          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              disabled={selectedAnswer !== null}
              className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${bgColor} ${
                selectedAnswer !== null ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <div className="mb-6 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
          <p className="text-sm font-semibold text-blue-800 mb-1">Explanation:</p>
          <p className="text-sm text-gray-700">{question.explanation}</p>
        </div>
      )}

      {selectedAnswer !== null && (
        <button
          onClick={handleNext}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          {currentQuestion < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
        </button>
      )}
    </div>
  );
}
