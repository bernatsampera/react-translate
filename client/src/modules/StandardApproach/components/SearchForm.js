import { Button, FormControl, InputLabel, MenuItem, TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';

import jsonLanguages from '../../../shared/languages.json';
import { LanguageContainer, SearchContainer, StyledForm, StyledSelect } from '../../Styles';
import TranslateContext from '../context/TranslateContext';

const languages = jsonLanguages;

const SearchForm = () => {
  const { setWordSelected, addHistoryWord, switchLanguages } = useContext(TranslateContext);
  const selectWord = (word) => {
    setWordSelected(word);
    if (word) {
      addHistoryWord(word);
    }
  }
  
  return (
    <SearchContainer>
      <LanguageContainer> 
        <LanguageSelector isInput={true}/>
        <Button onClick={switchLanguages}> Switch Languages </Button>
        <LanguageSelector isInput={false}/>
      </ LanguageContainer>
      <InputComponent selectWord={selectWord}/>
    </SearchContainer>
  );
};


const InputComponent = ({selectWord}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    selectWord(value);
    setValue('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
        <TextField
          type="text"
          value={value}
          placeholder="Word to translate"
          onChange={(e) => setValue(e.target.value)}
        />
        <Button type="submit"> Search </Button>
    </StyledForm>
  );
}

const LanguageSelector = ({isInput}) => {
  const { inputLanguage, outputLanguage, setInputLanguage, setOutputLanguage} = useContext(TranslateContext);
  const saveLang = (lang) => {
    (isInput ? setInputLanguage(lang) : setOutputLanguage(lang))
  };

  return (
    <FormControl>
      <InputLabel> Lang </InputLabel>
      <StyledSelect
        value={(isInput ? inputLanguage : outputLanguage) || ""}
        onChange={(e) => saveLang(e.target.value)}
      >
        {languages.map(lang => <MenuItem key={lang.value} value={lang.value}> {lang.name} </MenuItem>)}        
      </StyledSelect>
    </FormControl>
  );
};

export default SearchForm;
