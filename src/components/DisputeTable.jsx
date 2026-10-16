import React from 'react';

export function DisputeTable() {
  const disputes = [
    { id: 'DSP-001', network: 'MTN', amount: 'UGX 150,000', status: 'Intercepted', phone: '0772***123' },
    { id: 'DSP-002', network: 'Airtel', amount: 'UGX 320,000', status: 'Blocked', phone: '0701***456' },
    { id: 'DSP-003', network: 'MTN', amount: 'UGX 85,000', status: 'Flagged', phone: '0785***789' },
  ];

  const handleExportRegulatorReport = () => {
    console.log('Exporting Regulator Report for UCC...');
    alert('Report to Regulator exported - Ready for Monday Demo');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border p-5 mt-6">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Report to Regulator</h2>
          <p className="text-xs text-gray-400">Ready for UCC submission</p>
        </div>
        <button 
          onClick={handleExportRegulatorReport}
          className="bg-slate-900 text-white text-xs px-4 py-2 rounded-lg hover:bg-black"
        >
          Export Report
        </button>
      </div>
      
      <table className="w-full text-sm">
        <thead>
          <tr className="text-xs text-gray-400 border-b">
            <th className="text-left py-2">ID</th>
            <th className="text-left">Network</th>
            <th className="text-left">Amount</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {disputes.map((d) => (
            <tr key={d.id} className="border-b last:border-0">
              <td className="py-3">{d.id}</td>
              <td>{d.network}</td>
              <td>{d.amount}</td>
              <td><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">{d.status}</span></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}