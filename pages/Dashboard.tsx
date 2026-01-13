import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CURRENT_USER, ASCENSION_PATH } from '../constants';

interface StatCardProps {
  label: string;
  value: string;
  subtext?: string;
  delay: string;
  theme: 'gold' | 'purple' | 'blue' | 'emerald';
  icon: string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value, subtext, delay, theme, icon }) => {
  const themes = {
    gold: 'from-orange-900/80 via-yellow-900/40 to-black border-gold-500/50 text-gold-100',
    purple: 'from-purple-900/80 via-indigo-900/40 to-black border-purple-500/50 text-purple-100',
    blue: 'from-blue-900/80 via-slate-900/40 to-black border-blue-500/50 text-blue-100',
    emerald: 'from-emerald-900/80 via-teal-900/40 to-black border-emerald-500/50 text-emerald-100'
  };

  const accentColors = {
    gold: 'text-gold-400',
    purple: 'text-purple-400',
    blue: 'text-blue-400',
    emerald: 'text-emerald-400'
  };

  return (
    <div 
        className={`relative p-6 rounded-2xl border bg-gradient-to-br ${themes[theme]} shadow-xl overflow-hidden group hover:scale-[1.02] transition-transform duration-300 animate-fade-in-up`} 
        style={{ animationDelay: delay }}
    >
        {/* Background Flare */}
        <div className={`absolute -right-4 -top-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors`}></div>
        
        <div className="relative z-10 flex justify-between items-start">
            <div>
                <h3 className={`text-xs font-bold uppercase tracking-widest mb-2 opacity-70 ${accentColors[theme]}`}>{label}</h3>
                <p className="text-3xl font-serif font-bold text-white tracking-wide text-glow">{value}</p>
                {subtext && <p className="text-[10px] mt-2 opacity-60 font-mono">{subtext}</p>}
            </div>
            <div className={`text-2xl p-2 rounded-lg bg-black/30 border border-white/10 ${accentColors[theme]}`}>
                {icon}
            </div>
        </div>
    </div>
  );
};

interface MiniSealProps {
  name: string;
  active: boolean;
  color: string;
}

