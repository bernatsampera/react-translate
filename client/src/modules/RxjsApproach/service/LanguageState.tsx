import { BehaviorSubject, merge, Observable } from 'rxjs';
import { filter, map, shareReplay, startWith, tap } from 'rxjs/operators';

type stateType = {
	history: String[];
	inputLanguage: String;
	outputLanguage: String;
};

export const state: stateType = {
	history: JSON.parse(localStorage.getItem('historyrxjs') || "[]"),
	inputLanguage: JSON.parse(localStorage.getItem('inputLangrxjs') || "null"),
	outputLanguage: JSON.parse(localStorage.getItem('outputLangrxjs') || "null"),
};

export const selectWordAction = new BehaviorSubject('');
export const selectedWord$: Observable<string> = selectWordAction.asObservable().pipe(startWith(""));
export const history$ = selectWordAction.pipe(
	tap(console.warn),
	tap((word: string) => (word && !state.history.includes(word) ) ?  state.history = [...state.history, word] : null),
	map(() => [...state.history]),
	tap(history => console.log(history.length)),
	filter(history => history.length > 0),
	tap(_ => console.warn('histoaary', _)),
	shareReplay(1)
);

export const inputLanguageAction = new BehaviorSubject(state.inputLanguage)
export const inputLanguage$ = inputLanguageAction.pipe(
	tap(lang => lang ? state.inputLanguage = lang : null),
);

export const outputLanguageAction = new BehaviorSubject(state.outputLanguage)
export const outputLanguage$ = outputLanguageAction.pipe(
	tap(lang => lang ? state.outputLanguage = lang : null),
);


export const saveToLocalStorage$ = merge(
	history$.pipe(map(history => ({type: 'historyrxjs', value: history}))),
	inputLanguage$.pipe(map(lang => ({type: 'inputLangrxjs', value: lang}))),
	outputLanguage$.pipe(map(lang => ({type: 'outputLangrxjs', value: lang}))),
).pipe(
	tap(console.warn),
	tap((action: {type: string, value: string | string[]}) => localStorage.setItem(action.type, JSON.stringify(action.value)))
);

