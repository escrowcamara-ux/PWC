
import React, { useState } from 'react';
import { Certificate } from '../types';

interface Props {
  cert: Certificate;
  onClose: () => void;
}

const DigitalCertificate: React.FC<Props> = ({ cert, onClose }) => {
  const [flipped, setFlipped] = useState(false);

  // Generate a QR code URL for the hash (using a public API for demo purposes)
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${cert.verificationHash}&color=0f172a&bgcolor=f8fafc`;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4" onClick={onClose}>
      <div 
        className="relative perspective-1000 cursor-default" 
        onClick={(e) => { e.stopPropagation(); }}
      >
        <div 
            className={`w-[90vw] max-w-[800px] aspect-[1.414/1] transition-transform duration-700 transform-style-3d ${flipped ? 'rotate-y-180' : ''}`}
            onClick={() => setFlipped(!flipped)}
        >
          
          {/* FRONT OF CERTIFICATE */}
          <div className="absolute inset-0 backface-hidden bg-[#fdfbf7] rounded-lg shadow-[0_0_100px_rgba(220,182,61,0.5)] overflow-hidden border-[16px] border-[#2c3e50]">
              {/* Complex Border Image or CSS Pattern */}
              <div className="absolute inset-2 border-2 border-gold-600/50 pointer-events-none"></div>
              <div className="absolute inset-3 border border-gold-600/30 pointer-events-none"></div>
              
              {/* Guilloche Pattern Background */}
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/guilloche.png')] bg-center pointer-events-none"></div>

              {/* Holographic Overlay Layer */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-20" style={{ backgroundSize: '200% 200%', animation: 'shimmer 3s infinite linear' }}></div>

              <div className="relative z-10 p-12 flex flex-col items-center justify-between h-full text-slate-900 text-center">
                  
                  {/* Header */}
                  <div className="mt-4">
                      <div className="flex items-center justify-center gap-4 mb-2">
                          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold-600"></div>
                          <h2 className="text-3xl font-serif font-bold tracking-widest uppercase text-slate-800">Private Wealth Club</h2>
                          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold-600"></div>
                      </div>
                      <p className="text-[10px] uppercase tracking-[0.4em] text-gold-700">Official Registry • Private Jurisdiction</p>
                  </div>

                  {/* Title */}
                  <div className="my-8">
                      <h1 className="text-4xl md:text-5xl font-serif text-black mb-4 font-bold" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>{cert.title}</h1>
                      <p className="font-serif italic text-slate-600 text-lg">This certifies that</p>
                      <div className="text-3xl md:text-4xl font-serif font-bold text-gold-800 border-b-2 border-slate-300 inline-block px-8 py-2 mt-2 mb-4">
                          {cert.recipientName}
                      </div>
                      <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
                          {cert.description}
                      </p>
                  </div>

                  {/* Footer / Auth */}
                  <div className="w-full flex justify-between items-end mt-8 px-8">
                      <div className="text-center">
                          <div className="w-32 h-16 border-b border-slate-400 mb-2 flex items-end justify-center">
                              <span className="font-serif text-2xl text-slate-900 italic font-bold transform -rotate-6">{cert.issuerSignature}</span>
                          </div>
                          <p className="text-[10px] uppercase tracking-widest text-slate-500">Authorized Signature</p>
                      </div>

                      {/* Gold Seal - Holographic CSS */}
                      <div className="relative group">
                          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold-400 via-gold-200 to-gold-500 shadow-xl flex items-center justify-center relative overflow-hidden animate-pulse">
                              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')] opacity-30"></div>
                              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                              <div className="text-center p-2 border-2 border-gold-700/50 rounded-full w-20 h-20 flex flex-col items-center justify-center">
                                  <span className="text-[6px] uppercase font-bold text-gold-900">Official Seal</span>
                                  <span className="text-xl font-bold text-gold-900 font-serif">PWC</span>
                                  <span className="text-[6px] uppercase font-bold text-gold-900">Verified</span>
                              </div>
                          </div>
                      </div>

                      <div className="text-center">
                          <p className="font-mono text-lg font-bold text-slate-800 border-b border-slate-400 mb-2 pb-1">{cert.issueDate}</p>
                          <p className="text-[10px] uppercase tracking-widest text-slate-500">Date of Issue</p>
                      </div>
                  </div>

                  {/* Serial Number */}
                  <div className="absolute bottom-4 left-0 right-0 text-center">
                      <p className="font-mono text-[10px] text-red-900/60 tracking-widest">SERIAL: {cert.serialNumber}</p>
                  </div>
              </div>
          </div>

          {/* BACK OF CERTIFICATE (Metadata) */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-slate-900 rounded-lg shadow-2xl border-[16px] border-slate-800 p-12 text-white flex flex-col justify-center">
               <h3 className="text-2xl font-serif text-gold-400 mb-8 text-center border-b border-slate-700 pb-4">Digital Asset Metadata</h3>
               
               <div className="space-y-6 font-mono text-sm">
                   <div>
                       <label className="text-[10px] uppercase text-slate-500 tracking-widest block mb-1">Asset ID</label>
                       <p className="text-white">{cert.id}</p>
                   </div>
                   <div>
                       <label className="text-[10px] uppercase text-slate-500 tracking-widest block mb-1">Blockchain Verification Hash</label>
                       <div className="bg-black/50 p-3 rounded border border-slate-700 break-all text-xs text-green-400">
                           {cert.verificationHash}
                       </div>
                   </div>
                   <div>
                       <label className="text-[10px] uppercase text-slate-500 tracking-widest block mb-1">Status</label>
                       <span className="bg-green-900/30 text-green-400 px-2 py-1 rounded text-xs border border-green-800 uppercase font-bold">
                           {cert.status} • Irrevocable
                       </span>
                   </div>
               </div>

               <div className="mt-8 flex justify-center">
                   <div className="bg-white p-2 rounded">
                       <img src={qrCodeUrl} alt="Verification QR" className="w-32 h-32" />
                   </div>
               </div>
               <p className="text-center text-[10px] text-slate-500 mt-4">Scan to verify authenticity on the private ledger.</p>
               
               <p className="text-center text-xs text-slate-400 mt-auto">Click card to flip</p>
          </div>

        </div>
        <div className="text-center mt-8">
            <button className="text-white/50 hover:text-white text-sm uppercase tracking-widest" onClick={onClose}>Close Registry View</button>
        </div>
      </div>
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
};

export default DigitalCertificate;
