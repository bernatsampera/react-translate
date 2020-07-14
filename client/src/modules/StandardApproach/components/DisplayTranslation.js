import React, { useContext, useEffect, Fragment, useState } from 'react';
import TranslateContext from '../context/TranslateContext';
import { TranslationContainer } from '../../Styles';
import axios from 'axios';

// const baseApiUrl = 'https://api.mymemory.translated.net/get';

const DisplayTranslation = () => {
  const [translation, setTranslation] = useState('');
  const { word } = useContext(TranslateContext);

  useEffect(() => {
    const langpair = 'en|de';
    if(word && langpair) {
      axios.get(`/get?word=${word}&langpair=${langpair}`)
      .then(function (res) {
        console.log(res.data.translatedText);
        setTranslation(res.data.translatedText)
      })
      .catch(function (error) {
        console.log(error);
      });
    }


    // axios.get('/api')
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });


  }, [word]);
  return ( 
  <TranslationContainer> 
    <div>
    <h3> Word Input </h3>
      { word }
    </div>
    <div>
      <h3> Word Result </h3>
      { translation }
    </div>
  </TranslationContainer> );
}

export default DisplayTranslation;