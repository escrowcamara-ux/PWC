
import React from 'react';
import { useNavigate } from 'react-router-dom';

const InnerSanctum: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center animate-fade-in relative overflow-hidden">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black"></div>
        
        <div className="relative z-10 max-w-4xl w-full p-8 text-center">
            <div className="mb-8">
                <div className="w-24 h-24 mx-auto bg-black border-2 border-purple-500/50 rounded-full flex items-center justify-center mb-6 shadow-[0_0_50px_rgba(168,85,247,0.3)]">
                    <svg className="w-12 h-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                </div>
                <h1 className="text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-gold-400 mb-4 tracking-wide">
                    The Inner Sanctum
                </h1>
                <p className="text-slate-400 text-lg uppercase tracking-[0.3em] font-bold">
                    Secret Initiate Path
                </p>
            </div>

            <div className="glass-panel p-10 rounded-2xl border border-purple-500/30 bg-black/80 backdrop-blur-xl relative overflow-hidden">
                {/* Shine Effect */}
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-[80px]"></div>

                <p className="text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto italic">
                    "There is a level of sovereignty that cannot be taught to the masses. It must be initiated.
                    You stand at the gate of the Royal Treasury and the High Court."
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-10">
                    <div className="p-4 bg-purple-900/10 border border-purple-500/20 rounded-lg hover:bg-purple-900/20 transition-colors">
                        <h3 className="text-gold-400 font-bold mb-1"> Sovereign Exchange ($ROYALGOLD)</h3>
                        <p className="text-xs text-slate-400">Access to our private liquidity pool and internal currency exchange.</p>
                    </div>
                    <div className="p-4 bg-purple-900/10 border border-purple-500/20 rounded-lg hover:bg-purple-900/20 transition-colors">
                         <h3 className="text-gold-400 font-bold mb-1">MIC / ISIN Setup</h3>
                        <p className="text-xs text-slate-400">Structure your trust to issue globally recognized securities.</p>
                    </div>
                    <div className="p-4 bg-purple-900/10 border border-purple-500/20 rounded-lg hover:bg-purple-900/20 transition-colors">
                         <h3 className="text-gold-400 font-bold mb-1">Private Loans</h3>
                        <p className="text-xs text-slate-400">Peer-to-peer lending within the inner circle (0% interest).</p>
                    </div>
                    <div className="p-4 bg-purple-900/10 border border-purple-500/20 rounded-lg hover:bg-purple-900/20 transition-colors">
                         <h3 className="text-gold-400 font-bold mb-1">Spiritual Initiation</h3>
                        <p className="text-xs text-slate-400">Advanced metaphysics of money and law. The 13th Module.</p>
                    </div>
                </div>

                <div className="flex flex-col items-center">
                    <button className="bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-700 hover:to-purple-500 text-white px-10 py-4 rounded-lg font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all transform hover:scale-105 mb-4">
                        Request Audience ($3,000)
                    </button>
                    <p className="text-xs text-slate-500">
                        Initiation requires Chairman Rank or Direct Invite.
                    </p>
                </div>
            </div>
            
            <div className="mt-8">
                <button onClick={() => navigate('/')} className="text-slate-500 hover:text-white text-sm">Return to Safety</button>
            </div>
        </div>
    </div>
  );
};

export default InnerSanctum;
