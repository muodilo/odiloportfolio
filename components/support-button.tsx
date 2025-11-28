'use client';

import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import SupportChatbot from './support-chatbot';

export default function SupportButton() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-8 right-8 bg-teal-500 text-white p-4 rounded-full shadow-lg hover:bg-teal-600 transition-colors z-40 flex items-center gap-2"
        aria-label="Open support chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>


      <SupportChatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
}
