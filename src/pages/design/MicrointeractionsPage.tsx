
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MessageSquare, Share2, Bookmark, ThumbsUp, Bell, Check, X, Search, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MicrointeractionsPage = () => {
  const { toast } = useToast();
  
  // Alap like állapot
  const [basicLiked, setBasicLiked] = useState(false);
  
  // Közepes állapotok
  const [mediumLiked, setMediumLiked] = useState(false);
  const [mediumLikes, setMediumLikes] = useState(42);
  const [mediumBookmarked, setMediumBookmarked] = useState(false);
  const [mediumComment, setMediumComment] = useState('');
  const [mediumComments, setMediumComments] = useState(['Nagyszerű tartalom!', 'Nagyon hasznos, köszönöm!']);
  const [mediumIsSubmitting, setMediumIsSubmitting] = useState(false);
  
  // Haladó állapotok
  const [advancedInteractions, setAdvancedInteractions] = useState({
    like: false,
    superLike: false,
    bookmark: false,
    follow: false,
    notification: false,
    darkMode: false,
  });
  const [advancedLikeCount, setAdvancedLikeCount] = useState(128);
  const [advancedSearchFocus, setAdvancedSearchFocus] = useState(false);
  const [advancedSearchValue, setAdvancedSearchValue] = useState('');
  const [advancedSearchResults, setAdvancedSearchResults] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  
  // Alap like toggler
  const toggleBasicLike = () => {
    setBasicLiked(!basicLiked);
  };
  
  // Közepes interakció kezelők
  const toggleMediumLike = () => {
    if (mediumLiked) {
      setMediumLikes(mediumLikes - 1);
    } else {
      setMediumLikes(mediumLikes + 1);
    }
    setMediumLiked(!mediumLiked);
  };
  
  const toggleMediumBookmark = () => {
    setMediumBookmarked(!mediumBookmarked);
    
    toast({
      title: mediumBookmarked ? "Eltávolítva a könyvjelzőkből" : "Hozzáadva a könyvjelzőkhöz",
      description: mediumBookmarked ? "Az elem el lett távolítva a mentett elemek közül." : "Az elem el lett mentve a könyvjelzőkhöz.",
    });
  };
  
  const handleMediumComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!mediumComment.trim()) return;
    
    setMediumIsSubmitting(true);
    
    // Szimuláljuk a hálózati késleltetést
    setTimeout(() => {
      setMediumComments([...mediumComments, mediumComment]);
      setMediumComment('');
      setMediumIsSubmitting(false);
    }, 1000);
  };
  
  // Haladó interakció kezelők
  const toggleAdvancedLike = () => {
    if (advancedInteractions.like) {
      setAdvancedLikeCount(advancedLikeCount - 1);
    } else {
      setAdvancedLikeCount(advancedLikeCount + 1);
    }
    setAdvancedInteractions({
      ...advancedInteractions,
      like: !advancedInteractions.like
    });
  };
  
  const toggleAdvancedSuperLike = () => {
    if (advancedInteractions.superLike) {
      setAdvancedLikeCount(advancedLikeCount - 5);
    } else {
      // Ha korábban már volt egy sima like, akkor azt kivonjuk, mert a superLike helyettesíti
      if (advancedInteractions.like) {
        setAdvancedLikeCount(advancedLikeCount - 1 + 5);
      } else {
        setAdvancedLikeCount(advancedLikeCount + 5);
      }
    }
    
    setAdvancedInteractions({
      ...advancedInteractions,
      like: advancedInteractions.superLike ? false : true,
      superLike: !advancedInteractions.superLike
    });
  };
  
  const toggleAdvancedBookmark = () => {
    setAdvancedInteractions({
      ...advancedInteractions,
      bookmark: !advancedInteractions.bookmark
    });
    
    toast({
      title: advancedInteractions.bookmark ? "Eltávolítva a könyvjelzőkből" : "Hozzáadva a könyvjelzőkhöz",
      description: advancedInteractions.bookmark ? "Az elem el lett távolítva a mentett elemek közül." : "Az elem el lett mentve a könyvjelzőkhöz.",
    });
  };
  
  const toggleAdvancedFollow = () => {
    setAdvancedInteractions({
      ...advancedInteractions,
      follow: !advancedInteractions.follow
    });
  };
  
  const toggleAdvancedNotification = () => {
    setAdvancedInteractions({
      ...advancedInteractions,
      notification: !advancedInteractions.notification
    });
  };
  
  const toggleAdvancedDarkMode = () => {
    setAdvancedInteractions({
      ...advancedInteractions,
      darkMode: !advancedInteractions.darkMode
    });
  };
  
  const handleAdvancedSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAdvancedSearchValue(value);
    
    if (value.trim().length > 0) {
      setIsSearching(true);
      // Szimuláljuk a keresést
      setTimeout(() => {
        const results = ['Mikrointerakciók', 'Mikro animációk', 'Interakciós design', 'Felhasználói élmény'].filter(
          item => item.toLowerCase().includes(value.toLowerCase())
        );
        setAdvancedSearchResults(results);
        setIsSearching(false);
      }, 500);
    } else {
      setAdvancedSearchResults([]);
    }
  };
  
  return (
    <PageLayout
      title="Mikrointerakciók"
      description="Fedezd fel, hogyan teszik a mikrointerakciók élőbbé és intuitívabbá a felhasználói élményt."
      prompt="Készíts egy oldalt, amely bemutatja a mikrointerakciók és a felhasználói visszajelzések fontosságát a modern webes felületeken. Mutass be három szintet: 1) Alapvető interakciók (kattintás, hover), 2) Közepes szintű animált visszajelzések, 3) Komplex, összetett interakciók, amelyek fokozzák a felhasználói élményt. Minden szinthez készíts demókat, mint például gombokat, like/tetszés funkciót, űrlapmezőket, értesítéseket és navigációs elemeket."
      category="design"
    >
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="basic">Egyszerű</TabsTrigger>
          <TabsTrigger value="intermediate">Közepes</TabsTrigger>
          <TabsTrigger value="advanced">Komplex</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basic">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold mb-2">Alapvető interakciók</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Egyszerű, közvetlen visszajelzések a felhasználói műveletek alapján, minimális animációval.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-6">Reakcióbillentyűk</h3>
                <div className="max-w-lg mx-auto bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                      <div className="ml-3">
                        <div className="font-medium">Felhasználó Neve</div>
                        <div className="text-xs text-gray-500">2 órája</div>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">•••</button>
                  </div>
                  
                  <p className="text-gray-700 mb-4">
                    Ez egy bejegyzés szövege, amely bemutatja az alapvető interakciós elemeket.
                  </p>
                  
                  <div className="border-t border-b border-gray-100 py-2 my-2">
                    <div className="flex justify-between">
                      <div className="flex space-x-6">
                        <button 
                          className={`flex items-center space-x-1 ${basicLiked ? 'text-blue-500' : 'text-gray-500'} hover:text-blue-600`}
                          onClick={toggleBasicLike}
                        >
                          <ThumbsUp size={18} />
                          <span>Tetszik</span>
                        </button>
                        
                        <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-600">
                          <MessageSquare size={18} />
                          <span>Hozzászólás</span>
                        </button>
                      </div>
                      
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-600">
                        <Share2 size={18} />
                        <span>Megosztás</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                      <div className="ml-2 flex-grow">
                        <input 
                          type="text" 
                          placeholder="Írj hozzászólást..." 
                          className="w-full p-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-6">Gombok és elemek</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Alapgombok</h4>
                    <div className="space-y-3">
                      <button className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
                        Elsődleges gomb
                      </button>
                      <button className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors">
                        Másodlagos gomb
                      </button>
                      <button className="w-full px-4 py-2 border border-blue-500 text-blue-500 rounded hover:bg-blue-50 transition-colors">
                        Körvonal gomb
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Űrlapelemek</h4>
                    <div className="space-y-3">
                      <input 
                        type="text" 
                        placeholder="Szövegmező" 
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                      />
                      <select className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500">
                        <option>Válassz egy opciót</option>
                        <option>Opció 1</option>
                        <option>Opció 2</option>
                      </select>
                      <div className="flex items-center">
                        <input 
                          type="checkbox" 
                          id="basic-checkbox" 
                          className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor="basic-checkbox" className="ml-2 text-sm text-gray-700">
                          Jelölőnégyzet
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Kártyaelemek</h4>
                    <div className="border border-gray-200 rounded shadow-sm p-4 hover:shadow-md transition-shadow">
                      <h5 className="font-medium mb-2">Kártya cím</h5>
                      <p className="text-sm text-gray-600 mb-3">Ez egy egyszerű kártya elem, amely egér fölé vitelnél árnyékot kap.</p>
                      <button className="text-sm text-blue-500 hover:text-blue-700 transition-colors">
                        Több információ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-3">Alap interakciók jellemzői:</h4>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Egyszerű színváltozások kattintásra/hover-re</li>
                  <li>Minimális állapotváltozás visszajelzések</li>
                  <li>Alap CSS átmenetek (transition-colors, transition-shadow)</li>
                  <li>Egyszerű állapotkezelés (aktív/inaktív)</li>
                  <li>Közvetlen, azonnali visszajelzés a felhasználói műveletre</li>
                  <li>Nincs vagy minimális az animáció</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="intermediate">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold mb-2">Közepes szintű interakciók</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Finomabb, animált visszajelzések, amelyek fokozzák a felhasználói élményt és vizuálisan kommunikálják az állapotváltozásokat.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-6">Szociális interakciók</h3>
                <div className="max-w-xl mx-auto bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">U</div>
                        <div className="ml-3">
                          <div className="font-medium">Felhasználó Neve</div>
                          <div className="text-xs text-gray-500">2 órája • Nyilvános</div>
                        </div>
                      </div>
                      <button className="text-gray-400 hover:text-gray-600 transition-colors">•••</button>
                    </div>
                    
                    <p className="text-gray-700 mb-4">
                      Ez egy példa bejegyzés a közepes szintű interakciók bemutatására. Figyeld meg a gombokra kattintásnál az animációkat és az azonnali visszajelzéseket!
                    </p>
                    
                    <div className="aspect-video bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
                      Kép vagy videó helye
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-1">
                        <div className="flex -space-x-1">
                          <div className="w-5 h-5 rounded-full bg-blue-500 border border-white"></div>
                          <div className="w-5 h-5 rounded-full bg-red-500 border border-white"></div>
                        </div>
                        <span>{mediumLikes} reakció</span>
                      </div>
                      <div>{mediumComments.length} hozzászólás</div>
                    </div>
                    
                    <div className="border-t border-b border-gray-100 py-2 my-2">
                      <div className="flex justify-between">
                        <motion.button 
                          className={`flex items-center space-x-1 px-3 py-1.5 rounded-md ${mediumLiked ? 'text-blue-500' : 'text-gray-500'} hover:bg-gray-100`}
                          onClick={toggleMediumLike}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            animate={mediumLiked ? {
                              scale: [1, 1.2, 1],
                              transition: { duration: 0.3 }
                            } : {}}
                          >
                            <ThumbsUp size={18} />
                          </motion.div>
                          <span>Tetszik</span>
                        </motion.button>
                        
                        <motion.button 
                          className="flex items-center space-x-1 px-3 py-1.5 rounded-md text-gray-500 hover:bg-gray-100"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <MessageSquare size={18} />
                          <span>Hozzászólás</span>
                        </motion.button>
                        
                        <motion.button 
                          className="flex items-center space-x-1 px-3 py-1.5 rounded-md text-gray-500 hover:bg-gray-100"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Share2 size={18} />
                          <span>Megosztás</span>
                        </motion.button>
                        
                        <motion.button 
                          className={`flex items-center space-x-1 px-3 py-1.5 rounded-md ${mediumBookmarked ? 'text-yellow-500' : 'text-gray-500'} hover:bg-gray-100`}
                          onClick={toggleMediumBookmark}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            animate={mediumBookmarked ? {
                              y: [0, -5, 0],
                              transition: { duration: 0.3 }
                            } : {}}
                          >
                            <Bookmark size={18} fill={mediumBookmarked ? "currentColor" : "none"} />
                          </motion.div>
                          <span>Mentés</span>
                        </motion.button>
                      </div>
                    </div>
                    
                    <div className="pt-3">
                      <div className="space-y-3 mb-4">
                        {mediumComments.map((comment, i) => (
                          <motion.div 
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex"
                          >
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                            <div className="ml-2 bg-gray-100 rounded-2xl px-3 py-2">
                              <div className="font-medium text-sm">Felhasználó</div>
                              <div className="text-sm">{comment}</div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                      
                      <form onSubmit={handleMediumComment} className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0"></div>
                        <div className="ml-2 flex-grow relative">
                          <input 
                            type="text" 
                            placeholder="Írj hozzászólást..." 
                            className="w-full p-2 pr-10 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={mediumComment}
                            onChange={(e) => setMediumComment(e.target.value)}
                          />
                          <button 
                            type="submit" 
                            disabled={!mediumComment.trim() || mediumIsSubmitting} 
                            className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${
                              !mediumComment.trim() || mediumIsSubmitting ? 'text-gray-400' : 'text-blue-500 hover:text-blue-600'
                            }`}
                          >
                            {mediumIsSubmitting ? (
                              <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                                <Loader2 size={18} />
                              </motion.div>
                            ) : (
                              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                              </motion.div>
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-6">Interaktív gombok és vezérlők</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-4">Animált gombok</h4>
                    <div className="space-y-4">
                      <motion.button 
                        className="w-full px-4 py-2.5 bg-blue-500 text-white rounded-md shadow-sm"
                        whileHover={{ scale: 1.03, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                      >
                        Pulzáló gomb
                      </motion.button>
                      
                      <motion.button 
                        className="w-full px-4 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-md shadow-sm overflow-hidden relative"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white"
                          initial={{ x: "-100%", opacity: 0.3 }}
                          whileHover={{ x: "100%" }}
                          transition={{ duration: 0.5 }}
                        />
                        <span className="relative z-10">Áttűnő gomb</span>
                      </motion.button>
                      
                      <motion.button 
                        className="w-full px-4 py-2.5 border-2 border-green-500 text-green-500 font-medium rounded-md"
                        whileHover={{ scale: 1.03, backgroundColor: "rgba(34, 197, 94, 0.1)" }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ duration: 0.2 }}
                      >
                        <motion.div
                          className="flex items-center justify-center"
                          whileHover={{ x: 5 }}
                        >
                          <span>Animált tartalom</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </motion.div>
                      </motion.button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-4">Interaktív vezérlők</h4>
                    <div className="space-y-4 p-6 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-700">Értesítések</span>
                        <div className="relative">
                          <motion.div 
                            className="w-12 h-6 rounded-full bg-gray-200 flex items-center px-1 cursor-pointer"
                            onClick={() => toggleMediumBookmark()}
                            animate={{ backgroundColor: mediumBookmarked ? "#22c55e" : "#e5e7eb" }}
                            transition={{ duration: 0.3 }}
                          >
                            <motion.div 
                              className="w-4 h-4 rounded-full bg-white shadow-sm"
                              animate={{ x: mediumBookmarked ? 26 : 0 }}
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                          </motion.div>
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 mb-2">Hangerő</label>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-blue-500"
                            animate={{ width: `${mediumLikes}%` }}
                            transition={{ duration: 0.3 }}
                          />
                        </div>
                      </div>
                      
                      <div className="relative">
                        <label className="block text-gray-700 mb-2">Keresés</label>
                        <input
                          type="text"
                          className="w-full py-2 pl-9 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
                          placeholder="Keresés..."
                        />
                        <div className="absolute left-3 top-[38px] text-gray-400">
                          <Search size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-3">Közepes szintű interakciók jellemzői:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Animált átmenetek és mozgások</li>
                    <li>Fizikára épülő animációk (rugó, tehetetlenség)</li>
                    <li>Többállapotú interakciós elemek</li>
                    <li>Közvetlen vizuális visszajelzések</li>
                    <li>Hover és tap állapotok változatos kezelése</li>
                  </ul>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Toast üzenetek és értesítések</li>
                    <li>Betöltési/várakozási állapotok animációi</li>
                    <li>Framer Motion vagy hasonló animációs könyvtárak használata</li>
                    <li>Animáció időzítés és késleltetés</li>
                    <li>Vizuális hierarchia és figyelem irányítás</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="advanced">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold mb-2">Komplex interakciók</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Kifinomult, többlépcsős mikrointerakciók, amelyek jelentősen javítják a felhasználói élményt és az emlékezhetőséget.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-6">Szociális média interakciók</h3>
                <div 
                  className={`max-w-xl mx-auto rounded-xl border shadow-sm overflow-hidden transition-colors duration-300 ${
                    advancedInteractions.darkMode 
                      ? 'bg-gray-900 border-gray-700 text-white' 
                      : 'bg-white border-gray-200'
                  }`}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex items-center">
                        <motion.div
                          className="relative"
                          whileHover={{ scale: 1.1 }}
                        >
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold cursor-pointer">
                            U
                          </div>
                          {advancedInteractions.follow && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border border-white"
                            >
                              <Check size={12} />
                            </motion.div>
                          )}
                        </motion.div>
                        <div className="ml-3">
                          <div className="font-medium flex items-center">
                            Felhasználó Neve
                            <motion.button 
                              className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                                advancedInteractions.follow 
                                  ? `${advancedInteractions.darkMode ? 'bg-gray-800' : 'bg-gray-100'} text-gray-500` 
                                  : 'bg-blue-500 text-white'
                              }`}
                              onClick={toggleAdvancedFollow}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {advancedInteractions.follow ? 'Követve' : 'Követés'}
                            </motion.button>
                          </div>
                          <div className={`text-xs ${advancedInteractions.darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            2 órája • Nyilvános
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <motion.button
                          className={`p-2 rounded-full ${
                            advancedInteractions.notification 
                              ? 'text-yellow-500' 
                              : advancedInteractions.darkMode ? 'text-gray-400' : 'text-gray-500'
                          }`}
                          onClick={toggleAdvancedNotification}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Bell size={18} />
                        </motion.button>
                        <motion.button
                          className={`p-2 rounded-full ${advancedInteractions.darkMode ? 'text-gray-400' : 'text-gray-500'}`}
                          onClick={toggleAdvancedDarkMode}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {advancedInteractions.darkMode ? (
                            <Sun size={18} />
                          ) : (
                            <Moon size={18} />
                          )}
                        </motion.button>
                      </div>
                    </div>
                    
                    <p className={advancedInteractions.darkMode ? 'text-gray-300 mb-4' : 'text-gray-700 mb-4'}>
                      Ez egy példa bejegyzés a komplex mikrointerakciók bemutatására. Próbáld ki a különböző interakciókat, 
                      mint a tetszés gomb hosszú nyomása az extra reakciókért, vagy a sötét mód bekapcsolása!
                    </p>
                    
                    <div className={`aspect-video ${advancedInteractions.darkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-lg mb-4 flex items-center justify-center ${advancedInteractions.darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                      Kép vagy videó helye
                    </div>
                    
                    <div className={`flex items-center justify-between text-sm ${advancedInteractions.darkMode ? 'text-gray-400' : 'text-gray-500'} mb-4`}>
                      <div className="flex items-center space-x-1">
                        <AnimatePresence>
                          {advancedInteractions.superLike && (
                            <motion.div 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              className="flex -space-x-1"
                            >
                              <div className="w-5 h-5 rounded-full bg-purple-500 border border-white flex items-center justify-center text-white text-xs">
                                5x
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        {advancedInteractions.like && !advancedInteractions.superLike && (
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="flex -space-x-1"
                          >
                            <div className="w-5 h-5 rounded-full bg-blue-500 border border-white"></div>
                          </motion.div>
                        )}
                        <span>{advancedLikeCount} reakció</span>
                      </div>
                      <div>8 hozzászólás</div>
                    </div>
                    
                    <div className={`border-t border-b ${advancedInteractions.darkMode ? 'border-gray-700' : 'border-gray-100'} py-2 my-2`}>
                      <div className="flex justify-between">
                        <motion.button 
                          className={`flex items-center space-x-1 px-3 py-1.5 rounded-md ${
                            advancedInteractions.superLike 
                              ? 'text-purple-500' 
                              : advancedInteractions.like 
                                ? 'text-blue-500' 
                                : advancedInteractions.darkMode ? 'text-gray-400' : 'text-gray-500'
                          } ${advancedInteractions.darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                          onClick={toggleAdvancedLike}
                          onContextMenu={(e) => {
                            e.preventDefault();
                            toggleAdvancedSuperLike();
                          }}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            animate={advancedInteractions.like || advancedInteractions.superLike ? {
                              scale: [1, 1.2, 1],
                              transition: { duration: 0.3 }
                            } : {}}
                          >
                            {advancedInteractions.superLike ? (
                              <span className="text-lg">⭐</span>
                            ) : (
                              <ThumbsUp size={18} />
                            )}
                          </motion.div>
                          <span>{advancedInteractions.superLike ? 'Szuper' : 'Tetszik'}</span>
                        </motion.button>
                        
                        <motion.button 
                          className={`flex items-center space-x-1 px-3 py-1.5 rounded-md ${
                            advancedInteractions.darkMode ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-100'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <MessageSquare size={18} />
                          <span>Hozzászólás</span>
                        </motion.button>
                        
                        <motion.button 
                          className={`flex items-center space-x-1 px-3 py-1.5 rounded-md ${
                            advancedInteractions.darkMode ? 'text-gray-400 hover:bg-gray-800' : 'text-gray-500 hover:bg-gray-100'
                          }`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Share2 size={18} />
                          <span>Megosztás</span>
                        </motion.button>
                        
                        <motion.button 
                          className={`flex items-center space-x-1 px-3 py-1.5 rounded-md ${
                            advancedInteractions.bookmark 
                              ? 'text-yellow-500' 
                              : advancedInteractions.darkMode ? 'text-gray-400' : 'text-gray-500'
                          } ${advancedInteractions.darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                          onClick={toggleAdvancedBookmark}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <motion.div
                            animate={advancedInteractions.bookmark ? {
                              y: [0, -5, 0],
                              transition: { duration: 0.3 }
                            } : {}}
                          >
                            <Bookmark size={18} fill={advancedInteractions.bookmark ? "currentColor" : "none"} />
                          </motion.div>
                          <span>Mentés</span>
                        </motion.button>
                      </div>
                    </div>
                    
                    <div className="pt-3">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full ${advancedInteractions.darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}></div>
                        <div className="ml-2 flex-grow relative">
                          <input 
                            type="text" 
                            placeholder="Írj hozzászólást..." 
                            className={`w-full p-2 pr-10 ${
                              advancedInteractions.darkMode 
                                ? 'bg-gray-800 text-gray-200 placeholder-gray-500 focus:ring-blue-500' 
                                : 'bg-gray-100 text-gray-700 focus:ring-blue-500'
                            } rounded-full text-sm focus:outline-none focus:ring-2`}
                          />
                          <button className={`absolute right-2 top-1/2 transform -translate-y-1/2 ${advancedInteractions.darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                            </motion.div>
                          </button>
                        </div>
                      </div>
                      
                      <div className="mt-4 text-xs text-center text-gray-500">
                        <p>Tipp: Hosszan nyomd a Tetszik gombot a Szuper reakcióhoz!</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-6">Interaktív keresés</h3>
                <div className="max-w-md mx-auto">
                  <div className={`p-6 rounded-xl ${advancedInteractions.darkMode ? 'bg-gray-900' : 'bg-white'} shadow-lg border ${advancedInteractions.darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                    <div className="relative mb-2">
                      <motion.div 
                        className={`absolute inset-0 rounded-lg ${advancedSearchFocus ? 'shadow-lg' : 'shadow-none'}`}
                        animate={{ scale: advancedSearchFocus ? 1.02 : 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                      <div className="relative">
                        <input
                          type="text"
                          className={`w-full py-3 pl-10 pr-4 rounded-lg focus:outline-none transition-all ${
                            advancedInteractions.darkMode 
                              ? 'bg-gray-800 text-white border-gray-700 focus:border-blue-500' 
                              : 'bg-gray-50 text-gray-900 border border-gray-300 focus:border-blue-500'
                          }`}
                          placeholder="Keresés..."
                          onFocus={() => setAdvancedSearchFocus(true)}
                          onBlur={() => setTimeout(() => setAdvancedSearchFocus(false), 200)}
                          value={advancedSearchValue}
                          onChange={handleAdvancedSearch}
                        />
                        <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                          advancedInteractions.darkMode ? 'text-gray-500' : 'text-gray-400'
                        }`}>
                          <Search size={18} />
                        </div>
                        
                        {advancedSearchValue && (
                          <motion.button
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0 }}
                            className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${
                              advancedInteractions.darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'
                            }`}
                            onClick={() => setAdvancedSearchValue('')}
                          >
                            <X size={18} />
                          </motion.button>
                        )}
                      </div>
                    </div>
                    
                    <AnimatePresence>
                      {advancedSearchFocus && advancedSearchValue.trim() && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className={`mt-1 rounded-lg overflow-hidden ${
                            advancedInteractions.darkMode ? 'bg-gray-800' : 'bg-white'
                          } shadow-lg border ${
                            advancedInteractions.darkMode ? 'border-gray-700' : 'border-gray-200'
                          }`}
                        >
                          {isSearching ? (
                            <div className={`py-4 px-3 text-center ${
                              advancedInteractions.darkMode ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="mx-auto w-6 h-6 mb-2"
                              >
                                <Loader2 size={24} />
                              </motion.div>
                              <div>Keresés...</div>
                            </div>
                          ) : advancedSearchResults.length === 0 ? (
                            <div className={`py-4 px-3 text-center ${
                              advancedInteractions.darkMode ? 'text-gray-400' : 'text-gray-500'
                            }`}>
                              Nincs találat a(z) "{advancedSearchValue}" keresésre
                            </div>
                          ) : (
                            <div className={`py-2 ${
                              advancedInteractions.darkMode ? 'text-gray-200' : 'text-gray-800'
                            }`}>
                              {advancedSearchResults.map((result, index) => (
                                <motion.div
                                  key={index}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.2, delay: index * 0.05 }}
                                  className={`px-3 py-2 cursor-pointer ${
                                    advancedInteractions.darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
                                  }`}
                                >
                                  <div className="flex items-center">
                                    <Search size={16} className="mr-2 text-gray-400" />
                                    <span>{result}</span>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-3">Komplex interakciók jellemzői:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3 text-gray-800">Fejlett interakciós minták</h5>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Többlépcsős és gesztus alapú interakciók</li>
                      <li>Kontextus-érzékeny visszajelzések</li>
                      <li>Téma és megjelenés egyéni preferenciák alapján</li>
                      <li>Összehangolt animációs és átmeneti hatások</li>
                      <li>Szofisztikált állapotkezelés és állapotjelzés</li>
                      <li>"Delightful" momentumok, amelyek fokozzák az élményt</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3 text-gray-800">Technikai aspektusok</h5>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Animációs típusok és metódusok kombinálása</li>
                      <li>Reaktív állapotkezelés és azonnali visszajelzés</li>
                      <li>Fejlett gesztus felismerés és kezelés</li>
                      <li>Adaptív és reszponzív animációk</li>
                      <li>Teljesítmény-optimalizált várakozó és hibaállapotok</li>
                      <li>Mikro-animációk és -interakciók teljes rendszere</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </PageLayout>
  );
};

export default MicrointeractionsPage;
