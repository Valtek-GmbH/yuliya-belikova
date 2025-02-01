import React, {useState} from 'react';
import {IntlProvider} from 'react-intl';
import Russian from '../lang/ru.json';
import Deutsch from '../lang/de.json';
import English from '../lang/en.json';

export const LanguageContext = React.createContext();

let local = navigator.language;
if (local.length > 2) {
  local = local.substring(0,2);
};

let lang; 
if (local === 'en') {
   lang = English;
}else {
   if (local === 'ru') {
       lang = Russian;
   } else {
       lang = Deutsch;
   }
}

const LanguageWrapper = (props) => {
   const [locale, setLocale] = useState(local);
   const [messages, setMessages] = useState(lang);

   function selectLanguage(e) {
       const newLocale = e.target.value;
       setLocale(newLocale);
       if (newLocale === 'en') {
           setMessages(English);
       } else {
           if (newLocale === 'ru'){
               setMessages(Russian);
           } else {
               setMessages(Deutsch);
           }
       }
   }

   return (
       <LanguageContext.Provider value = {{locale, selectLanguage}}>
           <IntlProvider messages={messages} locale={locale}>
               {props.children}
           </IntlProvider>
       </LanguageContext.Provider>

   );
}

export default LanguageWrapper;