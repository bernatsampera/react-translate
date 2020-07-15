import React, { useContext, useEffect, Fragment, useState } from 'react';
import TranslateContext from '../context/TranslateContext';
import { TranslationContainer, TranslationTitle, StyledPaper } from '../../Styles';
import { color, size } from '../../../shared/theme';
import axios from 'axios';

// const baseApiUrl = 'https://api.mymemory.translated.net/get';

const DisplayTranslation = () => {
  const [translation, setTranslation] = useState('');
  const { wordSelected, inputLanguage, outputLanguage } = useContext(TranslateContext);

  useEffect(() => {
    setTranslation('');
    const langpair = `${inputLanguage.slice(0, 2)}|${outputLanguage.slice(0,2)}`;
    if(wordSelected && langpair) {
      axios.get(`/get?word=${wordSelected}&langpair=${langpair}`)
      .then(function (res) {
        console.log(res.data.translatedText);
        setTranslation(res.data.translatedText)
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }, [wordSelected]);


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