import { Button, FormControl, InputLabel, MenuItem, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import jsonLanguages from '../../../shared/languages.json';
import { LanguageContainer, SearchContainer, StyledForm, StyledSelect } from '../../Styles';
import { addWordtoHistoryAction, selectInputLang, selectOutputLang } from '../store/actions';
import { ModuleState } from '../store/store';

const languages = jsonLanguages;

interface StateProps {
  inputLang: string,
  outputLang: string
}

interface PropsFromDispatch {
  addWordtoHistoryAction: (word: string) => void,
  selectInputLang: typeof selectInputLang,
  selectOutputLang: typeof selectOutputLang
}

type SearchFormProps = StateProps & PropsFromDispatch

const SearchForm: React.SFC<SearchFormProps> = ( { inputLang, outputLang, addWordtoHistoryAction, selectInputLang, selectOutputLang } ) => {
  const saveLang = (lang: string, isInputLanguage: boolean) => {
    (isInputLanguage ? selectInputLang(lang) : selectOutputLang(lang))
  };

  const switchLanguages = () => {
    console.log('switchLanguages')
    selectInputLang(outputLang);
    selectOutputLang(inputLang);
  }

  return (
    <SearchContainer>
      <LanguageContainer>
        <LanguageSelector lang={inputLang} saveLang={(lang) => saveLang(lang, true)}/>
        <Button onClick={switchLanguages}> Switch Languages </Button>
        <LanguageSelector lang={outputLang} saveLang={(lang) => saveLang(lang, false)} />
      </LanguageContainer>
      <InputComponent selectWord={(word: string) => word && addWordtoHistoryAction(word)} inputLang={inputLang} outputLang={outputLang} />
    </SearchContainer>
  );
};

type InputComponentProps = {
  selectWord: (arg0: string) => void; 
  inputLang: string;
  outputLang: string;
}

const InputComponent: React.SFC<InputComponentProps> = ({ selectWord, inputLang, outputLang }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> ) => {
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
      <Button type="submit" disabled={!inputLang || !outputLang} > Search </Button>
    </StyledForm>
  );
};

type LanguageSelectorComponentProps = {
  lang: string,
  saveLang: (arg0: string) => void;
}

const LanguageSelector: React.SFC<LanguageSelectorComponentProps> = ({ lang, saveLang }) => {

  return (
    <FormControl>
      <InputLabel> Lang </InputLabel>
      <StyledSelect
        value={lang}
        onChange={(e: React.ChangeEvent<any>) => saveLang(e.target.value)}
      >
        {languages.map((lang) => (
          <MenuItem key={lang.value} value={lang.value}>
            {' '}
            {lang.name}{' '}
          </MenuItem>
        ))}
      </StyledSelect>
    </FormControl>
  );
};

const mapStateToProps = ({ language }: ModuleState) => ({
  inputLang: language.inputLang,
  outputLang: language.outputLang
})

const mapDispatchToProps = {
  addWordtoHistoryAction,
  selectInputLang,
  selectOutputLang
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm) ;
