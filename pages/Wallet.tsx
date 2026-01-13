import React, { useState } from 'react';
import { CURRENT_USER } from '../constants';

const Wallet: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'overview'|'settings'>('overview');
    
    return (
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
            <div className="flex justify-between items-end">
                <div>
                    <h2 className="text-3xl font-serif text-white">My Wallet</h2>
                    <p className="text-slate-400">Manage your earnings, withdrawals, and payment methods.</p>
                </div>
                <div className="flex bg-slate-800 rounded p-1">
                    <button 
                        onClick={() => setActiveTab('overview')}
                        className={`px-4 py-1 rounded text-sm transition-all ${activeTab === 'overview' ? 'bg-gold-600 text-black font-bold' : 'text-slate-400 hover:text-white'}`}
                    >
                        Overview
                    </button>
                    <button 
                         onClick={() => setActiveTab('settings')}
                         className={`px-4 py-1 rounded text-sm transition-all ${activeTab === 'settings' ? 'bg-gold-600 text-black font-bold' : 'text-slate-400 hover:text-white'}`}
                    >
                        Payment Settings
                    </button>
                </div>
            </div>

            {activeTab === 'overview' ? (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="glass-panel p-8 rounded-xl bg-gradient-to-br from-gold-600 to-gold-800 text-black">
                            <p className="text-sm font-bold uppercase opacity-70 mb-1">Available Balance</p>
                            <h3 className="text-4xl font-serif font-bold mb-6">$12,450.00</h3>
                            <button className="w-full bg-black/20 hover:bg-black/30 text-black font-bold py-2 rounded border border-black/10 transition-colors">
                                Withdraw Funds
                            </button>
                        </div>
                        <div className="glass-panel p-8 rounded-xl">
                            <p className="text-slate-400 text-sm font-bold uppercase mb-1">Total Earned (YTD)</p>
                            <h3 className="text-4xl font-serif font-bold text-white mb-6">${CURRENT_USER.totalEarnings.toLocaleString()}</h3>
                            <div className="flex justify-between text-xs text-slate-400 border-t border-slate-700 pt-4">
                                <span>Pending: $1,200</span>
                                <span>Next Payout: Friday</span>
                            </div>
                        </div>
                        <div className="glass-panel p-8 rounded-xl border border-dashed border-slate-600 flex flex-col items-center justify-center text-center hover:bg-slate-800/50 transition-colors cursor-pointer">
                            <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center mb-4 text-gold-400 text-2xl">+</div>
                            <h3 className="text-white font-bold">Add Payout Method</h3>
                            <p className="text-slate-400 text-sm mt-2">Bank Account or Crypto Wallet</p>
                        </div>
                    </div>

                    <div className="glass-panel p-6 rounded-xl">
                        <h3 className="text-xl font-bold text-white mb-6">Recent Transactions</h3>
                        <div className="space-y-4">
                            {[1,2,3,4,5].map((i) => (
                                <div key={i} className="flex justify-between items-center py-3 border-b border-slate-700 last:border-0">
                                    <div className="flex items-center gap-4">
                                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i%2===0 ? 'bg-green-900/30 text-green-400' : 'bg-blue-900/30 text-blue-400'}`}>
                                            {i%2===0 ? '↑' : '↓'}
                                        </div>
                                        <div>
                                            <p className="text-white font-medium">{i%2===0 ? 'Weekly Commission Payout' : 'Course Material Purchase'}</p>
                                            <p className="text-xs text-slate-500">Nov {10+i}, 2024</p>
                                        </div>
                                    </div>
                                    <span className={`font-bold ${i%2===0 ? 'text-green-400' : 'text-white'}`}>
                                        {i%2===0 ? '+$1,500.00' : '-$250.00'}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <div className="glass-panel p-8 rounded-xl max-w-2xl mx-auto">
                    <h3 className="text-xl font-bold text-white mb-6">Payment Configuration</h3>
                    <form className="space-y-6">
                        <div>
                            <label className="block text-xs uppercase text-slate-400 mb-2">Direct Deposit (ACH)</label>
                            <div className="flex items-center gap-4 bg-slate-900 p-4 rounded border border-slate-700">
                                <div className="bg-slate-800 p-2 rounded text-white font-serif">Chase</div>
                                <div className="flex-grow">
                                    <p className="text-white text-sm">Checking ****4582</p>
                                    <p className="text-xs text-green-400">Active</p>
                                </div>
                                <button type="button" className="text-slate-400 hover:text-white text-sm">Edit</button>
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-xs uppercase text-slate-400 mb-2">Crypto Payout (USDT/BTC)</label>
                            <input type="text" placeholder="Enter Wallet Address" className="w-full bg-slate-900 border border-slate-600 rounded p-3 text-white focus:border-gold-500 outline-none" />
                        </div>

                        <button type="button" className="bg-gold-600 text-black px-6 py-2 rounded font-bold uppercase tracking-wider hover:bg-gold-500">
                            Save Changes
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Wallet;