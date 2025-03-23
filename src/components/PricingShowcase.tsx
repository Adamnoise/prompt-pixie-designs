
import React, { useState } from 'react';
import PricingTabs from './PricingTabs';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PricingShowcase = () => {
  const [activeIteration, setActiveIteration] = useState('1');

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <Tabs 
        defaultValue="1" 
        value={activeIteration} 
        onValueChange={setActiveIteration}
        className="w-full"
      >
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Pricing Quality Showcase
          </h1>
          <p className="text-muted-foreground text-center max-w-2xl mb-8">
            Visualize how design sophistication transforms user experience through three iterations
            of a pricing page, from basic to professional quality.
          </p>
          
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger 
              value="1" 
              className={`rounded-l-md ${activeIteration === '1' ? 'bg-primary text-white' : ''}`}
            >
              1. Basic
            </TabsTrigger>
            <TabsTrigger 
              value="2" 
              className={activeIteration === '2' ? 'bg-primary text-white' : ''}
            >
              2. Standard
            </TabsTrigger>
            <TabsTrigger 
              value="3" 
              className={`rounded-r-md ${activeIteration === '3' ? 'bg-primary text-white' : ''}`}
            >
              3. Professional
            </TabsTrigger>
          </TabsList>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIteration}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <TabsContent value="1" className="w-full mt-0">
              <div className="border border-gray-200 rounded-lg p-6 mb-6">
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Task:</strong> Create a pricing page with three different packages.
                </p>
                <div className="flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <p className="text-sm text-gray-600">Basic Design Quality</p>
                </div>
              </div>
              <PricingTabs iteration="1" />
            </TabsContent>

            <TabsContent value="2" className="w-full mt-0">
              <div className="border border-gray-200 rounded-lg p-6 mb-6">
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Task:</strong> Create a pricing page with three packages (Basic, Pro, Enterprise).
                  The Basic package is €9/month, Pro is €19/month, and Enterprise is €49/month. Each package 
                  should have a "Most Popular" label on the Pro tier. Also add a comparison table below 
                  the packages that details the features.
                </p>
                <div className="flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                  <p className="text-sm text-gray-600">Standard Design Quality</p>
                </div>
              </div>
              <PricingTabs iteration="2" />
            </TabsContent>

            <TabsContent value="3" className="w-full mt-0">
              <div className="border border-gray-200 rounded-lg bg-gradient-to-b from-white to-gray-50 shadow-sm p-6 mb-6">
                <p className="text-sm text-gray-700 mb-4">
                  <strong>Task:</strong> Create a pricing page with three packages (Basic, Pro, Enterprise). 
                  Use a blue gradient background with rounded corners and subtle shadows. The Pro package should 
                  stand out with highlighted borders. Add a toggle for monthly/annual billing with a 10% discount 
                  for annual plans. Include "Try for free" buttons and clear feature lists for each package. 
                  Make it responsive and add smooth animations.
                </p>
                <div className="flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                  <p className="text-sm text-gray-700">Professional Design Quality</p>
                </div>
              </div>
              <PricingTabs iteration="3" />
            </TabsContent>
          </motion.div>
        </AnimatePresence>
      </Tabs>
    </div>
  );
};

export default PricingShowcase;
