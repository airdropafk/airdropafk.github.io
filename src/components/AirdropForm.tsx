import React, { useState } from 'react';
import { useAccount } from 'wagmi';
import { Gift, Timer } from 'lucide-react';

export function AirdropForm() {
  const { isConnected } = useAccount();
  const [claimed, setClaimed] = useState(false);

  const handleClaim = () => {
    setClaimed(true);
  };

  if (!isConnected) {
    return (
      <div className="text-center p-8 glass-card">
        <p className="text-gray-600">Connect your wallet to claim the airdrop</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md p-8 glass-card">
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-3">Airdrop Details</h3>
        <div className="flex items-center space-x-2 text-gray-600 bg-primary-50/50 p-2 rounded-lg">
          <Timer className="w-4 h-4" />
          <span>Ends in: 5 days 12 hours</span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-6 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Available to claim:</span>
            <span className="text-xl font-semibold text-primary-600">1,000 TOKENS</span>
          </div>
        </div>

        <button
          onClick={handleClaim}
          disabled={claimed}
          className={`w-full flex items-center justify-center space-x-2 py-3 rounded-lg text-white transition-all duration-200
            ${claimed
              ? 'bg-success-500 cursor-not-allowed'
              : 'btn-primary'
            }`}
        >
          <Gift className="w-5 h-5" />
          <span>{claimed ? 'Claimed Successfully' : 'Claim Airdrop'}</span>
        </button>
      </div>
    </div>
  );
}