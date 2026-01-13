

import React from 'react';
import { NETWORK_TREE, UPLINE_USER } from '../constants';
import NetworkTreeNode from '../components/NetworkTree';

const Team: React.FC = () => {
  return (
    <div className="space-y-8 animate-fade-in">
         <div className="mb-6">
            <h2 className="text-3xl font-serif text-white mb-2">My Team</h2>
            <p className="text-slate-400">Visualize your genealogy and connect with your leadership.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6">
            {/* Upline Section */}
            <section className="md:w-1/3 glass-panel p-6 rounded-xl border-l-4 border-gold-500">
                <h3 className="text-slate-400 text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-gold-500 rounded-full"></span>
                    Your Sponsor (Upline)
                </h3>
                <div className="flex items-center space-x-4">
                    <div className="relative">
                            <img src={UPLINE_USER.avatarUrl} alt="Upline" className="w-16 h-16 rounded-full border-2 border-gold-400" />
                            <span className="absolute -bottom-1 -right-1 bg-gold-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full border border-black">
                            {UPLINE_USER.rank}
                            </span>
                    </div>
                    <div>
                        <h4 className="text-xl font-bold text-white">{UPLINE_USER.name}</h4>
                        <div className="flex flex-col text-xs text-slate-300 mt-1">
                            <span>Joined: {UPLINE_USER.joinDate}</span>
                            <a 
                                href="https://t.me/+xxj4OSqYe2k2ODQx" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-gold-400 mt-1 cursor-pointer hover:underline flex items-center gap-1 font-bold"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3.082 16.924c-.174 0-.361-.064-.509-.196-.289-.258-.335-.694-.103-1.01l1.696-2.316-2.617-1.107c-.439-.185-.515-.794-.135-1.077l9.539-7.143c.362-.271.867-.066.945.385l1.697 9.877c.073.424-.26.815-.689.815-.113 0-.226-.027-.331-.082l-3.858-2.022-1.748 2.39c-.19.26-.492.409-.813.409-.025 0-.05 0-.074-.002z"/></svg>
                                Direct Message Sponsor
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Stats */}
            <section className="md:w-2/3 glass-panel p-6 rounded-xl flex justify-around items-center">
                    <div className="text-center">
                        <p className="text-3xl font-serif text-white font-bold">{NETWORK_TREE.recruits}</p>
                        <p className="text-xs text-slate-400 uppercase tracking-wider">Personal Recruits</p>
                    </div>
                    <div className="w-px h-12 bg-slate-700"></div>
                    <div className="text-center">
                        <p className="text-3xl font-serif text-white font-bold">{NETWORK_TREE.volume.toLocaleString()}</p>
                        <p className="text-xs text-slate-400 uppercase tracking-wider">Group Volume</p>
                    </div>
                    <div className="w-px h-12 bg-slate-700"></div>
                    <div className="text-center">
                        <p className="text-3xl font-serif text-white font-bold">15</p>
                        <p className="text-xs text-slate-400 uppercase tracking-wider">Total Members</p>
                    </div>
            </section>
        </div>

        {/* Downline Tree Section */}
        <section className="glass-panel p-8 rounded-xl overflow-hidden relative min-h-[600px] border border-slate-700">
            <div className="absolute top-0 left-0 right-0 bg-slate-800/50 p-2 flex justify-between items-center px-4 border-b border-slate-700">
                <h3 className="text-white font-bold text-sm">Visual Genealogy Tree</h3>
                <div className="flex gap-2 text-[10px] text-slate-400">
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gold-500"></span>Executive</span>
                    <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-600"></span>Associate</span>
                </div>
            </div>
            
            <div className="overflow-x-auto flex justify-center items-start pt-12 pb-12 h-full">
                <div className="min-w-max transform scale-90 origin-top">
                    <NetworkTreeNode node={NETWORK_TREE} isRoot={true} />
                </div>
            </div>
        </section>
    </div>
  );
};

export default Team;