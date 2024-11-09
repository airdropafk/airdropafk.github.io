import React from 'react';
import { Coins } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <Coins className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Community Token Airdrop
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Rewarding our early supporters with exclusive token drops.
            Join the revolution in decentralized finance.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#claim" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-all">
              Claim Tokens
            </a>
            <a href="#learn" className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-8 py-3 rounded-lg transition-all">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}