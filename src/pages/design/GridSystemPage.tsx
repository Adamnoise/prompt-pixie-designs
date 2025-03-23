
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const GridSystemPage = () => {
  return (
    <PageLayout
      title="Rácshálózat és Elrendezés"
      description="Fedezd fel a rácshálózatok és elrendezési rendszerek evolúcióját a webtervezésben."
      prompt="Készíts egy oldalt, amely bemutatja a különböző rácshálózat-rendszereket és elrendezési technikákat a webtervezésben. Mutass be három szintet: 1) Egyszerű, fix szélességű táblázatos elrendezés, 2) Reszponzív, 12 oszlopos grid rendszer, 3) Modern CSS Grid és Flexbox alapú komplex elrendezések. Minden szinthez mutass vizuális példákat, kódpéldákat és magyarázatokat, amelyek szemléltetik a technikák fejlődését és különbségeit."
      category="design"
    >
      <Tabs defaultValue="basic" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="basic">Egyszerű</TabsTrigger>
          <TabsTrigger value="intermediate">12 oszlopos</TabsTrigger>
          <TabsTrigger value="advanced">Modern Layout</TabsTrigger>
        </TabsList>
        
        <TabsContent value="basic">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold mb-2">Egyszerű, fix szélességű elrendezés</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A webtervezés korai éveiben használt egyszerű, táblázatalapú és fix szélességű elrendezések.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-4">Táblázatos elrendezés</h3>
                <p className="text-gray-600 mb-6">
                  A HTML táblázatokat eredetileg adatok megjelenítésére tervezték, de a korai webtervezésben gyakran használták teljes oldalak elrendezéséhez is.
                </p>
                
                <div className="border border-gray-300 rounded-lg p-4 mb-6 overflow-auto">
                  <table className="w-full border-collapse" style={{ width: '800px', margin: '0 auto' }}>
                    <tbody>
                      <tr>
                        <td colSpan={3} className="border border-gray-400 bg-gray-200 p-4 text-center font-bold">
                          Fejléc
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 bg-gray-100 p-4 w-1/5 align-top">
                          <div className="font-bold mb-3">Navigáció</div>
                          <ul className="list-disc pl-5 text-sm">
                            <li className="mb-2">Kezdőlap</li>
                            <li className="mb-2">Rólunk</li>
                            <li className="mb-2">Szolgáltatások</li>
                            <li>Kapcsolat</li>
                          </ul>
                        </td>
                        <td className="border border-gray-400 p-4 w-3/5 align-top">
                          <h2 className="font-bold mb-3">Fő tartalom</h2>
                          <p className="text-sm mb-3">
                            Ez a táblázatos elrendezés demonstrálja, hogyan használták a HTML táblázatokat layoutok létrehozására.
                            A középső cella a fő tartalmat tartalmazza, körülötte a navigáció és a kiegészítő információk.
                          </p>
                          <p className="text-sm">
                            A táblázatok használata elrendezéshez nem felel meg a modern webfejlesztési szabványoknak,
                            mivel nem adaptív, nem szemantikus, és nehéz karbantartani.
                          </p>
                        </td>
                        <td className="border border-gray-400 bg-gray-100 p-4 w-1/5 align-top">
                          <div className="font-bold mb-3">Hirdetések</div>
                          <div className="bg-gray-300 p-4 text-center text-xs mb-3">Hirdetési blokk</div>
                          <div className="bg-gray-300 p-4 text-center text-xs">Hirdetési blokk</div>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3} className="border border-gray-400 bg-gray-200 p-2 text-center text-sm">
                          Lábléc © 2023
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium text-gray-700 mb-2">HTML kód példa:</h4>
                  <pre className="text-xs bg-gray-800 text-gray-100 p-4 rounded-md overflow-auto">
{`<table width="800" align="center" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td colspan="3" bgcolor="#f0f0f0" align="center">
      <b>Fejléc</b>
    </td>
  </tr>
  <tr>
    <td width="20%" bgcolor="#f5f5f5" valign="top">
      <b>Navigáció</b>
      <ul>
        <li>Kezdőlap</li>
        <li>Rólunk</li>
        <li>Szolgáltatások</li>
        <li>Kapcsolat</li>
      </ul>
    </td>
    <td width="60%" valign="top">
      <h2>Fő tartalom</h2>
      <p>Tartalom szövege...</p>
    </td>
    <td width="20%" bgcolor="#f5f5f5" valign="top">
      <b>Hirdetések</b>
      <div>Hirdetési blokk</div>
    </td>
  </tr>
  <tr>
    <td colspan="3" bgcolor="#f0f0f0" align="center">
      Lábléc © 2023
    </td>
  </tr>
</table>`}
                  </pre>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-4">Fix szélességű div alapú elrendezés</h3>
                <p className="text-gray-600 mb-6">
                  A táblázatos elrendezés után a fejlesztők áttértek a div alapú struktúrákra, de még mindig fix szélességgel és pozicionálással.
                </p>
                
                <div className="rounded-lg p-4 flex justify-center mb-6">
                  <div className="w-full" style={{ width: '800px' }}>
                    <div className="bg-gray-200 p-4 text-center font-bold mb-2">
                      Fejléc
                    </div>
                    <div className="flex mb-2">
                      <div className="w-1/5 bg-gray-100 p-4 mr-2">
                        <div className="font-bold mb-3">Navigáció</div>
                        <ul className="list-disc pl-5 text-sm">
                          <li className="mb-2">Kezdőlap</li>
                          <li className="mb-2">Rólunk</li>
                          <li className="mb-2">Szolgáltatások</li>
                          <li>Kapcsolat</li>
                        </ul>
                      </div>
                      <div className="w-3/5 bg-white border border-gray-200 p-4 mr-2">
                        <h2 className="font-bold mb-3">Fő tartalom</h2>
                        <p className="text-sm mb-3">
                          Ez a div-alapú elrendezés a HTML táblázatok helyett diveket használ.
                          A középső div a fő tartalmat tartalmazza, körülötte a navigáció és a kiegészítő információk.
                        </p>
                        <p className="text-sm">
                          Ez a módszer már szemantikusabb, mint a táblázatos elrendezés, de még mindig
                          fix szélességgel rendelkezik, ami nem optimális különböző eszközökön.
                        </p>
                      </div>
                      <div className="w-1/5 bg-gray-100 p-4">
                        <div className="font-bold mb-3">Hirdetések</div>
                        <div className="bg-gray-300 p-4 text-center text-xs mb-3">Hirdetési blokk</div>
                        <div className="bg-gray-300 p-4 text-center text-xs">Hirdetési blokk</div>
                      </div>
                    </div>
                    <div className="bg-gray-200 p-2 text-center text-sm">
                      Lábléc © 2023
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-700 mb-2">HTML kód példa:</h4>
                    <pre className="text-xs bg-gray-800 text-gray-100 p-4 rounded-md overflow-auto">
{`<div id="container" style="width: 800px; margin: 0 auto;">
  <div id="header" style="background-color: #f0f0f0; padding: 10px; text-align: center;">
    <h1>Fejléc</h1>
  </div>
  <div id="content" style="overflow: auto;">
    <div id="nav" style="float: left; width: 20%; background-color: #f5f5f5; padding: 10px;">
      <h2>Navigáció</h2>
      <ul>
        <li>Kezdőlap</li>
        <li>Rólunk</li>
        <li>Szolgáltatások</li>
        <li>Kapcsolat</li>
      </ul>
    </div>
    <div id="main" style="float: left; width: 60%; padding: 10px;">
      <h2>Fő tartalom</h2>
      <p>Tartalom szövege...</p>
    </div>
    <div id="sidebar" style="float: left; width: 20%; background-color: #f5f5f5; padding: 10px;">
      <h2>Hirdetések</h2>
      <div>Hirdetési blokk</div>
    </div>
  </div>
  <div id="footer" style="background-color: #f0f0f0; padding: 5px; text-align: center; clear: both;">
    Lábléc © 2023
  </div>
</div>`}
                    </pre>
                  </div>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-700 mb-2">CSS kód példa:</h4>
                    <pre className="text-xs bg-gray-800 text-gray-100 p-4 rounded-md overflow-auto">
{`#container {
  width: 800px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

#header {
  background-color: #f0f0f0;
  padding: 10px;
  text-align: center;
}

#nav {
  float: left;
  width: 20%;
  background-color: #f5f5f5;
  padding: 10px;
}

#main {
  float: left;
  width: 60%;
  padding: 10px;
}

#sidebar {
  float: left;
  width: 20%;
  background-color: #f5f5f5;
  padding: 10px;
}

#footer {
  background-color: #f0f0f0;
  padding: 5px;
  text-align: center;
  clear: both;
}`}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-3">Az egyszerű, fix szélességű elrendezés jellemzői:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Fix szélesség (általában 800-960 pixel)</li>
                    <li>Nem adaptálódik a különböző képernyőméretekhez</li>
                    <li>Float alapú pozicionálás</li>
                    <li>Korlátozott rugalmasság és alakíthatóság</li>
                    <li>Pixelalapú méretezés</li>
                  </ul>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Tábla vagy div alapú struktúra</li>
                    <li>Egymásba ágyazott elemek bonyolult struktúrája</li>
                    <li>Gyakran inline CSS vagy táblázatos attribútumok használata</li>
                    <li>Korlátozott szemantikus jelentés</li>
                    <li>Nehézkes karbantarthatóság és módosíthatóság</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="intermediate">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold mb-2">12 oszlopos rácshálózat</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Rugalmas, 12 oszlopos rácshálózat, amely adaptálódik a különböző képernyőméretekhez, és széles körben elterjedt megközelítés a reszponzív weboldalak tervezésében.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-4">12 oszlopos rácshálózat alapjai</h3>
                <p className="text-gray-600 mb-6">
                  A 12 oszlopos rendszer lehetővé teszi a különböző méretű és arányú elemek könnyű elrendezését, mivel 12 számos osztója van (1, 2, 3, 4, 6, 12), így különböző oszlopkombinációk hozhatók létre.
                </p>
                
                <div className="border border-gray-200 rounded-lg p-4 mb-6">
                  <div className="grid grid-cols-12 gap-2 mb-4">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="h-12 bg-blue-100 border border-blue-200 flex items-center justify-center text-xs font-medium text-blue-700 rounded-md">
                        1
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-12 gap-2 mb-4">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="col-span-2 h-12 bg-blue-200 border border-blue-300 flex items-center justify-center text-xs font-medium text-blue-800 rounded-md">
                        2
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-12 gap-2 mb-4">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="col-span-3 h-12 bg-blue-300 border border-blue-400 flex items-center justify-center text-xs font-medium text-blue-900 rounded-md">
                        3
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-12 gap-2 mb-4">
                    {Array.from({ length: 3 }).map((_, i) => (
                      <div key={i} className="col-span-4 h-12 bg-blue-400 border border-blue-500 flex items-center justify-center text-xs font-medium text-white rounded-md">
                        4
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-12 gap-2 mb-4">
                    {Array.from({ length: 2 }).map((_, i) => (
                      <div key={i} className="col-span-6 h-12 bg-blue-500 border border-blue-600 flex items-center justify-center text-xs font-medium text-white rounded-md">
                        6
                      </div>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-12 h-12 bg-blue-600 border border-blue-700 flex items-center justify-center text-xs font-medium text-white rounded-md">
                      12
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                  <h4 className="font-medium text-gray-700 mb-2">A 12 oszlopos rendszer előnyei:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                    <li>Rugalmas elrendezési lehetőségek, köszönhetően a 12 számos osztójának</li>
                    <li>Könnyű adaptálhatóság különböző képernyőméretekhez</li>
                    <li>Konzisztens térközök és szegélyek az elemek között</li>
                    <li>Jól strukturált, előre meghatározott osztályok és viselkedések</li>
                    <li>Széles körben használt és támogatott a népszerű CSS keretrendszerekben (Bootstrap, Foundation, stb.)</li>
                  </ul>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-4">Reszponzív 12 oszlopos elrendezés</h3>
                <p className="text-gray-600 mb-6">
                  A modern 12 oszlopos rendszerek különböző képernyőméretekhez alkalmazkodnak, eltérő viselkedést biztosítva mobil, táblagép és asztali nézeteknél.
                </p>
                
                <div className="border border-gray-200 rounded-xl overflow-hidden mb-6">
                  <div className="bg-gray-100 px-4 py-2 border-b border-gray-200 flex items-center font-medium text-gray-800">
                    Reszponzív mintaelrendezés
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-12 gap-4 mb-4">
                      <div className="col-span-12 h-16 bg-blue-100 rounded-lg flex items-center justify-center font-medium text-blue-600">
                        Fejléc (12)
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-12 gap-4 mb-4">
                      <div className="col-span-12 md:col-span-3 bg-blue-100 rounded-lg p-4">
                        <div className="h-full font-medium text-blue-600">
                          <div className="mb-3">Oldalsáv (12/3)</div>
                          <ul className="text-sm space-y-1 text-blue-800">
                            <li>• Navigációs elem 1</li>
                            <li>• Navigációs elem 2</li>
                            <li>• Navigációs elem 3</li>
                            <li>• Navigációs elem 4</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-9 bg-blue-50 rounded-lg p-4">
                        <div className="font-medium text-blue-600 mb-3">Fő tartalom (12/9)</div>
                        <div className="grid grid-cols-12 gap-4">
                          <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white rounded shadow p-3 text-sm">
                            <div className="font-medium mb-2">Kártya 1 (12/6/4)</div>
                            <p className="text-gray-600">Ez a kártya reszponzív módon változtatja a szélességét a képernyőméretnek megfelelően.</p>
                          </div>
                          <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white rounded shadow p-3 text-sm">
                            <div className="font-medium mb-2">Kártya 2 (12/6/4)</div>
                            <p className="text-gray-600">Mobilon teljes szélességű, tableten fél szélességű, asztali nézetben harmad szélességű.</p>
                          </div>
                          <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-white rounded shadow p-3 text-sm">
                            <div className="font-medium mb-2">Kártya 3 (12/6/4)</div>
                            <p className="text-gray-600">A Bootstrap és más CSS keretrendszerek hasonló elvek alapján működnek.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center font-medium text-blue-600">
                        Lábléc (12)
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-700 mb-2">HTML kód példa:</h4>
                    <pre className="text-xs bg-gray-800 text-gray-100 p-4 rounded-md overflow-auto">
{`<div class="container">
  <div class="row">
    <div class="col-12">
      <header>Fejléc (12)</header>
    </div>
  </div>
  
  <div class="row">
    <div class="col-12 col-md-3">
      <nav>Oldalsáv (12/3)</nav>
    </div>
    <div class="col-12 col-md-9">
      <main>
        <h2>Fő tartalom (12/9)</h2>
        <div class="row">
          <div class="col-12 col-sm-6 col-lg-4">
            <div class="card">Kártya 1 (12/6/4)</div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4">
            <div class="card">Kártya 2 (12/6/4)</div>
          </div>
          <div class="col-12 col-sm-6 col-lg-4">
            <div class="card">Kártya 3 (12/6/4)</div>
          </div>
        </div>
      </main>
    </div>
  </div>
  
  <div class="row">
    <div class="col-12">
      <footer>Lábléc (12)</footer>
    </div>
  </div>
</div>`}
                    </pre>
                  </div>
                  
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <h4 className="font-medium text-gray-700 mb-2">CSS kód példa:</h4>
                    <pre className="text-xs bg-gray-800 text-gray-100 p-4 rounded-md overflow-auto">
{`/* Egyszerűsített 12 oszlopos rácsrendszer */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}

[class*="col-"] {
  padding: 0 15px;
}

/* Alapértelmezett (mobil) elrendezés */
.col-12 { width: 100%; }
.col-6 { width: 50%; }
.col-4 { width: 33.33%; }
.col-3 { width: 25%; }

/* Tablet (min-width: 768px) */
@media (min-width: 768px) {
  .col-md-3 { width: 25%; }
  .col-md-9 { width: 75%; }
  .col-md-6 { width: 50%; }
}

/* Asztali (min-width: 1024px) */
@media (min-width: 1024px) {
  .col-lg-4 { width: 33.33%; }
}`}
                    </pre>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-3">A 12 oszlopos reszponzív rácshálózat jellemzői:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Rugalmas, százalékos alapú elrendezés</li>
                    <li>Reszponzív töréspontok (breakpoint) különböző eszközméretekhez</li>
                    <li>Különböző oszlopkonfigurációk eltérő képernyőméretekhez</li>
                    <li>Container-row-column struktúra</li>
                    <li>Előre meghatározott osztálynevek a méretezéshez</li>
                  </ul>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Media query-k a reszponzív viselkedéshez</li>
                    <li>Float vagy flexbox alapú implementáció (keretrendszertől függően)</li>
                    <li>Konzisztens térközök és padding a gutters által</li>
                    <li>Egymásba ágyazott sorok és oszlopok támogatása</li>
                    <li>Széles körben alkalmazott Bootstrap és Foundation keretrendszerekben</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="advanced">
          <div className="mb-8 text-center">
            <h3 className="text-xl font-bold mb-2">Modern CSS Grid és Flexbox</h3>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A CSS Grid és Flexbox nyújtotta modern, kétdimenziós elrendezési lehetőségek, amelyek alapvetően megváltoztatták a weboldalak strukturálásának módját.
            </p>
          </div>
          
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-4">CSS Flexbox</h3>
                <p className="text-gray-600 mb-6">
                  A Flexbox (Flexible Box Module) egydimenziós elrendezési módszer, amely hatékonyan kezeli a sorokat vagy oszlopokat, és rugalmasan osztja el a teret és igazítja az elemeket.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Flexbox tulajdonságok</h4>
                    <div className="border rounded-lg overflow-hidden bg-white">
                      <div className="p-4 border-b bg-gray-50">
                        <div className="text-sm font-medium">flex-direction</div>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="p-2 border rounded-md">
                          <div className="text-xs text-gray-500 mb-2">row (alapértelmezett)</div>
                          <div className="flex flex-row gap-2">
                            {Array.from({ length: 3 }).map((_, i) => (
                              <div key={i} className="w-12 h-12 bg-blue-100 border border-blue-200 flex items-center justify-center text-xs font-medium rounded">
                                {i + 1}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="p-2 border rounded-md">
                          <div className="text-xs text-gray-500 mb-2">column</div>
                          <div className="flex flex-col gap-2">
                            {Array.from({ length: 3 }).map((_, i) => (
                              <div key={i} className="w-12 h-12 bg-blue-100 border border-blue-200 flex items-center justify-center text-xs font-medium rounded">
                                {i + 1}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Rugalmas tér kezelése</h4>
                    <div className="border rounded-lg overflow-hidden bg-white">
                      <div className="p-4 border-b bg-gray-50">
                        <div className="text-sm font-medium">justify-content</div>
                      </div>
                      <div className="p-4 space-y-3">
                        <div className="p-2 border rounded-md">
                          <div className="text-xs text-gray-500 mb-2">space-between</div>
                          <div className="flex justify-between">
                            {Array.from({ length: 3 }).map((_, i) => (
                              <div key={i} className="w-12 h-12 bg-blue-100 border border-blue-200 flex items-center justify-center text-xs font-medium rounded">
                                {i + 1}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="p-2 border rounded-md">
                          <div className="text-xs text-gray-500 mb-2">space-around</div>
                          <div className="flex justify-around">
                            {Array.from({ length: 3 }).map((_, i) => (
                              <div key={i} className="w-12 h-12 bg-blue-100 border border-blue-200 flex items-center justify-center text-xs font-medium rounded">
                                {i + 1}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                  <h4 className="font-medium text-gray-700 mb-2">Flexbox kód példa:</h4>
                  <pre className="text-xs bg-gray-800 text-gray-100 p-4 rounded-md overflow-auto">
{`.container {
  display: flex;
  flex-direction: row; /* vagy column, row-reverse, column-reverse */
  flex-wrap: wrap; /* vagy nowrap, wrap-reverse */
  justify-content: space-between; /* főtengely mentén: flex-start, flex-end, center, space-around */
  align-items: center; /* kereszttengely mentén: flex-start, flex-end, stretch, baseline */
  gap: 1rem; /* térköz az elemek között */
}

.item {
  flex: 1; /* növekedési arány */
  /* vagy részletesebben: */
  flex-grow: 1; /* növekedési arány */
  flex-shrink: 1; /* zsugorodási arány */
  flex-basis: auto; /* alapméret */
  
  align-self: flex-start; /* felülírja az align-items értékét egy adott elemre */
}

/* Példa flexbox használatára média lekérdezésekkel */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}`}
                  </pre>
                </div>
                
                <div className="bg-white border border-gray-200 rounded-lg p-4 mb-8">
                  <h4 className="font-medium text-gray-800 mb-4">Flexbox példa elrendezés</h4>
                  <div className="border-2 border-dashed border-blue-200 p-4 rounded-lg">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-1/4 bg-blue-50 p-4 rounded-lg">
                        <div className="font-medium mb-3 text-blue-700">Oldalsáv</div>
                        <ul className="text-sm space-y-2 text-blue-600">
                          <li>• Navigációs elem 1</li>
                          <li>• Navigációs elem 2</li>
                          <li>• Navigációs elem 3</li>
                        </ul>
                      </div>
                      
                      <div className="md:flex-1 bg-gray-50 p-4 rounded-lg">
                        <div className="font-medium mb-3 text-gray-700">Fő tartalom</div>
                        <div className="flex flex-wrap gap-4">
                          {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="w-full sm:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)] bg-white p-4 rounded shadow-sm">
                              <div className="font-medium mb-2">Kártya {i + 1}</div>
                              <p className="text-sm text-gray-600">Ez egy flexbox alapú kártya elem, amely reszponzívan változtatja a szélességét.</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-4">CSS Grid</h3>
                <p className="text-gray-600 mb-6">
                  A CSS Grid kétdimenziós elrendezési rendszer, amely lehetővé teszi sorok és oszlopok egyidejű kezelését, komplex elrendezések létrehozását minimális HTML kóddal.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Alapvető Grid elrendezés</h4>
                    <div className="border rounded-lg overflow-hidden bg-white">
                      <div className="p-4 border-b bg-gray-50">
                        <div className="text-sm font-medium">grid-template-columns és grid-template-rows</div>
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-3 grid-rows-3 gap-2 border p-2 rounded-md bg-gray-50">
                          {Array.from({ length: 9 }).map((_, i) => (
                            <div key={i} className="h-12 bg-blue-100 border border-blue-200 flex items-center justify-center text-xs font-medium rounded">
                              {i + 1}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-800 mb-3">Komplex Grid elrendezés</h4>
                    <div className="border rounded-lg overflow-hidden bg-white">
                      <div className="p-4 border-b bg-gray-50">
                        <div className="text-sm font-medium">grid-template-areas és grid-area</div>
                      </div>
                      <div className="p-4">
                        <div className="grid grid-cols-4 grid-rows-4 gap-2 border p-2 rounded-md bg-gray-50">
                          <div className="col-span-4 row-span-1 h-12 bg-blue-200 border border-blue-300 flex items-center justify-center text-xs font-medium rounded">
                            Fejléc
                          </div>
                          <div className="col-span-1 row-span-2 bg-blue-100 border border-blue-200 flex items-center justify-center text-xs font-medium rounded p-2">
                            Bal oldalsáv
                          </div>
                          <div className="col-span-2 row-span-2 bg-blue-50 border border-blue-100 flex items-center justify-center text-xs font-medium rounded p-2">
                            Fő tartalom
                          </div>
                          <div className="col-span-1 row-span-2 bg-blue-100 border border-blue-200 flex items-center justify-center text-xs font-medium rounded p-2">
                            Jobb oldalsáv
                          </div>
                          <div className="col-span-4 row-span-1 h-12 bg-blue-200 border border-blue-300 flex items-center justify-center text-xs font-medium rounded">
                            Lábléc
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-8">
                  <h4 className="font-medium text-gray-700 mb-2">CSS Grid kód példa:</h4>
                  <pre className="text-xs bg-gray-800 text-gray-100 p-4 rounded-md overflow-auto">
{`.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 egyenlő oszlop */
  grid-template-rows: auto 1fr 1fr auto; /* 4 sor, az első és utolsó automatikus méretű */
  gap: 1rem; /* térköz a cellák között */
  
  /* Alternatív módszer területek definiálására: */
  grid-template-areas:
    "header header header header"
    "sidebar-1 main main sidebar-2"
    "sidebar-1 main main sidebar-2"
    "footer footer footer footer";
}

.header {
  grid-area: header; /* vagy: grid-column: 1 / -1; grid-row: 1 / 2; */
}

.sidebar-1 {
  grid-area: sidebar-1; /* vagy: grid-column: 1 / 2; grid-row: 2 / 4; */
}

.main {
  grid-area: main; /* vagy: grid-column: 2 / 4; grid-row: 2 / 4; */
}

.sidebar-2 {
  grid-area: sidebar-2; /* vagy: grid-column: 4 / 5; grid-row: 2 / 4; */
}

.footer {
  grid-area: footer; /* vagy: grid-column: 1 / -1; grid-row: 4 / 5; */
}

/* Reszponzív grid média lekérdezésekkel */
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr; /* 1 oszlop kis képernyőn */
    grid-template-areas:
      "header"
      "sidebar-1"
      "main"
      "sidebar-2"
      "footer";
  }
}`}
                  </pre>
                </div>
              </div>
              
              <div className="mb-10">
                <h3 className="text-lg font-bold mb-4">Modern weboldal layout példa</h3>
                <p className="text-gray-600 mb-6">
                  A modern weboldalak gyakran kombinálják a CSS Grid és Flexbox technológiákat, kihasználva mindkettő előnyeit a különböző elrendezési feladatokhoz.
                </p>
                
                <motion.div 
                  className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                  whileHover={{ boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 flex justify-between items-center">
                    <div className="font-bold text-lg">Modern Layout</div>
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6">
                    <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] lg:grid-cols-[250px_1fr_250px] gap-6">
                      <div className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="font-medium mb-4 text-gray-800">Navigáció</div>
                        <div className="space-y-2">
                          {['Kezdőlap', 'Termékek', 'Szolgáltatások', 'Blog', 'Kapcsolat'].map((item) => (
                            <div key={item} className="flex items-center py-2 px-4 rounded-md hover:bg-gray-100 cursor-pointer">
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="md:col-span-1 lg:col-span-1">
                        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                          <div className="font-medium mb-4 text-gray-800">Fő tartalom</div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {Array.from({ length: 3 }).map((_, i) => (
                              <motion.div 
                                key={i}
                                whileHover={{ y: -5 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                                className="bg-gray-50 p-4 rounded-lg"
                              >
                                <div className="h-20 bg-gray-200 rounded-md mb-3"></div>
                                <div className="font-medium mb-2">Kártya cím {i + 1}</div>
                                <div className="text-sm text-gray-600">Rövid leírás a kártya tartalmáról és funkciójáról.</div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-white p-4 rounded-lg shadow-sm">
                          <div className="font-medium mb-4 text-gray-800">Újabb szekció</div>
                          <div className="text-sm text-gray-600">
                            Ez a modern elrendezés kombinálja a CSS Grid és Flexbox technológiákat a különböző elrendezési feladatokhoz.
                            A CSS Grid kiválóan alkalmas az oldal fő struktúrájának kialakítására, míg a Flexbox hatékony az elemek sorokban vagy oszlopokban történő elrendezéséhez.
                          </div>
                        </div>
                      </div>
                      
                      <div className="hidden lg:block">
                        <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                          <div className="font-medium mb-4 text-gray-800">Hírek</div>
                          <div className="space-y-4">
                            {Array.from({ length: 3 }).map((_, i) => (
                              <div key={i} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                <div className="font-medium text-sm mb-1">Hír cím {i + 1}</div>
                                <div className="text-xs text-gray-500">2023.12.{i + 1}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                          <div className="font-medium mb-3 text-blue-800">Hírlevél feliratkozás</div>
                          <div className="text-sm text-blue-600 mb-4">Iratkozz fel hírlevelünkre a legfrissebb hírekért.</div>
                          <div className="flex">
                            <input 
                              type="email" 
                              placeholder="Email cím" 
                              className="flex-1 px-3 py-2 border border-blue-200 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                            />
                            <button className="bg-blue-600 text-white px-4 py-2 text-sm font-medium rounded-r-md hover:bg-blue-700">
                              Feliratkozás
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 border-t border-gray-200 p-4 text-center text-gray-600 text-sm">
                    Lábléc © 2023 | Minden jog fenntartva
                  </div>
                </motion.div>
              </div>
              
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-5">
                <h4 className="font-bold mb-3">Modern CSS Grid és Flexbox jellemzői:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-3 text-gray-800">CSS Flexbox előnyei</h5>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Egydimenziós elrendezések (sor vagy oszlop) optimalizálása</li>
                      <li>Tartalom igazítás és elosztás dinamikus kezelése</li>
                      <li>Elrendezés irányának egyszerű megváltoztatása</li>
                      <li>Egyszerű vertikális középre igazítás</li>
                      <li>Elemek sorrendjének flexibilis megváltoztatása</li>
                      <li>Nagyon jó mobil-barát navigációs menükhöz</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-3 text-gray-800">CSS Grid előnyei</h5>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Kétdimenziós elrendezések (sorok és oszlopok) optimalizálása</li>
                      <li>Komplex oldal struktúrák kevesebb HTML elemmel</li>
                      <li>Grid template areas a névvel ellátott területekhez</li>
                      <li>Auto-placement és automatikus méretezés</li>
                      <li>Átfedések és rések könnyű kezelése</li>
                      <li>Kiválóan alkalmas teljes oldal elrendezésekhez</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 border border-blue-100 rounded-md">
                  <h5 className="font-semibold mb-2 text-blue-800">Modern megközelítés:</h5>
                  <p className="text-blue-700 mb-3">
                    A legjobb gyakorlat a CSS Grid és Flexbox kombinálása, mindegyiket az erősségeinek megfelelően használva:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-blue-600">
                    <li>CSS Grid a teljes oldal elrendezésekhez és kétdimenziós struktúrákhoz</li>
                    <li>Flexbox a komponensek belső elrendezéséhez, egy sorban vagy oszlopban</li>
                    <li>Media query-k a teljesen reszponzív viselkedéshez</li>
                    <li>CSS változók a következetes térközök és méretezés érdekében</li>
                    <li>Minimális, szemantikus HTML-struktúra</li>
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

export default GridSystemPage;
