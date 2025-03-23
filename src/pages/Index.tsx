
import React from 'react';
import PricingShowcase from '@/components/PricingShowcase';
import { motion } from 'framer-motion';
import IterativeDevelopment from '@/components/IterativeDevelopment';
import DevelopmentBestPractices from '@/components/DevelopmentBestPractices';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="pt-8 pb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
            Design Quality Matters
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            See how the same feature can be built with different levels of design sophistication.
          </p>
        </motion.div>
      </header>

      <main className="container mx-auto px-4 pb-20">
        <PricingShowcase />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-center mt-20 mb-8">Az iteratív fejlesztés művészete</h2>
          
          <IterativeDevelopment />
          <DevelopmentBestPractices />
        </motion.div>
      </main>

      <footer className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          <p>Designed to showcase the impact of design quality on user experience.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
