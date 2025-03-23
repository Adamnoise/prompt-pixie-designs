
import React from 'react';
import { Check } from 'lucide-react';

const BasicPricingTab = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center mb-4">Árazási csomagok</h2>
      <p className="text-center text-gray-600 mb-8">Válaszd ki a számodra megfelelő csomagot</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border border-gray-200 rounded-lg p-6 text-center">
          <h3 className="text-xl font-medium mb-4">Alap</h3>
          <p className="text-4xl font-bold mb-4">9€<span className="text-base font-normal text-gray-500">/hó</span></p>
          <ul className="mb-6 text-left space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>5 projekt</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>1 GB tárhely</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Email támogatás</span>
            </li>
          </ul>
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md">Választás</button>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-6 text-center">
          <h3 className="text-xl font-medium mb-4">Pro</h3>
          <p className="text-4xl font-bold mb-4">19€<span className="text-base font-normal text-gray-500">/hó</span></p>
          <ul className="mb-6 text-left space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>20 projekt</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>10 GB tárhely</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Prioritásos támogatás</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>API hozzáférés</span>
            </li>
          </ul>
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md">Választás</button>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-6 text-center">
          <h3 className="text-xl font-medium mb-4">Vállalati</h3>
          <p className="text-4xl font-bold mb-4">49€<span className="text-base font-normal text-gray-500">/hó</span></p>
          <ul className="mb-6 text-left space-y-2">
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Korlátlan projekt</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>100 GB tárhely</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>24/7 támogatás</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>API hozzáférés</span>
            </li>
            <li className="flex items-start">
              <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              <span>Dedikált szerver</span>
            </li>
          </ul>
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md">Választás</button>
        </div>
      </div>
    </div>
  );
};

export default BasicPricingTab;
