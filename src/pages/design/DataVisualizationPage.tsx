
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { 
  BarChart, Bar, 
  LineChart, Line, 
  AreaChart, Area,
  PieChart, Pie, Cell, 
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  CartesianGrid, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, Sector
} from 'recharts';

// Demo adat generálása
const generateMonthlyData = () => {
  return [
    { name: 'Jan', value: Math.floor(Math.random() * 1000) },
    { name: 'Feb', value: Math.floor(Math.random() * 1000) },
    { name: 'Már', value: Math.floor(Math.random() * 1000) },
    { name: 'Ápr', value: Math.floor(Math.random() * 1000) },
    { name: 'Máj', value: Math.floor(Math.random() * 1000) },
    { name: 'Jún', value: Math.floor(Math.random() * 1000) },
    { name: 'Júl', value: Math.floor(Math.random() * 1000) },
    { name: 'Aug', value: Math.floor(Math.random() * 1000) },
    { name: 'Szep', value: Math.floor(Math.random() * 1000) },
    { name: 'Okt', value: Math.floor(Math.random() * 1000) },
    { name: 'Nov', value: Math.floor(Math.random() * 1000) },
    { name: 'Dec', value: Math.floor(Math.random() * 1000) },
  ];
};

const generateCategoryData = () => {
  return [
    { name: 'A kategória', value: Math.floor(Math.random() * 1000) },
    { name: 'B kategória', value: Math.floor(Math.random() * 1000) },
    { name: 'C kategória', value: Math.floor(Math.random() * 1000) },
    { name: 'D kategória', value: Math.floor(Math.random() * 1000) },
    { name: 'E kategória', value: Math.floor(Math.random() * 1000) },
  ];
};

const generateMultiSeriesData = () => {
  return [
    { name: 'Jan', a: Math.floor(Math.random() * 1000), b: Math.floor(Math.random() * 1000), c: Math.floor(Math.random() * 1000) },
    { name: 'Feb', a: Math.floor(Math.random() * 1000), b: Math.floor(Math.random() * 1000), c: Math.floor(Math.random() * 1000) },
    { name: 'Már', a: Math.floor(Math.random() * 1000), b: Math.floor(Math.random() * 1000), c: Math.floor(Math.random() * 1000) },
    { name: 'Ápr', a: Math.floor(Math.random() * 1000), b: Math.floor(Math.random() * 1000), c: Math.floor(Math.random() * 1000) },
    { name: 'Máj', a: Math.floor(Math.random() * 1000), b: Math.floor(Math.random() * 1000), c: Math.floor(Math.random() * 1000) },
    { name: 'Jún', a: Math.floor(Math.random() * 1000), b: Math.floor(Math.random() * 1000), c: Math.floor(Math.random() * 1000) },
  ];
};

const generateRadarData = () => {
  return [
    { subject: 'Matematika', A: Math.floor(Math.random() * 100), B: Math.floor(Math.random() * 100), fullMark: 100 },
    { subject: 'Nyelv', A: Math.floor(Math.random() * 100), B: Math.floor(Math.random() * 100), fullMark: 100 },
    { subject: 'Történelem', A: Math.floor(Math.random() * 100), B: Math.floor(Math.random() * 100), fullMark: 100 },
    { subject: 'Fizika', A: Math.floor(Math.random() * 100), B: Math.floor(Math.random() * 100), fullMark: 100 },
    { subject: 'Biológia', A: Math.floor(Math.random() * 100), B: Math.floor(Math.random() * 100), fullMark: 100 },
    { subject: 'Kémia', A: Math.floor(Math.random() * 100), B: Math.floor(Math.random() * 100), fullMark: 100 },
  ];
};

const generateDashboardData = () => {
  return {
    sales: generateMonthlyData(),
    visitors: [
      { name: 'Direkt', value: 4000 },
      { name: 'Organikus', value: 3000 },
      { name: 'Közösségi', value: 2000 },
      { name: 'Hirdetés', value: 2780 },
      { name: 'Egyéb', value: 1890 },
    ],
    comparison: generateMultiSeriesData(),
    performance: generateRadarData(),
  };
};

const BASIC_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];
const INTERMEDIATE_COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#0088fe', '#00C49F'];
const ADVANCED_COLORS = [
  '#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#9467bd', 
  '#8c564b', '#e377c2', '#7f7f7f', '#bcbd22', '#17becf'
];

