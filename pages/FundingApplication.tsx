import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FundingApplication: React.FC = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);

    return (
        <div className="max-w-3xl mx-auto">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-serif text-white">Funding Application</h2>
                <p className="text-slate-400">Pre-qualification for unsecured business capital.</p>
            </div>

            <div className="glass-panel p-8 rounded-xl border border-gold-500/30">
                <div className="flex justify-between mb-8 relative">
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-700 -z-10"></div>
                    {[1, 2, 3].map((s) => (
                        <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= s ? 'bg-gold-600 text-black' : 'bg-slate-800 text-slate-500'}`}>
                            {s}
                        </div>
                    ))}
                </div>

                {step === 1 && (
                    <div className="space-y-6 animate-fade-in">
                        <h3 className="text-xl font-bold text-white mb-4">Business Information</h3>
                        <div>
                            <label className="block text-xs uppercase text-slate-400 mb-2">Legal Business Name</label>
                            <input type="text" className="w-full bg-slate-900 border border-slate-600 rounded p-3 text-white focus:border-gold-500 outline-none" placeholder="LLC or Corp Name" />
                        </div>
                        <div>
                            <label className="block text-xs uppercase text-slate-400 mb-2">EIN Number</label>
                            <input type="text" className="w-full bg-slate-900 border border-slate-600 rounded p-3 text-white focus:border-gold-500 outline-none" placeholder="XX-XXXXXXX" />
                        </div>
                        <div>
                            <label className="block text-xs uppercase text-slate-400 mb-2">Date Incorporated</label>
                            <input type="date" className="w-full bg-slate-900 border border-slate-600 rounded p-3 text-white focus:border-gold-500 outline-none" />
                        </div>
                        <button onClick={() => setStep(2)} className="w-full bg-gold-600 hover:bg-gold-500 text-black font-bold py-3 rounded mt-4">Next Step</button>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-6 animate-fade-in">
                        <h3 className="text-xl font-bold text-white mb-4">Financial Profile</h3>
                        <div>
                            <label className="block text-xs uppercase text-slate-400 mb-2">Annual Revenue (Last 12 Months)</label>
                            <select className="w-full bg-slate-900 border border-slate-600 rounded p-3 text-white focus:border-gold-500 outline-none">
                                <option>Pre-revenue / Startup</option>
                                <option>$50k - $100k</option>
                                <option>$100k - $500k</option>
                                <option>$500k+</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs uppercase text-slate-400 mb-2">Estimated Credit Score (Owner)</label>
                            <select className="w-full bg-slate-900 border border-slate-600 rounded p-3 text-white focus:border-gold-500 outline-none">
                                <option>Excellent (720+)</option>
                                <option>Good (680-719)</option>
                                <option>Fair (640-679)</option>
                                <option>Poor (Below 640)</option>
                            </select>
                        </div>
                        <div className="flex gap-4 mt-4">
                             <button onClick={() => setStep(1)} className="w-1/3 bg-slate-800 text-white font-bold py-3 rounded">Back</button>
                             <button onClick={() => setStep(3)} className="w-2/3 bg-gold-600 hover:bg-gold-500 text-black font-bold py-3 rounded">Next Step</button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="text-center animate-fade-in py-10">
                        <div className="w-20 h-20 bg-gold-600/20 text-gold-500 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Application Ready</h3>
                        <p className="text-slate-400 mb-8">By clicking submit, you authorize our funding partners to perform a soft inquiry on your credit report.</p>
                        <button 
                            onClick={() => navigate('/business-funding')}
                            className="w-full bg-gold-600 hover:bg-gold-500 text-black font-bold py-4 rounded uppercase tracking-wider shadow-[0_0_20px_rgba(220,182,61,0.4)]"
                        >
                            Submit Application
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FundingApplication;