const MiniSeal: React.FC<MiniSealProps> = ({ name, active, color }) => (
    <div className={`w-20 h-20 rounded-full border-4 flex items-center justify-center relative group cursor-pointer transition-all duration-300 ${active ? 'border-gold-500 bg-black shadow-[0_0_15px_rgba(220,182,61,0.5)] scale-100' : 'border-slate-800 bg-slate-900/50 opacity-40 scale-90 grayscale'}`}>
        <div className={`text-center leading-none ${active ? 'text-gold-400' : 'text-slate-600'}`}>
            <span className="block text-[8px] uppercase tracking-widest mb-1">Seal</span>
            <span className="block text-2xl drop-shadow-md">★</span>
        </div>
        
        {active && <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse"></div>}
        
        {/* Tooltip */}
        <div className="absolute bottom-full mb-3 hidden group-hover:block w-32 bg-black/90 backdrop-blur border border-gold-500 text-gold-100 text-[10px] p-2 rounded text-center z-20 left-1/2 transform -translate-x-1/2 shadow-xl tracking-wider">
            {name}
        </div>
    </div>
);

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const completedPhases = ASCENSION_PATH.filter(p => p.status === 'completed');

  const handleCopyInvite = () => {
    alert("Invitation link copied to clipboard: privatewealth.club/u/alexsterling");
  };

  return (
    <div className="space-y-10">
      {/* Hero Header */}
      <header className="relative rounded-2xl overflow-hidden p-8 md:p-12 border border-gold-500/20 shadow-2xl">
         <div className="absolute inset-0 bg-gradient-to-r from-black via-slate-900 to-slate-900"></div>
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
         <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-gold-600/10 to-transparent"></div>
         
         <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
                <p className="text-gold-400 uppercase tracking-[0.3em] text-xs font-bold mb-2">Private Wealth Club</p>
                <h2 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">Welcome, <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-200 to-gold-600">{CURRENT_USER.name}</span></h2>
                <p className="text-slate-400 max-w-xl text-lg font-light">
                    Your sovereignty is a journey. Today, the stars align for expansion.
                </p>
            </div>
            <div className="flex items-center gap-3 px-5 py-3 bg-black/60 backdrop-blur rounded-full border border-gold-500/30 shadow-lg">
                 <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-gold-500 animate-ping absolute opacity-75"></div>
                    <div className="w-3 h-3 rounded-full bg-gold-500 relative"></div>
                 </div>
                 <span className="text-gold-100 font-bold uppercase tracking-wider text-xs">Phase 3 Active</span>
            </div>
         </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          label="Current Rank" 
          value={CURRENT_USER.rank} 
          subtext="Next: EXECUTIVE" 
          delay="0ms" 
          theme="purple"
          icon="👑"
        />
        <StatCard 
          label="Total Earnings" 
          value={`$${CURRENT_USER.totalEarnings.toLocaleString()}`} 
          subtext="+12% this month" 
          delay="100ms" 
          theme="gold"
          icon="💰"
        />
        <StatCard 
          label="Group Volume" 
          value={CURRENT_USER.volume.toLocaleString()} 
          subtext="Qualified for Bonus" 
          delay="200ms" 
          theme="blue"
          icon="📊"
        />
        <StatCard 
          label="Active Team" 
          value="12" 
          subtext="3 New Recruits" 
          delay="300ms" 
          theme="emerald"
          icon="👥"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {/* Main Column */}
         <div className="lg:col-span-2 space-y-8">
            
            {/* Royal Seals Section (Display Case) */}
            <div className="relative bg-[#080808] p-8 rounded-xl border border-slate-800 shadow-[inset_0_0_40px_rgba(0,0,0,0.8)]">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-felt.png')] opacity-30"></div>
                
                <div className="relative z-10">
                    <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                        <h3 className="text-xl font-bold flex items-center text-gold-100 font-serif">
                            <span className="text-2xl mr-3">🎖️</span>
                            Royal Seals & Achievements
                        </h3>
                        <span className="text-[10px] bg-gold-900/30 text-gold-400 border border-gold-500/30 px-3 py-1 rounded-full uppercase tracking-widest">{completedPhases.length} / {ASCENSION_PATH.length} UNLOCKED</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                        {ASCENSION_PATH.map((phase) => (
                            <MiniSeal key={phase.id} name={phase.sealName} active={phase.status === 'completed'} color={phase.sealName.includes('Access') ? 'green' : 'gold'} />
                        ))}
                        {/* Placeholder slots for aesthetics */}
                        {[1,2].map((i) => (
                             <div key={i} className="w-20 h-20 rounded-full border-2 border-dashed border-slate-800 bg-transparent opacity-20"></div>
                        ))}
                    </div>

                    <div className="mt-8 text-center">
                        <button 
                            onClick={() => navigate('/curriculum')}
                            className="text-xs text-gold-500 hover:text-white uppercase font-bold tracking-[0.2em] transition-colors border-b border-transparent hover:border-white pb-1"
                        >
                            Continue Ascension Path →
                        </button>
                    </div>
                </div>
            </div>

            {/* News Feed */}
            <div className="glass-panel p-8 rounded-xl border-l-4 border-gold-500 bg-gradient-to-r from-slate-900 to-black">
                <h3 className="text-xl font-bold mb-6 flex items-center text-white font-serif">
                    <span className="w-2 h-2 bg-gold-500 rounded-full mr-3 animate-pulse"></span>
                    Club Announcements
                </h3>
                <div className="space-y-6">
                    <div className="group cursor-pointer">
                        <div className="flex justify-between items-start mb-1">
                             <p className="font-bold text-white group-hover:text-gold-400 transition-colors">New "Status Correction" Module Released</p>
                             <span className="text-[10px] text-slate-500 border border-slate-700 px-2 rounded">NEW</span>
                        </div>
                        <p className="text-sm text-slate-400">The advanced L.A.W. curriculum has been updated with new templates for territorial jurisdiction affidavits.</p>
                    </div>
                    <div className="w-full h-px bg-slate-800"></div>
                    <div className="group cursor-pointer">
                        <div className="flex justify-between items-start mb-1">
                             <p className="font-bold text-white group-hover:text-gold-400 transition-colors">Weekend Mastermind: Asset Protection</p>
                             <span className="text-[10px] text-slate-500 border border-slate-700 px-2 rounded">EVENT</span>
                        </div>
                        <p className="text-sm text-slate-400">Join the Executive Directors this Saturday for a deep dive into Spendthrift Trusts.</p>
                    </div>
                </div>
            </div>
         </div>

         {/* Side Column */}
         <div className="space-y-8">
            {/* Quick Actions */}
            <div className="glass-panel p-6 rounded-xl border-t-4 border-blue-600">
                <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-wider">Quick Actions</h3>
                <div className="grid grid-cols-1 gap-3">
                    {[
                        { label: 'Copy Invite Link', sub: 'Grow your network', icon: '🔗', action: handleCopyInvite, color: 'text-blue-400' },
                        { label: 'Access Wallet', sub: 'View commissions', icon: '💳', action: () => navigate('/wallet'), color: 'text-green-400' },
                        { label: 'Download Forms', sub: 'L.A.W. Templates', icon: '📂', action: () => navigate('/resources'), color: 'text-gold-400' },
                        { label: 'Concierge Support', sub: 'Get help', icon: '🛎️', action: () => navigate('/contact-support'), color: 'text-purple-400' },
                    ].map((item, idx) => (
                        <button 
                            key={idx}
                            onClick={item.action}
                            className="bg-slate-900/50 hover:bg-slate-800 p-4 rounded-lg text-left transition-all border border-slate-800 hover:border-slate-600 flex items-center justify-between group hover:shadow-lg"
                        >
                            <div className="flex items-center gap-4">
                                <div className={`text-xl ${item.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform`}>{item.icon}</div>
                                <div>
                                    <p className="text-slate-200 font-bold text-sm group-hover:text-white">{item.label}</p>
                                    <p className="text-[10px] text-slate-500">{item.sub}</p>
                                </div>
                            </div>
                            <span className="text-slate-600 group-hover:text-white transition-colors">→</span>
                        </button>
                    ))}
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Dashboard;