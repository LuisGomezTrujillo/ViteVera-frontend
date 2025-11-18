// src/App.jsx
import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import NuestraHistoria from './components/sections/NuestraHistoria';
import QueHacemos from './components/sections/QueHacemos';
import Investigacion from './components/sections/Investigacion';
import Participa from './components/sections/Participa';
import Formacion from './components/sections/Formacion';
import CasaPiloto from './components/sections/CasaPiloto';
import Contacto from './components/sections/Contacto';
import './index.css'  // Esta línea es crucial

function App() {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <main>
        <Hero />
        <NuestraHistoria />
        <QueHacemos />
        <Formacion />        
        <Investigacion />
        <Participa />
        <CasaPiloto />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
}

export default App;