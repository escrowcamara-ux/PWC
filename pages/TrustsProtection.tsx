

import React from 'react';
import { useNavigate } from 'react-router-dom';

const TrustsProtection: React.FC = () => {
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
            <h1 className="text-4xl font-serif text-white mb-4">Trusts & Protection</h1>
            <p className="text-xl text-slate-300 max-w-3xl">
                The foundation of real sovereignty. Learn to structure wealth so you <span className="text-gold-400 font-bold">own nothing</span>... but <span className="text-gold-400 font-bold">control everything</span>.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
                
                {/* Introduction */}
                <div className="glass-panel p-8 rounded-xl border-l-4 border-gold-500">
                    <p className="text-slate-300 leading-relaxed mb-4">
                        Most people operate with all their assets in their personal name — which means they are fully exposed to lawsuits, bank freezes, creditors, and taxes. One mistake can wipe them out.
                    </p>
                    <p className="text-white font-bold">
                        Wealthy families NEVER operate this way. This is where you see why.
                    </p>
                </div>

                {/* Section 1: Trusts Remove Liability */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <span className="bg-slate-800 text-gold-400 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 border border-slate-600">1</span>
                        Trusts Remove Personal Liability
                    </h2>
                    <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 mb-6">
                        <p className="text-slate-400 mb-4">
                            When you set up a proper trust:
                        </p>
                        <ul className="space-y-2 text-slate-300 mb-6">
                            <li className="flex items-center gap-2"><span className="text-green-500">✔</span> The trust owns the asset</li>
                            <li className="flex items-center gap-2"><span className="text-green-500">✔</span> YOU are the controller or trustee</li>
                            <li className="flex items-center gap-2"><span className="text-green-500">✔</span> Your personal name stays protected</li>
                            <li className="flex items-center gap-2"><span className="text-green-500">✔</span> Your wealth is shielded from legal attacks</li>
                        </ul>
                        <p className="text-sm text-slate-500 border-t border-slate-700 pt-4">
                            This is how the elite protect: businesses, homes, vehicles, investments, IP, crypto, land, cash, and gold.
                        </p>
                    </div>
                </section>

                {/* Section 2: Ultimate Control */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <span className="bg-slate-800 text-gold-400 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 border border-slate-600">2</span>
                        How Trusts Give You Ultimate Control
                    </h2>
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-xl border border-gold-500/30">
                        <p className="text-white mb-4">
                            Inside this section, you learn how trusts are used by family offices, private ministries, royal houses, and private banks to:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                             <div className="bg-black/20 p-3 rounded text-sm text-slate-300">Move assets into a trust</div>
                             <div className="bg-black/20 p-3 rounded text-sm text-slate-300">Manage without personal exposure</div>
                             <div className="bg-black/20 p-3 rounded text-sm text-slate-300">Create layers of protection</div>
                             <div className="bg-black/20 p-3 rounded text-sm text-slate-300">Operate in private commerce</div>
                        </div>
                        <p className="text-gold-400 font-serif italic text-center mt-4">"This is real sovereignty — not theory."</p>
                    </div>
                </section>

                {/* Section 3: Trust Structures */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <span className="bg-slate-800 text-gold-400 w-8 h-8 rounded-full flex items-center justify-center text-sm mr-3 border border-slate-600">3</span>
                        Trust Structures You Learn Inside
                    </h2>
                    <div className="grid grid-cols-2 gap-4">
                        {['Revocable & Irrevocable', 'Family Trusts', 'Asset Protection Trusts', '508(c)(1)(a) Ministry', 'Holding Company', 'Private Express Trusts'].map((item) => (
                            <div key={item} className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg text-center hover:border-gold-500/30 transition-colors">
                                <p className="text-white font-bold text-sm">{item}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-slate-400 text-sm mt-4 text-center">Everything is taught step-by-step, with simple logic and simple language.</p>
                </section>

                {/* Section 4: Practical Outcome */}
                <section className="glass-panel p-6 rounded-xl border border-slate-600">
                     <h2 className="text-xl font-bold text-white mb-4">The Practical Outcome</h2>
                     <p className="text-slate-300 mb-2">By the end of this module, you'll know how to:</p>
                     <ul className="list-disc pl-5 text-slate-400 space-y-1 text-sm">
                         <li>Keep assets off your personal balance sheet</li>
                         <li>Eliminate personal liability</li>
                         <li>Operate like a private family office</li>
                         <li>Pass wealth tax-efficiently</li>
                         <li>Build a structure courts must respect</li>
                     </ul>
                </section>

                {/* Section 5: The Final Level - Equitable Redemption */}
                <section className="relative overflow-hidden rounded-xl p-[1px] bg-gradient-to-br from-gold-600 to-purple-900">
                    <div className="bg-slate-900 rounded-xl p-8 h-full relative z-10">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <svg className="w-32 h-32 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z"/></svg>
                        </div>
                        
                        <h2 className="text-2xl font-serif text-white mb-2">The Final Level: Trusts & Equitable Redemption</h2>
                        <p className="text-xs text-gold-400 uppercase tracking-widest mb-6">Advanced Private Knowledge</p>
                        
                        <p className="text-slate-300 mb-4 leading-relaxed">
                            This is the part nobody talks about publicly. Once your trust is established, you gain <span className="text-white font-bold">standing in equity</span>.
                        </p>
                        
                        <p className="text-slate-300 mb-6">
                            Standing in equity allows you to engage in private commercial remedies, operate on the creditor side, and understand the real structure behind securities.
                        </p>

                        <div className="bg-black/40 p-4 rounded border border-gold-500/20 mb-6">
                            <h4 className="text-gold-400 font-bold text-sm mb-2">⚠️ Important Distinction</h4>
                            <p className="text-xs text-slate-400">
                                This doesn't mean "magic money" or "canceling everything." It means having the correct structure, capacity, and standing to learn how securities can be redeemed or settled in equity through your trust.
                            </p>
                        </div>

                        <p className="text-white italic text-sm">
                            To fully understand how to redeem a security, file notices, and use trust capacity correctly, you must enter the full module.
                        </p>
                    </div>
                </section>

            </div>

            {/* Sidebar / Actions */}
            <div className="lg:col-span-1 space-y-6">
                <div className="glass-panel p-6 rounded-xl sticky top-8">
                    <h3 className="text-xl font-serif text-white mb-4">Module Resources</h3>
                    
                    <div className="space-y-4">
                        <button className="w-full group relative overflow-hidden rounded-lg p-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-gold-600 to-gold-400 transition-all group-hover:opacity-90"></div>
                            <div className="relative bg-black m-[1px] rounded-lg p-4 flex items-center gap-3 group-hover:bg-black/80 transition-colors">
                                <div className="bg-slate-800 p-2 rounded text-white font-bold text-xs border border-slate-600">PDF</div>
                                <div className="text-left">
                                    <p className="text-white font-bold text-sm">Trust Structures Guide</p>
                                    <p className="text-[10px] text-slate-400">Visual diagrams & templates</p>
                                </div>
                            </div>
                        </button>

                        <button className="w-full group relative overflow-hidden rounded-lg p-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 transition-all group-hover:opacity-90"></div>
                            <div className="relative bg-black m-[1px] rounded-lg p-4 flex items-center gap-3 group-hover:bg-black/80 transition-colors">
                                <div className="bg-slate-800 p-2 rounded text-white font-bold text-xs border border-slate-600">VID</div>
                                <div className="text-left">
                                    <p className="text-white font-bold text-sm">Watch Full System</p>
                                    <p className="text-[10px] text-slate-400">Deep dive video lesson</p>
                                </div>
                            </div>
                        </button>

                        <div className="bg-slate-800/50 p-4 rounded border border-slate-700 mt-4">
                            <h4 className="text-gold-400 text-xs uppercase font-bold mb-2">Next Steps</h4>
                            <p className="text-slate-400 text-xs mb-4">Prepare for the deeper levels of private wealth and private law.</p>
                            <button className="w-full py-2 bg-slate-700 hover:bg-gold-600 hover:text-black text-white text-xs uppercase font-bold rounded transition-colors">
                                Access Equitable Redemption
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TrustsProtection;