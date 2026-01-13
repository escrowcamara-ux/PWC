

import React from 'react';
import { useNavigate } from 'react-router-dom';

const FundingOption = ({ title, amount, credit, desc, onApply }: { title: string; amount: string; credit: string; desc: string; onApply: () => void }) => (
    <div className="glass-panel p-6 rounded-xl hover:border-gold-500/50 transition-all border-l-4 border-transparent hover:border-l-gold-500 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <span className="bg-slate-800 text-gold-400 px-3 py-1 rounded-full text-xs font-bold">{credit}</span>
        </div>
        <p className="text-3xl font-serif text-white mb-4">{amount}</p>
        <p className="text-slate-400 text-sm mb-6 flex-grow">{desc}</p>
        <button 
            onClick={onApply}
            className="w-full py-2 border border-slate-600 rounded text-slate-300 hover:bg-gold-600 hover:border-gold-600 hover:text-black transition-colors uppercase text-xs tracking-wider font-bold"
        >
            Apply Now
        </button>
    </div>
);

const TestimonialCard = ({ name, role, quote, amount, img }: { name: string; role: string; quote: string; amount: string; img: string }) => (
    <div className="bg-slate-800/40 p-6 rounded-xl border border-slate-700 relative">
        <div className="absolute -top-4 right-6 text-6xl text-gold-500/20 font-serif leading-none">"</div>
        <div className="flex items-center gap-4 mb-4">
            <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover border border-gold-400" />
            <div>
                <h4 className="text-white font-bold">{name}</h4>
                <p className="text-xs text-gold-400 uppercase tracking-wider">{role}</p>
            </div>
        </div>
        <p className="text-slate-300 text-sm mb-4 italic relative z-10">{quote}</p>
        <div className="inline-block bg-green-900/30 text-green-400 px-3 py-1 rounded text-xs font-bold border border-green-900/50">
            Funded: {amount}
        </div>
    </div>
);

const BusinessFunding: React.FC = () => {
  const navigate = useNavigate();

  const handleApply = () => {
      navigate('/funding-application');
  };

  return (
    <div>
        <div className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-serif text-white mb-4">Business Funding & Credit</h2>
            <p className="text-slate-400">
                Access capital to scale your ventures. Our partners provide funding solutions tailored for 
                Private Wealth Club members who have completed the Corporate Structure module.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FundingOption 
                title="Startup Capital" 
                amount="$25k - $150k" 
                credit="680+ FICO" 
                desc="Unsecured personal term loans and credit cards. Perfect for initial liquidity."
                onApply={handleApply}
            />
            <FundingOption 
                title="Business Credit" 
                amount="$50k - $250k" 
                credit="No PG Required" 
                desc="Build corporate credit profile. EIN-only funding based on revenue and tradelines."
                onApply={handleApply}
            />
            <FundingOption 
                title="Real Estate Fix/Flip" 
                amount="$100k - $5M" 
                credit="Asset Based" 
                desc="Hard money loans for real estate investors. Up to 90% LTV for acquisition."
                onApply={handleApply}
            />
        </div>

        {/* Success Stories Section */}
        <div className="mt-16 animate-fade-in">
             <div className="flex items-center mb-8">
                 <div className="h-px bg-slate-700 flex-grow"></div>
                 <h3 className="px-6 text-2xl font-serif text-white">Member Success Stories</h3>
                 <div className="h-px bg-slate-700 flex-grow"></div>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                 <TestimonialCard 
                    name="Michael T."
                    role="Executive Member"
                    quote="I secured $80,000 in 0% interest funding within 30 days of joining. The credit sweep removed 3 collections that were holding me back."
                    amount="$80,000"
                    img="https://picsum.photos/100/100?random=30"
                 />
                 <TestimonialCard 
                    name="Sarah J."
                    role="Director"
                    quote="The corporate structure module was a game changer. I built my fleet of rental cars using business credit only—no personal guarantee."
                    amount="$150,000"
                    img="https://picsum.photos/100/100?random=31"
                 />
                 <TestimonialCard 
                    name="David R."
                    role="Chairman"
                    quote="Using the L.A.W. principles, I structured my assets into a private trust. Then I leveraged that trust to acquire a multi-family property."
                    amount="$1.2 Million"
                    img="https://picsum.photos/100/100?random=32"
                 />
             </div>
        </div>

        <div className="mt-12 bg-slate-800/50 p-8 rounded-xl border border-slate-700 flex flex-col md:flex-row items-center gap-8">
             <div className="flex-1">
                 <h3 className="text-2xl font-bold text-white mb-2">Need Credit Repair?</h3>
                 <p className="text-slate-400 mb-4">
                     Before applying for funding, ensure your personal credit profile is optimized. 
                     Our "Status Correction" team can assist with removing inaccuracies.
                 </p>
                 <button 
                    onClick={() => navigate('/contact-support')}
                    className="text-gold-400 hover:text-white font-bold underline"
                 >
                    Connect with a Specialist
                 </button>
             </div>
        </div>
    </div>
  );
};

export default BusinessFunding;