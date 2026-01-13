import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { COURSES, ASCENSION_PATH } from '../constants';
import { LockIcon } from '../components/Icons';

const FundingOption = ({ title, amount, credit, desc, onApply }: { title: string; amount: string; credit: string; desc: string; onApply: () => void }) => (
    <div className="glass-panel p-6 rounded-xl hover:border-gold-500/50 transition-all border-l-4 border-transparent hover:border-l-gold-500 flex flex-col h-full bg-slate-900/60 backdrop-blur-sm group hover:bg-slate-800">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors font-serif">{title}</h3>
            <span className="bg-slate-800 text-gold-400 px-3 py-1 rounded-full text-xs font-bold shadow-inner border border-gold-500/20">{credit}</span>
        </div>
        <p className="text-3xl font-serif text-white mb-4 text-glow">{amount}</p>
        <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">{desc}</p>
        <button 
            onClick={onApply}
            className="w-full py-3 border border-slate-600 rounded text-slate-300 hover:bg-gold-600 hover:border-gold-600 hover:text-black transition-colors uppercase text-xs tracking-widest font-bold shadow-lg"
        >
            Apply Now
        </button>
    </div>
);

const PhaseSeal = ({ status, delay }: { status: string; delay: string }) => (
    <div className={`w-24 h-24 rounded-full flex items-center justify-center relative shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-700 z-10 ${status === 'locked' ? 'bg-slate-900 border-4 border-slate-800 grayscale opacity-50' : 'bg-gradient-to-br from-gold-600 to-gold-900 border-4 border-gold-400'}`} style={{ animationDelay: delay }}>
        {status === 'completed' && (
            <div className="absolute inset-0 border-4 border-gold-300/30 rounded-full animate-pulse"></div>
        )}
        <div className="text-center transform -rotate-12">
            {status === 'locked' ? (
                <LockIcon className="w-8 h-8 text-slate-600" />
            ) : (
                <>
                    <div className="text-[7px] text-black font-bold uppercase tracking-widest mb-0.5 opacity-80">Official</div>
                    <div className="text-3xl text-black font-serif font-bold leading-none drop-shadow-sm">SEAL</div>
                    <div className="text-[7px] text-black font-bold uppercase tracking-widest mt-0.5 opacity-80">Approved</div>
                </>
            )}
        </div>
    </div>
);

