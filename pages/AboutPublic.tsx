

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TEAM_MEMBERS } from '../constants';

const AboutPublic: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-y-auto">
        {/* Hero */}
        <div className="relative bg-black py-20 px-4 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-50"></div>
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px]"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-gold-gradient mb-6">The Private Wealth Club</h1>
                <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
                    We are a premier network for personal development, financial literacy, and asset protection. 
                    From "Agent Smith to Neo", we guide you from systemic dependency to sovereign freedom.
                </p>
                <button 
                    onClick={() => navigate('/login')}
                    className="px-8 py-3 bg-gold-600 hover:bg-gold-500 text-black font-bold uppercase tracking-widest rounded-lg transition-all transform hover:scale-105"
                >
                    Member Login
                </button>
            </div>
        </div>

        {/* Purpose */}
        <div className="py-20 px-4 bg-slate-900">
            <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-serif text-white mb-6 border-l-4 border-gold-500 pl-4">Our Purpose</h2>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            The Private Wealth Club exists to solve a singular problem: The lack of true ownership in modern society.
                            Most individuals are "bound" by L.A.W. (Land, Air, Water) jurisdictions without their consent.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            Our mission is to provide the knowledge, structure, and community required to execute 
                            <span className="text-gold-400 font-bold"> Status Correction</span>, establish 
                            <span className="text-gold-400 font-bold"> Private Trusts</span>, and leverage 
                            <span className="text-gold-400 font-bold"> Corporate Credit</span> to build generational wealth.
                        </p>
                    </div>
                    <div className="glass-panel p-8 rounded-xl border border-slate-700">
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gold-600/20 text-gold-500 rounded-full flex items-center justify-center font-bold">1</div>
                                <span className="text-white font-medium">Corporate Development & Credit</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gold-600/20 text-gold-500 rounded-full flex items-center justify-center font-bold">2</div>
                                <span className="text-white font-medium">Asset Protection & Trusts</span>
                            </li>
                            <li className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gold-600/20 text-gold-500 rounded-full flex items-center justify-center font-bold">3</div>
                                <span className="text-white font-medium">Estate Planning & Status Correction</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* Team */}
        <div className="py-20 px-4 bg-black/50">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-serif text-white mb-12">Leadership</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TEAM_MEMBERS.map((member, idx) => (
                        <div key={idx} className="glass-panel p-6 rounded-xl hover:border-gold-500/30 transition-all">
                            <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-2 border-gold-500" />
                            <h3 className="text-xl font-bold text-white">{member.name}</h3>
                            <p className="text-gold-400 text-xs uppercase tracking-widest mb-4">{member.role}</p>
                            <p className="text-slate-400 text-sm">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Opportunities */}
        <div className="py-20 px-4 bg-gradient-to-b from-slate-900 to-black">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-serif text-white mb-8 text-center">The Opportunity</h2>
                
                <div className="text-slate-300 space-y-8 leading-relaxed mb-12 bg-slate-900/50 p-8 rounded-xl border border-slate-700">
                    <p className="text-lg">
                        The Private Wealth Club provides a once-in-a-generation opportunity to transition from dependence to sovereignty. 
                        Members gain access to tools, systems, and strategies normally reserved for institutions, private banks, and high-net-worth individuals.
                    </p>
                    <p className="font-bold text-white">Our opportunity includes:</p>
                    
                    <div className="space-y-8 mt-6">
                        <div>
                            <h4 className="text-gold-400 font-bold text-lg mb-2">🔹 1. Education That Rewrites Your Financial DNA</h4>
                            <p className="text-sm text-slate-400">Most people were never taught the mechanics of wealth — how credit works at the institutional level, how trusts control assets, how capital is raised, or how the system monetizes identity. We give you the actual blueprint, step-by-step.</p>
                        </div>
                        
                        <div>
                            <h4 className="text-gold-400 font-bold text-lg mb-2">🔹 2. Access to Capital & Funding Strategies</h4>
                            <p className="text-sm text-slate-400 mb-2">Members learn how to:</p>
                            <ul className="list-disc pl-6 space-y-1 text-sm text-slate-500">
                                <li>Build strong business credit profiles</li>
                                <li>Leverage trust structures</li>
                                <li>Access banks, lenders, fintech, and private capital</li>
                                <li>Use credit as a tool to multiply opportunities</li>
                                <li>Prepare for large-scale funding (six to seven figures)</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-gold-400 font-bold text-lg mb-2">🔹 3. Trust-Based Wealth Architecture</h4>
                            <p className="text-sm text-slate-400">We help members begin structuring their private family trust, asset protection layers, and early-stage estate planning — the exact structures used by elite families and private business networks.</p>
                        </div>

                        <div>
                            <h4 className="text-gold-400 font-bold text-lg mb-2">🔹 4. Private Community & High-Level Leadership</h4>
                            <p className="text-sm text-slate-400">Our members gain direct access to a vetted inner circle of high-performance individuals focused on wealth building, purpose fulfillment, and generational legacy.</p>
                        </div>

                        <div>
                            <h4 className="text-gold-400 font-bold text-lg mb-2">🔹 5. Real Implementation, Not Just Theory</h4>
                            <p className="text-sm text-slate-400 mb-2">Weekly sessions, tools, guides, and tailored strategies ensure each member is supported in building:</p>
                            <ul className="list-disc pl-6 space-y-1 text-sm text-slate-500">
                                <li>Cashflow systems</li>
                                <li>Funding opportunities</li>
                                <li>Credit restoration</li>
                                <li>Business development</li>
                                <li>Asset acquisition</li>
                                <li>Trust portfolios</li>
                            </ul>
                        </div>
                    </div>

                    <p className="text-white font-serif italic text-xl text-center mt-8 pt-8 border-t border-slate-700">
                        "This is not just an 'education.' It is an entry into an entirely different financial class."
                    </p>
                </div>

                <div className="text-center">
                    <button 
                        onClick={() => navigate('/login')}
                        className="text-white hover:text-gold-400 underline decoration-gold-500 decoration-2 underline-offset-4 transition-all"
                    >
                        Return to Login
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AboutPublic;