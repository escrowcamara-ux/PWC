import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { DashboardIcon, NetworkIcon, EducationIcon, PlayIcon, PhoneIcon, UserIcon, TeamIcon, DocumentIcon, MoneyIcon, LockIcon, BroadcastIcon, BankerIcon, KeyIcon } from './Icons';
import { UserProfile } from '../types';
import AIAdvisor from './AIAdvisor';

interface LayoutProps {
  children: React.ReactNode;
  user: UserProfile;
  onLogout: () => void;
}

const QUOTES = [
  "True sovereignty is the mastery of one's own jurisdiction.",
  "Wealth is not just currency; it is the capacity to act.",
  "A King does not ask for permission; he declares his standing.",
  "Trust is the vessel; Equity is the water that fills it.",
  "Own nothing, control everything. This is the law of kings.",
];

const NavItem = ({ to, icon, label, active, extraClasses }: { to: string; icon: React.ReactNode; label: string; active: boolean; extraClasses?: string }) => (
  <Link
    to={to}
    className={`group flex items-center space-x-3 px-4 py-3 border-l-2 transition-all duration-300 relative overflow-hidden ${
      active
        ? 'border-gold-500 bg-gradient-to-r from-gold-900/40 to-transparent text-white'
        : 'border-transparent text-slate-400 hover:bg-slate-800/40 hover:text-gold-200 hover:border-gold-500/30'
    } ${extraClasses}`}
  >
    {active && <div className="absolute inset-0 bg-gold-500/5 animate-pulse"></div>}
    <div className={`w-5 h-5 relative z-10 transition-transform group-hover:scale-110 ${active ? 'text-gold-500 drop-shadow-[0_0_8px_rgba(220,182,61,0.8)]' : 'group-hover:text-gold-400'}`}>{icon}</div>
    <span className={`font-medium text-sm relative z-10 tracking-wide ${active ? 'font-bold text-white' : ''}`}>{label}</span>
  </Link>
);

