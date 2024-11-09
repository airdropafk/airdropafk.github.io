import React from 'react';
import { WagmiProvider } from 'wagmi';
import { config } from './config/wagmi';
import { Coins } from 'lucide-react';
import { WalletConnect } from './components/WalletConnect';
import { AirdropForm } from './components/AirdropForm';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Eligibility } from './components/Eligibility';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

function App() {
  return (
    <WagmiProvider config={config}>
      <div className="min-h-screen bg-white">
        <nav className="bg-white shadow-sm fixed w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Coins className="w-8 h-8 text-blue-600" />
                <span className="text-xl font-bold text-gray-900">AirDropper</span>
              </div>
              <div className="hidden md:flex space-x-8">
                <a href="#claim" className="text-gray-600 hover:text-gray-900">Claim</a>
                <a href="#stats" className="text-gray-600 hover:text-gray-900">Stats</a>
                <a href="#learn" className="text-gray-600 hover:text-gray-900">Learn</a>
                <a href="#faq" className="text-gray-600 hover:text-gray-900">FAQ</a>
              </div>
              <WalletConnect />
            </div>
          </div>
        </nav>

        <main className="pt-16">
          <Hero />
          <Stats />

          <div id="claim" className="bg-gray-50 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Claim Your Tokens</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Connect your wallet and claim your tokens if you're eligible.
                </p>
              </div>
              <div className="flex justify-center">
                <AirdropForm />
              </div>
            </div>
          </div>

          <Eligibility />
          <FAQ />
        </main>

        <Footer />
      </div>
    </WagmiProvider>
  );
}

export default App;