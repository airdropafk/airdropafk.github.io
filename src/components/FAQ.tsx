import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do I claim my tokens?',
    answer: 'Connect your eligible wallet and click the claim button. The tokens will be automatically transferred to your wallet after verification.',
  },
  {
    question: 'When do tokens become transferable?',
    answer: 'Tokens will be immediately transferable upon successful claim. Make sure to add the token contract to your wallet to view the balance.',
  },
  {
    question: 'What if I have multiple eligible wallets?',
    answer: 'The airdrop is limited to one claim per wallet address. Choose your wallet with the highest eligibility score for the best rewards.',
  },
  {
    question: 'How long does the claim period last?',
    answer: 'The claim period lasts for 30 days from the launch date. Make sure to claim your tokens before the deadline.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <div className="bg-white py-16" id="faq">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">Everything you need to know about the token airdrop</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}