const DataVisualizationPage = () => {
  const [basicData] = useState(generateCategoryData());
  const [monthlyData] = useState(generateMonthlyData());
  const [intermediateData] = useState({
    monthly: generateMonthlyData(),
    categories: generateCategoryData(),
    multiSeries: generateMultiSeriesData(),
  });
  const [dashboardData] = useState(generateDashboardData());
  
  // Pie chart active sector
  const [activePieIndex, setActivePieIndex] = useState(0);

  const renderActiveShape = (props: any) => {
    const RADIAN = Math.PI / 180;
    const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
      <g>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />
        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${payload.name}`}</text>
        <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
          {`(${(percent * 100).toFixed(2)}%)`}
        </text>
      </g>
    );
  };
  
  return (
    <PageLayout
      title="Adatvizualizáció"
      description="Fedezd fel, hogyan fejlődik az adatvizualizáció a különböző fejlesztési szinteken."
      prompt="Készíts egy oldalt, amely bemutatja a különböző adatvizualizációs technikákat. Mutass be három szintet: 1) Egyszerű statikus grafikonok, 2) Interaktív és reszponzív adatvizualizáció, 3) Komplex, több adatforrást ötvöző dashboard elemek. Minden szintnél mutass példákat különböző grafikontípusokra (oszlopdiagram, kördiagram, vonaldiagram, stb.)."
      category="design"
    >
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="basic">Egyszerű</TabsTrigger>
          <TabsTrigger value="intermediate">Interaktív</TabsTrigger>
          <TabsTrigger value="advanced">Komplex</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basic">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold mb-2">Egyszerű adatvizualizáció</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Alapvető statikus grafikonok minimális interakcióval, amelyek egyszerű adatokat jelenítenek meg.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                <div>
                  <h3 className="text-lg font-bold mb-4">Oszlopdiagram</h3>
                  <p className="text-gray-600 mb-6">
                    Egyszerű oszlopdiagram a kategóriák értékeinek összehasonlításához.
                  </p>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={basicData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8884d8" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-4">Vonaldiagram</h3>
                  <p className="text-gray-600 mb-6">
                    Egyszerű vonaldiagram az időbeli trendek megjelenítéséhez.
                  </p>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={monthlyData}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#8884d8" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Kördiagram</h3>
                <p className="text-gray-600 mb-6">
                  Egyszerű kördiagram a kategóriák arányainak szemléltetéséhez.
                </p>
                <div className="h-80 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={basicData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {basicData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={BASIC_COLORS[index % BASIC_COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-3">Egyszerű adatvizualizáció jellemzői:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Statikus, alapszintű grafikonok</li>
                  <li>Minimális interaktivitás (alapvető tooltip megjelenítés)</li>
                  <li>Egyszerű színpaletta</li>
                  <li>Alapvető tengelyek és feliratcímkék</li>
                  <li>Egyszintű adatmegjelenítés</li>
                  <li>Korlátozott testreszabhatóság</li>
                  <li>Alapvető Recharts library használata</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="intermediate">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold mb-2">Interaktív adatvizualizáció</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Fejlettebb, interaktív grafikonok, amelyek lehetővé teszik a felhasználóknak az adatok jobb felfedezését.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                <div>
                  <h3 className="text-lg font-bold mb-4">Interaktív vonaldiagram</h3>
                  <p className="text-gray-600 mb-4">
                    Kattintson a jelmagyarázat elemeire az adatsorok elrejtéséhez vagy megjelenítéséhez.
                  </p>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={intermediateData.multiSeries}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                          }} 
                          labelStyle={{ fontWeight: 'bold', marginBottom: '5px' }}
                        />
                        <Legend />
                        <Line type="monotone" dataKey="a" stroke={INTERMEDIATE_COLORS[0]} name="A sorozat" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="b" stroke={INTERMEDIATE_COLORS[1]} name="B sorozat" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="c" stroke={INTERMEDIATE_COLORS[2]} name="C sorozat" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-4">Interaktív oszlopdiagram</h3>
                  <p className="text-gray-600 mb-4">
                    Hozza az egérmutatót az oszlopok fölé a részletes adatok megjelenítéséhez.
                  </p>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={intermediateData.monthly}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip 
                          cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                          contentStyle={{ 
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                          }}
                        />
                        <Legend />
                        <Bar 
                          dataKey="value" 
                          name="Havi érték" 
                          fill={INTERMEDIATE_COLORS[0]} 
                          radius={[4, 4, 0, 0]}
                          animationDuration={1000}
                        >
                          {intermediateData.monthly.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={INTERMEDIATE_COLORS[index % 3]} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
                <div>
                  <h3 className="text-lg font-bold mb-4">Interaktív kördiagram</h3>
                  <p className="text-gray-600 mb-4">
                    Kattintson a szeletekre a részletes adatok megtekintéséhez.
                  </p>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          activeIndex={activePieIndex}
                          activeShape={renderActiveShape}
                          data={intermediateData.categories}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          onMouseEnter={(_, index) => setActivePieIndex(index)}
                        >
                          {intermediateData.categories.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={INTERMEDIATE_COLORS[index % INTERMEDIATE_COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-4">Területdiagram</h3>
                  <p className="text-gray-600 mb-4">
                    Interaktív területdiagram a trendváltozások vizualizálásához.
                  </p>
                  <div className="h-80 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={intermediateData.multiSeries}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <defs>
                          {INTERMEDIATE_COLORS.slice(0, 3).map((color, index) => (
                            <linearGradient key={`colorUv-${index}`} id={`colorUv-${index}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor={color} stopOpacity={0.8}/>
                              <stop offset="95%" stopColor={color} stopOpacity={0.2}/>
                            </linearGradient>
                          ))}
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey="a" name="A sorozat" stroke={INTERMEDIATE_COLORS[0]} fillOpacity={1} fill={`url(#colorUv-0)`} />
                        <Area type="monotone" dataKey="b" name="B sorozat" stroke={INTERMEDIATE_COLORS[1]} fillOpacity={1} fill={`url(#colorUv-1)`} />
                        <Area type="monotone" dataKey="c" name="C sorozat" stroke={INTERMEDIATE_COLORS[2]} fillOpacity={1} fill={`url(#colorUv-2)`} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-3">Interaktív adatvizualizáció jellemzői:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Fejlett interaktív elemek (hover, kattintás)</li>
                    <li>Animált átmenetek és változások</li>
                    <li>Kiegészített tooltip-ek és információs panel</li>
                    <li>Továbbfejlesztett színpaletta és dizájn</li>
                    <li>Többszintű adatvizualizáció</li>
                  </ul>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Felhasználói interakciók kezelése</li>
                    <li>Animált adatbetöltés és változások</li>
                    <li>Reszponzív megjelenítés</li>
                    <li>Összetettebb adatstruktúrák</li>
                    <li>Fejlett Recharts konfiguráció</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="advanced">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold mb-2">Komplex adatvizualizáció</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Fejlett, integrált dashboard megoldások több adatforrással, animációkkal és interakciókkal.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 px-6 rounded-t-lg">
                <h3 className="text-xl font-bold">Értékesítési és marketing dashboard</h3>
                <p className="text-blue-100">Valós idejű teljesítménymutatók és trendek</p>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-white p-4 rounded-lg shadow-md border border-gray-100"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-gray-500 text-sm">Összes értékesítés</span>
                        <h3 className="text-2xl font-bold text-gray-800">96,458 €</h3>
                      </div>
                      <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        +12.5%
                      </div>
                    </div>
                    <div className="mt-2 h-16">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={dashboardData.sales.slice(0, 6)}>
                          <defs>
                            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <Area 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#4f46e5" 
                            fillOpacity={1} 
                            fill="url(#colorSales)" 
                            strokeWidth={2}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-white p-4 rounded-lg shadow-md border border-gray-100"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-gray-500 text-sm">Látogatók</span>
                        <h3 className="text-2xl font-bold text-gray-800">24,583</h3>
                      </div>
                      <div className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                        -2.7%
                      </div>
                    </div>
                    <div className="mt-2 h-16">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={dashboardData.sales.slice(6)}>
                          <defs>
                            <linearGradient id="colorVisitors" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.3}/>
                              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                            </linearGradient>
                          </defs>
                          <Area 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#8884d8" 
                            fillOpacity={1} 
                            fill="url(#colorVisitors)" 
                            strokeWidth={2}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="bg-white p-4 rounded-lg shadow-md border border-gray-100"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-gray-500 text-sm">Konverzió</span>
                        <h3 className="text-2xl font-bold text-gray-800">12.8%</h3>
                      </div>
                      <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        +1.4%
                      </div>
                    </div>
                    <div className="mt-2 h-16">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={dashboardData.sales}>
                          <Line 
                            type="monotone" 
                            dataKey="value" 
                            stroke="#10b981" 
                            strokeWidth={2}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-gray-800">Havi értékesítési trend</h4>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium">
                          Idei év
                        </button>
                        <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                          Előző év
                        </button>
                      </div>
                    </div>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={dashboardData.sales}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip
                            contentStyle={{
                              backgroundColor: 'rgba(255, 255, 255, 0.95)',
                              borderRadius: '8px',
                              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                              border: 'none',
                            }}
                            cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                          />
                          <Bar 
                            dataKey="value" 
                            name="Érték" 
                            radius={[4, 4, 0, 0]}
                          >
                            {dashboardData.sales.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={ADVANCED_COLORS[index % ADVANCED_COLORS.length]} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-gray-800">Látogatói források</h4>
                      <select className="text-sm border-gray-200 rounded-md py-1">
                        <option>Utolsó 30 nap</option>
                        <option>Utolsó 60 nap</option>
                        <option>Utolsó 90 nap</option>
                      </select>
                    </div>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={dashboardData.visitors}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={90}
                            fill="#8884d8"
                            paddingAngle={2}
                            dataKey="value"
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            labelLine={{ stroke: '#555', strokeWidth: 1, strokeDasharray: '3 3' }}
                          >
                            {dashboardData.visitors.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={ADVANCED_COLORS[index % ADVANCED_COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip
                            formatter={(value: number) => [`${value} látogató`, 'Mennyiség']}
                            contentStyle={{
                              backgroundColor: 'rgba(255, 255, 255, 0.95)',
                              borderRadius: '8px',
                              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                              border: 'none',
                            }}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-gray-800">Teljesítmény összevetés</h4>
                      <div className="text-xs text-gray-500">Frissítve: ma, 14:25</div>
                    </div>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={dashboardData.performance}>
                          <PolarGrid />
                          <PolarAngleAxis dataKey="subject" />
                          <PolarRadiusAxis />
                          <Radar name="A csapat" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.5} />
                          <Radar name="B csapat" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.5} />
                          <Legend />
                          <Tooltip />
                        </RadarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                  
                  <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold text-gray-800">Regionális összehasonlítás</h4>
                      <div className="flex space-x-2">
                        <button className="px-3 py-1 bg-blue-100 text-blue-700 rounded-md text-xs font-medium">
                          Negyedéves
                        </button>
                        <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                          Éves
                        </button>
                      </div>
                    </div>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart
                          data={dashboardData.comparison}
                          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" />
                          <XAxis dataKey="name" />
                          <YAxis />
                          <Tooltip 
                            contentStyle={{
                              backgroundColor: 'rgba(255, 255, 255, 0.95)',
                              borderRadius: '8px',
                              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                              border: 'none',
                            }}
                          />
                          <Legend />
                          <Line type="monotone" dataKey="a" name="Észak" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                          <Line type="monotone" dataKey="b" name="Nyugat" stroke="#82ca9d" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                          <Line type="monotone" dataKey="c" name="Kelet" stroke="#ffc658" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 8 }} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h4 className="font-bold mb-4">Komplex adatvizualizáció jellemzői:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-3 text-gray-800">Dashboard integráció</h5>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Több grafikon típus kombinációja</li>
                    <li>Integrált adatmegjelenítés és összefüggések</li>
                    <li>Kifinomult vizuális hierarchia</li>
                    <li>Kontextuális KPI kártyák és mutatók</li>
                    <li>Animált átmenetek és interakciók</li>
                    <li>Több adatforrás egységes megjelenítése</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-3 text-gray-800">Fejlett megjelenítési technikák</h5>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Micro-interakciók és vizuális visszajelzések</li>
                    <li>Kontextusfüggő tooltiped és információk</li>
                    <li>Elemek közötti vizuális koherencia</li>
                    <li>Haladó színkódolás és információs design</li>
                    <li>Összehasonlító vizualizáció technikák</li>
                    <li>Valós idejű adatfrissítés és animációk</li>
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

export default DataVisualizationPage;
