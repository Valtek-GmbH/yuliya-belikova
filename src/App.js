import {Routes, Route} from 'react-router-dom';
import React from 'react';
import Header from './modules/Header';
import Homepage from './modules/Homepage';
import AboutMe from './modules/AboutMe';
import Portfolio from './modules/Portfolio';
import Services from './modules/Services';
import Tips from './modules/Tips';
import Footer from './modules/Footer';
import LanguageWrapper from './modules/LanguageWrapper'; 
import './bootstrap/css/bootstrap.min.css';
import './index.css';
import './App.css';

function App() {
  return (
    <LanguageWrapper>
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/services' element={<Services />} />
        <Route path='/tips' element={<Tips />} />
      </Routes>
      <Footer />
    </div>
    </LanguageWrapper>
  );
}

export default App;