const Curriculum: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'academy' | 'funding'>('academy');
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);
  const navigate = useNavigate();
  
  const handleApplyFunding = () => {
      navigate('/funding-application');
  };

  const handlePhaseClick = (id: number, status: string) => {
      if (status === 'locked') return;
      setExpandedPhase(expandedPhase === id ? null : id);
  };

  const navigateToCourse = (moduleName: string) => {
      const course = COURSES.find(c => c.title === moduleName);
      if (course) {
          navigate(`/course/${course.id}`);
      } else {
          console.warn('Course not found for module:', moduleName);
      }
  };

  return (
    <div className="relative min-h-[calc(100vh-4rem)] animate-fade-in">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black pointer-events-none fixed"></div>
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none"></div>

      <div className="relative z-10 mb-12 text-center md:text-left">
          <h2 className="text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 mb-3 font-bold">Curriculum</h2>
          <p className="text-slate-400 max-w-2xl text-lg font-light">
              Your guided ascension path from public liability to private sovereignty.
          </p>
      </div>

      {/* Main Tabs */}
      <div className="flex justify-center md:justify-start space-x-12 mb-16 border-b border-slate-800 relative z-10">
          <button 
              onClick={() => setActiveTab('academy')}
              className={`pb-4 px-2 text-sm font-bold uppercase tracking-[0.2em] transition-all relative ${
                  activeTab === 'academy' ? 'text-gold-400' : 'text-slate-500 hover:text-white'
              }`}
          >
              Ascension Path
              {activeTab === 'academy' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-500 shadow-[0_0_10px_rgba(220,182,61,0.8)]"></div>}
          </button>
          <button 
              onClick={() => setActiveTab('funding')}
              className={`pb-4 px-2 text-sm font-bold uppercase tracking-[0.2em] transition-all relative ${
                  activeTab === 'funding' ? 'text-gold-400' : 'text-slate-500 hover:text-white'
              }`}
          >
              Business Funding
              {activeTab === 'funding' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gold-500 shadow-[0_0_10px_rgba(220,182,61,0.8)]"></div>}
          </button>
      </div>

      {activeTab === 'academy' && (
          <div className="animate-fade-in max-w-5xl mx-auto pb-20 relative z-10">
               {/* Ascension Map */}
               <div className="relative pl-4 md:pl-12">
                   {/* Vertical Cosmic Path Connector Line */}
                   <div className="absolute left-4 md:left-16 top-12 bottom-12 w-1 bg-gradient-to-b from-gold-500 via-purple-900 to-slate-900 z-0 opacity-50 shadow-[0_0_15px_rgba(220,182,61,0.3)]"></div>

                   <div className="space-y-20">
                       {ASCENSION_PATH.map((phase, index) => (
                           <div 
                                key={phase.id} 
                                className={`
                                    relative transition-all duration-500 transform
                                    ${phase.status === 'locked' ? 'opacity-60 cursor-not-allowed grayscale' : 'opacity-100 cursor-pointer'}
                                    ${expandedPhase === phase.id ? 'scale-[1.02]' : 'hover:scale-[1.01]'}
                                `}
                                onClick={() => handlePhaseClick(phase.id, phase.status)}
                           >
                               <div className={`
                                   p-0 rounded-2xl overflow-hidden border flex shadow-2xl bg-[#0a0a0a]/90 backdrop-blur-md
                                   ${phase.status === 'active' ? 'border-gold-500/50 shadow-[0_0_30px_rgba(220,182,61,0.15)]' : 'border-slate-800'}
                                `}>
                                   
                                   {/* Status Indicator Sidebar */}
                                   <div className={`w-2 ${phase.status === 'active' ? 'bg-gold-500 animate-pulse' : phase.status === 'completed' ? 'bg-green-600' : 'bg-slate-800'}`}></div>
                                   
                                   <div className="flex-1 p-8 flex flex-col md:flex-row items-center gap-10">
                                       {/* Seal Icon */}
                                       <div className="shrink-0 relative">
                                           <PhaseSeal status={phase.status} delay={`${index * 100}ms`} />
                                           {phase.status === 'active' && (
                                               <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-20">
                                                   <span className="inline-block px-4 py-1 bg-gradient-to-r from-gold-600 to-gold-500 text-black text-[10px] font-bold uppercase rounded-full animate-bounce shadow-lg tracking-wider">Current Phase</span>
                                               </div>
                                           )}
                                       </div>

                                       <div className="flex-1 text-center md:text-left">
                                           <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-3">
                                                <h3 className={`text-3xl font-bold font-serif ${phase.status === 'locked' ? 'text-slate-600' : 'text-white'}`}>
                                                    <span className="text-gold-500/30 mr-4 text-2xl font-sans font-bold">0{phase.id}</span>
                                                    {phase.title}
                                                </h3>
                                                {phase.status === 'completed' && <span className="text-green-400 text-[10px] uppercase font-bold tracking-wider border border-green-900 bg-green-900/20 px-3 py-1 rounded-full mt-2 md:mt-0">Complete</span>}
                                                {phase.status === 'locked' && <span className="text-slate-600 text-[10px] uppercase font-bold tracking-wider border border-slate-800 bg-slate-900 px-3 py-1 rounded-full mt-2 md:mt-0">Locked</span>}
                                           </div>
                                           <p className="text-gold-500 text-xs uppercase tracking-[0.25em] font-bold mb-4 border-b border-slate-800/50 pb-2 inline-block">{phase.subtitle}</p>
                                           <p className="text-slate-400 text-sm leading-relaxed max-w-2xl font-light">{phase.description}</p>
                                           
                                           {/* Rewards Badge Name */}
                                           {phase.status !== 'locked' && (
                                               <div className="mt-6 inline-flex items-center gap-3 text-xs text-slate-500 bg-black/40 px-4 py-2 rounded-lg border border-slate-800">
                                                   <span className="text-gold-500 text-lg">🏆</span>
                                                   <span className="text-white font-bold uppercase tracking-wider">{phase.sealName}</span>
                                               </div>
                                           )}
                                       </div>
                                       
                                       <div className="text-slate-600 md:self-center">
                                            <div className={`w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center border border-slate-700 transition-all duration-500 ${expandedPhase === phase.id ? 'rotate-180 bg-gold-500 text-black border-gold-400' : 'group-hover:border-gold-500/50 group-hover:text-gold-500'}`}>
                                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                       </div>
                                   </div>
                               </div>

                               {/* Expanded Content (Modules) */}
                               {expandedPhase === phase.id && (
                                   <div className="mt-8 ml-4 md:ml-40 space-y-4 animate-fade-in-up origin-top relative">
                                       <div className="absolute -left-6 top-0 bottom-0 w-px bg-slate-800"></div>
                                       
                                       <h4 className="text-xs text-slate-500 uppercase tracking-[0.2em] font-bold mb-6 pl-2">Accessing Modules...</h4>
                                       
                                       {phase.modules.map((module, mIdx) => (
                                           <div 
                                                key={mIdx} 
                                                className="bg-[#111] border border-slate-800 p-6 rounded-xl flex justify-between items-center group hover:border-gold-500/50 hover:bg-[#151515] transition-all cursor-pointer shadow-lg transform hover:-translate-x-1" 
                                                onClick={(e) => { 
                                                    e.stopPropagation(); 
                                                    navigateToCourse(module);
                                                }}
                                            >
                                               <div className="flex items-center gap-6">
                                                   <div className="w-10 h-10 rounded bg-black text-slate-500 flex items-center justify-center text-xs font-bold border border-slate-800 group-hover:border-gold-500 group-hover:text-gold-500 group-hover:bg-gold-500/10 transition-colors">
                                                       {mIdx + 1}
                                                   </div>
                                                   <div>
                                                        <span className="block text-slate-200 group-hover:text-white transition-colors text-lg font-serif">{module}</span>
                                                        <span className="text-[10px] text-slate-500 group-hover:text-gold-400/70 uppercase tracking-wider">Click to initiate</span>
                                                   </div>
                                               </div>
                                               <button className="text-xs uppercase font-bold text-slate-600 group-hover:text-gold-400 transition-colors flex items-center gap-2 pr-4">
                                                   Enter <span className="text-lg">›</span>
                                               </button>
                                           </div>
                                       ))}
                                       
                                       {phase.status === 'active' && (
                                           <div className="mt-10 pt-4 text-center">
                                               <button className="px-10 py-4 bg-gradient-to-r from-gold-600 to-gold-400 text-black font-bold uppercase text-xs tracking-[0.2em] rounded-lg hover:shadow-[0_0_40px_rgba(220,182,61,0.4)] transition-all transform hover:-translate-y-1">
                                                   Enter Phase {phase.id} Portal
                                               </button>
                                           </div>
                                       )}
                                   </div>
                               )}
                           </div>
                       ))}
                   </div>
               </div>
          </div>
      )}

      {activeTab === 'funding' && (
          <div className="animate-fade-in pb-24 relative z-10">
              {/* Corporate Credit Strategy Banner */}
              <div className="bg-gradient-to-r from-slate-900 to-black p-12 rounded-2xl border border-gold-500/30 mb-12 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden group">
                 {/* Animated BG Effect */}
                 <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 group-hover:opacity-30 transition-opacity"></div>
                 <div className="absolute -right-20 -top-20 w-80 h-80 bg-gold-500/10 rounded-full blur-[100px]"></div>
                 
                 <div className="flex-1 relative z-10">
                     <span className="text-gold-400 text-[10px] uppercase font-bold tracking-widest border border-gold-500/30 px-3 py-1 rounded mb-4 inline-block bg-black/50">New Masterclass</span>
                     <h3 className="text-4xl font-bold text-white mb-4 font-serif">Corporate Credit — The Simple Breakdown</h3>
                     <p className="text-slate-300 text-lg leading-relaxed max-w-xl font-light">
                         Before you apply, understand the strategy. Learn how to separate you from the business and the "30-Day Play" to access $100k+.
                     </p>
                 </div>
                 <button 
                    onClick={() => navigate('/corporate-credit')}
                    className="shrink-0 bg-white text-black hover:bg-gold-400 px-10 py-4 rounded font-bold text-sm uppercase tracking-wider transition-colors z-10 shadow-xl transform hover:scale-105"
                 >
                    Read Strategy
                 </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                  <FundingOption 
                      title="Startup Capital" 
                      amount="$25k - $150k" 
                      credit="680+ FICO" 
                      desc="Unsecured personal term loans and credit cards. Perfect for initial liquidity."
                      onApply={handleApplyFunding}
                  />
                  <FundingOption 
                      title="Business Credit" 
                      amount="$50k - $250k" 
                      credit="No PG Required" 
                      desc="Build corporate credit profile. EIN-only funding based on revenue and tradelines."
                      onApply={handleApplyFunding}
                  />
                  <FundingOption 
                      title="Real Estate Fix/Flip" 
                      amount="$100k - $5M" 
                      credit="Asset Based" 
                      desc="Hard money loans for real estate investors. Up to 90% LTV for acquisition."
                      onApply={handleApplyFunding}
                  />
              </div>
          </div>
      )}
    </div>
  );
};

export default Curriculum;