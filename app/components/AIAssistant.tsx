'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  MessageSquare,
  Send,
  X,
  Bot,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

const suggestedQuestions = [
  "What are the prerequisites for blockchain development?",
  "How do I start with smart contracts?",
  "Explain DeFi protocols",
  "What is Web3?",
  "How to become a blockchain developer?",
];

export default function AIAssistant({ isOpen, onClose }: AIAssistantProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Evee, your AI learning assistant. How can I help you today?",
    },
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Add user message to chat
    setChatHistory((prev) => [
      ...prev,
      { role: 'user', content: message },
    ]);

    // Simulate AI response (replace with actual API call)
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "I'm here to help you learn blockchain development. Let me know what you'd like to explore!",
        },
      ]);
    }, 1000);

    setMessage('');
  };

  const handleQuestionClick = (question: string) => {
    setMessage(question);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <div className="bg-background border rounded-lg shadow-lg w-96">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-mint-400" />
                <span className="font-medium">Evee - AI Assistant</span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsMinimized(!isMinimized)}
                >
                  {isMinimized ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClose}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Chat Content */}
            {!isMinimized && (
              <>
                <div className="h-96 overflow-y-auto p-4 space-y-4">
                  {chatHistory.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        msg.role === 'user' ? 'justify-end' : 'justify-start'
                      }`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          msg.role === 'user'
                            ? 'bg-mint-400 text-black'
                            : 'bg-muted'
                        }`}
                      >
                        {msg.content}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Suggested Questions */}
                <div className="p-4 border-t">
                  <p className="text-sm font-medium mb-2">Suggested Questions:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        className="text-xs"
                        onClick={() => handleQuestionClick(question)}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Input */}
                <div className="p-4 border-t">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') handleSendMessage();
                      }}
                    />
                    <Button onClick={handleSendMessage}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 