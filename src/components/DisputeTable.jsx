import React from 'react';
export default function DisputeTable(){
  const disputes = [
    { id: 'DSP-001', network: 'MTN', amount: 'UGX 150,000', status: 'Intercepted' },
    { id: 'DSP-002', network: 'Airtel', amount: 'UGX 320,000', status: 'Blocked' },
    { id: 'DSP-003', network: 'MTN', amount: 'UGX 85,000', status: 'Flagged' },
  ];
  const handleExportRegulatorReport = () => {
    alert('Report to Regulator exported - Ready for Monday Demo & Voting until 30 Nov');
  };
  return (
    <div className="bg-white rounded-xl p-6 mt-6 max-w-3xl mx-auto shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg text-black">Report to Regulator - MTN/Airtel</h2>
        <button onClick={handleExportRegulatorReport} className="bg-black text-white px-4 py-2 rounded-lg text-sm">Export UCC Report</button>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-4 gap-4 font-bold border-b pb-2 text-sm text-gray-600"><span>ID</span><span>Network</span><span>Amount</span><span>Status</span></div>
        {disputes.map(d => (
          <div key={d.id} className="grid grid-cols-4 gap-4 py-3 border-b text-sm text-black"><span>{d.id}</span><span>{d.network}</span><span>{d.amount}</span><span className="text-red-600 font-semibold">{d.status}</span></div>
        ))}
      </div>
      <p className="text-xs text-gray-500 mt-3 text-center">Synthetic Data Only | No Live Telco Integration | Africa TELCO SOC LIVE</p>
    </div>
  );
}
