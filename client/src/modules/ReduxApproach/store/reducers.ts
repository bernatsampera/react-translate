import {
  ADD_WORD_TO_HISTORY,
  HistoryActionTypes,
  HistoryState,
  LangActionTypes,
  LanguageState,
  SELECT_LANG_INPUT,
  SELECT_LANG_OUTPUT,
  SELECT_WORD,
  TRANSLATE_WORD,
} from './types';

/////////////////////////////////// HISTORY //////////////////////////////////////////////
const initialHistoryState: HistoryState = {
  history: [],
  wordSelected: '',
  translation: ''
};

export const historyReducer = (state = initialHistoryState, action: HistoryActionTypes) => {
  switch (action.type) {
    case ADD_WORD_TO_HISTORY:
      return {
        ...state,
        history: state.history.includes(action.payload) ? [...state.history] : [...state.history, action.payload],
        // wordSelected: action.payload
      }
    case SELECT_WORD:
      return {
        ...state,
        wordSelected: action.payload
      }
    case TRANSLATE_WORD: 
      return {
        ...state,
        translation: action.payload
      }
    default:
      return state;
  }
}


/////////////////////////////////// LANGUAGE //////////////////////////////////////////////
const initialState: LanguageState = {
  inputLang: '',
  outputLang: ''
};

export const languageReducer = (state = initialState, action: LangActionTypes) => {
  switch (action.type) {
    case SELECT_LANG_INPUT:
      return {
        ...state,
        inputLang: action.payload
      }
    case SELECT_LANG_OUTPUT:
      return {
        ...state,
        outputLang: action.payload
      }
    default:
      return state;
  }
}