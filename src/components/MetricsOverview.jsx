import React from 'react';

export function MetricsOverview() {
  const metrics = [
    { 
      label: 'Active Threat Level', 
      sublabel: 'MTN/Airtel Gateway', 
      value: 'CRITICAL', 
      change: '',
      color: 'text-red-500'
    },
    { 
      label: '24h Intercepted Attempts', 
      sublabel: '+14% vs yesterday', 
      value: '1,428', 
      change: '',
      color: 'text-gray-900'
    },
    { 
      label: 'Potential Fraud Prevented', 
      sublabel: 'Protected MoMo balances', 
      value: 'UGX 482.5M', 
      change: '',
      color: 'text-gray-900'
    },
    { 
      label: 'Gateway Latency', 
      sublabel: '99.99% Uptime', 
      value: '12ms', 
      change: '',
      color: 'text-gray-900'
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {metrics.map((item, index) => (
        <div key={index} className="bg-white p-5 rounded-xl shadow-sm border">
          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
              {item.label}
            </span>
          </div>
          <div className="mt-1">
            <span className="text-xs text-gray-400">{item.sublabel}</span>
          </div>
          <div className="mt-4">
            <span className={`text-2xl font-extrabold ${item.color}`}>{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
}