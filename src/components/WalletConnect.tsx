import React from 'react';
import { useConnect, useAccount, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { Wallet2, LogOut } from 'lucide-react';

export function WalletConnect() {
  const { connect } = useConnect();
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  if (isConnected && address) {
    return (
      <button
        onClick={() => disconnect()}
        className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-lg transition-all duration-200
                   shadow-[0_0_0_3px_rgba(239,68,68,0.1)] hover:shadow-[0_0_0_3px_rgba(239,68,68,0.2)]
                   active:transform active:scale-95"
      >
        <LogOut className="w-5 h-5" />
        <span>Disconnect {address.slice(0, 6)}...{address.slice(-4)}</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => connect({ connector: injected() })}
      className="btn-primary flex items-center space-x-2"
    >
      <Wallet2 className="w-5 h-5" />
      <span>Connect Wallet</span>
    </button>
  );
}