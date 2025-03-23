
import React from 'react';
import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';

const DevelopmentBestPractices = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="mx-auto max-w-[800px] mt-8">
      <motion.div 
        className="grid md:grid-cols-2 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div className="bg-white rounded-lg border border-border p-6 shadow-sm" variants={item}>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
              <path d="m9 12 2 2 4-4"></path>
            </svg>
            Hatékony iteráció
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <Check className="text-green-500 mt-0.5 h-[18px] w-[18px]" />
              <span>Egy iterációban csak néhány aspektusra fókuszálj</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-500 mt-0.5 h-[18px] w-[18px]" />
              <span>Hivatkozz az előző eredményre konkrét részletekkel</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-500 mt-0.5 h-[18px] w-[18px]" />
              <span>Használj pontos leírásokat a módosításokhoz</span>
            </li>
            <li className="flex items-start gap-2">
              <Check className="text-green-500 mt-0.5 h-[18px] w-[18px]" />
              <span>Tartsd meg, ami jó, és csak azt változtasd, ami szükséges</span>
            </li>
          </ul>
        </motion.div>
        
        <motion.div className="bg-white rounded-lg border border-border p-6 shadow-sm" variants={item}>
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-500">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="15" y1="9" x2="9" y2="15"></line>
              <line x1="9" y1="9" x2="15" y2="15"></line>
            </svg>
            Kerülendő hibák
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <X className="text-red-500 mt-0.5 h-[18px] w-[18px]" />
              <span>Túl sok változtatás kérése egyszerre</span>
            </li>
            <li className="flex items-start gap-2">
              <X className="text-red-500 mt-0.5 h-[18px] w-[18px]" />
              <span>Homályos visszajelzések ("tedd szebbé", "modernebb legyen")</span>
            </li>
            <li className="flex items-start gap-2">
              <X className="text-red-500 mt-0.5 h-[18px] w-[18px]" />
              <span>Az eredeti prompt teljes újraírása minden iterációban</span>
            </li>
            <li className="flex items-start gap-2">
              <X className="text-red-500 mt-0.5 h-[18px] w-[18px]" />
              <span>Ellentmondásos utasítások adása különböző iterációkban</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default DevelopmentBestPractices;
