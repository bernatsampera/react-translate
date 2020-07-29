import {
  ADD_WORD_TO_HISTORY,
  HistoryActionTypes,
  LangActionTypes,
  SELECT_LANG_INPUT,
  SELECT_LANG_OUTPUT,
  SELECT_WORD,
  TRANSLATE_WORD,
} from './types';
import axios from 'axios';
import { Dispatch } from 'react';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';

/////////////////////////////////// HISTORY //////////////////////////////////////////////
export const addWordtoHistoryAction = (word: string) => (
  dispatch: Dispatch<HistoryActionTypes>
) => {
  dispatch({
    type: ADD_WORD_TO_HISTORY,
    payload: word,
  });
  dispatch({ type: SELECT_WORD, payload: word });
};

// Other way to implement dispatch with redux thunk
// export function addWordtoHistoryAction(
//   word: string
// ): ThunkAction<void, {}, {}, HistoryActionTypes> {
//   return (dispatch: ThunkDispatch<{}, {}, HistoryActionTypes>): void => {
//     dispatch({
//       type: ADD_WORD_TO_HISTORY,
//       payload: word,
//     });
//     dispatch({ type: SELECT_WORD, payload: word });
//   };
// }

export function selectWordAction(word: string): HistoryActionTypes {
  return {
    type: SELECT_WORD,
    payload: word,
  };
}

export const translateWordAction = (
  word: string,
  inputLang: string,
  outputLang: string
) => (dispatch: Dispatch<HistoryActionTypes>) => {
  const langpair = `${inputLang.slice(0, 2)}|${outputLang.slice(0, 2)}`;
  console.log('going');
  axios
    .get(`/get?word=${word}&langpair=${langpair}`)
    .then(function (res) {
      console.warn('axios response', res);
      dispatch({
        type: TRANSLATE_WORD,
        payload: res.data.translatedText,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

/////////////////////////////////// LANGUAGE //////////////////////////////////////////////
export function selectInputLang(word: string): LangActionTypes {
  return {
    type: SELECT_LANG_INPUT,
    payload: word,
  };
}

export function selectOutputLang(word: string): LangActionTypes {
  return {
    type: SELECT_LANG_OUTPUT,
    payload: word,
  };
}
