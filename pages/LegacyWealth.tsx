

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { COMPENSATION_PLAN } from '../constants';

const LegacyWealth: React.FC = () => {
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
            <h1 className="text-4xl font-serif text-white mb-4">Legacy Wealth: The Mathematical Certainty</h1>
            <p className="text-xl text-slate-300 max-w-3xl">
                Corporate Credit funds your life. Trusts protect your life. <span className="text-gold-400 font-bold">Legacy Wealth multiplies your life.</span>
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
                
                {/* Section 1: Multiplication */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <span className="bg-slate-800 text-gold-400 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 border border-slate-600">1</span>
                        The System Is Built on Multiplication
                    </h2>
                    <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 mb-6">
                        <p className="text-slate-300 mb-4">
                            There is no gambling. No luck. Just math. Inside this module, you learn how each person added to your team multiplies your structure.
                        </p>
                        <div className="flex items-center justify-between bg-black/30 p-4 rounded-lg border border-slate-700/50 mb-4 font-mono text-sm">
                            <span className="text-slate-400">3 people</span>
                            <span className="text-slate-500">→</span>
                            <span className="text-slate-300">9 people</span>
                            <span className="text-slate-500">→</span>
                            <span className="text-white">27 people</span>
                            <span className="text-slate-500">→</span>
                            <span className="text-gold-400 font-bold">81 people</span>
                        </div>
                        <p className="text-sm text-slate-400">
                            This compounds into income levels. The payouts are consistent and predictable because the math is absolute.
                        </p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-900/20 to-slate-900 p-6 rounded-xl border border-purple-500/30">
                        <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                            <span className="text-2xl">👼</span> The Power of Seven
                        </h3>
                        <p className="text-slate-300 mb-4 text-sm">
                            There is one simple rule in business, networking, and wealth. It is a cosmic, mathematical rhythm:
                        </p>
                        <ul className="space-y-2 text-slate-300 text-sm">
                            <li className="flex items-center gap-2"><span className="text-purple-400">👉</span> For every 7 people you contact, 1 will respond.</li>
                            <li className="flex items-center gap-2"><span className="text-purple-400">👉</span> For every 7 who respond, 1 will join.</li>
                            <li className="flex items-center gap-2"><span className="text-purple-400">👉</span> For every 7 who join, <span className="text-white font-bold">1 becomes a 7-figure earner.</span></li>
                        </ul>
                    </div>
                </section>

                {/* Section 2: Compensation Plan Breakdown */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <span className="bg-slate-800 text-gold-400 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 border border-slate-600">2</span>
                        The Blueprint: P100 to CEO
                    </h2>
                    <div className="glass-panel p-6 rounded-xl border border-gold-500/20">
                        <p className="text-slate-300 mb-6">
                            This is the blueprint to build actual long-term legacy, not just short-term cash. Each rank has specific, predictable weekly income.
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-sm">
                                <thead>
                                    <tr className="text-xs text-slate-500 uppercase tracking-wider border-b border-slate-700">
                                        <th className="pb-2">Rank</th>
                                        <th className="pb-2">Subscribers</th>
                                        <th className="pb-2 text-right text-gold-400">Weekly Pay</th>
                                    </tr>
                                </thead>
                                <tbody className="text-slate-300 divide-y divide-slate-800">
                                    {COMPENSATION_PLAN.slice(0,5).map((tier) => (
                                        <tr key={tier.rank}>
                                            <td className="py-2 font-medium text-white">{tier.rank}</td>
                                            <td className="py-2">{tier.subscribers}</td>
                                            <td className="py-2 text-right font-mono">{tier.weekly}</td>
                                        </tr>
                                    ))}
                                    <tr className="bg-gold-900/10">
                                        <td className="py-2 font-bold text-gold-400">EXECUTIVE</td>
                                        <td className="py-2">192</td>
                                        <td className="py-2 text-right font-bold text-gold-400">$5,000</td>
                                    </tr>
                                    {COMPENSATION_PLAN.slice(6).map((tier) => (
                                        <tr key={tier.rank}>
                                            <td className="py-2 font-bold text-white">{tier.rank}</td>
                                            <td className="py-2">{tier.subscribers}</td>
                                            <td className="py-2 text-right font-mono font-bold">{tier.weekly}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Section 3: Legacy Meaning */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <span className="bg-slate-800 text-gold-400 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 border border-slate-600">3</span>
                        What Legacy Wealth REALLY Means
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="bg-slate-800/50 p-4 rounded border border-slate-700">
                            <h4 className="text-gold-400 font-bold mb-1">Not Just Inheritance</h4>
                            <p className="text-xs text-slate-400">Most people think legacy means your kids inherit money. Here, they inherit the structure.</p>
                        </div>
                         <div className="bg-slate-800/50 p-4 rounded border border-slate-700">
                            <h4 className="text-gold-400 font-bold mb-1">Payouts to Assets</h4>
                            <p className="text-xs text-slate-400">Learn how to convert cashflow into long-term stability and family foundations.</p>
                        </div>
                    </div>
                </section>

                {/* Section 4: Bond Acquisition & Trust Syndication */}
                <section className="relative overflow-hidden rounded-xl p-[1px] bg-gradient-to-br from-gold-500 to-emerald-800">
                     <div className="bg-slate-900 rounded-xl p-8 h-full relative z-10">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/></svg>
                        </div>

                        <h2 className="text-2xl font-serif text-white mb-2">Legacy Conversion: Bond Acquisition</h2>
                        <p className="text-xs text-emerald-400 uppercase tracking-widest mb-6">Trust Syndication & Collective Equity</p>
                        
                        <p className="text-slate-300 mb-6 leading-relaxed">
                            This is the part MOST people won’t understand at first — but it’s where the real wealth is created.
                            Every person who joins your organization is not just a subscriber. They are a <span className="text-white font-bold">bond participant in your trust syndication.</span>
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-full bg-emerald-900/30 text-emerald-400 flex items-center justify-center shrink-0">✔</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">Collective Equity = Collective Value</h4>
                                    <p className="text-slate-400 text-xs">As the membership grows, everyone’s value grows. Your team’s equity expands, and the trust becomes stronger.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 rounded-full bg-emerald-900/30 text-emerald-400 flex items-center justify-center shrink-0">✔</div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">Access Institutional Capital</h4>
                                    <p className="text-slate-400 text-xs">
                                        When you present your trust's asset ledger (your members), you access higher funding, private lenders, and equity lines.
                                    </p>
                                </div>
                            </div>
                        </div>

                         <p className="text-center text-gold-400 font-serif italic text-lg">
                             "From 'signing people up' to 'building an equity-backed financial ecosystem.'"
                         </p>
                     </div>
                </section>

            </div>

            {/* Sidebar / Resources */}
            <div className="lg:col-span-1 space-y-6">
                <div className="glass-panel p-6 rounded-xl sticky top-8">
                    <h3 className="text-xl font-serif text-white mb-4">Lesson Resources</h3>
                    
                    <div className="space-y-4">
                        <button className="w-full group relative overflow-hidden rounded-lg p-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-400 transition-all group-hover:opacity-90"></div>
                            <div className="relative bg-black m-[1px] rounded-lg p-4 flex items-center gap-3 group-hover:bg-black/80 transition-colors">
                                <div className="bg-slate-800 p-2 rounded text-white font-bold text-xs border border-slate-600">PDF</div>
                                <div className="text-left">
                                    <p className="text-white font-bold text-sm">Math & Equity System</p>
                                    <p className="text-[10px] text-slate-400">Explain the math (1.8 MB)</p>
                                </div>
                            </div>
                        </button>

                        <button className="w-full group relative overflow-hidden rounded-lg p-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-400 transition-all group-hover:opacity-90"></div>
                            <div className="relative bg-black m-[1px] rounded-lg p-4 flex items-center gap-3 group-hover:bg-black/80 transition-colors">
                                <div className="bg-slate-800 p-2 rounded text-white font-bold text-xs border border-slate-600">VID</div>
                                <div className="text-left">
                                    <p className="text-white font-bold text-sm">Bond Structure Breakdown</p>
                                    <p className="text-[10px] text-slate-400">Deep dive video (55:00)</p>
                                </div>
                            </div>
                        </button>
                    </div>

                    <div className="mt-8 border-t border-slate-700 pt-6">
                        <p className="text-xs text-slate-400 mb-4">Ready to build your legacy?</p>
                        <button 
                            onClick={() => navigate('/compensation-plan')}
                            className="w-full py-3 bg-slate-800 hover:bg-gold-600 hover:text-black text-white text-xs uppercase tracking-wider font-bold rounded transition-colors"
                        >
                            View Compensation Plan
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default LegacyWealth;