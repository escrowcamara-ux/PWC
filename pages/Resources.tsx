import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface LawSection {
    id: string;
    icon: string;
    title: string;
    desc: string;
    jurisdictionList: string[];
    docs: { title: string; definition: string; purpose: string }[];
    theme: 'land' | 'air' | 'water';
}

interface TrustDoc {
    title: string;
    desc: string;
}

const Resources: React.FC = () => {
  const navigate = useNavigate();
  const [selectedDoc, setSelectedDoc] = useState<{ title: string; definition: string; purpose: string } | null>(null);

  const LAW_SECTIONS: LawSection[] = [
    {
      id: 'land',
      icon: '🌍',
      title: 'LAND',
      desc: 'The jurisdiction of blood, soil, family, property, domicile, inheritance, and living status. Land forms establish you as a Living Man/Woman.',
      jurisdictionList: ['Blood', 'Soil', 'Family', 'Property', 'Domicile', 'Inheritance', 'Living Status'],
      docs: [
        { title: 'Baby Land Deed', definition: 'Evidence of land ownership.', purpose: 'Records the newborn on the land jurisdiction.' },
        { title: 'Live Life Claim', definition: 'Affidavit of life.', purpose: 'Rebuts the presumption of "civil death" or "lost at sea" status.' },
        { title: 'Patent of Nativity', definition: 'Witness of birth.', purpose: 'Establishes origin outside of the corporate State.' },
        { title: 'Family Bible Record', definition: 'Highest record of birth.', purpose: 'Private ecclesiastical record of lineage.' },
        { title: 'Medical Notice', definition: 'Notice of rights.', purpose: 'Asserts bodily autonomy and private association.' },
        { title: 'Will & Testament', definition: 'Distribution of estate.', purpose: 'Directs property flow in the private domain.' }
      ],
      theme: 'land'
    },
    {
      id: 'air',
      icon: '🌬️',
      title: 'AIR',
      desc: 'The jurisdiction of sovereignty, ecclesiastical authority, contracts, and declarations. Air is where your standing is declared and recognized.',
      jurisdictionList: ['Sovereignty', 'Ecclesiastical Authority', 'Contracts', 'Status Correction', 'Declarations', 'Lawful Identity'],
      docs: [
        { title: 'Declaration of Status', definition: 'Affidavit of standing.', purpose: 'Declares you are a private national, not a corporate subject.' },
        { title: 'Notation & Political Status', definition: 'Political alignment.', purpose: 'Corrects your voting and tax jurisdiction status.' },
        { title: 'Declaration of Proper Name', definition: 'Orthography correction.', purpose: 'Separates the Living Man from the ALL CAPS corporate fiction.' },
        { title: 'Durable POA', definition: 'Power of Attorney.', purpose: 'Reclaims executorship over the legal person/strawman.' },
        { title: 'Rescission of Surety', definition: 'Liability removal.', purpose: 'Cancels the presumption that you are the guarantor for the fiction.' },
        { title: 'Affidavit of Foreign Status', definition: 'Jurisdictional challenge.', purpose: 'Declares you are foreign to the US Corporation.' },
        { title: 'Notice of Appointment of GE', definition: 'General Executor.', purpose: 'Appoints you as the highest authority over the estate.' },
        { title: 'Non-Taxpayer Affidavit', definition: 'Tax status.', purpose: 'Declares lack of privilege-based income.' }
      ],
      theme: 'air'
    },
    {
      id: 'water',
      icon: '💧',
      title: 'WATER',
      desc: 'The jurisdiction of commerce, IRS, trust taxation, reporting, and financial elections. This is where the PERSON and the EIN interact.',
      jurisdictionList: ['Commerce', 'IRS', 'Trust Taxation', 'Reporting', 'Financial Elections', 'Liability Assignment'],
      docs: [
        { title: 'W-8BEN', definition: 'Foreign Status Cert.', purpose: 'Used for banking to declare non-US person status.' },
        { title: 'IRS Form 56', definition: 'Notice of Fiduciary.', purpose: 'Notifies IRS that YOU are the trustee, not them.' },
        { title: 'IRS Form 56F', definition: 'Fiduciary for Bank.', purpose: 'Specific fiduciary notice for financial institutions.' },
        { title: 'IRS Form 4029', definition: 'Social Security Exemption.', purpose: 'Religious exemption from SS/Medicare taxes.' },
        { title: 'IRS Form 4361', definition: 'Ministerial Exemption.', purpose: 'Tax exemption for ministers on earned income.' },
        { title: 'IRS Form SS-4', definition: 'EIN Application.', purpose: 'Creates the banking number for Trusts/Estates.' }
      ],
      theme: 'water'
    }
  ];

  const TRUST_DOCS: TrustDoc[] = [
    { title: '1. Declaration of Trust (NOI)', desc: 'The founding instrument that brings the trust into existence. It defines the trust name, purpose, jurisdiction, standing, and foundational authority.' },
    { title: '2. Corpus (Trust Property Statement)', desc: 'The list and description of the initial assets, rights, or value contributed to form the trust. This establishes the substance the trust governs.' },
    { title: '3. Charter & By-Laws (Internal Governance)', desc: 'The constitution of the trust. This document establishes trustee powers and limits, meeting procedures, decision-making rules, and fiduciary standards.' },
    { title: '4. Conveyance of Property', desc: 'The legal transfer of real or personal property from the individual to the trust (Assignment / Bill of Sale / Deed). This protects the asset from liability.' },
    { title: '5. Board of Trustees Acceptance', desc: 'Formal acceptance by trustees of their roles, obligations, and fiduciary duties. This activates the governance body.' },
    { title: '6. Beneficiaries Designation', desc: 'Identifies who benefits from the trust. This can include family members, future children, charitable purposes, and ecclesiastical missions.' },
    { title: '7. NOI / NOD', desc: 'Notice of Interest & Notice of Determination. Used to assert the trust’s interest in assets, record its status, and establish seniority/priority of claims.' },
    { title: '8. Trust Certificate', desc: 'A short-form document used for banks, institutions, and third parties for verification of trustee authority. It prevents revealing the full trust instrument.' },
    { title: '9. Meeting Minutes', desc: 'Records of trustee decisions. These form the administrative history and legal continuity of the trust.' },
    { title: '10. Promissory Notes', desc: 'Used for internal credit creation, private banking, member loans, capital raises, and asset-backed instruments.' },
    { title: '11. Schedule A (Asset Ledger)', desc: 'The complete list of property governed by the trust, including real estate, vehicles, intellectual property, metals, and private notes.' }
  ];

  const themeStyles = {
      land: {
          bg: 'bg-emerald-900/10 hover:bg-emerald-900/20',
          border: 'border-emerald-800 hover:border-emerald-500',
          title: 'text-emerald-400',
          pill: 'bg-emerald-900/50 text-emerald-300 border-emerald-700',
          iconBg: 'bg-emerald-900/20'
      },
      air: {
          bg: 'bg-cyan-900/10 hover:bg-cyan-900/20',
          border: 'border-cyan-800 hover:border-cyan-400',
          title: 'text-cyan-300',
          pill: 'bg-cyan-900/50 text-cyan-200 border-cyan-700',
          iconBg: 'bg-cyan-900/20'
      },
      water: {
          bg: 'bg-blue-900/10 hover:bg-blue-900/20',
          border: 'border-blue-800 hover:border-blue-500',
          title: 'text-blue-400',
          pill: 'bg-blue-900/50 text-blue-300 border-blue-700',
          iconBg: 'bg-blue-900/20'
      }
  };

  const LawSectionCard: React.FC<{ section: LawSection }> = ({ section }) => {
      const styles = themeStyles[section.theme];
      return (
        <div className={`relative transition-all duration-300 backdrop-blur-sm rounded-xl p-6 flex flex-col h-full group border ${styles.bg} ${styles.border} shadow-lg hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]`}>
            {/* Corner Glow */}
            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-[50px] opacity-20 transition-opacity group-hover:opacity-40 ${styles.iconBg}`}></div>

            <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className={`text-4xl p-3 rounded-lg border border-white/5 ${styles.iconBg} group-hover:scale-110 transition-transform`}>{section.icon}</div>
                <div>
                    <h3 className={`font-bold leading-tight font-serif text-2xl uppercase tracking-wider ${styles.title}`}>{section.title}</h3>
                    <p className="text-[10px] text-slate-400 uppercase tracking-widest">Jurisdiction</p>
                </div>
            </div>
            
            {/* Jurisdiction List */}
            <div className="flex flex-wrap gap-2 mb-6 relative z-10">
                {section.jurisdictionList.map(j => (
                    <span key={j} className={`text-[10px] uppercase font-bold px-2 py-1 rounded border transition-colors ${styles.pill}`}>
                        {j}
                    </span>
                ))}
            </div>

            <p className="text-sm text-slate-300 mb-6 flex-grow leading-relaxed font-light">{section.desc}</p>
            
            <div className="bg-black/40 rounded-lg p-4 border border-white/5 relative z-10">
                <h4 className={`text-xs font-bold uppercase mb-3 tracking-wider ${styles.title}`}>DOCUMENTS</h4>
                <ul className="space-y-2">
                    {section.docs.map(doc => (
                        <li 
                            key={doc.title} 
                            onClick={() => setSelectedDoc(doc)}
                            className="flex justify-between items-center group/item cursor-pointer hover:bg-white/5 p-2 rounded transition-all border border-transparent hover:border-white/10"
                        >
                            <span className="text-sm text-slate-300 group-hover/item:text-white transition-colors truncate pr-2">✔ {doc.title}</span>
                            <span className={`text-xs shrink-0 font-bold uppercase opacity-50 group-hover/item:opacity-100 ${styles.title}`}>Intel</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
      );
  };

  return (
    <div className="max-w-6xl mx-auto pb-12 animate-fade-in relative">
      
      {/* DOCUMENT INTEL MODAL */}
      {selectedDoc && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md" onClick={() => setSelectedDoc(null)}>
              <div className="bg-slate-900 border border-gold-500 rounded-xl max-w-md w-full p-8 relative shadow-[0_0_50px_rgba(220,182,61,0.2)] animate-fade-in-up" onClick={e => e.stopPropagation()}>
                  <button className="absolute top-4 right-4 text-slate-500 hover:text-white" onClick={() => setSelectedDoc(null)}>✕</button>
                  
                  <div className="mb-6 border-b border-gold-900/50 pb-4">
                      <span className="text-gold-500 text-xs uppercase font-bold tracking-widest block mb-2 animate-pulse">Classified Document</span>
                      <h2 className="text-2xl font-serif text-white font-bold">{selectedDoc.title}</h2>
                  </div>

                  <div className="space-y-6">
                      <div className="bg-black/30 p-4 rounded border border-white/10">
                          <h4 className="text-slate-400 text-xs uppercase font-bold tracking-wider mb-2">Definition</h4>
                          <p className="text-white text-lg font-serif italic text-glow">"{selectedDoc.definition}"</p>
                      </div>
                      <div>
                          <h4 className="text-slate-400 text-xs uppercase font-bold tracking-wider mb-2">Strategic Purpose</h4>
                          <p className="text-slate-300 text-sm leading-relaxed">{selectedDoc.purpose}</p>
                      </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-800 flex gap-4">
                      <button className="flex-1 bg-gradient-to-r from-gold-700 to-gold-500 text-black font-bold py-3 rounded uppercase text-xs tracking-wider transition-transform hover:scale-105 shadow-lg">
                          Download Template
                      </button>
                  </div>
              </div>
          </div>
      )}

      {/* Header */}
      <div className="mb-12 text-center relative">
        <h2 className="text-5xl font-serif text-white mb-4 font-bold tracking-tight">Resources</h2>
        <div className="inline-block px-6 py-2 border border-gold-500/50 rounded-full bg-gold-900/10 backdrop-blur-sm relative z-10">
            <p className="text-xl text-gold-400 font-bold tracking-[0.3em] uppercase drop-shadow-md">Land • Air • Water</p>
        </div>
        
        {/* Decorative Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-[80px] pointer-events-none"></div>
      </div>

      {/* Intro Definition */}
      <div className="bg-slate-900/40 p-10 rounded-2xl border-l-4 border-gold-500 mb-16 backdrop-blur-md shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-[60px] pointer-events-none"></div>
          
          <h3 className="text-3xl font-bold text-white mb-6 font-serif">What is L.A.W.?</h3>
          <div className="text-slate-300 space-y-6 leading-relaxed text-lg font-light">
              <p>Inside the Private Wealth Club, <strong>L.A.W.</strong> refers to <strong className="text-white">Lawful Actions & Writings</strong> structured across the three jurisdictions of authority that define your legal identity, property, and financial relationship to the State.</p>
              
              <div className="my-8 p-6 bg-black/40 rounded-xl border border-gold-500/20 text-center relative">
                  <span className="text-4xl absolute -top-4 -left-2 text-gold-500/20">"</span>
                  <p className="font-serif italic text-gold-100 text-xl">
                      When you put LAND + AIR + WATER together, you complete true Status Correction.
                  </p>
                  <span className="text-4xl absolute -bottom-8 -right-2 text-gold-500/20">"</span>
              </div>

              <p className="text-sm text-slate-400">
                  <span className="text-gold-500 font-bold uppercase tracking-wider">Instruction:</span> Click on any document below to view its definition and download the template.
              </p>
          </div>
      </div>

      {/* L.A.W. Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {LAW_SECTIONS.map((section) => (
            <LawSectionCard key={section.id} section={section} />
        ))}
      </div>

      {/* Funding Redirect (Water Context) */}
      <div className="group relative bg-gradient-to-r from-blue-900 to-slate-900 p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 mb-24 shadow-2xl border border-blue-500/30 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] group-hover:bg-blue-400/20 transition-colors"></div>

        <div className="flex items-start gap-6 relative z-10">
             <div className="p-4 bg-blue-500/20 rounded-full border border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                 <svg className="w-10 h-10 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
             </div>
             <div>
                <h3 className="text-2xl font-bold text-white mb-2 font-serif">Ready for Funding?</h3>
                <p className="text-blue-100 text-sm max-w-xl leading-relaxed">
                    If you have completed your Water documents (W-8BEN, EIN) and qualify for funding, redirect to The Vault of Capital.
                </p>
             </div>
        </div>
        <button 
            onClick={() => navigate('/wallet')}
            className="relative z-10 shrink-0 bg-white text-blue-900 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold uppercase tracking-wider transition-transform hover:scale-105 shadow-xl"
        >
            Enter Funding Portal
        </button>
      </div>

      {/* Trust Architecture */}
      <div className="border-t border-slate-800 pt-16 relative" id="trust-architecture">
         <div className="absolute top-16 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-purple-900/50 to-transparent blur-sm"></div>
         
         <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
             <div>
                <h2 className="text-4xl font-serif text-white mb-2">Trust Architecture & Private Estate</h2>
                <p className="text-purple-400 font-bold uppercase tracking-widest text-xs">The Legal Foundation of Your Private Estate</p>
             </div>
             <div className="p-4 bg-purple-900/10 rounded-lg border border-purple-500/30 backdrop-blur-sm">
                 <span className="text-purple-300 font-serif italic text-lg">"Own Nothing, Control Everything"</span>
             </div>
         </div>

         <div className="bg-[#0a0a0a] p-10 rounded-2xl border border-slate-800 mb-12 shadow-2xl">
             <div className="flex flex-col md:flex-row gap-12">
                 <div className="flex-1">
                     <h4 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2">Overview</h4>
                     <p className="text-slate-400 leading-relaxed font-light mb-6">
                        This section contains all the required documents to create, structure, fund, and govern a Private Irrevocable Trust within the Private Wealth Club framework.
                        These instruments establish the trust’s legal identity, authority, property rights, governance structure, and standing.
                     </p>
                 </div>
                 <div className="flex-1">
                     <h4 className="text-xl font-bold text-white mb-6 border-b border-slate-800 pb-2">Capabilities Unlocked</h4>
                     <div className="grid grid-cols-2 gap-y-4 gap-x-8 text-sm text-slate-300">
                         <span className="flex items-center gap-3"><span className="text-purple-500">❖</span> Asset Protection</span>
                         <span className="flex items-center gap-3"><span className="text-purple-500">❖</span> Estate Planning</span>
                         <span className="flex items-center gap-3"><span className="text-purple-500">❖</span> Private Banking</span>
                         <span className="flex items-center gap-3"><span className="text-purple-500">❖</span> Liability Separation</span>
                         <span className="flex items-center gap-3"><span className="text-purple-500">❖</span> Ecclesiastical Jurisdiction</span>
                         <span className="flex items-center gap-3"><span className="text-purple-500">❖</span> Equity-Based Credit</span>
                     </div>
                 </div>
             </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             {TRUST_DOCS.map((doc, idx) => (
                 <div key={idx} className="bg-slate-900/50 p-6 rounded-xl border border-slate-700 hover:border-gold-500/50 transition-all flex flex-col justify-between group hover:bg-slate-800">
                     <div className="mb-4">
                         <h4 className="font-bold text-white text-lg group-hover:text-gold-300 transition-colors font-serif">{doc.title}</h4>
                         <p className="text-sm text-slate-400 mt-2 leading-relaxed">{doc.desc}</p>
                     </div>
                     <button 
                        onClick={() => alert('Download: ' + doc.title)}
                        className="self-start px-4 py-2 bg-black text-slate-400 border border-slate-700 rounded text-[10px] uppercase font-bold hover:bg-gold-600 hover:text-black hover:border-gold-600 transition-all"
                     >
                         Download Template
                     </button>
                 </div>
             ))}
         </div>
      </div>
    </div>
  );
};

export default Resources;