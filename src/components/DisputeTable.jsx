import React from 'react';
export default function DisputeTable(){
  const disputes = [
    { id: 'DSP-001', network: 'MTN', amount: 'UGX 150,000', status: 'Intercepted' },
    { id: 'DSP-002', network: 'Airtel', amount: 'UGX 320,000', status: 'Blocked' },
    { id: 'DSP-003', network: 'MTN', amount: 'UGX 85,000', status: 'Flagged' },
  ];
  const handleExportRegulatorReport = () => {
    alert('Report to Regulator exported - Ready for Monday Demo');
  };
  return (
    <div className="bg-white rounded-xl p-5 mt-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold">Report to Regulator - MTN/Airtel</h2>
        <button onClick={handleExportRegulatorReport} className="bg-black text-white px-4 py-2 rounded-lg text-sm">Export UCC Report</button>
      </div>
      {disputes.map(d => (<div key={d.id} className="flex justify-between border-b py-2 text-sm"><span>{d.id} {d.network}</span><span>{d.amount}</span><span>{d.status}</span></div>))}
    </div>
  );
}
