
import React from 'react';
import { Check } from 'lucide-react';
import PopularBadge from '../PopularBadge';

const StandardPricingTab = () => {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-center mb-4">Árazási csomagok</h2>
      <p className="text-center text-gray-600 mb-8">Válaszd ki a számodra megfelelő csomagot</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300">
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
          <button className="w-full py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors duration-300">Választás</button>
        </div>
        
        <div className="border-2 border-blue-500 rounded-lg p-6 text-center relative shadow-md hover:shadow-lg transition-shadow duration-300">
          <PopularBadge label="Leggyakrabban választott" className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
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
          <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">Választás</button>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300">
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
          <button className="w-full py-2 px-4 bg-gray-700 text-white rounded-md hover:bg-gray-800 transition-colors duration-300">Választás</button>
        </div>
      </div>
      
      <div className="border border-gray-200 rounded-lg p-6 mt-12">
        <h3 className="text-xl font-bold mb-6 text-center">Funkciók összehasonlítása</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="border-b">
                <th className="text-left py-3 px-4">Funkció</th>
                <th className="text-center py-3 px-4">Alap</th>
                <th className="text-center py-3 px-4">Pro</th>
                <th className="text-center py-3 px-4">Vállalati</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="py-3 px-4">Projektek száma</td>
                <td className="text-center py-3 px-4">5</td>
                <td className="text-center py-3 px-4">20</td>
                <td className="text-center py-3 px-4">Korlátlan</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">Tárhely</td>
                <td className="text-center py-3 px-4">1 GB</td>
                <td className="text-center py-3 px-4">10 GB</td>
                <td className="text-center py-3 px-4">100 GB</td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">API hozzáférés</td>
                <td className="text-center py-3 px-4">-</td>
                <td className="text-center py-3 px-4">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
                <td className="text-center py-3 px-4">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
              <tr className="border-b">
                <td className="py-3 px-4">Támogatás</td>
                <td className="text-center py-3 px-4">Email</td>
                <td className="text-center py-3 px-4">Prioritásos</td>
                <td className="text-center py-3 px-4">24/7</td>
              </tr>
              <tr>
                <td className="py-3 px-4">Dedikált szerver</td>
                <td className="text-center py-3 px-4">-</td>
                <td className="text-center py-3 px-4">-</td>
                <td className="text-center py-3 px-4">
                  <Check className="h-5 w-5 text-green-500 mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StandardPricingTab;
