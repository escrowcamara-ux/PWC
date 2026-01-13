

import React from 'react';
import { COMPENSATION_PLAN } from '../constants';

const Network: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="mb-8">
          <h2 className="text-3xl font-serif text-white mb-2">Compensation Plan</h2>
          <p className="text-slate-400">Understanding the wealth model and reward structure.</p>
      </div>

      {/* Video Presentation Section */}
      <div className="glass-panel p-6 rounded-xl border border-gold-500/30">
          <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Understanding the Wealth Model</h3>
              <span className="text-xs text-gold-400 border border-gold-400 px-2 py-1 rounded">MUST WATCH</span>
          </div>
          
          {/* Image Placeholder with Link */}
          <div className="relative w-full bg-black rounded-lg overflow-hidden border border-slate-700 shadow-2xl group mb-4">
             <div className="aspect-video w-full relative">
                  <a href="https://youtu.be/-PakWT5qTwk?feature=shared" target="_blank" rel="noopener noreferrer" className="block w-full h-full group overflow-hidden">
                    <img 
                        src="https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&q=80&w=1600" 
                        alt="Wealth Model Gold Coins" 
                        className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 bg-red-600/90 rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm border border-red-400">
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                    </div>
                  </a>
             </div>
          </div>

          <div className="text-center">
              <a 
                  href="https://youtu.be/-PakWT5qTwk?feature=shared" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold-400 hover:text-white underline text-sm font-bold tracking-wide transition-colors"
              >
                  <span>Watch on YouTube: Understanding the Wealth Model</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
          </div>

          <div className="mt-4 text-slate-300 text-sm leading-relaxed border-t border-slate-700 pt-4">
              <p>
                  This presentation breaks down the power of the "Power of 3" system, how to achieve the <span className="text-gold-400 font-bold">P 1000</span> rank in your first 30 days, 
                  and the specific qualifications for the monthly executive bonuses. Watch this before building your team.
              </p>
          </div>
      </div>

      {/* Compensation Table */}
      <div className="glass-panel p-8 rounded-xl border border-slate-700">
          <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Reference: Compensation Tiers</h3>
              <p className="text-slate-400 text-sm">
                  Detailed breakdown of Weekly and Monthly earning potential based on Group Volume (GV) and Subscriber Count.
              </p>
          </div>
          
          <div className="overflow-x-auto">
              <table className="w-full text-center border-collapse">
                  <thead>
                      <tr className="bg-black text-white text-sm uppercase font-bold tracking-wider">
                          <th className="p-4 border border-slate-700">Rank</th>
                          <th className="p-4 border border-slate-700">Qualified Group Value</th>
                          <th className="p-4 border border-slate-700">Total Subscribers</th>
                          <th className="p-4 border border-slate-700 text-gold-400">Weekly Pay</th>
                          <th className="p-4 border border-slate-700 text-gold-400">Monthly</th>
                      </tr>
                  </thead>
                  <tbody className="bg-slate-50 font-sans text-slate-900 font-semibold text-sm">
                      {COMPENSATION_PLAN.map((tier, idx) => (
                          <tr key={tier.rank} className={`hover:bg-blue-50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-100'}`}>
                              <td className="p-4 border border-slate-300 font-bold text-slate-800">{tier.rank}</td>
                              <td className="p-4 border border-slate-300">{tier.gv}</td>
                              <td className="p-4 border border-slate-300">{tier.subscribers}</td>
                              <td className="p-4 border border-slate-300">{tier.weekly}</td>
                              <td className="p-4 border border-slate-300 font-bold">{tier.monthly}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>

          <div className="mt-8 text-center text-xs text-slate-500 italic">
              *Disclaimer: The figures above represent potential earnings. Success is not guaranteed and requires work, dedication, and leadership.
          </div>
      </div>
    </div>
  );
};

export default Network;