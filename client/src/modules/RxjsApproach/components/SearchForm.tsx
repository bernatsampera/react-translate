import { Button, FormControl, InputLabel, MenuItem, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { BehaviorSubject } from 'rxjs';

import jsonLanguages from '../../../shared/languages.json';
import { LanguageContainer, SearchContainer, StyledForm, StyledSelect } from '../../Styles';
import { useObservable } from '../service/hooks';
import {
  inputLanguage$,
  inputLanguageAction,
  outputLanguage$,
  outputLanguageAction,
  selectWordAction,
} from '../service/LanguageState';

const languages = jsonLanguages;

export interface SearchFormProps {}

const SearchForm: React.SFC<SearchFormProps> = () => {
  const inputLanguage  = useObservable(inputLanguage$) || '';
  const outputLanguage  = useObservable(outputLanguage$) || ''; 

  const saveLang = (lang: string, isInputLanguage: boolean) => {
    (isInputLanguage ? inputLanguageAction.next(lang) : outputLanguageAction.next(lang))
  };

  const switchLanguages = () => {
    inputLanguageAction.next(outputLanguage);
    outputLanguageAction.next(inputLanguage);
  }

  return (
    <SearchContainer>
      <LanguageContainer>
        <LanguageSelector lang={inputLanguage} saveLang={(lang) => saveLang(lang, true)}/>
        <Button onClick={switchLanguages}> Switch Languages </Button>
        <LanguageSelector lang={outputLanguage} saveLang={(lang) => saveLang(lang, false)} />
      </LanguageContainer>
      <InputComponent selectWordAction={selectWordAction} />
    </SearchContainer>
  );
};

type InputComponentProps = {
	selectWordAction: BehaviorSubject<string>
}

const InputComponent: React.SFC<InputComponentProps> = ({ selectWordAction }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    selectWordAction.next(value);
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

export default SearchForm;
