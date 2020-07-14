import React, { useState, useContext } from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import TranslateContext from '../context/TranslateContext';
import { StyledForm } from '../../Styles';

const SearchForm = () => {
  const [value, setValue] = useState('');
  const { setWord, addHistoryWord } = useContext(TranslateContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setWord(value);
    addHistoryWord(value);
    setValue('');
  }

  return ( 
    <StyledForm onSubmit={handleSubmit}>
      <TextField type="text" value={value} placeholder="Word to translate" onChange={(e) => setValue(e.target.value)}/>
      <Button type="submit">  Search </Button>
    </StyledForm> 
  );
}

export default SearchForm;