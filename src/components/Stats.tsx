import React from 'react';
import { Users, Coins, Timer, Globe2 } from 'lucide-react';

const stats = [
  { label: 'Total Participants', value: '25,000+', icon: Users },
  { label: 'Tokens Available', value: '1,000,000', icon: Coins },
  { label: 'Time Remaining', value: '5 Days', icon: Timer },
  { label: 'Networks', value: 'Ethereum', icon: Globe2 },
];

export function Stats() {
  return (
    <div className="bg-white py-16" id="stats">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}