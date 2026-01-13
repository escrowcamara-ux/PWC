import React, { useState, useEffect } from 'react';

// --- SUB-COMPONENTS FOR RITUALS ---

const OfferingRitual = ({ onComplete }: { onComplete: () => void }) => {
    const [amount, setAmount] = useState('');
    const [phase, setPhase] = useState<'input' | 'process' | 'done'>('input');

    const handleOffer = () => {
        if (!amount) return;
        setPhase('process');
        setTimeout(() => setPhase('done'), 4000); // Wait for animation
    };

    return (
        <div className="flex flex-col items-center justify-center h-[600px] relative overflow-hidden bg-gradient-to-b from-black via-[#1a0f00] to-black">
            {/* Ambient Fire Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,182,61,0.15),transparent_70%)] animate-pulse-slow"></div>

            {phase === 'input' && (
                <div className="animate-fade-in text-center z-10">
                    <div className="mb-8 relative">
                        {/* Candle Flame Animation */}
                        <div className="w-6 h-16 bg-orange-500 rounded-full blur-md mx-auto animate-pulse"></div>
                        <div className="w-3 h-10 bg-yellow-200 rounded-full blur-sm mx-auto -mt-8 animate-bounce"></div>
                        <div className="w-32 h-32 bg-gold-600/20 rounded-full blur-2xl absolute top-0 left-1/2 -translate-x-1/2"></div>
                    </div>
                    <h2 className="text-4xl font-serif text-gold-400 mb-4 tracking-wide text-glow">Make Your Offering</h2>
                    <p className="text-gold-100/60 mb-10 max-w-md font-light italic">Seed into the Trust. As you give, the lines of prosperity are drawn.</p>
                    
                    <div className="relative mb-12">
                        <span className="absolute left-2 top-2 text-gold-500 text-2xl font-serif">$</span>
                        <input 
                            type="number" 
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="bg-transparent border-b-2 border-gold-600/50 text-center text-5xl font-serif text-white py-2 focus:outline-none w-64 focus:border-gold-400 transition-colors placeholder-gold-900/50"
                            placeholder="0.00"
                        />
                    </div>
                    
                    <button onClick={handleOffer} className="px-10 py-4 bg-gradient-to-r from-gold-700 via-gold-500 to-gold-700 text-black font-bold uppercase tracking-[0.2em] rounded-full shadow-[0_0_30px_rgba(220,182,61,0.4)] hover:scale-105 transition-transform hover:shadow-[0_0_50px_rgba(220,182,61,0.6)]">
                        Ignite Offering
                    </button>
                </div>
            )}

            {phase === 'process' && (
                <div className="absolute inset-0 flex items-center justify-center">
                    {/* Gold Line Animation */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent animate-[shimmer_1s_infinite]"></div>
                    <div className="w-40 h-40 rounded-full border-4 border-gold-500 flex items-center justify-center relative animate-spin-slow bg-black">
                        <span className="text-5xl animate-pulse">🏛️</span>
                        <div className="absolute inset-0 rounded-full border-2 border-gold-300 animate-ping opacity-50"></div>
                        <div className="absolute inset-0 rounded-full shadow-[0_0_100px_rgba(220,182,61,0.8)]"></div>
                    </div>
                    <div className="absolute mt-64 text-gold-400 font-serif tracking-widest uppercase text-xs animate-pulse">Transmuting Funds...</div>
                </div>
            )}

            {phase === 'done' && (
                <div className="text-center animate-fade-in-up z-10">
                    <div className="text-6xl mb-6 drop-shadow-[0_0_20px_rgba(220,182,61,0.8)]">🔱</div>
                    <h2 className="text-5xl font-serif text-white mb-4">Accepted</h2>
                    <p className="text-gold-400 uppercase tracking-[0.3em] text-sm mb-10 border-t border-b border-gold-500/30 py-4">The Ledger Records Your Seed</p>
                    <button onClick={onComplete} className="text-slate-400 hover:text-white hover:underline uppercase tracking-widest text-xs">Close Ritual</button>
                </div>
            )}
        </div>
    );
};

