

import React from 'react';
import { useNavigate } from 'react-router-dom';

const CorporateCredit: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto animate-fade-in pb-12">
        <div className="mb-8">
            <button 
                onClick={() => navigate('/curriculum')}
                className="text-slate-400 hover:text-white text-sm mb-4 flex items-center gap-2"
            >
                ← Back to Curriculum
            </button>
            <h1 className="text-4xl font-serif text-white mb-4">Corporate Credit — The Simple Breakdown</h1>
            <p className="text-xl text-slate-300 max-w-3xl">
                Corporate credit is the process of separating <span className="text-gold-400 font-bold">you</span> from the <span className="text-gold-400 font-bold">business</span> — legally, financially, and strategically.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
                
                {/* Introduction */}
                <div className="glass-panel p-8 rounded-xl border-l-4 border-gold-500">
                    <p className="text-slate-300 leading-relaxed">
                        Most people live life as "one identity," which means every risk, every debt, every problem falls directly on them. 
                        Corporate credit flips that entire structure. We separate your personal identity from your commercial entity.
                    </p>
                </div>

                {/* Section 1: Personal vs Business */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <span className="bg-slate-800 text-gold-400 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 border border-slate-600">1</span>
                        Personal Credit = YOU as the Asset
                    </h2>
                    <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 mb-6">
                        <p className="text-slate-400 mb-4">
                            This is where everybody starts. Your personal profile includes your SSN, personal history, income, and utilization.
                            <br/><br/>
                            <span className="text-red-400 font-bold">The Trap:</span> Even if you have an 800 score, you are capped by what you alone can qualify for. This is why personal credit limits your growth.
                        </p>
                    </div>

                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <span className="bg-slate-800 text-gold-400 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 border border-slate-600">2</span>
                        Business Credit = Your COMPANY as the Asset
                    </h2>
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-gold-500/30">
                        <p className="text-white mb-4 font-medium">
                            This is where the power begins. When you structure your business correctly:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-slate-300 mb-4">
                            <li><span className="text-gold-400">EIN</span> becomes the financial identity</li>
                            <li>Your <span className="text-gold-400">Company</span> becomes the borrower</li>
                            <li>You are protected from liability</li>
                            <li>Funding is based on corporate structure, not personal life</li>
                        </ul>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="bg-black/20 p-3 rounded border border-gold-500/20 text-center">
                                <span className="block text-gold-400 font-bold">Bigger Loans</span>
                            </div>
                            <div className="bg-black/20 p-3 rounded border border-gold-500/20 text-center">
                                <span className="block text-gold-400 font-bold">Fleet Vehicles</span>
                            </div>
                            <div className="bg-black/20 p-3 rounded border border-gold-500/20 text-center">
                                <span className="block text-gold-400 font-bold">Real Estate Leverage</span>
                            </div>
                            <div className="bg-black/20 p-3 rounded border border-gold-500/20 text-center">
                                <span className="block text-gold-400 font-bold">Expansion Capital</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 3: The 30-Day Play */}
                <section>
                    <h2 className="text-3xl font-serif text-white mb-8 border-b border-slate-700 pb-4">
                        The 30-Day Corporate Credit Play 
                        <span className="block text-lg font-sans text-gold-400 mt-1 font-bold tracking-wider">How to Access $100,000 Quickly</span>
                    </h2>
                    
                    <div className="space-y-6">
                        {/* Step 1 */}
                        <div className="flex gap-4">
                            <div className="flex-col items-center hidden md:flex">
                                <div className="w-px h-full bg-slate-700"></div>
                            </div>
                            <div className="flex-1 bg-slate-800/40 p-6 rounded-xl border border-slate-700 hover:border-gold-500/50 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-2">Step 1 → Activate Business Entity</h3>
                                <p className="text-xs text-gold-500 uppercase font-bold mb-3">Timeline: 24–48 Hours</p>
                                <p className="text-slate-300 text-sm">
                                    LLC or Corp, EIN, Operating Agreement, Business Address, Phone, Email, and Bank Account.
                                </p>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="flex gap-4">
                            <div className="flex-col items-center hidden md:flex">
                                <div className="w-px h-full bg-slate-700"></div>
                            </div>
                            <div className="flex-1 bg-slate-800/40 p-6 rounded-xl border border-slate-700 hover:border-gold-500/50 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-2">Step 2 → Strengthen Credibility</h3>
                                <p className="text-xs text-gold-500 uppercase font-bold mb-3">Timeline: 3–5 Days</p>
                                <p className="text-slate-300 text-sm">
                                    Create the Corporate Ledger: Vendor trade lines, D-U-N-S number, business profile online, and bank rating.
                                </p>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="flex gap-4">
                            <div className="flex-col items-center hidden md:flex">
                                <div className="w-px h-full bg-slate-700"></div>
                            </div>
                            <div className="flex-1 bg-slate-800/40 p-6 rounded-xl border border-slate-700 hover:border-gold-500/50 transition-colors">
                                <h3 className="text-xl font-bold text-white mb-2">Step 3 → Add Primary Trade Lines</h3>
                                <p className="text-xs text-gold-500 uppercase font-bold mb-3">Timeline: 7–10 Days</p>
                                <p className="text-slate-300 text-sm">
                                    This builds your PAYDEX score. Generate business credit history and positive reporting.
                                </p>
                            </div>
                        </div>

                        {/* Step 4 */}
                        <div className="flex gap-4">
                            <div className="flex-col items-center hidden md:flex">
                                <div className="w-px h-full bg-slate-700"></div>
                            </div>
                            <div className="flex-1 bg-gradient-to-r from-gold-900/20 to-slate-900 p-6 rounded-xl border border-gold-500/50">
                                <h3 className="text-xl font-bold text-white mb-2">Step 4 → Apply for Funding</h3>
                                <p className="text-xs text-gold-500 uppercase font-bold mb-3">The Result</p>
                                <p className="text-slate-300 text-sm mb-4">
                                    Once the structure is solid, apply for business cards, LOCs, and vendor credit.
                                </p>
                                <div className="bg-black/40 p-4 rounded text-center">
                                    <p className="text-gold-400 font-bold text-2xl">$60,000 – $120,000</p>
                                    <p className="text-xs text-slate-400">Potential Capital in 30 Days</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Section 4: No Business? */}
                <section className="glass-panel p-8 rounded-xl border border-slate-600">
                    <h2 className="text-2xl font-bold text-white mb-4">What if you have NO business?</h2>
                    <p className="text-slate-300 mb-6">
                        No problem. Financial freedom doesn't require money—it requires <span className="text-white font-bold underline">structure</span>.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-400">
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            Build a corporate identity from scratch
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            Turn your personal brand into a borrower
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            Leverage your trust or ministry
                        </div>
                        <div className="flex items-center gap-2">
                            <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            Structure a "Corporate Leisure" profile
                        </div>
                    </div>
                </section>

            </div>

            {/* Sidebar / Actions */}
            <div className="lg:col-span-1 space-y-6">
                <div className="glass-panel p-6 rounded-xl sticky top-8">
                    <h3 className="text-xl font-serif text-white mb-4">Lesson Resources</h3>
                    
                    <div className="space-y-4">
                        <button className="w-full group relative overflow-hidden rounded-lg p-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-400 transition-all group-hover:opacity-90"></div>
                            <div className="relative bg-black m-[1px] rounded-lg p-4 flex items-center gap-3 group-hover:bg-black/80 transition-colors">
                                <div className="bg-red-900/50 p-2 rounded text-red-500 font-bold text-xs border border-red-800">PDF</div>
                                <div className="text-left">
                                    <p className="text-white font-bold text-sm">Download The Guide</p>
                                    <p className="text-[10px] text-slate-400">Step-by-step blueprint (2.4 MB)</p>
                                </div>
                            </div>
                        </button>

                        <button className="w-full group relative overflow-hidden rounded-lg p-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 transition-all group-hover:opacity-90"></div>
                            <div className="relative bg-black m-[1px] rounded-lg p-4 flex items-center gap-3 group-hover:bg-black/80 transition-colors">
                                <div className="bg-blue-900/50 p-2 rounded text-blue-400 font-bold text-xs border border-blue-800">VID</div>
                                <div className="text-left">
                                    <p className="text-white font-bold text-sm">Watch Strategy Lesson</p>
                                    <p className="text-[10px] text-slate-400">Full video walkthrough (45:00)</p>
                                </div>
                            </div>
                        </button>
                    </div>

                    <div className="mt-8 border-t border-slate-700 pt-6">
                        <p className="text-xs text-slate-400 mb-4">Ready to execute Step 1?</p>
                        <button 
                            onClick={() => navigate('/funding-application')}
                            className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-white text-xs uppercase tracking-wider font-bold rounded transition-colors"
                        >
                            Start Funding Application
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CorporateCredit;