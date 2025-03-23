
import React from 'react';

interface BillingToggleProps {
  billingCycle: 'monthly' | 'annual';
  onToggle: () => void;
}

const BillingToggle: React.FC<BillingToggleProps> = ({ billingCycle, onToggle }) => {
  return (
    <div className="flex items-center justify-center space-x-3 mb-10">
      <button 
        onClick={onToggle}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${billingCycle === 'monthly' ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
      >
        Havi
      </button>
      
      <div 
        className="relative inline-flex items-center cursor-pointer"
        onClick={onToggle}
      >
        <div className={`w-11 h-6 bg-gray-200 rounded-full transition-colors duration-300 ease-in-out ${billingCycle === 'annual' ? 'bg-blue-100' : ''}`}>
          <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full shadow-sm transform transition-transform duration-300 ${billingCycle === 'annual' ? 'translate-x-5' : ''}`}></div>
        </div>
      </div>
      
      <button 
        onClick={onToggle}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center ${billingCycle === 'annual' ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
      >
        <span>Éves</span>
        <span className="ml-1 bg-white text-blue-500 text-xs px-1.5 py-0.5 rounded-full font-medium">10% kedvezmény</span>
      </button>
    </div>
  );
};

export default BillingToggle;
