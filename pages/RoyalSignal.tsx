
import React from 'react';
import { BroadcastIcon } from '../components/Icons';

const RoyalSignal: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in pb-12">
        {/* Hero Section */}
        <div className="mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
                <h1 className="text-4xl font-serif text-white mb-2 flex items-center gap-3">
                    <span className="text-red-500 animate-pulse">●</span> The Royal Signal
                </h1>
                <p className="text-xl text-slate-400">
                    Live sermons, funding updates, and high-level court remedy classes.
                </p>
            </div>
            <a 
                href="https://t.me/+xxj4OSqYe2k2ODQx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-blue-900/30 transition-all hover:scale-105"
            >
                <BroadcastIcon className="w-5 h-5" />
                Join Live Chat
            </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Live Stream / Featured Video */}
            <div className="lg:col-span-2 space-y-8">
                <div className="bg-black rounded-xl overflow-hidden border border-gold-500/30 shadow-2xl relative aspect-video group">
                     {/* Placeholder for Live Stream */}
                     <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1478720568477-152d9b164e63?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center opacity-40"></div>
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                     
                     <div className="absolute inset-0 flex items-center justify-center">
                         <div className="w-24 h-24 bg-red-600/90 rounded-full flex items-center justify-center pl-2 shadow-[0_0_50px_rgba(220,38,38,0.5)] cursor-pointer hover:scale-110 transition-transform backdrop-blur-sm border border-red-400">
                            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
                        </div>
                     </div>

                     <div className="absolute top-6 left-6 flex gap-3">
                         <span className="bg-red-600 text-white px-3 py-1 rounded text-xs font-bold uppercase animate-pulse">Live Now</span>
                         <span className="bg-black/60 text-white px-3 py-1 rounded text-xs font-bold backdrop-blur">342 Viewing</span>
                     </div>

                     <div className="absolute bottom-0 left-0 right-0 p-8">
                         <h2 className="text-3xl font-bold text-white mb-2">The Architecture of Equity</h2>
                         <p className="text-slate-300">Speaker: Chairman Rothschild • Topic: Moving from Debtor to Creditor Status</p>
                     </div>
                </div>

                {/* Recent Broadcasts */}
                <div>
                    <h3 className="text-xl font-serif text-white mb-6 border-b border-slate-800 pb-2">Recent Transmissions</h3>
                    <div className="space-y-4">
                        {[
                            { title: "Funding Update: The Q4 Capital Flow", date: "2 Days Ago", duration: "45:10", views: "1.2k" },
                            { title: "Court Remedy Class: Filing the Affidavit", date: "5 Days Ago", duration: "1:12:00", views: "3.5k" },
                            { title: "Sermon: The Spirit of the Trust", date: "1 Week Ago", duration: "38:20", views: "980" },
                        ].map((video, idx) => (
                            <div key={idx} className="glass-panel p-4 rounded-lg flex gap-4 hover:bg-slate-800 transition-colors cursor-pointer group">
                                <div className="w-40 h-24 bg-slate-900 rounded border border-slate-700 relative overflow-hidden shrink-0">
                                    <div className="absolute inset-0 bg-gold-500/10 group-hover:bg-gold-500/20 transition-colors"></div>
                                    <div className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 rounded">{video.duration}</div>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-lg group-hover:text-gold-400 transition-colors">{video.title}</h4>
                                    <p className="text-slate-500 text-xs mt-1">{video.date} • {video.views} Views</p>
                                    <span className="inline-block mt-2 text-[10px] uppercase font-bold text-slate-400 border border-slate-600 px-2 py-0.5 rounded">Replay Available</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sidebar / Chat & Resources */}
            <div className="lg:col-span-1 space-y-6">
                <div className="glass-panel p-6 rounded-xl border border-slate-700 bg-gradient-to-b from-slate-900 to-black">
                    <h3 className="text-gold-400 font-bold uppercase tracking-widest text-xs mb-4">Official Channels</h3>
                    
                    <div className="space-y-4">
                        <a href="https://t.me/+xxj4OSqYe2k2ODQx" target="_blank" rel="noopener noreferrer" className="block p-4 bg-[#229ED9]/10 border border-[#229ED9]/30 rounded-lg hover:bg-[#229ED9]/20 transition-colors group">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#229ED9] rounded-full flex items-center justify-center text-white">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.082 16.924c-.174 0-.361-.064-.509-.196-.289-.258-.335-.694-.103-1.01l1.696-2.316-2.617-1.107c-.439-.185-.515-.794-.135-1.077l9.539-7.143c.362-.271.867-.066.945.385l1.697 9.877c.073.424-.26.815-.689.815-.113 0-.226-.027-.331-.082l-3.858-2.022-1.748 2.39c-.19.26-.492.409-.813.409-.025 0-.05 0-.074-.002z"/></svg>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold">Main Telegram</h4>
                                    <p className="text-xs text-[#229ED9]">The Royal Signal</p>
                                </div>
                            </div>
                        </a>

                        <div className="block p-4 bg-slate-800 rounded-lg opacity-60 cursor-not-allowed border border-slate-700">
                             <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-slate-400">
                                    🔒
                                </div>
                                <div>
                                    <h4 className="text-slate-400 font-bold">Inner Circle</h4>
                                    <p className="text-xs text-slate-500">Chairman Only</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-panel p-6 rounded-xl">
                    <h3 className="text-white font-bold mb-4">Upcoming Schedule</h3>
                    <ul className="space-y-4">
                        <li className="flex gap-4">
                            <div className="text-center w-12 shrink-0">
                                <span className="block text-xs text-gold-400 font-bold uppercase">Oct</span>
                                <span className="block text-xl text-white font-bold">24</span>
                            </div>
                            <div>
                                <h4 className="text-slate-200 text-sm font-bold">Member Interview: 0 to 100k</h4>
                                <p className="text-xs text-slate-500">2:00 PM EST</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                             <div className="text-center w-12 shrink-0">
                                <span className="block text-xs text-gold-400 font-bold uppercase">Oct</span>
                                <span className="block text-xl text-white font-bold">28</span>
                            </div>
                            <div>
                                <h4 className="text-slate-200 text-sm font-bold">Estate Planning Workshop</h4>
                                <p className="text-xs text-slate-500">6:00 PM EST</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
};

export default RoyalSignal;
