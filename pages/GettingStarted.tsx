import React from 'react';
import { useNavigate } from 'react-router-dom';

interface StepCardProps {
    step: number;
    title: string;
    description: string;
    done?: boolean;
    onStart?: () => void;
}

const StepCard: React.FC<StepCardProps> = ({ step, title, description, done, onStart }) => (
  <div className={`flex gap-4 p-6 rounded-xl border ${done ? 'bg-slate-800/50 border-gold-500/50' : 'bg-slate-800/30 border-slate-700'}`}>
    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ${done ? 'bg-gold-500 text-black' : 'bg-slate-700 text-slate-400'}`}>
      {done ? '✓' : step}
    </div>
    <div>
      <h3 className={`text-lg font-bold ${done ? 'text-gold-400' : 'text-white'}`}>{title}</h3>
      <p className="text-slate-400 text-sm mt-1">{description}</p>
      {!done && onStart && (
        <button 
            onClick={onStart}
            className="mt-4 px-4 py-2 bg-slate-700 hover:bg-gold-600 hover:text-black text-white text-xs uppercase tracking-wider rounded transition-all"
        >
          Start Task
        </button>
      )}
    </div>
  </div>
);

const GettingStarted: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-serif text-white mb-2">Getting Started</h2>
        <p className="text-slate-400">Follow these steps to activate your wealth pillars and begin your journey.</p>
      </div>

      <div className="space-y-4">
        <StepCard 
          step={1} 
          title="Complete Your Profile" 
          description="Ensure your legal name matches your identification for KYC compliance regarding trust verification."
          done={true}
        />
        <StepCard 
          step={2} 
          title="Watch the Presentation" 
          description="Understand the core philosophy of the Private Wealth Club and our compensation model."
          done={false}
          onStart={() => navigate('/presentation')}
        />
        <StepCard 
          step={3} 
          title="Setup Payment Method" 
          description="Link your preferred payout method to receive weekly commissions and bonuses."
          done={false}
          onStart={() => navigate('/wallet')}
        />
        <StepCard 
          step={4} 
          title="Corporate Structure Init" 
          description="Begin the module on LLC formation to prepare for business funding."
          done={false}
          onStart={() => navigate('/curriculum')}
        />
        <StepCard 
          step={5} 
          title="Invite Your First 3" 
          description="Share your unique link to qualify for the Associate Rank and unlock the 'Founder' bonus."
          done={false}
          onStart={() => navigate('/compensation-plan')}
        />
      </div>
    </div>
  );
};

export default GettingStarted;