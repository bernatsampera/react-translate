import React, { useContext, useEffect } from 'react';
import TranslateContext from '../context/TranslateContext';
import { StyledDrawer, DrawerElementsList, DrawerElement, HistoryTitle } from '../../Styles';

const DisplayHistory = () => {
  const { history, wordSelected, setWordSelected } = useContext(TranslateContext);

  const selectWord = (word) => {
    setWordSelected(word)
  }

  return ( 
    <StyledDrawer
    variant="permanent"
    open
    >
      <HistoryTitle> Search history</HistoryTitle>
      <DrawerElementsList>
        { history.slice().reverse().map((word, i) => (
          <DrawerElement 
            key={i} 
            selected={word === wordSelected}
            onClick={() => selectWord(word)}
          > {word}
          </DrawerElement>))}
      </DrawerElementsList> 
    </StyledDrawer>
);}

export default DisplayHistory;