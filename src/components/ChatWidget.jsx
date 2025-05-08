import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sampleQuestions = [
  "How do I sell my license?",
  "What types of licenses are supported?",
  "How long does it take to get paid?"
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! Ask me anything about selling your license.' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', text: input }];
    setMessages(newMessages);
    setInput('');
    // Simulated response
    setTimeout(() => {
      setMessages([...newMessages, { role: 'bot', text: 'Thanks for your question! Our team will respond soon.' }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {!isOpen ? (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => setIsOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-full shadow"
          >
            Chat
          </motion.button>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-80 h-96 bg-white dark:bg-gray-800 border rounded-lg flex flex-col shadow-lg"
          >
            <div className="p-3 font-bold bg-blue-600 text-white flex justify-between">
              AI Chat
              <button onClick={() => setIsOpen(false)}>✖</button>
            </div>
            <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: msg.role === 'user' ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  className={`p-2 rounded ${msg.role === 'user' ? 'bg-blue-100 self-end' : 'bg-gray-200 self-start dark:bg-gray-700'}`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>
            <div className="p-3 border-t">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask a question..."
                className="w-full p-2 border rounded"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
