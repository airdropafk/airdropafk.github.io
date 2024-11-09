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
      <div className="text-center p-6 bg-gray-50 rounded-lg">
        <p className="text-gray-600">Connect your wallet to claim the airdrop</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-md p-6 bg-white rounded-xl shadow-lg">
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Airdrop Details</h3>
        <div className="flex items-center space-x-2 text-gray-600">
          <Timer className="w-4 h-4" />
          <span>Ends in: 5 days 12 hours</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-gray-600">Available to claim:</span>
            <span className="font-semibold">1,000 TOKENS</span>
          </div>
        </div>

        <button
          onClick={handleClaim}
          disabled={claimed}
          className={`w-full flex items-center justify-center space-x-2 py-3 rounded-lg text-white transition-all ${
            claimed
              ? 'bg-green-500 cursor-not-allowed'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          <Gift className="w-5 h-5" />
          <span>{claimed ? 'Claimed' : 'Claim Airdrop'}</span>
        </button>
      </div>
    </div>
  );
}