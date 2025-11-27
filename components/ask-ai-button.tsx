'use client';

import { useState } from 'react';
import { Sparkles } from 'lucide-react';
import AskAIModal from './ai-modal';

export default function AskAIButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-8 right-8 bg-teal-500 text-white p-4 rounded-full shadow-lg hover:bg-teal-600 transition-colors z-40 flex items-center gap-2 px-6 py-3"
        aria-label="Ask AI for recommendations"
      >
        <Sparkles className="w-5 h-5" />
        <span className="font-semibold">Ask AI</span>
      </button>

      {/* Modal */}
      <AskAIModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
