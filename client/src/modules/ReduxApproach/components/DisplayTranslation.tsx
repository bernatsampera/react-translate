import React, { useEffect } from 'react';
import {
  TranslationContainer,
  TranslationTitle,
  StyledPaper,
} from '../../Styles';
import { color } from '../../../shared/theme';
import { ModuleState } from '../store/store';
import { connect } from 'react-redux';
import { translateWordAction } from '../store/actions';

interface StateProps {
  wordSelected: string;
  translation: string;
  inputLang: string;
  outputLang: string;
}

interface PropsFromDispatch {
  translateWordAction: (
    word: string,
    inputLang: string,
    outputLang: string
  ) => void;
}

type DisplayTranslationProps = StateProps & PropsFromDispatch;

const DisplayTranslation: React.SFC<DisplayTranslationProps> = ({
  wordSelected,
  translation,
  inputLang,
  outputLang,
  translateWordAction,
}) => {
  useEffect(() => {
    if(wordSelected && inputLang && outputLang) {
      translateWordAction(wordSelected, inputLang, outputLang);
    }
  }, [translateWordAction, wordSelected, inputLang, outputLang]);

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
        <TranslationTitle> Word Result </TranslationTitle>
        {translation && (
          <StyledPaper elevation={24} color={color.Green}>
            {translation}
          </StyledPaper>
        )}
      </div>
    </TranslationContainer>
  );
};

const mapStateToProps = ({ history, language }: ModuleState) => ({
  wordSelected: history.wordSelected,
  translation: history.translation,
  inputLang: language.inputLang,
  outputLang: language.outputLang,
});

const mapDispatchToProps = {
  translateWordAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTranslation);
