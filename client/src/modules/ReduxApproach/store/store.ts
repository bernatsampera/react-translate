import throttle from 'lodash.throttle';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import { historyReducer, languageReducer } from './reducers';
import { HistoryState, LanguageState } from './types';

export interface ModuleState {
  history: HistoryState,
  language: LanguageState
}

export const createRootReducer = () =>
  combineReducers({
    history: historyReducer,
    language: languageReducer
  });

const composeEnhancers = composeWithDevTools({ });


const persistedState = JSON.parse(localStorage.getItem('reduxState') || "{}");

const store = createStore(
  createRootReducer(),
  persistedState,
  compose(
    applyMiddleware(thunk),
    composeEnhancers()
  )
);

store.subscribe(throttle(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
}, 1000))




export default store;