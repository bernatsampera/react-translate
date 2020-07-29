import React from 'react';
import {
  TranslationContainer,
  TranslationTitle,
  StyledPaper,
} from '../../Styles';
import { color } from '../../../shared/theme';
import { useObservable } from '../service/hooks';
import { selectedWord$ } from '../service/LanguageState';

export interface DisplayTranslationProps {}

const DisplayTranslation: React.SFC<DisplayTranslationProps> = () => {
  const wordSelected = useObservable(selectedWord$)

  return (
    <TranslationContainer>
      <div>
        <TranslationTitle> Word Input </TranslationTitle>
        {wordSelected && (
          <StyledPaper elevation={5} color={color.Orange}>
            {wordSelected}
          </StyledPaper>
        )}
      </div>
      <div>
        {/* <TranslationTitle> Word Result </TranslationTitle>
        {translation && (
          <StyledPaper elevation={24} color={color.Green}>
            {translation}
          </StyledPaper>
        )} */}
      </div>
    </TranslationContainer>
  );
};

export default DisplayTranslation;
