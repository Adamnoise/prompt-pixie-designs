
import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import PopularBadge from './PopularBadge';

interface Feature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  title: string;
  description?: string;
  price: number;
  billingCycle: 'monthly' | 'annual';
  features: Feature[];
  isPopular?: boolean;
  level: number;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  description,
  price,
  billingCycle,
  features,
  isPopular = false,
  level,
}) => {
  // Basic styling for level 1
  if (level === 1) {
    return (
      <div className="border border-gray-200 rounded-lg p-6 text-center">
        <h3 className="text-xl font-medium mb-4">{title}</h3>
        <p className="text-4xl font-bold mb-4">{price}€<span className="text-base font-normal text-gray-500">/hó</span></p>
        <ul className="mb-6 text-left space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              ) : (
                <X className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
              )}
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
        <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-md">Választás</button>
      </div>
    );
  }

  // Enhanced styling for level 2
  if (level === 2) {
    return (
      <div className={`border ${isPopular ? 'border-2 border-blue-500' : 'border-gray-200'} rounded-lg p-6 text-center relative transition-all duration-300 hover:shadow-md ${isPopular ? 'shadow-md' : ''}`}>
        {isPopular && <PopularBadge label="Leggyakrabban választott" className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />}
        <h3 className="text-xl font-medium mb-4">{title}</h3>
        <p className="text-4xl font-bold mb-4">{price}€<span className="text-base font-normal text-gray-500">/hó</span></p>
        {description && <p className="text-sm text-gray-500 mb-4">{description}</p>}
        <ul className="mb-6 text-left space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              {feature.included ? (
                <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
              ) : (
                <X className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
              )}
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
        <button className={`w-full py-2 px-4 ${isPopular ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-700 hover:bg-gray-800'} text-white rounded-md transition-colors duration-300`}>Választás</button>
      </div>
    );
  }

  // Professional styling for level 3
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`relative rounded-xl overflow-hidden ${isPopular ? 'ring-2 ring-blue-500 shadow-lg' : 'border border-gray-100 shadow-sm'} bg-white hover:shadow-xl transition-all duration-500`}
    >
      {isPopular && (
        <div className="absolute top-0 left-0 w-full">
          <PopularBadge label="választott" className="rounded-full bg-blue-500 text-white text-xs font-medium px-3 py-1 mx-auto" />
        </div>
      )}
      
      <div className="p-6 pt-8">
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold mb-1">{title}</h3>
          {description && <p className="text-sm text-gray-500">{description}</p>}
        </div>
        
        <div className="text-center mb-6">
          <p className="text-4xl font-bold">
            {price}€
            <span className="text-base font-normal text-gray-500 ml-1">/{billingCycle === 'monthly' ? 'hó' : 'év'}</span>
          </p>
        </div>
        
        <button className={`w-full py-2.5 px-4 mb-6 rounded-full font-medium transition-all duration-300 ${isPopular ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
          Próbáld ki ingyen
        </button>
        
        <div className="border-t border-gray-100 pt-6">
          <p className="text-sm font-medium text-gray-700 mb-4">A csomag tartalma:</p>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                {feature.included ? (
                  <Check className={`h-5 w-5 ${isPopular ? 'text-blue-500' : 'text-green-500'} mr-2 mt-0.5 flex-shrink-0`} />
                ) : (
                  <X className="h-5 w-5 text-gray-300 mr-2 mt-0.5 flex-shrink-0" />
                )}
                <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>{feature.text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingCard;
