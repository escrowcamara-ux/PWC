import React, { useState } from 'react';
import { CURRENT_USER, USER_MINISTRY, PASSPORT_STAMPS, USER_CERTIFICATES } from '../constants';
import { PassportStamp, Certificate } from '../types';
import DigitalCertificate from '../components/DigitalCertificate';

const Stamp: React.FC<{ stamp: PassportStamp }> = ({ stamp }) => {
    const inkColors: Record<string, string> = {
        red: 'text-red-500 border-red-500',
        blue: 'text-blue-500 border-blue-500',
        green: 'text-green-500 border-green-500',
        gold: 'text-yellow-500 border-yellow-500',
    };

    const colorClass = inkColors[stamp.color] || 'text-slate-500 border-slate-500';

    if (stamp.isLocked) {
        return (
            <div className="w-24 h-24 border-2 border-dashed border-slate-700 rounded-full flex flex-col items-center justify-center p-2 opacity-30 grayscale" title="Locked">
                <span className="text-2xl mb-1">{stamp.icon}</span>
                <span className="text-[8px] uppercase text-center text-slate-500">{stamp.label}</span>
                <div className="mt-1">🔒</div>
            </div>
        );
    }

    return (
        <div className={`w-24 h-24 border-4 ${colorClass} rounded-full flex flex-col items-center justify-center p-2 relative group transform rotate-[-8deg] hover:rotate-0 transition-all duration-300 bg-slate-900/50 shadow-xl`}>
             <div className="absolute inset-0 rounded-full border border-dashed border-white/10"></div>
             <span className="text-2xl mb-1 drop-shadow-lg">{stamp.icon}</span>
             <span className={`text-[8px] uppercase text-center font-bold tracking-widest`}>{stamp.label}</span>
             <span className="text-[8px] font-mono mt-1 opacity-70">{stamp.dateAcquired}</span>
        </div>
    );
};

