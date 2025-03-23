
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Calendar, Bell, Moon, Sun } from 'lucide-react';

const SkeuomorphismPage = () => {
  // Zenelejátszó állapotok
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(75);
  const [isMuted, setIsMuted] = useState(false);
  
  // Kapcsoló állapotok
  const [switchStates, setSwitchStates] = useState({
    basicSwitch: false,
    flatSwitch: false,
    neuSwitch: false,
    skeuSwitch: false,
  });

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);
  
  const toggleSwitch = (switchName: keyof typeof switchStates) => {
    setSwitchStates({
      ...switchStates,
      [switchName]: !switchStates[switchName]
    });
  };
  
  return (
    <PageLayout
      title="A Skeumorfizmus evolúciója"
      description="Fedezd fel a felhasználói felületek tervezésének fejlődését a szkeuomorf tervezéstől a lapos dizájnon át a neumorfizmusig."
      prompt="Készíts egy oldalt, amely bemutatja a felhasználói felületek tervezési stílusainak fejlődését. Mutass be három megközelítést: 1) Skeumorfizmus (realisztikus, fizikai objektumokat utánzó design), 2) Flat design (minimális, lapos design), 3) Neumorfizmus (újgenerációs, puha UI elemek). Minden stílusra mutass interaktív példákat, mint például gombokat, kapcsolókat és médialejátszó vezérlőket."
      category="design"
    >
      <Tabs defaultValue="skeuo" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="skeuo">Skeumorfizmus</TabsTrigger>
          <TabsTrigger value="flat">Flat Design</TabsTrigger>
          <TabsTrigger value="neu">Neumorfizmus</TabsTrigger>
        </TabsList>
        
        <TabsContent value="skeuo">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold mb-2">Skeumorfizmus</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A skeumorfizmus a fizikai tárgyak tulajdonságait és részleteit digitális környezetben utánzó tervezési stílus, amely realisztikus árnyékokat, textúrákat és 3D effektusokat használ.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-6">Zenelejátszó</h3>
                <div className="max-w-lg mx-auto bg-gradient-to-b from-gray-800 to-gray-900 p-6 rounded-lg shadow-xl border border-gray-700">
                  <div className="bg-gradient-to-b from-gray-700 to-gray-800 p-4 rounded-md shadow-inner mb-6">
                    <div className="flex items-center justify-between">
                      <div className="text-white">
                        <div className="font-bold">Most playing:</div>
                        <div className="text-gray-300">Artist - Song Title</div>
                      </div>
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center shadow-lg">
                        <div className="w-10 h-10 rounded-full bg-white"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mb-5">
                    <div className="flex space-x-4 items-center">
                      <button className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-b from-gray-600 to-gray-700 shadow-lg hover:from-gray-500 hover:to-gray-600 active:shadow-inner transition-all">
                        <SkipBack className="h-5 w-5 text-gray-200" />
                      </button>
                      
                      <button 
                        className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-b from-gray-600 to-gray-700 shadow-lg hover:from-gray-500 hover:to-gray-600 active:shadow-inner transition-all"
                        onClick={togglePlay}
                      >
                        {isPlaying ? (
                          <Pause className="h-7 w-7 text-gray-200" />
                        ) : (
                          <Play className="h-7 w-7 text-gray-200 ml-1" />
                        )}
                      </button>
                      
                      <button className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-b from-gray-600 to-gray-700 shadow-lg hover:from-gray-500 hover:to-gray-600 active:shadow-inner transition-all">
                        <SkipForward className="h-5 w-5 text-gray-200" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-5">
                    <div className="h-3 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full shadow-inner overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-lg"
                        style={{ width: '35%' }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-400 mt-1">
                      <span>1:28</span>
                      <span>4:05</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <button 
                      className="mr-3"
                      onClick={toggleMute}
                    >
                      {isMuted ? (
                        <VolumeX className="h-5 w-5 text-gray-400" />
                      ) : (
                        <Volume2 className="h-5 w-5 text-gray-400" />
                      )}
                    </button>
                    <div className="flex-grow h-2 bg-gradient-to-b from-gray-700 to-gray-800 rounded-full shadow-inner overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full shadow-lg"
                        style={{ width: `${isMuted ? 0 : volume}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-6">Kapcsolók és gombok</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-4">Kapcsoló</h4>
                    <div className="bg-wood-pattern p-6 rounded-lg shadow-lg inline-block">
                      <div 
                        className={`w-20 h-10 rounded-full bg-gradient-to-b ${
                          switchStates.skeuSwitch ? 'from-gray-300 to-gray-100' : 'from-gray-700 to-gray-900'
                        } shadow-lg p-1 cursor-pointer relative`}
                        onClick={() => toggleSwitch('skeuSwitch')}
                      >
                        <div 
                          className={`w-8 h-8 rounded-full absolute transition-all duration-300 shadow-md ${
                            switchStates.skeuSwitch 
                              ? 'right-1 bg-gradient-to-b from-green-400 to-green-500' 
                              : 'left-1 bg-gradient-to-b from-gray-400 to-gray-500'
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-4">Gombok</h4>
                    <div className="space-y-4">
                      <button className="px-5 py-3 rounded-md bg-gradient-to-b from-red-500 to-red-700 text-white font-bold shadow-lg border border-red-800 hover:from-red-600 hover:to-red-800 active:shadow-inner transition-all">
                        Piros gomb
                      </button>
                      <button className="px-5 py-3 rounded-md bg-gradient-to-b from-blue-500 to-blue-700 text-white font-bold shadow-lg border border-blue-800 hover:from-blue-600 hover:to-blue-800 active:shadow-inner transition-all">
                        Kék gomb
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-6">Naptár</h3>
                <div className="max-w-md mx-auto bg-leather-pattern rounded-lg overflow-hidden shadow-xl border-4 border-brown-800">
                  <div className="bg-gradient-to-b from-red-700 to-red-900 text-white p-4 text-center font-bold text-xl shadow-lg">
                    Szeptember 2023
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-7 gap-2 text-center">
                      {['H', 'K', 'Sz', 'Cs', 'P', 'Sz', 'V'].map((day, i) => (
                        <div key={i} className="text-brown-800 font-bold">{day}</div>
                      ))}
                      {Array.from({ length: 30 }, (_, i) => (
                        <div 
                          key={i} 
                          className={`p-2 ${
                            i + 1 === 15 
                              ? 'bg-gradient-to-b from-blue-500 to-blue-700 text-white rounded-md shadow-md' 
                              : 'hover:bg-brown-50'
                          }`}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-5">
              <h4 className="font-bold mb-3">Skeumorfizmus jellemzői:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Fizikai tárgyak digitális utánzása</li>
                  <li>Részletes textúrák és anyagok (bőr, fa, fém, stb.)</li>
                  <li>Erős árnyékok és kiemelkedő 3D hatások</li>
                  <li>Realisztikus megjelenés és részletek</li>
                  <li>Valósághű gombok, kapcsolók, tárcsák</li>
                </ul>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Gradiens és fényhatások a mélység érzékeltetésére</li>
                  <li>Belső árnyékok (inset shadows)</li>
                  <li>Kerethatások és domborított elemek</li>
                  <li>A felhasználók számára ismerős vizuális metaforák</li>
                  <li>Haptikus visszajelzést imitáló vizuális megjelenés</li>
                </ul>
              </div>
              
              <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-md">
                <h5 className="font-medium mb-2">Történeti kontextus:</h5>
                <p className="text-gray-700 text-sm">
                  A skeumorfizmus a 2000-es évek végén és a 2010-es évek elején volt népszerű, főleg az Apple iOS és macOS rendszereiben Steve Jobs és Jony Ive irányítása alatt. Az iOS 7 (2013) megjelenésével az Apple jelentősen elmozdult a flat design irányába, ami az iparág többi részét is hasonló váltásra ösztönözte.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="flat">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold mb-2">Flat Design</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A flat design a minimalizmusra és a funkcionális egyszerűségre koncentrál, elhagyva a realisztikus textúrákat és 3D effektusokat, helyettük egyszerű formákra és élénk színekre építve.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-6">Zenelejátszó</h3>
                <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="font-bold text-gray-800">Most playing:</div>
                      <div className="text-gray-600">Artist - Song Title</div>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mb-6">
                    <div className="flex space-x-6 items-center">
                      <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
                        <SkipBack className="h-5 w-5" />
                      </button>
                      
                      <button 
                        className="w-12 h-12 rounded-full flex items-center justify-center bg-blue-500 text-white shadow-sm hover:bg-blue-600 transition-colors"
                        onClick={togglePlay}
                      >
                        {isPlaying ? (
                          <Pause className="h-5 w-5" />
                        ) : (
                          <Play className="h-5 w-5 ml-1" />
                        )}
                      </button>
                      
                      <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors">
                        <SkipForward className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: '35%' }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>1:28</span>
                      <span>4:05</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <button 
                      className="mr-3 text-gray-600"
                      onClick={toggleMute}
                    >
                      {isMuted ? (
                        <VolumeX className="h-5 w-5" />
                      ) : (
                        <Volume2 className="h-5 w-5" />
                      )}
                    </button>
                    <div className="flex-grow h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${isMuted ? 0 : volume}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-6">Kapcsolók és gombok</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-4">Kapcsoló</h4>
                    <div className="bg-white p-6 rounded-lg shadow-sm inline-block">
                      <div 
                        className={`w-16 h-8 rounded-full ${
                          switchStates.flatSwitch ? 'bg-green-500' : 'bg-gray-300'
                        } cursor-pointer relative transition-colors duration-300`}
                        onClick={() => toggleSwitch('flatSwitch')}
                      >
                        <div 
                          className={`w-6 h-6 rounded-full bg-white absolute top-1 transition-all duration-300 shadow-sm ${
                            switchStates.flatSwitch ? 'right-1' : 'left-1'
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-4">Gombok</h4>
                    <div className="space-y-4">
                      <button className="px-5 py-2 rounded-md bg-red-500 text-white font-medium shadow-sm hover:bg-red-600 transition-colors">
                        Piros gomb
                      </button>
                      <button className="px-5 py-2 rounded-md bg-blue-500 text-white font-medium shadow-sm hover:bg-blue-600 transition-colors">
                        Kék gomb
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-6">Naptár</h3>
                <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                  <div className="bg-blue-500 text-white p-4 text-center font-medium">
                    <div className="flex items-center justify-center">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span>Szeptember 2023</span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="grid grid-cols-7 gap-2 text-center">
                      {['H', 'K', 'Sz', 'Cs', 'P', 'Sz', 'V'].map((day, i) => (
                        <div key={i} className="text-gray-500 font-medium text-sm">{day}</div>
                      ))}
                      {Array.from({ length: 30 }, (_, i) => (
                        <div 
                          key={i} 
                          className={`p-2 text-sm rounded-full ${
                            i + 1 === 15 
                              ? 'bg-blue-500 text-white' 
                              : 'text-gray-700 hover:bg-gray-100'
                          }`}
                        >
                          {i + 1}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-5">
              <h4 className="font-bold mb-3">Flat Design jellemzői:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Minimális, egyszerű formák és stílusok</li>
                  <li>Egyszínű, élénk színpaletta</li>
                  <li>Árnyékok és 3D effektusok minimalizálása vagy elhagyása</li>
                  <li>Tiszta, egyenes vonalak és formák</li>
                  <li>Világos vizuális hierarchia és kontrasztok</li>
                </ul>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Tipográfia mint design elem</li>
                  <li>Bőséges fehér tér (white space)</li>
                  <li>Egyszerű, elegáns ikonok</li>
                  <li>Rácsalapú (grid-based) elrendezés</li>
                  <li>A funkcionalitás előtérbe helyezése</li>
                </ul>
              </div>
              
              <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-md">
                <h5 className="font-medium mb-2">Történeti kontextus:</h5>
                <p className="text-gray-700 text-sm">
                  A flat design a 2010-es évek közepén vált uralkodóvá, amikor az Apple iOS 7 (2013) és a Microsoft Metro (később Modern UI, 2012) nagy lendületet adott ennek a stílusnak. A minimalista megközelítés jól illeszkedett a reszponzív webtervezés elveihez, és a mobil eszközök növekvő népszerűségéhez. A stílus megfelelő volt a gyorsabb betöltési időkhöz és a hatékonyabb teljesítményhez.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="neu">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold mb-2">Neumorfizmus</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A neumorfizmus (vagy "soft UI") a lapos dizájn és a skeumorfizmus kombinációja, amely puha, kiemelkedő elemeket hoz létre finom árnyékolással és monokróm színpalettával.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-6">Zenelejátszó</h3>
                <div className="max-w-lg mx-auto bg-gray-100 p-8 rounded-2xl shadow-sm">
                  <div className="bg-gray-100 p-6 rounded-2xl shadow-neu mb-8 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-gray-700">Most playing:</div>
                      <div className="text-gray-500">Artist - Song Title</div>
                    </div>
                    <div className="w-16 h-16 rounded-full bg-gray-100 shadow-neu flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-blue-500 bg-opacity-80"></div>
                    </div>
                  </div>
                  
                  <div className="flex justify-center mb-8">
                    <div className="flex space-x-6 items-center">
                      <button className="w-12 h-12 rounded-full bg-gray-100 shadow-neu flex items-center justify-center text-gray-600 hover:text-blue-500 transition-colors">
                        <SkipBack className="h-5 w-5" />
                      </button>
                      
                      <button 
                        className={`w-16 h-16 rounded-full flex items-center justify-center text-blue-500 ${
                          isPlaying ? 'bg-gray-100 shadow-neu-inset' : 'bg-gray-100 shadow-neu'
                        } transition-all`}
                        onClick={togglePlay}
                      >
                        {isPlaying ? (
                          <Pause className="h-6 w-6" />
                        ) : (
                          <Play className="h-6 w-6 ml-1" />
                        )}
                      </button>
                      
                      <button className="w-12 h-12 rounded-full bg-gray-100 shadow-neu flex items-center justify-center text-gray-600 hover:text-blue-500 transition-colors">
                        <SkipForward className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="h-3 bg-gray-100 rounded-full shadow-neu-inset overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 bg-opacity-80 rounded-full"
                        style={{ width: '35%' }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-2">
                      <span>1:28</span>
                      <span>4:05</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <button 
                      className={`w-10 h-10 mr-4 rounded-full flex items-center justify-center ${
                        isMuted ? 'bg-gray-100 shadow-neu-inset text-red-500' : 'bg-gray-100 shadow-neu text-gray-600'
                      }`}
                      onClick={toggleMute}
                    >
                      {isMuted ? (
                        <VolumeX className="h-4 w-4" />
                      ) : (
                        <Volume2 className="h-4 w-4" />
                      )}
                    </button>
                    <div className="flex-grow h-2 bg-gray-100 rounded-full shadow-neu-inset overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 bg-opacity-80 rounded-full"
                        style={{ width: `${isMuted ? 0 : volume}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-6">Kapcsolók és gombok</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-4">Kapcsoló</h4>
                    <div className="bg-gray-100 p-8 rounded-2xl shadow-sm inline-block">
                      <div 
                        className={`w-20 h-10 rounded-full bg-gray-100 ${
                          switchStates.neuSwitch ? 'shadow-neu-inset' : 'shadow-neu'
                        } px-1 cursor-pointer flex items-center`}
                        onClick={() => toggleSwitch('neuSwitch')}
                      >
                        <div 
                          className={`w-8 h-8 rounded-full shadow-md transition-all duration-300 ${
                            switchStates.neuSwitch 
                              ? 'ml-auto bg-blue-500 bg-opacity-80' 
                              : 'ml-0 bg-gray-400 bg-opacity-50'
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-4">Gombok</h4>
                    <div className="bg-gray-100 p-8 rounded-2xl shadow-sm space-y-4">
                      <button className="px-6 py-3 rounded-lg bg-gray-100 shadow-neu text-red-500 font-medium hover:shadow-neu-inset transition-all">
                        Piros gomb
                      </button>
                      <button className="px-6 py-3 rounded-lg bg-gray-100 shadow-neu text-blue-500 font-medium hover:shadow-neu-inset transition-all">
                        Kék gomb
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-bold mb-6">Értesítések és vezérlők</h3>
                <div className="max-w-md mx-auto bg-gray-100 rounded-2xl overflow-hidden shadow-sm p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="bg-gray-100 shadow-neu rounded-xl p-4 flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gray-100 shadow-neu flex items-center justify-center mr-4 text-yellow-500">
                          <Bell className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-700">Értesítések</div>
                          <div className="text-sm text-gray-500">Bekapcsolva</div>
                        </div>
                      </div>
                      
                      <div 
                        className={`bg-gray-100 ${
                          switchStates.basicSwitch ? 'shadow-neu' : 'shadow-neu-inset'
                        } rounded-xl p-4 flex items-center cursor-pointer`}
                        onClick={() => toggleSwitch('basicSwitch')}
                      >
                        <div className={`w-10 h-10 rounded-full bg-gray-100 ${
                          switchStates.basicSwitch ? 'shadow-neu text-yellow-500' : 'shadow-neu-inset text-gray-400'
                        } flex items-center justify-center mr-4`}>
                          {switchStates.basicSwitch ? (
                            <Sun className="h-5 w-5" />
                          ) : (
                            <Moon className="h-5 w-5" />
                          )}
                        </div>
                        <div>
                          <div className="font-medium text-gray-700">Sötét mód</div>
                          <div className="text-sm text-gray-500">
                            {switchStates.basicSwitch ? 'Bekapcsolva' : 'Kikapcsolva'}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-100 shadow-neu rounded-xl p-5 flex flex-col justify-center">
                      <div className="text-center mb-3">
                        <div className="font-medium text-gray-700 mb-1">Hangerő</div>
                        <div className="text-2xl font-bold text-blue-500">{volume}%</div>
                      </div>
                      <div className="h-24 w-6 bg-gray-100 rounded-full shadow-neu-inset mx-auto relative">
                        <div 
                          className="absolute bottom-0 left-0 right-0 bg-blue-500 bg-opacity-80 rounded-full"
                          style={{ height: `${volume}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="shadow-md">
            <CardContent className="p-6">
              <h4 className="font-bold mb-4">Neumorfizmus jellemzői:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-semibold mb-3 text-gray-800">Vizuális jellemzők</h5>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Szelíd, puha formák és felületek</li>
                    <li>Világos árnyékok és sötét árnyékok kombinációja</li>
                    <li>Kiemelkedő és besüllyedő elemek (extruded and inset)</li>
                    <li>Monokróm színpaletták enyhe színes kiemelésekkel</li>
                    <li>Árnyék és fény irányának következetes alkalmazása</li>
                    <li>Alacsony kontraszt és finom átmenetek</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-3 text-gray-800">Tervezési megfontolások</h5>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>A háttér és az elemek színének közelsége</li>
                    <li>Kizárólag finom színárnyalatok használata</li>
                    <li>A kontrasztproblémák kezelése színes kiemelésekkel</li>
                    <li>A tapinthatóság és fizikai érzet digitális újragondolása</li>
                    <li>Átmenet a sík és térbeli megjelenítés között</li>
                    <li>Állapotok szofisztikált vizuális megkülönböztetése</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
                <h5 className="font-medium mb-2">Történeti kontextus:</h5>
                <p className="text-gray-700 text-sm">
                  A neumorfizmus 2019 végén kezdett terjedni, Alexander Plyuto és más dizájnerek munkáinak köszönhetően. A stílus a flat design minimalista megközelítésére épít, miközben visszacsempész bizonyos mélységet és textúrát, de a skeumorfizmushoz képest sokkal visszafogottabb, modernebb módon. A "neu" előtag az "új", a "morph" pedig az "alak" szóból származik, utalva arra, hogy ez a stílus a régebbi megközelítések új formába öntése.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <style jsx global>{`
            .shadow-neu {
              box-shadow: 8px 8px 16px rgba(174, 174, 192, 0.4), -8px -8px 16px rgba(255, 255, 255, 0.8);
            }
            
            .shadow-neu-inset {
              box-shadow: inset 2px 2px 5px rgba(174, 174, 192, 0.4), inset -2px -2px 5px rgba(255, 255, 255, 0.8);
            }
            
            .bg-wood-pattern {
              background-color: #deb887;
              background-image: linear-gradient(to right, rgba(100, 50, 0, 0.1) 1px, transparent 1px),
                                linear-gradient(to bottom, rgba(100, 50, 0, 0.1) 1px, transparent 1px);
              background-size: 10px 10px;
            }
            
            .bg-leather-pattern {
              background-color: #b97a57;
              background-image: radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.2) 100%);
              background-size: 10px 10px;
            }
          `}</style>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default SkeuomorphismPage;
