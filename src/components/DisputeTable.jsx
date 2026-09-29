import React, { useState } from 'react';

export function DisputeTable() {
  // Uganda-specific telecom scam intelligence mock data for the pitch demo
  const [disputes, setDisputes] = useState([
    {
      id: '1',
      disputeCode: 'UG-SHIELD-9081',
      scamChannel: 'WhatsApp / SMS',
      rawPayload: 'CONGRATS! MTN/Airtel Uganda giving free 50GB data & cash prize. Click bit.ly/claim-ug immediately or call +256-700-000199. Send PIN/OTP to verify.',
      amount: 150000.00,
      currency: 'UGX',
      riskScore: 94,
      status: 'intercepted_active'
    },
    {
      id: '2',
      disputeCode: 'UG-SHIELD-9082',
      scamChannel: 'Voice Call',
      rawPayload: 'Caller impersonating MTN MoMo Customer Care claiming account suspension unless temporary PIN is shared over phone.',
      amount: 350000.00,
      currency: 'UGX',
      riskScore: 89,
      status: 'blocked_caller'
    },
    {
      id: '3',
      disputeCode: 'UG-SHIELD-9083',
      scamChannel: 'SMS Phishing',
      rawPayload: 'Airtel Money alert: You received UGX 450,000 from 070xxxxxx. Dial *185*9# and enter secret code to accept funds.',
      amount: 450000.00,
      currency: 'UGX',
      riskScore: 91,
      status: 'quarantined'
    },
    {
      id: '4',
      disputeCode: 'UG-SHIELD-9084',
      scamChannel: 'WhatsApp',
      rawPayload: 'Fake job recruitment portal requesting UGX 25,000 registration fee via mobile money before interview scheduling.',
      amount: 25000.00,
      currency: 'UGX',
      riskScore: 78,
      status: 'flagged'
    }
  ]);

  const [loading, setLoading] = useState(false);

  const refetch = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500); // Simulate quick refresh
  };

  // Helper function for channel badge styles
  const getChannelBadge = (channel) => {
    const ch = (channel || '').toLowerCase();
    if (ch.includes('whatsapp') || ch.includes('sms')) {
      return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">{channel}</span>;
    } else if (ch.includes('voice')) {
      return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800">{channel}</span>;
    }
    return <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">{channel}</span>;
  };

  if (loading) {
    return <div className="p-8 text-center text-gray-500 font-medium">Refreshing Uganda threat feed...</div>;
  }

  return (
    <div className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-100">
      <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Uganda Telecom Threat Feed</h2>
          <p className="text-xs text-gray-500">Active Intercepts (MTN & Airtel Gateway Vectors)</p>
        </div>
        <button onClick={refetch} className="px-3 py-1.5 bg-white border border-gray-200 text-gray-700 text-xs font-semibold rounded-lg hover:bg-gray-50 transition shadow-sm">
          Refresh Feed
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-xs uppercase tracking-wider font-semibold border-b border-gray-100">
              <th className="px-6 py-3">Dispute Code</th>
              <th className="px-6 py-3">Vector Channel</th>
              <th className="px-6 py-3">Intercepted Scam Payload / Metadata</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Risk Score</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
            {disputes.map((dispute) => (
              <tr key={dispute.id} className="hover:bg-gray-50/50 transition">
                <td className="px-6 py-4 font-mono font-medium text-indigo-600">
                  {dispute.disputeCode}
                </td>
                <td className="px-6 py-4">
                  {getChannelBadge(dispute.scamChannel)}
                </td>
                <td className="px-6 py-4 max-w-xs truncate text-xs text-gray-600 font-sans" title={dispute.rawPayload}>
                  {dispute.rawPayload}
                </td>
                <td className="px-6 py-4 font-semibold text-gray-900">
                  {dispute.currency} {Number(dispute.amount).toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                    dispute.riskScore > 90 
                      ? 'bg-red-100 text-red-800' 
                      : dispute.riskScore > 80 
                      ? 'bg-amber-100 text-amber-800' 
                      : 'bg-emerald-100 text-emerald-800'
                  }`}>
                    Score: {dispute.riskScore}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 capitalize">
                    {dispute.status.replace(/_/g, ' ')}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}