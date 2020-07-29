import React, { useContext } from 'react';

import { DrawerElement, DrawerElementsList, HistoryTitle, StyledDrawer } from '../../Styles';
import TranslateContext from '../context/TranslateContext';

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