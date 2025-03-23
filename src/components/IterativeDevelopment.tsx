
import React from 'react';
import { motion } from 'framer-motion';

const IterativeDevelopment = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="mx-auto max-w-[800px] bg-white rounded-lg border border-border p-6 shadow-sm mt-8 text-left">
      <h3 className="text-xl font-semibold mb-4">Az iteratív fejlesztés folyamata</h3>
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-100"></div>
        <motion.div 
          className="space-y-8"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="flex gap-4" variants={item}>
            <div className="relative z-10 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">1</div>
            <div className="flex-1 pt-3">
              <h4 className="font-medium text-lg mb-2">Kezdeti prompt</h4>
              <p className="text-muted-foreground">Kezdd egy egyszerű, de konkrét prompttal, amely leírja az alapvető igényeidet. Ne próbálj túl sok részletet belezsúfolni az első körben.</p>
            </div>
          </motion.div>
          
          <motion.div className="flex gap-4" variants={item}>
            <div className="relative z-10 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">2</div>
            <div className="flex-1 pt-3">
              <h4 className="font-medium text-lg mb-2">Értékelés</h4>
              <p className="text-muted-foreground">Értékeld az eredményt: mi tetszik, mi nem, és mi hiányzik. Készíts jegyzeteket a következő iterációhoz.</p>
            </div>
          </motion.div>
          
          <motion.div className="flex gap-4" variants={item}>
            <div className="relative z-10 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">3</div>
            <div className="flex-1 pt-3">
              <h4 className="font-medium text-lg mb-2">Finomítás</h4>
              <p className="text-muted-foreground">Készíts egy új promptot, amely tartalmazza az eredeti kérést, valamint a konkrét módosításokat és finomításokat. Légy specifikus a változtatásokkal kapcsolatban.</p>
            </div>
          </motion.div>
          
          <motion.div className="flex gap-4" variants={item}>
            <div className="relative z-10 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">4</div>
            <div className="flex-1 pt-3">
              <h4 className="font-medium text-lg mb-2">Ismétlés</h4>
              <p className="text-muted-foreground">Ismételd a 2. és 3. lépést, amíg el nem éred a kívánt eredményt. Minden iterációval egyre specifikusabb lehetsz.</p>
            </div>
          </motion.div>
          
          <motion.div className="flex gap-4" variants={item}>
            <div className="relative z-10 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xl">5</div>
            <div className="flex-1 pt-3">
              <h4 className="font-medium text-lg mb-2">Véglegesítés</h4>
              <p className="text-muted-foreground">Az utolsó iterációban kérhetsz apró finomításokat, vagy exportálhatod a kódot további testreszabáshoz.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default IterativeDevelopment;
