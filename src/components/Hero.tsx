import React from 'react';
import { Coins } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-conic from-primary-50 via-white to-accent-50 py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDIwIDAgTCAwIDAgMCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDIyOSwgMjMxLCAyMzUsIDAuNSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center fade-in">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-200 to-accent-200 rounded-full blur-lg opacity-75"></div>
              <Coins className="relative w-20 h-20 text-primary-600 animate-bounce-slow" />
            </div>
          </div>
          
          <h1 className="text-6xl font-bold mb-6">
            Community Token <span className="gradient-text">Airdrop</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Rewarding our early supporters with exclusive token drops.
            Join the revolution in decentralized finance.
          </p>
          
          <div className="flex justify-center space-x-6">
            <a href="#claim" className="btn-primary">
              Claim Tokens
            </a>
            <a href="#learn" className="btn-secondary">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}