const Profile: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <div className="max-w-6xl mx-auto animate-fade-in pb-12">
      {selectedCert && (
        <DigitalCertificate cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}

      {/* Hero Header */}
      <div className="glass-panel p-8 rounded-2xl border border-gold-500/30 mb-8 relative overflow-hidden bg-gradient-to-br from-slate-900 via-black to-slate-900">
          <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none">
              <svg className="w-80 h-80 text-gold-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2zm0-6h2v4h-2z"/></svg>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-10 relative z-10">
              <div className="relative">
                  <div className="w-40 h-40 rounded-full p-1.5 bg-gradient-to-br from-gold-400 via-gold-200 to-gold-700 shadow-[0_0_30px_rgba(220,182,61,0.4)]">
                      <img src={CURRENT_USER.avatarUrl} alt={CURRENT_USER.name} className="w-full h-full rounded-full object-cover border-4 border-black" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-black rounded-full flex items-center justify-center border-2 border-gold-500 shadow-2xl" title={CURRENT_USER.rank}>
                      <span className="text-2xl">👑</span>
                  </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
                      <h1 className="text-5xl font-serif text-white font-bold tracking-tight">{CURRENT_USER.name}</h1>
                      <div className="px-4 py-1.5 bg-gold-600 text-black text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-xl border border-gold-400">
                          {CURRENT_USER.rank}
                      </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-12 text-sm text-slate-300 mb-8 border-t border-white/5 pt-6">
                      <div className="flex items-center gap-3">
                          <span className="text-slate-500 uppercase text-[10px] tracking-widest font-bold">Trustee ID:</span>
                          <span className="font-mono text-gold-400 text-base">{CURRENT_USER.id.toUpperCase()}-ROYAL</span>
                      </div>
                      <div className="flex items-center gap-3">
                          <span className="text-slate-500 uppercase text-[10px] tracking-widest font-bold">Inception:</span>
                          <span className="font-mono text-white text-base">{CURRENT_USER.joinDate}</span>
                      </div>
                      <div className="flex items-center gap-3">
                          <span className="text-slate-500 uppercase text-[10px] tracking-widest font-bold">Affiliation:</span>
                          <span className="text-white font-bold">Private Wealth Club</span>
                      </div>
                      <div className="flex items-center gap-3">
                          <span className="text-slate-500 uppercase text-[10px] tracking-widest font-bold">Standing:</span>
                          <span className="text-green-400 font-bold flex items-center gap-2">● Good Standing <span className="animate-pulse">✓</span></span>
                      </div>
                  </div>

                  <div className="p-6 bg-black/40 rounded-xl border border-gold-500/20 shadow-inner group transition-all hover:bg-black/60">
                      <p className="text-[10px] text-gold-500 uppercase tracking-[0.3em] font-bold mb-2">Authenticated Ministry / Private Trust</p>
                      <h2 className="text-2xl font-serif text-white font-bold group-hover:text-gold-100 transition-colors">{USER_MINISTRY.name}</h2>
                      <div className="flex gap-6 text-xs text-slate-400 mt-3 font-mono">
                          <span>Position: {USER_MINISTRY.title}</span>
                          <span>Reg ID: **-***{USER_MINISTRY.einSuffix.split('-')[1]}</span>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* PASSPORT STAMPS */}
          <div className="glass-panel p-8 rounded-2xl border border-slate-800 shadow-2xl relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-500/50 to-transparent"></div>
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                  <h3 className="text-2xl font-serif text-white font-bold">Sovereign Passport</h3>
                  <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Royal Registry Entries</span>
              </div>
              
              <div className="grid grid-cols-3 gap-8 justify-items-center py-4">
                  {PASSPORT_STAMPS.map(stamp => (
                      <Stamp key={stamp.id} stamp={stamp} />
                  ))}
              </div>
              
              <div className="mt-10 text-center">
                  <div className="inline-block px-6 py-2 rounded-lg bg-black/40 border border-slate-800 text-[10px] text-slate-500 italic uppercase tracking-widest">
                      Verified by the High Court of Equity
                  </div>
              </div>
          </div>

          {/* CERTIFICATES */}
          <div className="glass-panel p-8 rounded-2xl border border-slate-800 shadow-2xl">
              <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                  <h3 className="text-2xl font-serif text-white font-bold">Verified Certificates</h3>
                  <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold">Ledger-Backed Assets</span>
              </div>

              <div className="space-y-4">
                  {USER_CERTIFICATES.map(cert => (
                      <div 
                          key={cert.id}
                          onClick={() => setSelectedCert(cert)}
                          className="group relative p-5 bg-black/40 border border-slate-800 hover:border-gold-500/50 rounded-xl cursor-pointer transition-all duration-300 overflow-hidden"
                      >
                          <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gold-600 group-hover:bg-gold-400 transition-colors"></div>
                          <div className="absolute inset-0 bg-gold-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          
                          <div className="flex justify-between items-center relative z-10">
                              <div>
                                  <h4 className="text-white font-bold text-lg group-hover:text-gold-200 transition-colors font-serif">{cert.title}</h4>
                                  <p className="text-[10px] text-slate-500 font-mono mt-1 tracking-widest">SRL: {cert.serialNumber}</p>
                              </div>
                              <div className="text-right">
                                  <span className="block text-[9px] uppercase text-slate-500 tracking-widest font-bold">Date of Issue</span>
                                  <span className="block text-sm text-gold-400 font-mono">{cert.issueDate}</span>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>

              <div className="mt-8 p-5 bg-gradient-to-r from-slate-900 to-black rounded-xl border border-slate-700 flex items-start gap-4">
                  <div className="text-3xl filter drop-shadow-[0_0_8px_rgba(220,182,61,0.5)]">🏛️</div>
                  <div>
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">Private Ledger Verification</h4>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed font-light">
                          All digital instruments displayed here are cryptographically hashed and recorded on the Private Wealth Club ledger. These stand as evidence of your standing and authority in the private domain.
                      </p>
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Profile;