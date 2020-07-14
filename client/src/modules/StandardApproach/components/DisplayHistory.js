import React, { useContext } from 'react';
import TranslateContext from '../context/TranslateContext';
import { StyledDrawer } from '../../Styles';
import { Drawer } from '@material-ui/core';

const DisplayHistory = () => {
  const { history, setWord } = useContext(TranslateContext);

  const selectWord = (word) => {
    setWord(word)
  }

  return ( 
    <Drawer
    variant="permanent"
    open
    PaperProps={{ component : StyledDrawer }}
    >
      <h3> Search history</h3>
      <ul>
        { history.map((word, i) => (<li key={i} onClick={() => selectWord(word)}> {word} </li>))}
      </ul> 
    </Drawer>
);}

export default DisplayHistory;