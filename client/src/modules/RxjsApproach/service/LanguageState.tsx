import { BehaviorSubject, merge, Observable, from, combineLatest } from 'rxjs';
import {
  filter,
  map,
  shareReplay,
  startWith,
  tap,
  switchMap,
} from 'rxjs/operators';
import Axios, { AxiosResponse } from 'axios';

type stateType = {
  history: string[];
  inputLanguage: string;
  outputLanguage: string;
};

export const state: stateType = {
  history: JSON.parse(localStorage.getItem('historyrxjs') || '[]'),
  inputLanguage: JSON.parse(localStorage.getItem('inputLangrxjs') || 'null'),
  outputLanguage: JSON.parse(localStorage.getItem('outputLangrxjs') || 'null'),
};

export const selectWordAction = new BehaviorSubject('');
export const selectedWord$: Observable<string> = selectWordAction
  .asObservable()
  .pipe(startWith(''));

export const history$ = selectWordAction.pipe(
  tap((word: string) =>
    word && !state.history.includes(word)
      ? (state.history = [...state.history, word])
      : null
  ),
  map(() => [...state.history]),
  filter((history) => history.length > 0),
  shareReplay(1)
);

export const inputLanguageAction = new BehaviorSubject(state.inputLanguage);
export const inputLanguage$ = inputLanguageAction.pipe(
  tap((lang) => (lang ? (state.inputLanguage = lang) : null))
);

export const outputLanguageAction = new BehaviorSubject(state.outputLanguage);
export const outputLanguage$ = outputLanguageAction.pipe(
  tap((lang) => (lang ? (state.outputLanguage = lang) : null))
);

export const translation$: Observable<any> = combineLatest(
  selectedWord$,
  inputLanguage$,
  outputLanguage$
).pipe(
	filter(([selectedWord, inputLang, outputLang]: [string, string, string]) => (!!selectedWord && !!inputLang && !!outputLang) ),
  switchMap(([selectedWord, inputLang, outputLang]: [string, string, string]) =>
    from(Axios.get(`/get?word=${selectedWord}&langpair=${getLangPair(inputLang, outputLang)}`))
	),
	map((res: AxiosResponse) => res.data.translatedText),
);

export const saveToLocalStorage$ = merge(
  history$.pipe(map((history) => ({ type: 'historyrxjs', value: history }))),
  inputLanguage$.pipe(map((lang) => ({ type: 'inputLangrxjs', value: lang }))),
  outputLanguage$.pipe(map((lang) => ({ type: 'outputLangrxjs', value: lang })))
).pipe(
  tap((action: { type: string; value: string | string[] }) =>
    localStorage.setItem(action.type, JSON.stringify(action.value))
  )
);

const getLangPair = (inputLang: string, outputLang: string) => {
  return `${inputLang.slice(0, 2)}|${outputLang.slice(0, 2)}`;
};
