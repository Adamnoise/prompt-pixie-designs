
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
            Árazási lehetőségek bemutatása
          </h1>
          <p className="text-muted-foreground text-center max-w-2xl mb-8">
            Figyeld meg, hogyan alakítja át a tervezési minőség a felhasználói élményt három különböző
            árazási oldal-változaton keresztül, az alapvetőtől a professzionális minőségig.
          </p>
          
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger 
              value="1" 
              className={`rounded-l-md ${activeIteration === '1' ? 'bg-primary text-white' : ''}`}
            >
              1. Alap
            </TabsTrigger>
            <TabsTrigger 
              value="2" 
              className={activeIteration === '2' ? 'bg-primary text-white' : ''}
            >
              2. Normál
            </TabsTrigger>
            <TabsTrigger 
              value="3" 
              className={`rounded-r-md ${activeIteration === '3' ? 'bg-primary text-white' : ''}`}
            >
              3. Professzionális
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
                  <strong>Feladat:</strong> Készíts egy árazási oldalt három különböző csomaggal.
                </p>
                <div className="flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                  <p className="text-sm text-gray-600">Alap tervezési minőség</p>
                </div>
              </div>
              <PricingTabs iteration="1" />
            </TabsContent>

            <TabsContent value="2" className="w-full mt-0">
              <div className="border border-gray-200 rounded-lg p-6 mb-6">
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Feladat:</strong> Készíts egy árazási oldalt három csomaggal (Alap, Pro, Vállalati).
                  Az Alap csomag legyen 9€/hó, a Pro 19€/hó, a Vállalati pedig 49€/hó. Minden csomagnál legyen egy 
                  "Leggyakrabban választott" jelölés a Pro csomagnál. Adj hozzá egy összehasonlító táblázatot is 
                  a csomagok alatt, amely részletezi a funkciókat.
                </p>
                <div className="flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-yellow-500 mr-2"></div>
                  <p className="text-sm text-gray-600">Normál tervezési minőség</p>
                </div>
              </div>
              <PricingTabs iteration="2" />
            </TabsContent>

            <TabsContent value="3" className="w-full mt-0">
              <div className="border border-gray-200 rounded-lg bg-gradient-to-b from-white to-gray-50 shadow-sm p-6 mb-6">
                <p className="text-sm text-gray-700 mb-4">
                  <strong>Feladat:</strong> Készíts egy árazási oldalt három csomaggal (Alap, Pro, Vállalati).
                  Használj kék színátmenetes hátteret lekerekített sarkokkal és finom árnyékokkal. A Pro csomag emelkedjen 
                  ki kiemelt szegéllyel. Legyen váltógomb a havi/éves számlázás között, 10% kedvezménnyel az éves csomagokra. 
                  Tartalmazza a "Próbáld ki ingyen" gombokat és áttekinthető funkciólista minden csomaghoz. 
                  Legyen reszponzív és tartalmazzon finom animációkat.
                </p>
                <div className="flex items-center justify-center">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                  <p className="text-sm text-gray-700">Professzionális tervezési minőség</p>
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
