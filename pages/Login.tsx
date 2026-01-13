

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginProps {
  onLogin: () => void;
}

const CinematicEntry = ({ onComplete }: { onComplete: () => void }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    // Timeline of events
    const timers = [
      setTimeout(() => setStage(1), 500),  // Ledger appears / Pages Start
      setTimeout(() => setStage(2), 2000), // Assets Entry (Schedule A)
      setTimeout(() => setStage(3), 3500), // Signature
      setTimeout(() => setStage(4), 5000), // Seal Emboss
      setTimeout(() => setStage(5), 6000), // Vault Doors Open
      setTimeout(() => onComplete(), 7500) // Redirect
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden font-serif">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-black to-black opacity-80"></div>

      {/* --- CONTENT CONTAINER (LEDGER) --- */}
      <div className={`relative z-20 transition-all duration-1000 transform ${stage >= 5 ? 'scale-150 opacity-0' : 'scale-100 opacity-100'}`}>
        
        {/* The Ledger Book */}
        <div className={`w-[600px] h-[400px] bg-[#fdfbf7] rounded-lg shadow-[0_0_50px_rgba(220,182,61,0.3)] relative overflow-hidden transition-all duration-1000 ${stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Paper Texture */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>
            
            {/* Ledger Grid Lines */}
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '100% 2rem' }}></div>
            <div className="absolute left-24 top-0 bottom-0 w-0.5 bg-red-900/20 double-line"></div>

            {/* Header */}
            <div className="p-8 pl-32 pt-12 relative">
                <h2 className="text-4xl font-bold text-slate-800 mb-2 font-serif tracking-widest">PRIVATE LEDGER</h2>
                <div className="w-full h-1 bg-slate-800 mb-1"></div>
                <div className="w-full h-0.5 bg-slate-800 mb-8"></div>
                
                <h3 className="text-xl font-bold text-slate-600 mb-4 underline decoration-gold-500 decoration-2 underline-offset-4">SCHEDULE A: ASSETS</h3>

                {/* Animated Assets List */}
                <div className="space-y-3 font-mono text-sm text-slate-800">
                    <div className={`flex justify-between border-b border-slate-300 pb-1 transition-all duration-700 ${stage >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                        <span>01. COMMERCE TRUST</span>
                        <span className="font-bold">ESTABLISHED</span>
                    </div>
                    <div className={`flex justify-between border-b border-slate-300 pb-1 transition-all duration-700 delay-300 ${stage >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                        <span>02. INTELLECTUAL PROPERTY</span>
                        <span className="font-bold">SECURED</span>
                    </div>
                    <div className={`flex justify-between border-b border-slate-300 pb-1 transition-all duration-700 delay-500 ${stage >= 2 ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                        <span>03. PRIVATE EQUITY</span>
                        <span className="font-bold">AUTHORIZED</span>
                    </div>
                </div>

                {/* Signature Section */}
                <div className="mt-12 flex justify-end relative">
                    {stage >= 3 && (
                         <div className="absolute -top-10 right-10 w-48">
                            <svg viewBox="0 0 200 100" className="w-full h-full">
                                <path 
                                    d="M10,80 Q50,10 90,80 T180,80" 
                                    fill="none" 
                                    stroke="#000" 
                                    strokeWidth="2"
                                    className="animate-signature"
                                    style={{ strokeDasharray: 300, strokeDashoffset: 300, animation: 'sign 2s ease-out forwards' }}
                                />
                                <path 
                                    d="M20,60 L180,60" 
                                    fill="none" 
                                    stroke="#000" 
                                    strokeWidth="1"
                                    className="opacity-50"
                                />
                            </svg>
                            <p className="text-[10px] text-center uppercase tracking-widest mt-1 text-slate-500">Authorized Trustee</p>
                         </div>
                    )}
                </div>
            </div>

            {/* Embossed Seal */}
            <div className={`absolute bottom-8 left-8 transition-all duration-500 transform ${stage >= 4 ? 'scale-100 opacity-100' : 'scale-150 opacity-0'}`}>
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-800 to-red-900 border-4 border-red-900/50 shadow-xl flex items-center justify-center relative">
                     <div className="absolute inset-0 rounded-full border border-white/20"></div>
                     <div className="text-center transform -rotate-12">
                         <div className="text-[8px] text-red-200 uppercase tracking-widest">Private Wealth Club</div>
                         <div className="text-4xl text-red-200 font-serif font-bold">PWC</div>
                         <div className="text-[8px] text-red-200 uppercase tracking-widest">Official Seal</div>
                     </div>
                </div>
            </div>
        </div>
      </div>

      {/* --- VAULT DOORS --- */}
      {/* Left Door */}
      <div 
        className={`fixed top-0 bottom-0 left-0 bg-[#0a0a0a] z-30 transition-transform duration-[1500ms] ease-in-out border-r-4 border-gold-600 flex items-center justify-end
        ${stage >= 5 ? '-translate-x-full' : 'translate-x-0'}`}
        style={{ width: '50vw', background: 'linear-gradient(90deg, #0f172a 0%, #000000 100%)' }}
      >
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
           {/* Decorative Lock Mechanism Left */}
           <div className="mr-[-2rem] w-16 h-64 bg-gradient-to-b from-gold-700 via-gold-400 to-gold-700 rounded-l-lg border-y border-l border-gold-300 shadow-2xl z-40 relative">
               <div className="absolute top-10 right-4 w-4 h-4 rounded-full bg-black/50 shadow-inner"></div>
               <div className="absolute bottom-10 right-4 w-4 h-4 rounded-full bg-black/50 shadow-inner"></div>
           </div>
      </div>

      {/* Right Door */}
      <div 
        className={`fixed top-0 bottom-0 right-0 bg-[#0a0a0a] z-30 transition-transform duration-[1500ms] ease-in-out border-l-4 border-gold-600 flex items-center justify-start
        ${stage >= 5 ? 'translate-x-full' : 'translate-x-0'}`}
        style={{ width: '50vw', background: 'linear-gradient(-90deg, #0f172a 0%, #000000 100%)' }}
      >
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
           {/* Decorative Lock Mechanism Right */}
           <div className="ml-[-2rem] w-16 h-64 bg-gradient-to-b from-gold-700 via-gold-400 to-gold-700 rounded-r-lg border-y border-r border-gold-300 shadow-2xl z-40 flex flex-col items-center justify-center gap-8">
               {/* Spinning Lock Handles */}
               <div className={`w-12 h-12 rounded-full border-4 border-slate-900 bg-gold-300 flex items-center justify-center transition-transform duration-[3000ms] ${stage >= 4 ? 'rotate-[360deg]' : 'rotate-0'}`}>
                   <div className="w-1 h-4 bg-slate-900"></div>
               </div>
           </div>
      </div>
      
      <style>{`
        @keyframes sign {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
};

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      // Trigger animation instead of immediate login
      setIsAuthenticating(true);
    }
  };

  if (isAuthenticating) {
      return <CinematicEntry onComplete={onLogin} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] relative overflow-hidden">
       {/* Decorative gradients */}
       <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-gold-600/20 rounded-full blur-[100px]"></div>
       <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[100px]"></div>

      <div className="z-10 w-full max-w-md p-8 glass-panel rounded-2xl border border-gold-500/20 shadow-2xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-serif font-bold text-gold-gradient mb-2 tracking-wider">PRIVATE<br/>WEALTH<br/>CLUB</h1>
          <p className="text-slate-400 text-sm tracking-widest uppercase mt-4 border-t border-slate-700 pt-4 inline-block">Members Only Access</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs uppercase text-gold-400 tracking-wider mb-2">Membership ID / Email</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
              placeholder="member@privatewealth.club"
            />
          </div>
          <div>
            <label className="block text-xs uppercase text-gold-400 tracking-wider mb-2">Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-900/50 border border-slate-600 rounded-lg px-4 py-3 text-white focus:border-gold-500 focus:ring-1 focus:ring-gold-500 outline-none transition-all"
              placeholder="••••••••"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-gold-600 to-gold-400 text-black font-bold uppercase tracking-wider py-3 rounded-lg hover:shadow-[0_0_20px_rgba(220,182,61,0.5)] transition-all transform hover:-translate-y-0.5"
          >
            Enter The Club
          </button>
        </form>

        <div className="mt-8 text-center space-y-4">
            <p className="text-xs text-slate-500">
                By logging in, you agree to the Non-Disclosure Agreement regarding L.A.W. strategies and Trust proprietary data.
            </p>
            <div className="border-t border-slate-700 pt-4">
                <button 
                    onClick={() => navigate('/about')}
                    className="text-gold-400 hover:text-white text-sm uppercase tracking-widest font-bold transition-colors"
                >
                    Learn About The Club →
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login;