const LedgerRitual = ({ onComplete }: { onComplete: () => void }) => {
    const [debt, setDebt] = useState('');
    const [burning, setBurning] = useState(false);
    const [cleansed, setCleansed] = useState(false);

    const burnDebt = () => {
        if (!debt) return;
        setBurning(true);
        setTimeout(() => setCleansed(true), 2500);
    };

    return (
        <div className="h-[600px] flex items-center justify-center relative bg-gradient-to-b from-gray-900 to-black overflow-hidden">
            {/* Ember Particles Background Effect */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20 animate-pulse"></div>

            {!cleansed ? (
                <div className={`bg-[#fdfbf7] p-12 rounded shadow-[0_0_50px_rgba(0,0,0,0.8)] max-w-md text-black relative transition-all duration-[2000ms] z-10 transform ${burning ? 'animate-burn scale-90' : 'scale-100'}`}>
                    {/* Paper Texture */}
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 pointer-events-none"></div>
                    
                    <h3 className="font-serif font-bold text-2xl mb-4 border-b-2 border-black pb-2 tracking-wide uppercase">Public Liability Record</h3>
                    <p className="text-sm font-mono mb-8 text-slate-800 leading-relaxed">
                        I hereby identify the following obligation as an attachment to the fiction, not the living man.
                    </p>
                    <textarea 
                        value={debt}
                        onChange={(e) => setDebt(e.target.value)}
                        className="w-full bg-transparent border-b-2 border-dashed border-slate-400 mb-8 focus:outline-none font-handwriting text-2xl text-red-900 placeholder-slate-400"
                        placeholder="Type Liability Name..."
                        rows={2}
                    />
                    <button 
                        onClick={burnDebt}
                        className="w-full py-4 bg-red-900 text-white font-bold uppercase tracking-[0.2em] hover:bg-red-800 transition-colors shadow-lg relative overflow-hidden group"
                    >
                        <span className="relative z-10">Burn This Record</span>
                        <div className="absolute inset-0 bg-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                    </button>
                </div>
            ) : (
                <div className="text-center animate-fade-in z-10">
                    <div className="w-32 h-32 mx-auto mb-6 text-gold-500 animate-bounce drop-shadow-[0_0_30px_rgba(220,182,61,0.6)]">✨</div>
                    <h2 className="text-4xl font-serif text-white mb-2 font-bold">The Record is Clean</h2>
                    <p className="text-slate-400 mb-8 text-lg font-light">Ash to ash. Debt to void. Only equity remains.</p>
                    <button onClick={onComplete} className="text-gold-400 border border-gold-500 px-8 py-3 rounded uppercase text-xs tracking-widest hover:bg-gold-500 hover:text-black transition-colors">Return</button>
                </div>
            )}
            
            {burning && !cleansed && (
                <div className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-orange-600/50 to-transparent blur-xl animate-pulse pointer-events-none"></div>
            )}
        </div>
    );
};

const OathRitual = ({ onComplete }: { onComplete: () => void }) => {
    const [signed, setSigned] = useState(false);

    const handleSign = () => {
        setSigned(true);
        setTimeout(onComplete, 4000);
    };

    return (
        <div className="h-[600px] flex items-center justify-center bg-[#050505] relative overflow-hidden">
            {/* Spotlight Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-full bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none blur-3xl"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')] opacity-30"></div>

            <div className="relative z-10 max-w-2xl text-center p-12 border-y border-gold-600/20 bg-black/40 backdrop-blur-sm">
                <h2 className="text-4xl font-serif text-gold-100 mb-10 tracking-[0.2em] uppercase text-glow">Oath of Office</h2>
                
                <p className="text-xl text-slate-300 font-serif italic mb-12 leading-loose">
                    "I, in my private capacity, do hereby accept the Office of Trustee. I pledge to govern this estate with prudence, holding all property in the private, separate from the public fiction."
                </p>

                {!signed ? (
                    <button 
                        onClick={handleSign}
                        className="group relative px-10 py-4 overflow-hidden rounded bg-transparent border border-gold-500 text-gold-400 uppercase tracking-[0.2em] font-bold hover:text-black transition-colors"
                    >
                        <span className="absolute inset-0 w-full h-full bg-gold-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                        <span className="relative">By My Hand, I Seal This</span>
                    </button>
                ) : (
                    <div className="animate-fade-in-up transform scale-125">
                        <div className="w-40 h-40 mx-auto rounded-full border-[6px] border-red-900 bg-red-900/30 flex items-center justify-center shadow-[0_0_60px_rgba(153,27,27,0.8)] relative">
                            <div className="absolute inset-0 border border-red-500/50 rounded-full m-2"></div>
                            <div className="text-center transform -rotate-12">
                                <span className="block text-[10px] uppercase text-red-300 tracking-widest mb-1">Official</span>
                                <span className="block text-3xl font-serif font-bold text-red-500 tracking-widest drop-shadow-md">SEALED</span>
                                <span className="block text-[10px] uppercase text-red-300 tracking-widest mt-1">Trustee</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- MAIN PAGE ---

const Rituals: React.FC = () => {
    const [activeRitual, setActiveRitual] = useState<string | null>(null);

    const closeRitual = () => setActiveRitual(null);

    return (
        <div className="min-h-screen pb-20 animate-fade-in">
            {activeRitual ? (
                // ACTIVE RITUAL MODE
                <div className="fixed inset-0 z-[100] bg-black flex flex-col animate-fade-in">
                    <button onClick={closeRitual} className="absolute top-8 right-8 text-slate-500 hover:text-white z-50 uppercase text-xs tracking-widest border border-slate-800 px-4 py-2 rounded hover:border-white transition-colors">
                        Exit Chamber
                    </button>
                    {activeRitual === 'offering' && <OfferingRitual onComplete={closeRitual} />}
                    {activeRitual === 'ledger' && <LedgerRitual onComplete={closeRitual} />}
                    {activeRitual === 'oath' && <OathRitual onComplete={closeRitual} />}
                </div>
            ) : (
                // DASHBOARD MODE
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 pt-12 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-purple-900/10 rounded-full blur-[100px] pointer-events-none"></div>
                        <h1 className="text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-gold-200 via-gold-500 to-gold-200 mb-6 font-bold tracking-tight filter drop-shadow-lg">The Ritual Chamber</h1>
                        <div className="kemetic-divider"><span>⚖️</span></div>
                        <p className="text-2xl text-slate-400 font-serif italic max-w-2xl mx-auto">
                            "Law is not just written; it is performed. Status is not just claimed; it is demonstrated."
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4">
                        {/* CARD 1: OFFERING */}
                        <div 
                            onClick={() => setActiveRitual('offering')}
                            className="group relative h-[450px] bg-slate-900/80 border border-gold-900/30 rounded-2xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-[0_0_40px_rgba(220,182,61,0.2)] transition-all duration-500 transform hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-30"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                            
                            <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="w-56 h-56 bg-gold-500/10 rounded-full blur-[50px]"></div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-10 text-center z-10">
                                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(220,182,61,0.5)]">🔱</div>
                                <h3 className="text-3xl font-serif text-white mb-3 font-bold">The Offering</h3>
                                <div className="w-12 h-1 bg-gold-500 mx-auto mb-4 rounded-full"></div>
                                <p className="text-sm text-slate-300 font-light">Seed into the Trust Vault. Ignite the flow of capital.</p>
                                <div className="mt-8 text-gold-500 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">Begin Ritual →</div>
                            </div>
                        </div>

                        {/* CARD 2: LEDGER */}
                        <div 
                            onClick={() => setActiveRitual('ledger')}
                            className="group relative h-[450px] bg-slate-900/80 border border-red-900/30 rounded-2xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-[0_0_40px_rgba(153,27,27,0.3)] transition-all duration-500 transform hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cracked-concrete.png')] opacity-20"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                            
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="w-56 h-56 bg-red-600/10 rounded-full blur-[50px]"></div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-10 text-center z-10">
                                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">🔥</div>
                                <h3 className="text-3xl font-serif text-white mb-3 font-bold">Ledger of Truth</h3>
                                <div className="w-12 h-1 bg-red-700 mx-auto mb-4 rounded-full"></div>
                                <p className="text-sm text-slate-300 font-light">Burn the debts of the fiction. Clear the record.</p>
                                <div className="mt-8 text-red-500 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">Ignite Fire →</div>
                            </div>
                        </div>

                        {/* CARD 3: OATH */}
                        <div 
                            onClick={() => setActiveRitual('oath')}
                            className="group relative h-[450px] bg-slate-900/80 border border-purple-900/30 rounded-2xl overflow-hidden cursor-pointer shadow-2xl hover:shadow-[0_0_40px_rgba(147,51,234,0.3)] transition-all duration-500 transform hover:-translate-y-2"
                        >
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                            
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                                <div className="w-56 h-56 bg-purple-600/10 rounded-full blur-[50px]"></div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-10 text-center z-10">
                                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform drop-shadow-[0_0_10px_rgba(147,51,234,0.5)]">📜</div>
                                <h3 className="text-3xl font-serif text-white mb-3 font-bold">The Oath</h3>
                                <div className="w-12 h-1 bg-purple-700 mx-auto mb-4 rounded-full"></div>
                                <p className="text-sm text-slate-300 font-light">Accept the Office of Trustee. Seal your standing.</p>
                                <div className="mt-8 text-purple-400 text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-500">Take Oath →</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Rituals;