const Layout: React.FC<LayoutProps> = ({ children, user, onLogout }) => {
  const location = useLocation();
  const [quote, setQuote] = useState(QUOTES[0]);

  useEffect(() => {
    setQuote(QUOTES[Math.floor(Math.random() * QUOTES.length)]);
  }, []);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#050505] text-white overflow-hidden font-sans">
      {/* Sidebar */}
      <aside className="w-full md:w-72 bg-[#0a0a0a] border-r border-slate-800/50 flex flex-col h-screen sticky top-0 z-50 shadow-[5px_0_30px_rgba(0,0,0,0.5)]">
        {/* Logo Container */}
        <div className="bg-black/40 p-6 border-b border-gold-900/30 relative overflow-hidden group flex items-center justify-center min-h-[120px]">
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
             
             <div className="relative z-10 flex flex-col items-center cursor-pointer transform transition-transform duration-500 hover:scale-105" onClick={() => window.location.href = '#/'}>
                <div className="absolute inset-0 bg-gold-500/20 blur-[40px] rounded-full"></div>
                
                <svg width="180" height="70" viewBox="0 0 220 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-2xl relative z-10">
                    <defs>
                        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#dcb63d" />
                            <stop offset="50%" stopColor="#f5ecbf" />
                            <stop offset="100%" stopColor="#bd922a" />
                        </linearGradient>
                        <filter id="logo-glow">
                            <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
                            <feMerge>
                                <feMergeNode in="coloredBlur"/>
                                <feMergeNode in="SourceGraphic"/>
                            </feMerge>
                        </filter>
                    </defs>
                    <g transform="translate(110, 28) scale(0.85)">
                        <path d="M0 0 C -25 -35, -80 -35, -80 0 C -80 35, -25 35, 0 0" stroke="white" strokeWidth="6" fill="none" strokeLinecap="round" filter="url(#logo-glow)" />
                        <path d="M0 0 C 25 35, 80 35, 80 0 C 80 -35, 25 -35, 0 0" stroke="url(#gold)" strokeWidth="6" fill="none" strokeLinecap="round" filter="url(#logo-glow)" />
                    </g>
                    <text x="110" y="62" textAnchor="middle" fill="white" fontFamily="serif" fontSize="14" fontWeight="bold" letterSpacing="1" style={{textShadow: '0 2px 4px rgba(0,0,0,0.8)'}}>PRIVATE WEALTH</text>
                    <text x="110" y="76" textAnchor="middle" fill="#dcb63d" fontFamily="serif" fontSize="10" fontWeight="bold" letterSpacing="4" style={{textShadow: '0 0 10px rgba(220,182,61,0.5)'}}>CLUB</text>
                </svg>
             </div>
        </div>

        <nav className="flex-1 py-4 overflow-y-auto bg-black/20 scrollbar-thin scrollbar-thumb-slate-800 scrollbar-track-transparent">
          <NavItem to="/" icon={<DashboardIcon />} label="Dashboard" active={location.pathname === '/'} />
          <NavItem to="/royal-signal" icon={<BroadcastIcon />} label="Royal Signal" active={location.pathname === '/royal-signal'} extraClasses="text-gold-200" />
          <NavItem to="/rituals" icon={<div className="text-xl">🕯️</div>} label="Ritual Chamber" active={location.pathname === '/rituals'} extraClasses="text-purple-300" />
          <NavItem to="/resources" icon={<DocumentIcon />} label="Resources" active={location.pathname === '/resources'} />
          <NavItem to="/trusts-protection" icon={<LockIcon />} label="Trusts & Protection" active={location.pathname === '/trusts-protection'} />
          <NavItem to="/wallet" icon={<MoneyIcon />} label="Wallet" active={location.pathname === '/wallet'} />
          <NavItem to="/curriculum" icon={<EducationIcon />} label="Curriculum" active={location.pathname === '/curriculum'} />
          <NavItem to="/private-banker" icon={<BankerIcon />} label="Private Banker" active={location.pathname === '/private-banker'} />
          <NavItem to="/compensation-plan" icon={<NetworkIcon />} label="Compensation" active={location.pathname === '/compensation-plan'} />
          <NavItem to="/team" icon={<TeamIcon />} label="My Team" active={location.pathname === '/team'} />
          <NavItem to="/contact-support" icon={<PhoneIcon />} label="Support" active={location.pathname === '/contact-support'} />
          <NavItem to="/inner-sanctum" icon={<KeyIcon />} label="Inner Sanctum" active={location.pathname === '/inner-sanctum'} extraClasses="mt-4 border-t border-slate-800 bg-gradient-to-r from-purple-900/20 to-transparent text-purple-400" />
          
          <div className="my-2 border-t border-slate-800/50 mx-4"></div>
          <NavItem to="/presentation" icon={<PlayIcon />} label="Presentation" active={location.pathname === '/presentation'} />
        </nav>

        {/* Footer Stats/Quote */}
        <div className="px-6 py-4 bg-black/60 border-t border-slate-800 relative overflow-hidden">
            <p className="text-[10px] text-gold-500 uppercase font-bold mb-1 tracking-widest">👑 Royal Wisdom</p>
            <p className="text-xs text-slate-400 italic leading-snug font-serif opacity-80">"{quote}"</p>
        </div>

        {/* Profile/Account Section */}
        <div className="bg-gradient-to-r from-blue-900/80 to-blue-800/80 p-4 relative group cursor-pointer hover:from-blue-800 transition-all border-t border-blue-600/30">
            <Link to="/profile" className="flex items-center space-x-3 relative z-10">
                <div className="p-1 rounded-full border border-blue-400/50">
                    <UserIcon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                   <span className="text-white font-bold text-sm block tracking-wide">My Profile</span>
                   <span className="text-[10px] text-blue-200 uppercase tracking-wider">{user.rank}</span>
                </div>
            </Link>
             <button onClick={onLogout} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20">
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
             </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-screen overflow-y-auto bg-black relative scrollbar-thin scrollbar-thumb-gold-600/30 scrollbar-track-black">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none fixed"></div>
        
        {/* Main Viewport Container */}
        <div className="relative z-10 p-4 md:p-8 max-w-7xl mx-auto">
            {children}
        </div>
        
        <AIAdvisor />
      </main>
    </div>
  );
};

export default Layout;