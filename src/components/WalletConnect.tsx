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
        className="flex items-center space-x-2 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-all"
      >
        <LogOut className="w-5 h-5" />
        <span>Disconnect {address.slice(0, 6)}...{address.slice(-4)}</span>
      </button>
    );
  }

  return (
    <button
      onClick={() => connect({ connector: injected() })}
      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all"
    >
      <Wallet2 className="w-5 h-5" />
      <span>Connect Wallet</span>
    </button>
  );
}