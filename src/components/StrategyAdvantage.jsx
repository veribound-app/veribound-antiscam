import React, { useState } from 'react';

export function StrategyAdvantage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-indigo-900 to-slate-900 rounded-2xl p-5 text-white shadow-md border border-indigo-800">
      <div className="flex justify-between items-center cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div>
          <span className="text-xs uppercase tracking-wider font-semibold bg-indigo-500/30 text-indigo-300 px-2.5 py-1 rounded-full border border-indigo-500/40">
            Strategic Edge: Outperforming Single-Carrier AI Filters
          </span>
          <h3 className="text-base sm:text-lg font-bold mt-2">Why MTN & Airtel Need Cross-Network Defense, Not Just Siloed SMS Tags</h3>
          <p className="text-xs text-indigo-200 mt-1">
            Click to view how our gateway overcomes operator-native blind spots.
          </p>
        </div>
        <button className="text-xs bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-lg font-medium transition shrink-0 ml-4">
          {isOpen ? 'Hide Gap Analysis ▲' : 'View Gap Analysis ▼'}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 pt-4 border-t border-indigo-800/60 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="bg-white/5 p-3.5 rounded-lg border border-white/10">
            <span className="font-bold text-amber-400 block mb-1">1. Multi-Channel Blind Spot</span>
            <p className="text-indigo-100">Carrier tools focus strictly on SMS parameters. Fraudsters immediately shift to WhatsApp, voice calls, and apps—which our gateway intercepts globally.</p>
          </div>
          <div className="bg-white/5 p-3.5 rounded-lg border border-white/10">
            <span className="font-bold text-amber-400 block mb-1">2. Social Engineering & PINs</span>
            <p className="text-indigo-100">A passive "SPAM" warning tag cannot stop a panicked user from handing over MoMo PINs. Our SOC suite tracks financial value at risk and emergency freezes.</p>
          </div>
          <div className="bg-white/5 p-3.5 rounded-lg border border-white/10">
            <span className="font-bold text-amber-400 block mb-1">3. False Positives & Business SMS</span>
            <p className="text-indigo-100">Aggressive carrier filters mistakenly block legitimate enterprise bulk messaging. Our risk-scoring engine safely separates business traffic from scammers.</p>
          </div>
        </div>
      )}
    </div>
  );
}