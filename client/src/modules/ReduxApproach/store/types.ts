/////////////////////////////////// HISTORY //////////////////////////////////////////////
export const ADD_WORD_TO_HISTORY = 'ADD_WORD_TO_HISTORY'
export const SELECT_WORD = 'SELECT_WORD'
export const TRANSLATE_WORD = 'TRANSLATE_WORD' 

// Actions
interface AddWordToHistoryAcion {
  type: typeof ADD_WORD_TO_HISTORY
  payload: string
}

interface SelectWordAction {
  type: typeof SELECT_WORD,
  payload: string
}

interface TranslateWordAction {
  type: typeof TRANSLATE_WORD,
  payload: string
}

// State
export interface HistoryState {
  history: string[],
  wordSelected: string,
  translation: string
}

export type HistoryActionTypes = AddWordToHistoryAcion | SelectWordAction | TranslateWordAction

/////////////////////////////////// LANGUAGE //////////////////////////////////////////////
export const SELECT_LANG_INPUT = 'SELECT_LANG_INPUT'
export const SELECT_LANG_OUTPUT = 'SELECT_LANG_OUTPUT'

// Actions
interface SelectInputLang {
  type: typeof SELECT_LANG_INPUT
  payload: string
}

interface SelectOutputLang {
  type: typeof SELECT_LANG_OUTPUT,
  payload: string
}

// State
export interface LanguageState {
  inputLang: string,
  outputLang: string
}

export type LangActionTypes = SelectInputLang | SelectOutputLang