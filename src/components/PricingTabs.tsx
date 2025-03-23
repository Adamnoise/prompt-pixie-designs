
import React from 'react';
import BasicPricingTab from './pricing/BasicPricingTab';
import StandardPricingTab from './pricing/StandardPricingTab';
import ProfessionalPricingTab from './pricing/ProfessionalPricingTab';

interface PricingTabsProps {
  iteration: string;
}

const PricingTabs: React.FC<PricingTabsProps> = ({ iteration }) => {
  if (iteration === "1") {
    return <BasicPricingTab />;
  }

  if (iteration === "2") {
    return <StandardPricingTab />;
  }

  // Iteration 3 - Professional
  return <ProfessionalPricingTab />;
};

export default PricingTabs;
