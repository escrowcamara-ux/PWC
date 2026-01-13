

import React, { useState, useRef, useEffect } from 'react';
import { chatWithWealthConcierge } from '../services/geminiService';

interface Message {
    sender: 'user' | 'ai';
    text: string;
}

const AIAdvisor: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'ai', text: "I am the Royal Consul. The Ledger is open. What is your query, Trustee?" }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        if (isOpen) {
            scrollToBottom();
        }
    }, [messages, isOpen]);

    const handleSendMessage = async (textOverride?: string) => {
        const userMsg = textOverride || input;
        if (!userMsg.trim()) return;

        setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
        setInput('');
        setLoading(true);

        const historyStrings = messages.map(m => `${m.sender === 'user' ? 'Trustee' : 'Consul'}: ${m.text}`);
        const response = await chatWithWealthConcierge(userMsg, historyStrings);

        setMessages(prev => [...prev, { sender: 'ai', text: response }]);
        setLoading(false);
    };

    const suggestedPrompts = [
        "What document do I need next?",
        "How do I move my vehicle into trust?",
        "Show me my funding sequence.",
        "What is my Trust Ledger today?"
    ];

    return (
        <>
            {/* THE ROYAL ORB (Floating Toggle) */}
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-8 right-8 z-[60] flex items-center justify-center w-20 h-20 transition-all duration-500 hover:scale-110 group"
            >
                {/* Visuals for Closed State (Orb) */}
                <div className={`absolute inset-0 transition-all duration-500 ${isOpen ? 'scale-0 opacity-0 rotate-180' : 'scale-100 opacity-100 rotate-0'}`}>
                    {/* Outer Glow Ring */}
                    <div className="absolute inset-0 rounded-full bg-gold-500/20 animate-pulse-slow blur-xl"></div>
                    
                    {/* Rotating Sigil Ring */}
                    <div className="absolute inset-0 border-2 border-dashed border-gold-400/50 rounded-full animate-spin-slow"></div>
                    
                    {/* The Orb Core */}
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-gold-300 via-gold-500 to-gold-700 shadow-[0_0_30px_rgba(220,182,61,0.6)] flex items-center justify-center overflow-hidden">
                        {/* Shine */}
                        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent"></div>
                        <span className="text-2xl font-serif text-black font-bold mix-blend-overlay">R</span>
                    </div>
                </div>

                {/* Visuals for Open State (Close Button) */}
                <div className={`absolute inset-0 rounded-full bg-slate-900 border-2 border-gold-500 shadow-2xl flex items-center justify-center transition-all duration-500 ${isOpen ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 -rotate-180'}`}>
                     <svg className="w-8 h-8 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                     </svg>
                </div>
            </button>

            {/* Chat Interface Window */}
            <div className={`fixed bottom-32 right-4 md:right-8 z-50 w-[95vw] md:w-[400px] h-[600px] max-h-[70vh] flex flex-col transition-all duration-500 origin-bottom-right ${isOpen ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto' : 'opacity-0 scale-75 translate-y-10 pointer-events-none'}`}>
                 
                 {/* Background Backdrop for Chat Window */}
                 <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl border-2 border-gold-500/50 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
                      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
                      
                      {/* Header */}
                      <div className="pt-6 pb-2 text-center border-b border-gold-500/20 relative z-10 shrink-0">
                          <div className="w-12 h-12 mx-auto bg-gradient-to-br from-gold-400 to-gold-600 rounded-full shadow-[0_0_20px_rgba(220,182,61,0.5)] mb-2 animate-pulse-slow"></div>
                          <h3 className="text-gold-400 font-serif font-bold text-lg">The Royal Consul</h3>
                          <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">Private AI Trustee</p>
                      </div>

                     {/* Messages Area */}
                     <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gold-900 min-h-0 relative z-10">
                         {messages.map((m, idx) => (
                             <div key={idx} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                                 <div className={`max-w-[85%] p-4 text-sm leading-relaxed shadow-md relative group animate-fade-in ${
                                     m.sender === 'user' 
                                       ? 'bg-slate-800 text-slate-200 rounded-2xl rounded-tr-sm border border-slate-700' 
                                       : 'bg-[#fdfbf7] text-slate-900 rounded-2xl rounded-tl-sm border border-gold-300 font-serif'
                                 }`}>
                                     {m.sender === 'ai' && <span className="absolute -top-2 -left-2 text-xl">📜</span>}
                                     {m.text}
                                 </div>
                             </div>
                         ))}
                         {loading && (
                             <div className="flex justify-start">
                                 <div className="bg-transparent px-4 py-2 flex items-center gap-2">
                                     <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce"></div>
                                     <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce delay-75"></div>
                                     <div className="w-2 h-2 bg-gold-500 rounded-full animate-bounce delay-150"></div>
                                 </div>
                             </div>
                         )}
                         <div ref={messagesEndRef} />
                     </div>

                     {/* Suggestions */}
                     {messages.length < 3 && (
                         <div className="px-4 py-2 flex gap-2 overflow-x-auto scrollbar-hide shrink-0 z-20 pb-2 relative">
                             {suggestedPrompts.map((prompt) => (
                                 <button
                                     key={prompt}
                                     onClick={() => handleSendMessage(prompt)}
                                     className="whitespace-nowrap px-3 py-1 bg-black/60 backdrop-blur border border-gold-500/30 rounded-full text-[10px] text-gold-200 hover:bg-gold-900/50 transition-colors"
                                 >
                                     {prompt}
                                 </button>
                             ))}
                         </div>
                     )}

                     {/* Input Area */}
                     <div className="p-4 bg-slate-900 border-t border-gold-500/30 shrink-0 relative z-10">
                         <div className="flex gap-2 items-center bg-slate-950 border border-slate-700 rounded-full px-2 py-2 focus-within:border-gold-500 transition-colors shadow-inner">
                             <input 
                                 type="text" 
                                 value={input}
                                 onChange={(e) => setInput(e.target.value)}
                                 onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                                 placeholder="Consult the Ledger..."
                                 className="flex-1 bg-transparent border-none text-white text-sm px-3 focus:outline-none placeholder-slate-600 font-serif"
                                 disabled={loading}
                             />
                             <button 
                                 onClick={() => handleSendMessage()}
                                 disabled={loading || !input.trim()}
                                 className="w-8 h-8 rounded-full bg-gold-600 text-black flex items-center justify-center hover:bg-gold-500 transition-colors"
                             >
                                 <span className="text-lg">✒️</span>
                             </button>
                         </div>
                     </div>
                 </div>
            </div>
        </>
    );
};

export default AIAdvisor;