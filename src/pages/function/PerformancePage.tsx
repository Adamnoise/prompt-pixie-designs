
import React, { useState, useCallback, useEffect, useMemo } from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

// Segédfüggvény a véletlenszerű adat generáláshoz
const generateRandomData = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    name: `Item ${i + 1}`,
    value: Math.floor(Math.random() * 1000),
    extraData: Math.floor(Math.random() * 500),
    category: ['A', 'B', 'C', 'D'][Math.floor(Math.random() * 4)],
  }));
};

// Nagy adathalmaz generálása a példákhoz
const largeDataset = generateRandomData(5000);

// Teljesítményadatok grafikonhoz
const performanceData = [
  { name: 'Oldal 1', optimized: 1250, unoptimized: 2800 },
  { name: 'Oldal 2', optimized: 980, unoptimized: 2100 },
  { name: 'Oldal 3', optimized: 1500, unoptimized: 3200 },
  { name: 'Oldal 4', optimized: 750, unoptimized: 1800 },
  { name: 'Oldal 5', optimized: 1100, unoptimized: 2350 },
  { name: 'Oldal 6', optimized: 850, unoptimized: 1950 },
];

// Generált adatok a memóriaszivárgás szimulálásához
let leakedData: any[] = [];

const PerformancePage = () => {
  // Alap állapotok
  const [basicItems, setBasicItems] = useState<any[]>([]);
  const [basicCount, setBasicCount] = useState(100);
  const [basicRenderTime, setBasicRenderTime] = useState(0);
  
  // Közepes állapotok
  const [intermediateItems, setIntermediateItems] = useState<any[]>([]);
  const [intermediateCount, setIntermediateCount] = useState(100);
  const [intermediateFilter, setIntermediateFilter] = useState('all');
  const [intermediateSearch, setIntermediateSearch] = useState('');
  const [intermediateRenderTime, setIntermediateRenderTime] = useState(0);
  
  // Haladó állapotok
  const [advancedItems, setAdvancedItems] = useState<any[]>([]);
  const [advancedCount, setAdvancedCount] = useState(100);
  const [advancedFilter, setAdvancedFilter] = useState('all');
  const [advancedSearch, setAdvancedSearch] = useState('');
  const [advancedRenderTime, setAdvancedRenderTime] = useState(0);
  const [isSimulatingLeak, setIsSimulatingLeak] = useState(false);
  const [memoryLeakCount, setMemoryLeakCount] = useState(0);
  
  // Alap adatok betöltése
  useEffect(() => {
    const start = performance.now();
    setBasicItems(largeDataset.slice(0, basicCount));
    const end = performance.now();
    setBasicRenderTime(end - start);
  }, [basicCount]);
  
  // Közepes adatok betöltése
  useEffect(() => {
    const start = performance.now();
    let filteredData = largeDataset.slice(0, intermediateCount);
    
    if (intermediateFilter !== 'all') {
      filteredData = filteredData.filter(item => item.category === intermediateFilter);
    }
    
    if (intermediateSearch) {
      filteredData = filteredData.filter(item => 
        item.name.toLowerCase().includes(intermediateSearch.toLowerCase())
      );
    }
    
    setIntermediateItems(filteredData);
    const end = performance.now();
    setIntermediateRenderTime(end - start);
  }, [intermediateCount, intermediateFilter, intermediateSearch]);
  
  // Haladó adatok betöltése és szűrése memoizációval
  const filteredAdvancedData = useMemo(() => {
    let filteredData = largeDataset.slice(0, advancedCount);
    
    if (advancedFilter !== 'all') {
      filteredData = filteredData.filter(item => item.category === advancedFilter);
    }
    
    if (advancedSearch) {
      filteredData = filteredData.filter(item => 
        item.name.toLowerCase().includes(advancedSearch.toLowerCase())
      );
    }
    
    return filteredData;
  }, [advancedCount, advancedFilter, advancedSearch]);
  
  // Mérjük a renderelési időt
  useEffect(() => {
    const start = performance.now();
    setAdvancedItems(filteredAdvancedData);
    const end = performance.now();
    setAdvancedRenderTime(end - start);
  }, [filteredAdvancedData]);
  
  // Memóriaszivárgás szimuláció
  useEffect(() => {
    if (isSimulatingLeak) {
      const interval = setInterval(() => {
        leakedData = [...leakedData, ...generateRandomData(1000)];
        setMemoryLeakCount(leakedData.length);
      }, 1000);
      
      return () => clearInterval(interval);
    }
  }, [isSimulatingLeak]);
  
  // Memóriaszivárgás megállítása és tisztítása
  const stopAndCleanLeak = () => {
    setIsSimulatingLeak(false);
    leakedData = [];
    setMemoryLeakCount(0);
  };
  
  // Optimalizált komponens, amely csak akkor renderelődik újra, ha a props változik
  const OptimizedListItem = React.memo(function OptimizedListItem({ item }: { item: any }) {
    return (
      <div className="border-b border-gray-200 py-2">
        <div className="font-medium">{item.name}</div>
        <div className="text-sm text-gray-500 flex justify-between">
          <span>Érték: {item.value}</span>
          <span>Kategória: {item.category}</span>
        </div>
      </div>
    );
  });
  
  // Nem optimalizált komponens - minden rendereléskor újrarenderelődik
  const UnoptimizedListItem = ({ item }: { item: any }) => {
    return (
      <div className="border-b border-gray-200 py-2">
        <div className="font-medium">{item.name}</div>
        <div className="text-sm text-gray-500 flex justify-between">
          <span>Érték: {item.value}</span>
          <span>Kategória: {item.category}</span>
        </div>
      </div>
    );
  };
  
  // Lassú függvény, ami fölösleges számítást végez
  const slowFunction = (count: number) => {
    let result = 0;
    for (let i = 0; i < count * 1000000; i++) {
      result += Math.random();
    }
    return result / (count * 1000000);
  };
  
  // UI Események - optimalizált verzió
  const handleSearchAdvanced = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setAdvancedSearch(e.target.value);
  }, []);
  
  const handleFilterAdvanced = useCallback((filter: string) => {
    setAdvancedFilter(filter);
  }, []);
  
  // UI Események - nem optimalizált verzió
  const handleSearchIntermediate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIntermediateSearch(e.target.value);
  };
  
  const handleFilterIntermediate = (filter: string) => {
    setIntermediateFilter(filter);
  };
  
  return (
    <PageLayout
      title="Teljesítmény-optimalizálás"
      description="Fedezd fel a különböző teljesítmény-optimalizálási technikákat és azok hatását a felhasználói élményre."
      prompt="Készíts egy oldalt, amely bemutatja a React teljesítmény-optimalizálási technikákat. Mutass három különböző megközelítést: 1) Optimalizálatlan komponensek és adatkezelés, 2) Alap optimalizálás useCallback és useMemo hookokkal, 3) Fejlett teljesítmény-optimalizálás virtualizációval, memoizációval és renderelési stratégiákkal."
      category="function"
    >
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="basic">Alap</TabsTrigger>
          <TabsTrigger value="intermediate">Közepes</TabsTrigger>
          <TabsTrigger value="advanced">Fejlett</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basic">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold mb-2">Optimalizálatlan komponensek</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Egyszerű, optimalizálatlan React komponensek, amelyek minden rendereléskor újrarajzolódnak.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-4">Teljesítmény mérése</h3>
                <div className="flex flex-wrap gap-4 mb-4">
                  <div>
                    <label htmlFor="basic-count" className="block text-sm font-medium text-gray-700 mb-1">
                      Elemek száma:
                    </label>
                    <select
                      id="basic-count"
                      className="border-gray-300 rounded-md w-full"
                      value={basicCount}
                      onChange={(e) => setBasicCount(Number(e.target.value))}
                    >
                      <option value="100">100 elem</option>
                      <option value="500">500 elem</option>
                      <option value="1000">1000 elem</option>
                      <option value="2000">2000 elem</option>
                    </select>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="text-sm font-medium text-gray-700 mb-1">Renderelési idő:</div>
                    <div className="text-2xl font-bold text-blue-600">
                      {basicRenderTime.toFixed(2)} ms
                    </div>
                  </div>
                </div>
                
                <div className="h-56 mb-6">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      width={500}
                      height={300}
                      data={[
                        { name: '100', time: 15 },
                        { name: '500', time: 45 },
                        { name: '1000', time: 180 },
                        { name: '2000', time: 350 },
                      ]}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" label={{ value: 'Elemek száma', position: 'insideBottom', offset: -5 }} />
                      <YAxis label={{ value: 'Renderelési idő (ms)', angle: -90, position: 'insideLeft' }} />
                      <Tooltip />
                      <Line type="monotone" dataKey="time" stroke="#3B82F6" activeDot={{ r: 8 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Nem optimalizált lista</h3>
                <p className="text-gray-600 mb-4">
                  Ez a lista nem használ memoizációt vagy virtualizációt, így minden elemváltozásnál újrarenderelődik.
                </p>
                
                <div className="border border-gray-200 rounded-lg h-64 overflow-y-auto p-4">
                  {basicItems.map((item) => (
                    <UnoptimizedListItem key={item.name} item={item} />
                  ))}
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <h4 className="font-medium text-yellow-800 mb-2">Teljesítmény problémák</h4>
                <ul className="list-disc pl-5 space-y-1 text-yellow-700 text-sm">
                  <li>Nincs memoizáció - az adatok minden rendereléskor újraszámolódnak</li>
                  <li>Minden komponens újrarenderelődik, ha az adatok változnak</li>
                  <li>Nagy adathalmazok esetén lassú renderelési idő</li>
                  <li>Nincs virtualizáció, így minden elem a DOM-ban van, még ha nem is látható</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-5">
              <h4 className="font-bold mb-3">Nem optimalizált megközelítés jellemzői:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Minden rendereléskor újraszámolódnak az adatok</li>
                <li>Nem használja a React.memo-t a fölösleges újrarenderelés elkerülésére</li>
                <li>Nincs virtualizáció a nagy listák kezeléséhez</li>
                <li>Felesleges renderelési ciklusok a szülő komponens változásakor</li>
                <li>Nincs adatérvénytelenítés és cache-elés</li>
                <li>Nem optimalizált eseménykezelők újbóli létrehozása minden rendereléskor</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="intermediate">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold mb-2">Alap optimalizált komponensek</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Alapszintű optimalizálás React.memo, useCallback és useMemo hookokkal.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-4">Szűrési lehetőségek</h3>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div>
                    <label htmlFor="intermediate-count" className="block text-sm font-medium text-gray-700 mb-1">
                      Elemek száma:
                    </label>
                    <select
                      id="intermediate-count"
                      className="border-gray-300 rounded-md w-full"
                      value={intermediateCount}
                      onChange={(e) => setIntermediateCount(Number(e.target.value))}
                    >
                      <option value="100">100 elem</option>
                      <option value="500">500 elem</option>
                      <option value="1000">1000 elem</option>
                      <option value="2000">2000 elem</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="intermediate-filter" className="block text-sm font-medium text-gray-700 mb-1">
                      Kategória szűrés:
                    </label>
                    <select
                      id="intermediate-filter"
                      className="border-gray-300 rounded-md w-full"
                      value={intermediateFilter}
                      onChange={(e) => handleFilterIntermediate(e.target.value)}
                    >
                      <option value="all">Összes kategória</option>
                      <option value="A">Kategória A</option>
                      <option value="B">Kategória B</option>
                      <option value="C">Kategória C</option>
                      <option value="D">Kategória D</option>
                    </select>
                  </div>
                  
                  <div className="flex-grow">
                    <label htmlFor="intermediate-search" className="block text-sm font-medium text-gray-700 mb-1">
                      Keresés:
                    </label>
                    <input
                      id="intermediate-search"
                      type="text"
                      className="border-gray-300 rounded-md w-full"
                      placeholder="Keresés..."
                      value={intermediateSearch}
                      onChange={handleSearchIntermediate}
                    />
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium text-blue-700">Teljesítmény metrikák</h4>
                    <div className="text-sm text-blue-600 font-medium">
                      {intermediateRenderTime.toFixed(2)} ms
                    </div>
                  </div>
                  <p className="text-sm text-blue-600 mt-1">
                    {intermediateItems.length} elem megjelenítve {intermediateCount} elemből
                  </p>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Optimalizált lista React.memo-val</h3>
                <p className="text-gray-600 mb-4">
                  Ez a lista React.memo-t használ a lista elemek újrarenderelésének elkerülésére, ha a props nem változnak.
                </p>
                
                <div className="border border-gray-200 rounded-lg h-64 overflow-y-auto p-4">
                  {intermediateItems.map((item) => (
                    <OptimizedListItem key={item.name} item={item} />
                  ))}
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-medium text-blue-800 mb-2">Alkalmazott optimalizálások</h4>
                <ul className="list-disc pl-5 space-y-1 text-blue-700 text-sm">
                  <li>React.memo használata a fölösleges újrarenderelések elkerülésére</li>
                  <li>Szűrt adatok cache-elése az újraszámolások elkerülésére</li>
                  <li>Hatékonyabb useState és useEffect használat</li>
                  <li>Adat előszűrése a renderelés előtt</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-5">
              <h4 className="font-bold mb-3">Alap optimalizált megközelítés jellemzői:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>React.memo használata a komponensek memoizálására</li>
                  <li>useCallback a függvények újradefiniálásának elkerülésére</li>
                  <li>useMemo a drága számítások eredményének cache-elésére</li>
                  <li>Adatok szűrése renderelés előtt</li>
                </ul>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Optimalizált újrarenderelési folyamatok</li>
                  <li>Jobb kezelése a felhasználói interakcióknak</li>
                  <li>Megfelelő komponens összetétel a props-ok minimalizálására</li>
                  <li>Kontextusok okos használata a prop-drilling elkerülésére</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="advanced">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold mb-2">Fejlett teljesítmény-optimalizálás</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Haladó technikák, mint a virtualizáció, a memoizáció és a teljesítmény-monitorozás.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">Adatkezelés és teljesítmény</h3>
                  
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div>
                      <label htmlFor="advanced-count" className="block text-sm font-medium text-gray-700 mb-1">
                        Elemek száma:
                      </label>
                      <select
                        id="advanced-count"
                        className="border-gray-300 rounded-md w-full"
                        value={advancedCount}
                        onChange={(e) => setAdvancedCount(Number(e.target.value))}
                      >
                        <option value="100">100 elem</option>
                        <option value="500">500 elem</option>
                        <option value="1000">1000 elem</option>
                        <option value="2000">2000 elem</option>
                        <option value="5000">5000 elem</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="advanced-filter" className="block text-sm font-medium text-gray-700 mb-1">
                        Kategória:
                      </label>
                      <select
                        id="advanced-filter"
                        className="border-gray-300 rounded-md w-full"
                        value={advancedFilter}
                        onChange={(e) => handleFilterAdvanced(e.target.value)}
                      >
                        <option value="all">Összes kategória</option>
                        <option value="A">Kategória A</option>
                        <option value="B">Kategória B</option>
                        <option value="C">Kategória C</option>
                        <option value="D">Kategória D</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="advanced-search" className="block text-sm font-medium text-gray-700 mb-1">
                      Keresés:
                    </label>
                    <input
                      id="advanced-search"
                      type="text"
                      className="border-gray-300 rounded-md w-full"
                      placeholder="Keresés..."
                      value={advancedSearch}
                      onChange={handleSearchAdvanced}
                    />
                  </div>
                  
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-green-700">Teljesítmény metrikák</h4>
                      <div className="text-sm text-green-600 font-medium">
                        {advancedRenderTime.toFixed(2)} ms
                      </div>
                    </div>
                    <p className="text-sm text-green-600 mt-1">
                      {advancedItems.length} elem kezelése {advancedCount} elemből
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-4">Teljesítmény összehasonlítás</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        width={500}
                        height={300}
                        data={performanceData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis label={{ value: 'Betöltési idő (ms)', angle: -90, position: 'insideLeft' }} />
                        <Tooltip />
                        <Area type="monotone" dataKey="unoptimized" stroke="#ef4444" fill="#fee2e2" name="Nem optimalizált" />
                        <Area type="monotone" dataKey="optimized" stroke="#22c55e" fill="#dcfce7" name="Optimalizált" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Virtualizált lista demostrációja</h3>
                <p className="text-gray-600 mb-4">
                  Ez a lista csak a látható elemeket rendereli, így nagy adathalmazok esetén is gyors marad.
                </p>
                
                <div className="border border-gray-200 rounded-lg h-64 overflow-y-auto p-4">
                  {/* Itt használnánk a react-window vagy hasonló virtualizált lista komponenst */}
                  {/* Helyette most csak egy minta listát mutatunk, limitált elemszámmal */}
                  {advancedItems.slice(0, 20).map((item) => (
                    <OptimizedListItem key={item.name} item={item} />
                  ))}
                  {advancedItems.length > 20 && (
                    <div className="py-2 text-center text-gray-500 text-sm">
                      Virtualizált listában a többi {advancedItems.length - 20} elem csak akkor renderelődne, amikor láthatóvá válik.
                    </div>
                  )}
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Memória management demonstráció</h3>
                <p className="text-gray-600 mb-4">
                  Memóriaszivárgás szimulációja és kezelése. A gomb kattintásra adatokat adunk a memóriához, amelyek később nincsenek megfelelően kitakarítva.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-4">
                  <button
                    className={`px-4 py-2 rounded ${isSimulatingLeak ? 'bg-red-600 hover:bg-red-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
                    onClick={() => setIsSimulatingLeak(!isSimulatingLeak)}
                  >
                    {isSimulatingLeak ? 'Memóriaszivárgás leállítása' : 'Memóriaszivárgás szimulálása'}
                  </button>
                  
                  {isSimulatingLeak && (
                    <button
                      className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded"
                      onClick={stopAndCleanLeak}
                    >
                      Memória kitakarítása
                    </button>
                  )}
                </div>
                
                {isSimulatingLeak && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <h4 className="font-medium text-red-700">Memóriaszivárgás aktív!</h4>
                      <div className="text-sm text-red-600 font-medium">
                        {memoryLeakCount} elem a memóriában
                      </div>
                    </div>
                    <p className="text-sm text-red-600 mt-1">
                      A szimuláció másodpercenként 1000 elemet ad a memóriához egy nem megfelelően kezelt változóban.
                    </p>
                  </div>
                )}
              </div>
              
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-medium text-green-800 mb-2">Fejlett optimalizálási technikák</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <ul className="list-disc pl-5 space-y-1 text-green-700 text-sm">
                    <li>Virtualizált lista, csak a látható elemek renderelésére</li>
                    <li>useMemo az adatfeldolgozás optimalizálására</li>
                    <li>useCallback a függvények stabil referenciájához</li>
                    <li>Memóriaszivárgások helyes kezelése</li>
                  </ul>
                  <ul className="list-disc pl-5 space-y-1 text-green-700 text-sm">
                    <li>Code splitting és lazy loading a kezdeti betöltés gyorsításához</li>
                    <li>React.memo használata a gyermek komponensek memoizálására</li>
                    <li>Renderelési időzítés és optimalizálás</li>
                    <li>Fejlett debouncing és throttling technikák</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h4 className="font-bold mb-4">Fejlett teljesítmény-optimalizálás jellemzői:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-3 text-gray-800">Adatkezelés és számítás</h5>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Reaktív adatfrissítés Query hook-okkal</li>
                    <li>Virtualizált lista megjelenítés (react-window, react-virtualized)</li>
                    <li>Progresszív feldolgozás nagy adathalmazokra</li>
                    <li>Web workers a blokkoló számítások elkerülésére</li>
                    <li>Memoizáció és osztott számítás</li>
                    <li>Mérési alapú adatoptimalizálás</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-3 text-gray-800">Renderelés és DOM</h5>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Renderelési sorrend és batch-elés optimalizálása</li>
                    <li>Profiler a renderelési idők mérésére</li>
                    <li>Memória szivárgás elkerülése</li>
                    <li>Lazy loading komponensek és funkciók</li>
                    <li>Gondos DOM manipuláció és CSS optimalizálás</li>
                    <li>Animációk hardver-gyorsítása</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default PerformancePage;
