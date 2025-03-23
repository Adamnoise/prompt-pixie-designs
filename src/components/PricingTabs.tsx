
import React, { useState } from 'react';
import PricingCard from './PricingCard';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import PopularBadge from './PopularBadge';
import AnimatedGradientText from './AnimatedGradientText';

interface PricingTabsProps {
  iteration: string;
}

const PricingTabs: React.FC<PricingTabsProps> = ({ iteration }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const handleBillingToggle = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly');
  };

  const getDiscountedPrice = (price: number) => {
    if (billingCycle === 'annual') {
      return Math.round(price * 0.9);
    }
    return price;
  };

  if (iteration === "1") {
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
  }

  if (iteration === "2") {
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
  }

  // Iteration 3 - Professional
  return (
    <div className="w-full">
      <div className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white rounded-xl border border-blue-100 p-8 mb-12">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-blue-100/30 to-transparent opacity-70"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative">
          <AnimatedGradientText className="text-3xl md:text-4xl font-bold text-center mb-3">
            Válaszd ki a megfelelő csomagot
          </AnimatedGradientText>
          
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Minden csomag tartalmazza az alapvető funkciókat, amelyekre szükséged van
          </p>
          
          <div className="flex items-center justify-center space-x-3 mb-10">
            <button 
              onClick={handleBillingToggle}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${billingCycle === 'monthly' ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              Havi
            </button>
            
            <div 
              className="relative inline-flex items-center cursor-pointer"
              onClick={handleBillingToggle}
            >
              <div className={`w-11 h-6 bg-gray-200 rounded-full transition-colors duration-300 ease-in-out ${billingCycle === 'annual' ? 'bg-blue-100' : ''}`}>
                <div className={`absolute top-1 left-1 bg-white w-4 h-4 rounded-full shadow-sm transform transition-transform duration-300 ${billingCycle === 'annual' ? 'translate-x-5' : ''}`}></div>
              </div>
            </div>
            
            <button 
              onClick={handleBillingToggle}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center ${billingCycle === 'annual' ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              <span>Éves</span>
              <span className="ml-1 bg-white text-blue-500 text-xs px-1.5 py-0.5 rounded-full font-medium">10% kedvezmény</span>
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <PricingCard
            title="Alap"
            description="Minden, amire egy kis csapatnak szüksége van"
            price={getDiscountedPrice(9)}
            billingCycle={billingCycle}
            features={[
              { text: "5 projekt", included: true },
              { text: "1 GB tárhely", included: true },
              { text: "Email támogatás", included: true },
              { text: "API hozzáférés", included: false },
              { text: "Dedikált szerver", included: false },
            ]}
            isPopular={false}
            level={3}
          />
          
          {/* Pro Plan */}
          <PricingCard
            title="Pro"
            description="Tökéletes növekvő vállalkozások számára"
            price={getDiscountedPrice(19)}
            billingCycle={billingCycle}
            features={[
              { text: "20 projekt", included: true },
              { text: "10 GB tárhely", included: true },
              { text: "Prioritásos támogatás", included: true },
              { text: "API hozzáférés", included: true },
              { text: "Dedikált szerver", included: false },
            ]}
            isPopular={true}
            level={3}
          />
          
          {/* Enterprise Plan */}
          <PricingCard
            title="Vállalati"
            description="Fejlett funkciók nagyobb szervezetek számára"
            price={getDiscountedPrice(49)}
            billingCycle={billingCycle}
            features={[
              { text: "Korlátlan projekt", included: true },
              { text: "100 GB tárhely", included: true },
              { text: "24/7 támogatás", included: true },
              { text: "API hozzáférés", included: true },
              { text: "Dedikált szerver", included: true },
            ]}
            isPopular={false}
            level={3}
          />
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-12 text-center"
      >
        <p className="text-sm text-gray-500">
          Minden csomag tartalmaz 14 napos pénzvisszafizetési garanciát. Nincs rejtett költség.
        </p>
      </motion.div>
    </div>
  );
};

export default PricingTabs;
