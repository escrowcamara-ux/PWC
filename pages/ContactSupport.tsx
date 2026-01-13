

import React, { useState } from 'react';

const ContactSupport: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      setSubmitted(true);
  };

  if (submitted) {
      return (
          <div className="flex flex-col items-center justify-center h-[60vh]">
              <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Message Received</h2>
              <p className="text-slate-400 text-center max-w-md">
                  A member of our concierge team will respond to your inquiry within 24 hours via the secure messaging center.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="mt-8 text-gold-400 hover:text-white underline"
              >
                  Send another message
              </button>
          </div>
      );
  }

  return (
    <div className="max-w-2xl mx-auto">
       <h2 className="text-3xl font-serif text-white mb-8">Contact Support</h2>
       
       <div className="glass-panel p-8 rounded-xl border border-slate-700">
           <form onSubmit={handleSubmit} className="space-y-6">
               <div className="grid grid-cols-2 gap-6">
                   <div>
                       <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">First Name</label>
                       <input type="text" className="w-full bg-slate-900 border border-slate-600 rounded p-3 text-white focus:border-gold-500 outline-none" />
                   </div>
                   <div>
                       <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">Last Name</label>
                       <input type="text" className="w-full bg-slate-900 border border-slate-600 rounded p-3 text-white focus:border-gold-500 outline-none" />
                   </div>
               </div>

               <div>
                   <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">Department</label>
                   <select className="w-full bg-slate-900 border border-slate-600 rounded p-3 text-white focus:border-gold-500 outline-none">
                       <option>General Inquiry</option>
                       <option>Compensation & Payouts</option>
                       <option>Tech Support</option>
                       <option>Legal / Compliance</option>
                   </select>
               </div>

               <div>
                   <label className="block text-slate-400 text-xs uppercase tracking-wider mb-2">Message</label>
                   <textarea rows={5} className="w-full bg-slate-900 border border-slate-600 rounded p-3 text-white focus:border-gold-500 outline-none"></textarea>
               </div>

               <button type="submit" className="w-full bg-gold-600 hover:bg-gold-500 text-black font-bold py-3 rounded uppercase tracking-wider transition-colors">
                   Submit Request
               </button>
           </form>
       </div>

       <div className="mt-8 flex justify-center space-x-8 text-slate-400 text-sm">
           <div className="flex items-center gap-2">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
               support@privatewealth.club
           </div>
           <div className="flex items-center gap-2">
               <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
               (888) 555-0199
           </div>
       </div>
    </div>
  );
};

export default ContactSupport;