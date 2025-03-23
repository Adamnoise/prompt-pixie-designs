
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Check, Copy } from 'lucide-react';

const BrandingPage = () => {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);
  
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedColor(text);
    setTimeout(() => setCopiedColor(null), 2000);
  };
  
  return (
    <PageLayout
      title="Márkaarculat és Brand Design"
      description="Fedezd fel, hogyan fejlődik egy márkaarculat a különböző fejlesztési szinteken."
      prompt="Készíts egy oldalt, amely bemutatja egy márka arculatának fejlődését. Mutass be három szintet: 1) Egyszerű, alapvető arculat minimális elemekkel, 2) Konzisztens, közepes szintű márkaarculat, 3) Részletes, komplex márkaidentitás brand könyvvel. Minden szinthez mutass példákat színekre, tipográfiára, logóváltozatokra és használati útmutatásokra."
      category="design"
    >
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="basic">Egyszerű</TabsTrigger>
          <TabsTrigger value="intermediate">Konzisztens</TabsTrigger>
          <TabsTrigger value="advanced">Komplex</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basic">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold mb-2">Alapvető arculati elemek</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Egyszerű, kezdeti arculati elemek minimális irányelvekkel.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Logó</h3>
                <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                  <div className="bg-white shadow rounded-lg p-10 flex items-center justify-center w-48 h-48">
                    <div className="font-bold text-3xl text-blue-600">EcoTech</div>
                  </div>
                  <div className="bg-blue-600 shadow rounded-lg p-10 flex items-center justify-center w-48 h-48">
                    <div className="font-bold text-3xl text-white">EcoTech</div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Színek</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  <div>
                    <div 
                      className="h-20 rounded-lg bg-blue-600 relative cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => copyToClipboard('#2563EB')}
                    >
                      {copiedColor === '#2563EB' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-lg">
                          <div className="bg-white text-blue-600 px-2 py-1 rounded text-sm font-medium flex items-center">
                            <Check size={16} className="mr-1" />
                            Másolva
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mt-2">
                      <div className="font-medium">Elsődleges</div>
                      <div className="text-sm text-gray-500">#2563EB</div>
                    </div>
                  </div>
                  
                  <div>
                    <div 
                      className="h-20 rounded-lg bg-blue-800 relative cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => copyToClipboard('#1E40AF')}
                    >
                      {copiedColor === '#1E40AF' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-lg">
                          <div className="bg-white text-blue-800 px-2 py-1 rounded text-sm font-medium flex items-center">
                            <Check size={16} className="mr-1" />
                            Másolva
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mt-2">
                      <div className="font-medium">Sötétebb</div>
                      <div className="text-sm text-gray-500">#1E40AF</div>
                    </div>
                  </div>
                  
                  <div>
                    <div 
                      className="h-20 rounded-lg bg-blue-400 relative cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => copyToClipboard('#60A5FA')}
                    >
                      {copiedColor === '#60A5FA' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-lg">
                          <div className="bg-white text-blue-400 px-2 py-1 rounded text-sm font-medium flex items-center">
                            <Check size={16} className="mr-1" />
                            Másolva
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mt-2">
                      <div className="font-medium">Világosabb</div>
                      <div className="text-sm text-gray-500">#60A5FA</div>
                    </div>
                  </div>
                  
                  <div>
                    <div 
                      className="h-20 rounded-lg bg-gray-800 relative cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => copyToClipboard('#1F2937')}
                    >
                      {copiedColor === '#1F2937' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-lg">
                          <div className="bg-white text-gray-800 px-2 py-1 rounded text-sm font-medium flex items-center">
                            <Check size={16} className="mr-1" />
                            Másolva
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mt-2">
                      <div className="font-medium">Szöveg</div>
                      <div className="text-sm text-gray-500">#1F2937</div>
                    </div>
                  </div>
                  
                  <div>
                    <div 
                      className="h-20 rounded-lg bg-gray-100 border border-gray-200 relative cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => copyToClipboard('#F3F4F6')}
                    >
                      {copiedColor === '#F3F4F6' && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-lg">
                          <div className="bg-white text-gray-500 px-2 py-1 rounded text-sm font-medium flex items-center">
                            <Check size={16} className="mr-1" />
                            Másolva
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mt-2">
                      <div className="font-medium">Háttér</div>
                      <div className="text-sm text-gray-500">#F3F4F6</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4">Tipográfia</h3>
                <div className="space-y-6">
                  <div>
                    <div className="mb-2 font-medium text-gray-700">Címsor betűtípus</div>
                    <div className="font-sans">
                      <div className="text-4xl font-bold">Arial Bold</div>
                      <div className="text-sm text-gray-500 mt-1">A címsorokban és logóban használva</div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-2 font-medium text-gray-700">Szövegtörzs betűtípus</div>
                    <div className="font-sans">
                      <div className="text-lg">Arial Regular</div>
                      <div className="text-sm text-gray-500 mt-1">A szövegtörzsben használva</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-3">Használati útmutató</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>A logó fehér vagy kék háttéren használható</li>
                  <li>A betűtípusokat következetesen használja az összes anyagában</li>
                  <li>A kék szín domináljon a márkakommunikációban</li>
                  <li>A logó körül mindig legyen elegendő üres terület</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-5">
              <h4 className="font-bold mb-3">Egyszerű arculati rendszer jellemzői:</h4>
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Korlátozott színpaletta (1 elsődleges szín és néhány kiegészítő)</li>
                <li>Egyszerű, szöveges logó minimális grafikával</li>
                <li>Alapvető tipográfiai rendszer (1-2 betűtípus)</li>
                <li>Alapvető használati irányelvek</li>
                <li>Korlátozott logó változatok</li>
                <li>A márka személyiségének és értékeinek minimális meghatározása</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="intermediate">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold mb-2">Konzisztens márkaarculat</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Jól kidolgozott, konzisztens arculati rendszer több variációval és használati irányelvvel.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-4">Logó rendszer</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center">
                    <div className="font-bold text-2xl text-blue-600 flex items-center">
                      <span className="text-3xl mr-2">◇</span>
                      EcoTech
                    </div>
                    <div className="text-sm text-gray-500 mt-2">Elsődleges logó</div>
                  </div>
                  
                  <div className="bg-blue-600 shadow-md rounded-lg p-6 flex flex-col items-center justify-center">
                    <div className="font-bold text-2xl text-white flex items-center">
                      <span className="text-3xl mr-2">◇</span>
                      EcoTech
                    </div>
                    <div className="text-sm text-blue-200 mt-2">Inverz elsődleges logó</div>
                  </div>
                  
                  <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center">
                    <div className="font-bold text-3xl text-blue-600">◇</div>
                    <div className="text-sm text-gray-500 mt-2">Ikon variáció</div>
                  </div>
                  
                  <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center justify-center">
                    <div className="font-bold text-2xl text-blue-600">EcoTech</div>
                    <div className="text-sm text-gray-500 mt-2">Szöveges logó</div>
                  </div>
                  
                  <div className="bg-gray-900 shadow-md rounded-lg p-6 flex flex-col items-center justify-center">
                    <div className="font-bold text-2xl text-white flex items-center">
                      <span className="text-3xl mr-2">◇</span>
                      EcoTech
                    </div>
                    <div className="text-sm text-gray-400 mt-2">Sötét háttéren</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600 to-blue-400 shadow-md rounded-lg p-6 flex flex-col items-center justify-center">
                    <div className="font-bold text-2xl text-white flex items-center">
                      <span className="text-3xl mr-2">◇</span>
                      EcoTech
                    </div>
                    <div className="text-sm text-blue-100 mt-2">Gradiens háttéren</div>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-4">Színpaletta</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium mb-3">Elsődleges színek</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      <div>
                        <div 
                          className="h-20 rounded-lg bg-blue-600 relative cursor-pointer hover:shadow-md transition-shadow"
                          onClick={() => copyToClipboard('#2563EB')}
                        >
                          {copiedColor === '#2563EB' && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-lg">
                              <div className="bg-white text-blue-600 px-2 py-1 rounded text-sm font-medium flex items-center">
                                <Check size={16} className="mr-1" />
                                Másolva
                              </div>
                            </div>
                          )}
                          <div className="absolute right-2 bottom-2 text-white opacity-70">
                            <Copy size={16} />
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="font-medium">Elsődleges kék</div>
                          <div className="text-sm text-gray-500">#2563EB</div>
                        </div>
                      </div>
                      
                      <div>
                        <div 
                          className="h-20 rounded-lg bg-blue-800 relative cursor-pointer hover:shadow-md transition-shadow"
                          onClick={() => copyToClipboard('#1E40AF')}
                        >
                          {copiedColor === '#1E40AF' && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-lg">
                              <div className="bg-white text-blue-800 px-2 py-1 rounded text-sm font-medium flex items-center">
                                <Check size={16} className="mr-1" />
                                Másolva
                              </div>
                            </div>
                          )}
                          <div className="absolute right-2 bottom-2 text-white opacity-70">
                            <Copy size={16} />
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="font-medium">Sötét kék</div>
                          <div className="text-sm text-gray-500">#1E40AF</div>
                        </div>
                      </div>
                      
                      <div>
                        <div 
                          className="h-20 rounded-lg bg-green-500 relative cursor-pointer hover:shadow-md transition-shadow"
                          onClick={() => copyToClipboard('#10B981')}
                        >
                          {copiedColor === '#10B981' && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-lg">
                              <div className="bg-white text-green-500 px-2 py-1 rounded text-sm font-medium flex items-center">
                                <Check size={16} className="mr-1" />
                                Másolva
                              </div>
                            </div>
                          )}
                          <div className="absolute right-2 bottom-2 text-white opacity-70">
                            <Copy size={16} />
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="font-medium">Kiegészítő zöld</div>
                          <div className="text-sm text-gray-500">#10B981</div>
                        </div>
                      </div>
                      
                      <div>
                        <div 
                          className="h-20 rounded-lg bg-gray-800 relative cursor-pointer hover:shadow-md transition-shadow"
                          onClick={() => copyToClipboard('#1F2937')}
                        >
                          {copiedColor === '#1F2937' && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-lg">
                              <div className="bg-white text-gray-800 px-2 py-1 rounded text-sm font-medium flex items-center">
                                <Check size={16} className="mr-1" />
                                Másolva
                              </div>
                            </div>
                          )}
                          <div className="absolute right-2 bottom-2 text-white opacity-70">
                            <Copy size={16} />
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="font-medium">Szürke</div>
                          <div className="text-sm text-gray-500">#1F2937</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Árnyalatok</h4>
                    <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                      {['#DBEAFE', '#BFDBFE', '#93C5FD', '#60A5FA', '#3B82F6', '#2563EB', '#1D4ED8', '#1E40AF', '#1E3A8A', '#172554'].map((color, i) => (
                        <div key={color}>
                          <div 
                            className="h-10 rounded cursor-pointer hover:shadow-sm transition-shadow"
                            style={{ backgroundColor: color }}
                            onClick={() => copyToClipboard(color)}
                          >
                            {copiedColor === color && (
                              <div className="h-full flex items-center justify-center bg-black bg-opacity-20 rounded">
                                <Check size={12} className="text-white" />
                              </div>
                            )}
                          </div>
                          <div className="mt-1 text-xs text-gray-500 text-center">{i + 1}0</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-4">Tipográfiai rendszer</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="mb-2 font-medium text-gray-700">Címsor betűtípus</div>
                    <div className="font-serif">
                      <div className="text-4xl font-bold">Montserrat</div>
                      <div className="space-y-1 mt-3">
                        <div className="text-3xl font-bold">H1: Címsor 32px Bold</div>
                        <div className="text-2xl font-bold">H2: Alcím 24px Bold</div>
                        <div className="text-xl font-semibold">H3: Belső cím 20px Semibold</div>
                        <div className="text-lg font-semibold">H4: Alcím 18px Semibold</div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="mb-2 font-medium text-gray-700">Szövegtörzs betűtípus</div>
                    <div className="font-sans">
                      <div className="text-2xl">Open Sans</div>
                      <div className="space-y-3 mt-3">
                        <div className="text-base">
                          Alapértelmezett szövegtörzs 16px Regular. Ez a szöveg bemutatja az alapvető szövegtörzs formázását.
                        </div>
                        <div className="text-sm">
                          Kisebb szöveg 14px. Ez a szöveg kisebb méretben mutatja a szövegtörzset.
                        </div>
                        <div className="text-base font-medium">
                          Kiemelt szövegtörzs 16px Medium. Hangsúlyos szövegrészekhez használható.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h4 className="font-bold mb-4">Logó használati útmutató</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h5 className="font-medium text-gray-800 mb-3">Helyes használat</h5>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Használja a logót fehér vagy engedélyezett színes háttéren</li>
                      <li>Tartsa be a minimális méret előírásokat (nyomtatás: 25mm, digitális: 100px szélesség)</li>
                      <li>Tartson megfelelő körülötte legalább a logó magasságának felével megegyező szabad területet</li>
                      <li>Használja a logó variációkat a megfelelő környezetben</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-gray-800 mb-3">Kerülendő használat</h5>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Ne változtassa meg a logó arányait vagy elforgatási szögét</li>
                      <li>Ne használja a logót alacsony kontrasztú háttér előtt</li>
                      <li>Ne adjon a logóhoz árnyékot vagy más effekteket</li>
                      <li>Ne használja a logót más szövegek vagy grafikák közvetlen közelében</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-5">
              <h4 className="font-bold mb-3">Konzisztens arculati rendszer jellemzői:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Bővített, harmonikus színpaletta</li>
                  <li>Logó rendszer több variációval és felhasználási móddal</li>
                  <li>Következetes tipográfiai hierarchia</li>
                  <li>Részletes használati útmutatók</li>
                </ul>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Meghatározott márkaértékek és üzenetek</li>
                  <li>Másodlagos grafikai elemek</li>
                  <li>Tiszta vizuális stílus</li>
                  <li>Különböző kontextusokra adaptált alkalmazások</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="advanced">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold mb-2">Komplex márkaidentitás</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Részletes, átfogó márkaarculat teljes brand könyvvel és változatos alkalmazási példákkal.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-0">
              <div className="h-40 bg-gradient-to-r from-blue-600 to-blue-400 flex items-center justify-center border-b border-blue-700">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-full p-6 shadow-lg"
                >
                  <div className="font-bold text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400 flex items-center">
                    <span className="text-4xl mr-2">◇</span>
                    EcoTech
                  </div>
                </motion.div>
              </div>
              
              <div className="p-8">
                <div className="max-w-5xl mx-auto">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-gray-800">Brand könyv</h3>
                    <div className="text-sm text-gray-500">2023 Kiadás</div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-blue-600">Márka története & Misszió</h4>
                      <p className="text-gray-700 mb-4">
                        Az EcoTech 2015-ben alakult azzal a küldetéssel, hogy fenntartható technológiai megoldásokat kínáljon a modern problémákra. Célunk a környezetvédelem és az innováció egyesítése.
                      </p>
                      <p className="text-gray-700">
                        Márkánk a fenntarthatóság, az innováció és a megbízhatóság értékeit képviseli, amelyek arculatunk minden elemében megjelennek.
                      </p>
                      
                      <div className="mt-6">
                        <h5 className="font-medium text-gray-800 mb-2">Márka hangnem</h5>
                        <ul className="space-y-1 text-gray-600">
                          <li><span className="font-medium text-blue-600">Professzionális</span> de barátságos</li>
                          <li><span className="font-medium text-blue-600">Informatív</span> de érthető</li>
                          <li><span className="font-medium text-blue-600">Inspiráló</span> de földközeli</li>
                          <li><span className="font-medium text-blue-600">Innovatív</span> de megbízható</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-blue-600">Logó rendszer</h4>
                      <p className="text-gray-700 mb-4">
                        Logónk az innováció és a környezettudatosság összefonódását szimbolizálja. A gyémánt forma a
                        kiválóságot, a technológiai élvonalat jelképezi, míg a kék-zöld színek a fenntarthatóságot.
                      </p>
                      
                      <div className="mt-6 grid grid-cols-2 gap-4">
                        <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-4 flex flex-col items-center justify-center">
                          <div className="font-bold text-xl text-blue-600 flex items-center">
                            <span className="text-2xl mr-1">◇</span>
                            EcoTech
                          </div>
                          <div className="text-xs text-gray-500 mt-2">Elsődleges logó</div>
                        </div>
                        
                        <div className="bg-blue-600 shadow-sm rounded-lg p-4 flex flex-col items-center justify-center">
                          <div className="font-bold text-xl text-white flex items-center">
                            <span className="text-2xl mr-1">◇</span>
                            EcoTech
                          </div>
                          <div className="text-xs text-blue-200 mt-2">Inverz logó</div>
                        </div>
                        
                        <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-4 flex flex-col items-center justify-center">
                          <div className="font-bold text-2xl text-blue-600">◇</div>
                          <div className="text-xs text-gray-500 mt-2">Ikon</div>
                        </div>
                        
                        <div className="bg-white shadow-sm border border-gray-100 rounded-lg p-4 flex flex-col items-center justify-center">
                          <div className="font-bold text-lg text-blue-600">EcoTech</div>
                          <div className="text-xs text-gray-500 mt-2">Szöveges logó</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-12">
                    <h4 className="text-lg font-semibold mb-6 text-blue-600">Elsődleges színpaletta</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                      <motion.div 
                        whileHover={{ y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <div className="h-32 rounded-xl bg-blue-600 shadow-md relative">
                          <div className="absolute bottom-3 left-3 text-white">
                            <div className="font-bold">Kék</div>
                            <div className="text-sm opacity-80">#2563EB</div>
                            <div className="text-xs opacity-80">RGB 37, 99, 235</div>
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          Elsődleges márka szín, logókban, gombokban és fő elemekben használva.
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        whileHover={{ y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <div className="h-32 rounded-xl bg-green-500 shadow-md relative">
                          <div className="absolute bottom-3 left-3 text-white">
                            <div className="font-bold">Zöld</div>
                            <div className="text-sm opacity-80">#10B981</div>
                            <div className="text-xs opacity-80">RGB 16, 185, 129</div>
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          Másodlagos szín, kiemelésekhez és akció-kapcsolatú elemekhez.
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        whileHover={{ y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <div className="h-32 rounded-xl bg-gray-800 shadow-md relative">
                          <div className="absolute bottom-3 left-3 text-white">
                            <div className="font-bold">Fekete</div>
                            <div className="text-sm opacity-80">#1F2937</div>
                            <div className="text-xs opacity-80">RGB 31, 41, 55</div>
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          Szövegekhez és kontrasztos felületekhez használva.
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        whileHover={{ y: -5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <div className="h-32 rounded-xl bg-gray-100 shadow-md border border-gray-200 relative">
                          <div className="absolute bottom-3 left-3 text-gray-800">
                            <div className="font-bold">Fehér/szürke</div>
                            <div className="text-sm opacity-80">#F9FAFB</div>
                            <div className="text-xs opacity-80">RGB 249, 250, 251</div>
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          Háttérszínként és semleges felületekhez.
                        </div>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="mb-12">
                    <h4 className="text-lg font-semibold mb-6 text-blue-600">Tipográfia</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                      <div>
                        <div className="font-serif">
                          <div className="text-xl font-bold mb-2">Montserrat</div>
                          <div className="text-sm text-gray-600 mb-4">Címsorokhoz és logó elemekhez</div>
                          
                          <div className="space-y-3">
                            <div className="text-3xl font-bold">Címsor 1</div>
                            <div className="text-2xl font-bold">Címsor 2</div>
                            <div className="text-xl font-semibold">Címsor 3</div>
                            <div className="text-lg font-semibold">Címsor 4</div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="font-sans">
                          <div className="text-xl font-bold mb-2">Open Sans</div>
                          <div className="text-sm text-gray-600 mb-4">Szövegtörzsekhez és felületekhez</div>
                          
                          <div className="space-y-3">
                            <div className="font-normal">Normál szövegtörzs. A fő tartalomhoz használva, optimális olvashatósággal.</div>
                            <div className="font-medium">Közepes hangsúlyú szöveg. Kiemeléseknél és alcímeknél használva.</div>
                            <div className="font-semibold">Félkövér szöveg. Gombokban és erősebb kiemelésekhez.</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-span-1 md:col-span-2">
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                          <div className="font-medium mb-2 text-gray-800">Betűméret skála (rem)</div>
                          <div className="flex flex-wrap gap-4">
                            <div className="text-xs text-gray-600">xs: 0.75</div>
                            <div className="text-sm text-gray-600">sm: 0.875</div>
                            <div className="text-base text-gray-600">base: 1</div>
                            <div className="text-lg text-gray-600">lg: 1.125</div>
                            <div className="text-xl text-gray-600">xl: 1.25</div>
                            <div className="text-2xl text-gray-600">2xl: 1.5</div>
                            <div className="text-3xl text-gray-600">3xl: 1.875</div>
                            <div className="text-4xl text-gray-600">4xl: 2.25</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-12">
                    <h4 className="text-lg font-semibold mb-6 text-blue-600">Másodlagos grafikai elemek</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="h-32 bg-blue-50 rounded-md flex items-center justify-center mb-3">
                          <div className="w-20 h-20 bg-blue-500 opacity-20 rounded-full"></div>
                        </div>
                        <div className="font-medium">Alakzatok</div>
                        <div className="text-sm text-gray-600 mt-1">Geometrikus formák és organikus elemek</div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="h-32 bg-blue-50 rounded-md flex items-center justify-center mb-3">
                          <div className="w-full h-px bg-blue-200"></div>
                        </div>
                        <div className="font-medium">Elválasztók</div>
                        <div className="text-sm text-gray-600 mt-1">Vonalak és térelválasztó elemek</div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="h-32 bg-blue-50 rounded-md flex items-center justify-center mb-3">
                          <div className="text-4xl text-blue-300 opacity-30">◇◇◇</div>
                        </div>
                        <div className="font-medium">Ikonográfia</div>
                        <div className="text-sm text-gray-600 mt-1">Egyedi ikon készlet és motívumok</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-12">
                    <h4 className="text-lg font-semibold mb-6 text-blue-600">Alkalmazási példák</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <div className="h-40 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                          <div className="text-gray-400 text-sm">Névjegykártya</div>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <div className="h-40 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                          <div className="text-gray-400 text-sm">Weboldal</div>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <div className="h-40 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                          <div className="text-gray-400 text-sm">Közösségi média</div>
                        </div>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
                        <div className="h-40 bg-gradient-to-r from-gray-100 to-gray-200 flex items-center justify-center">
                          <div className="text-gray-400 text-sm">Nyomtatványok</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                    <h4 className="font-semibold text-blue-700 mb-4">Márka használati útmutató</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h5 className="font-medium text-blue-800 mb-3">Hangnem és kommunikáció</h5>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Használjon tiszta, érthető nyelvet</li>
                          <li>Legyen hiteles és adatalapú</li>
                          <li>Inspiráljon cselekvésre</li>
                          <li>Kerülje a zsargont és a túlzó kijelentéseket</li>
                          <li>Legyen pozitív és megoldásorientált</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-medium text-blue-800 mb-3">Vizuális irányelvek</h5>
                        <ul className="list-disc pl-5 space-y-2 text-gray-700">
                          <li>Használja következetesen a márka színeit</li>
                          <li>Hagyjon elegendő fehér teret</li>
                          <li>A tipográfiát a meghatározott hierarchia szerint alkalmazza</li>
                          <li>A képhasználat legyen természetes és hiteles</li>
                          <li>Az illusztrációk követsék a márka vizuális nyelvét</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h4 className="font-bold mb-4">Komplex márkaidentitás jellemzői:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-3 text-gray-800">Stratégiai alapok</h5>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Világosan meghatározott márkapozícionálás</li>
                    <li>Kidolgozott márka személyiség és értékek</li>
                    <li>A márka történetét és misszióját támogató vizuális rendszer</li>
                    <li>Egyedi és megkülönböztető logó rendszer több változattal</li>
                    <li>Részletes kommunikációs útmutató és hangnem</li>
                    <li>Célközönség-specifikus alkalmazási területek</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-3 text-gray-800">Vizuális rendszer</h5>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Komplex, harmonikus színrendszer árnyalatokkal</li>
                    <li>Több betűtípuson alapuló tipográfiai rendszer</li>
                    <li>Egyedi ikonrendszer és grafikai elemek</li>
                    <li>Egységes fényképezési és illusztrációs stílus</li>
                    <li>Részletes alkalmazási példák minden felületre</li>
                    <li>Átfogó dokumentáció és arculati kézikönyv</li>
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

export default BrandingPage;
