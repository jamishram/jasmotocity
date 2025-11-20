import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Loader2, Sparkles } from 'lucide-react';
import { getMotoAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

export const AiExpert: React.FC = () => {
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hey rider! I\'m the Jasmotocity AI Specialist. Ask me about tyres, mods, or what parts suit your bike best.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;

    const userText = query;
    setQuery('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const response = await getMotoAdvice(userText);

    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-expert" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-brand-yellow rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-900 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-brand-yellow font-bold tracking-widest uppercase mb-2">
             <Sparkles className="w-4 h-4" /> Powered by Gemini AI
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">
            VIRTUAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">MECHANIC</span>
          </h2>
          <p className="text-gray-400 mt-4">Not sure what fits your bike? Ask our AI expert for instant advice.</p>
        </div>

        <div className="bg-brand-gray rounded-2xl border border-gray-700 shadow-2xl overflow-hidden flex flex-col h-[500px]">
          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[85%] p-4 rounded-2xl ${
                  msg.role === 'user' 
                    ? 'bg-blue-600 text-white rounded-br-none' 
                    : 'bg-gray-800 text-gray-200 border border-gray-700 rounded-bl-none'
                }`}>
                   {msg.role === 'model' && (
                     <div className="flex items-center gap-2 mb-2 text-xs text-brand-yellow font-bold uppercase">
                       <Bot className="w-3 h-3" /> Jasmotocity AI
                     </div>
                   )}
                   <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 p-4 rounded-2xl rounded-bl-none border border-gray-700 flex items-center gap-3">
                   <Loader2 className="w-4 h-4 animate-spin text-brand-yellow" />
                   <span className="text-sm text-gray-400">Analyzing specs...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 bg-gray-900 border-t border-gray-800">
            <div className="flex gap-2">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., 'Suggest tyres for wet track days for R15'..."
                className="flex-1 bg-black text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow focus:ring-1 focus:ring-brand-yellow transition-all placeholder-gray-600"
              />
              <button
                type="submit"
                disabled={isLoading || !query.trim()}
                className="bg-brand-yellow text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                <span className="hidden sm:inline">ASK</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
