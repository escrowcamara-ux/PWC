
import React from 'react';
import { CURRENT_USER } from '../constants';

const PowerMetric = ({ label, value, sub, icon, trend }: { label: string; value: string; sub: string; icon: string; trend?: 'up' | 'down' | 'neutral' }) => (
    <div className="glass-panel p-6 rounded-xl border border-slate-700 relative overflow-hidden group hover:border-gold-500/30 transition-all">
        <div className="absolute top-0 right-0 p-4 opacity-10 text-4xl group-hover:scale-110 transition-transform">{icon}</div>
        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-2">{label}</p>
        <h3 className="text-3xl font-serif text-white font-bold mb-1">{value}</h3>
        <div className="flex items-center gap-2">
            <span className={`text-xs ${trend === 'up' ? 'text-green-400' : 'text-slate-500'}`}>{sub}</span>
        </div>
    </div>
);

const PrivateBanker: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in pb-12">
        <div className="mb-10">
            <h1 className="text-4xl font-serif text-white mb-2">Private Banker Dashboard</h1>
            <p className="text-xl text-slate-400">
                Visualizing the power of your Private Estate and Trust Governance.
            </p>
        </div>

        {/* Primary Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <PowerMetric 
                label="Trust Units Authorized" 
                value="1,000,000" 
                sub="100% Controlled" 
                icon="🏛️"
                trend="neutral"
            />
            <PowerMetric 
                label="Assets in Schedule A" 
                value="$1,250,000" 
                sub="+15% this quarter" 
                icon="💎"
                trend="up"
            />
             <PowerMetric 
                label="Promissory Notes Issued" 
                value="$250,000" 
                sub="Internal Credit Creation" 
                icon="📜"
                trend="up"
            />
            <PowerMetric 
                label="Club Rank" 
                value={CURRENT_USER.rank} 
                sub="Next: EXECUTIVE" 
                icon="🎖️"
                trend="up"
            />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Capital Access Score */}
            <div className="lg:col-span-1 glass-panel p-8 rounded-xl flex flex-col items-center justify-center text-center border-t-4 border-gold-500">
                <h3 className="text-slate-400 font-bold uppercase text-xs mb-6 tracking-widest">Capital Access Score</h3>
                <div className="relative w-48 h-48 flex items-center justify-center mb-6">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle cx="96" cy="96" r="88" fill="none" stroke="#1e293b" strokeWidth="12" />
                        <circle cx="96" cy="96" r="88" fill="none" stroke="#dcb63d" strokeWidth="12" strokeDasharray="553" strokeDashoffset="55" className="animate-[dash_1.5s_ease-out_forwards]" />
                    </svg>
                    <div className="absolute flex flex-col items-center">
                        <span className="text-5xl font-bold text-white font-serif">92</span>
                        <span className="text-xs text-gold-400 uppercase font-bold">Excellent</span>
                    </div>
                </div>
                <p className="text-sm text-slate-400 px-4">
                    Your structure is highly optimized for institutional funding.
                </p>
            </div>

            {/* Donation to Equity Ratio */}
            <div className="lg:col-span-2 glass-panel p-8 rounded-xl border border-slate-700">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-white font-bold">Donation-to-Equity Ratio</h3>
                    <button className="text-xs text-gold-400 border border-gold-500/30 px-3 py-1 rounded hover:bg-gold-500/10">View Ledger</button>
                </div>
                
                {/* Simulated Graph Area */}
                <div className="h-48 flex items-end justify-between gap-2 px-4 pb-4 border-b border-slate-700 mb-4">
                    {[30, 45, 35, 60, 55, 75, 80].map((h, i) => (
                        <div key={i} className="w-full bg-slate-800 hover:bg-gold-600/50 transition-colors rounded-t relative group" style={{ height: `${h}%` }}>
                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                {h}%
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="flex justify-between text-xs text-slate-400">
                    <p>Metric tracks trust endowment vs. equity positions held.</p>
                    <p className="text-green-400 font-bold">Healthy Ratio</p>
                </div>
            </div>
        </div>

        {/* Outstanding Obligations */}
        <div className="glass-panel p-8 rounded-xl border border-slate-700">
            <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                Outstanding Obligations Transferred
                <span className="bg-green-900/30 text-green-400 text-[10px] px-2 py-0.5 rounded uppercase">Liability Removed</span>
            </h3>
            
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-300">
                    <thead className="bg-slate-900/50 text-slate-500 uppercase text-xs font-bold">
                        <tr>
                            <th className="p-4">Obligation Type</th>
                            <th className="p-4">Creditor</th>
                            <th className="p-4">Amount</th>
                            <th className="p-4">Status</th>
                            <th className="p-4">Resolution</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800">
                        <tr>
                            <td className="p-4 font-bold text-white">Auto Loan (Range Rover)</td>
                            <td className="p-4">Chase Auto</td>
                            <td className="p-4">$82,400</td>
                            <td className="p-4"><span className="text-blue-400">Transferred to Trust</span></td>
                            <td className="p-4">Assign of Liability</td>
                        </tr>
                        <tr>
                            <td className="p-4 font-bold text-white">Personal Credit Card</td>
                            <td className="p-4">Amex Platinum</td>
                            <td className="p-4">$14,250</td>
                            <td className="p-4"><span className="text-green-400">Discharged</span></td>
                            <td className="p-4">Admin Process</td>
                        </tr>
                         <tr>
                            <td className="p-4 font-bold text-white">Mortgage (Primary)</td>
                            <td className="p-4">Wells Fargo</td>
                            <td className="p-4">$450,000</td>
                            <td className="p-4"><span className="text-gold-400">In Process</span></td>
                            <td className="p-4">Equity Redemption</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className="mt-8 text-center">
            <p className="text-slate-500 text-xs uppercase tracking-widest">
                Data verified by the House of Rama Blockchain Ledger
            </p>
        </div>
    </div>
  );
};

export default PrivateBanker;
