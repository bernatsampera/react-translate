import React, { useContext, useEffect, useState } from 'react';

import { color } from '../../../shared/theme';
import { StyledPaper, TranslationContainer, TranslationTitle } from '../../Styles';
import TranslateContext from '../context/TranslateContext';
import Axios from 'axios';

// const baseApiUrl = 'https://api.mymemory.translated.net/get';

const DisplayTranslation = () => {
  const [translation, setTranslation] = useState('');
  const { wordSelected, inputLanguage, outputLanguage} = useContext(TranslateContext);

  useEffect(() => {
    setTranslation('');
    // setTranslation(wordSelected);
    console.warn(inputLanguage);
    const langpair = `${inputLanguage.slice(0, 2)}|${outputLanguage.slice(0,2)}`;
    if(wordSelected && langpair) {
      Axios.get(`/get?word=${wordSelected}&langpair=${langpair}`)
      .then(function (res) {
        console.log(res);
        console.log(res.data.translatedText);
        setTranslation(res.data.translatedText)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }, [wordSelected, inputLanguage, outputLanguage]);


  return ( 
  <TranslationContainer> 
    <div>
    <TranslationTitle> Word Input </TranslationTitle>
      { wordSelected && <StyledPaper elevation={5} color={color.Orange}>{ wordSelected }</StyledPaper> }
    </div>
    <div>
      <TranslationTitle> Word Result </TranslationTitle>
      { translation && <StyledPaper elevation={24} color={color.Green}>{ translation }</StyledPaper> }
    </div>
  </TranslationContainer> );
}

export default DisplayTranslation;