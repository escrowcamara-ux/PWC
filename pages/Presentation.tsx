

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Presentation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto">
       <div className="mb-8 flex flex-col md:flex-row justify-between items-end">
        <div>
            <h2 className="text-3xl font-serif text-white mb-2">Official Presentation</h2>
            <p className="text-slate-400">The blueprint to sovereignty, wealth, and freedom.</p>
        </div>
        <button 
            onClick={() => navigate('/resources')}
            className="bg-gold-600 hover:bg-gold-500 text-black px-6 py-2 rounded font-bold uppercase tracking-wider text-sm transition-colors mt-4 md:mt-0"
        >
            Download Slides (PDF)
        </button>
      </div>

      {/* Video Placeholder */}
      <div className="aspect-video w-full bg-black rounded-xl border border-slate-700 shadow-2xl relative overflow-hidden group">
        <img 
            src="https://picsum.photos/1200/675?grayscale" 
            alt="Video Thumbnail" 
            className="w-full h-full object-cover opacity-50 group-hover:opacity-40 transition-opacity"
        />
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-gold-500/90 rounded-full flex items-center justify-center pl-2 cursor-pointer hover:scale-110 transition-transform shadow-[0_0_30px_rgba(220,182,61,0.6)]">
                <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                </svg>
            </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-white font-bold text-xl">The Private Wealth Club Opportunity</h3>
            <p className="text-slate-300 text-sm">Hosted by: Chairman Victoria Rothschild • Duration: 24:10</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div 
            onClick={() => navigate('/corporate-credit')}
            className="glass-panel p-6 rounded-xl cursor-pointer hover:border-gold-500 transition-colors"
          >
              <h4 className="text-gold-400 font-bold mb-2 flex items-center gap-2">
                  Corporate Credit 
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </h4>
              <p className="text-sm text-slate-400">Learn how to separate personal liability from business assets and access high-limit funding.</p>
          </div>
          <div 
            onClick={() => navigate('/trusts-protection')}
            className="glass-panel p-6 rounded-xl cursor-pointer hover:border-gold-500 transition-colors"
          >
              <h4 className="text-gold-400 font-bold mb-2 flex items-center gap-2">
                  Trusts & Protection
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </h4>
              <p className="text-sm text-slate-400">Structure your assets so you own nothing but control everything. Real sovereignty.</p>
          </div>
          <div 
            onClick={() => navigate('/legacy-wealth')}
            className="glass-panel p-6 rounded-xl cursor-pointer hover:border-gold-500 transition-colors"
          >
              <h4 className="text-gold-400 font-bold mb-2 flex items-center gap-2">
                  Legacy Wealth
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </h4>
              <p className="text-sm text-slate-400">The mathematical certainty of the compensation plan explained. Bond acquisition & collective equity.</p>
          </div>
      </div>
    </div>
  );
};

export default Presentation;