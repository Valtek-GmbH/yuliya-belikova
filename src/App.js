import {Routes, Route} from 'react-router-dom';
import React from 'react';
import TagManager from 'react-gtm-module';
import Header from './modules/Header';
import Homepage from './modules/Homepage';
import AboutMe from './modules/AboutMe';
import Portfolio from './modules/Portfolio';
import Services from './modules/Services';
import Tips from './modules/Tips';
import Impressum from './modules/Impressum';
import Footer from './modules/Footer';
import LanguageWrapper from './modules/LanguageWrapper'; 
import './bootstrap/css/bootstrap.min.css';
import './index.css';
import './App.css';

function App() {
  /* Google Statistic */
  React.useEffect(() => {
    const tagManagerArgs = {
        gtmId: 'G-J4PK9E6PM3'
    };
    TagManager.initialize(tagManagerArgs);
  }, []);   
    /*==========================================================================
        LANGUAGE 
    ==========================================================================*/
// Function to set the language preference
  const [lang, setLang] = React.useState('en');

  function updateContent(langData) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        element.textContent = langData[key];
    });
  }

  // // Function to set the language preference
  // function setLanguagePreference() {
  //   localStorage.setItem('language', lang);
  //   // document.reload();
  // }

  // Function to fetch language data
  async function fetchLanguageData() {
    const path = require(`./assets/language/${lang}.json`);
    const response = await fetch(path);
    return response.json();
  }   

  // Function to change 
  async function changeLanguage(lang) {
    console.log(lang);
    setLang(lang.toLowerCase());
    // await setLanguagePreference();
    
    const langData = await fetchLanguageData();
    updateContent(langData);
  }

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
        <Route path='/impressum' element={<Impressum />} />
      </Routes>
      <Footer />
    </div>
    </LanguageWrapper>
  );
}

export default App;
