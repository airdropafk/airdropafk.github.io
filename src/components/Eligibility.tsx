import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const criteria = [
  'Hold a minimum of 0.1 ETH in your wallet',
  'Have at least one transaction before March 1st, 2024',
  'Wallet must not be a smart contract',
  'One claim per eligible wallet address',
];

export function Eligibility() {
  return (
    <div className="bg-gray-50 py-16" id="learn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Eligibility Criteria</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Check if you're eligible for the airdrop by meeting the following criteria
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {criteria.map((item, index) => (
            <div key={index} className="flex items-center space-x-4 bg-white p-6 rounded-xl shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}