import {Routes, Route} from 'react-router-dom';
import React from 'react';
import TagManager from 'react-gtm-module';
// import ReactGA from "react-ga4";
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
  // ReactGA.initialize([
  //   {
  //     trackingId: "G-N5ZDG1VE1P",
  //   },
  //   {
  //     trackingId: "G-M8EPW8CKFD",
  //   },
  // ]);  

  return (
    <LanguageWrapper>
    <div className="App">
      <Header />
      {/* <HashRouter> */}
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/services' element={<Services />} />
        <Route path='/tips' element={<Tips />} />
        <Route path='/impressum' element={<Impressum />} />
      </Routes>
      {/* </HashRouter> */}
      <Footer />
    </div>
    </LanguageWrapper>
  );
}

export default App;
