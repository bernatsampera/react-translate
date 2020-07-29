import React, { PropsWithChildren, useState, useEffect, useRef } from 'react';
import { of, Subject, Observable, BehaviorSubject, isObservable, Subscription, from, combineLatest, interval } from 'rxjs';
import {map,  tap} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

const nameList = ['one', 'two', 'three'];

const name$: BehaviorSubject<any> = new BehaviorSubject('');
const names$ = from([nameList]);
const combined$ = combineLatest([
  names$,
  name$
]).pipe(
  map(([names, name]: [string[], string]) => [...names, name])
);

const Main = () => {
  const [value, setValue] = useState('');
  const listNames = useObservable(combined$) || []; 

  return (
    <div>
      <h3> Oru Release Notes</h3>
      <input type="text" onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={() => name$.next(value)} > Add Todo </button> 

      <div>
        <h2> RSI </h2>
        {listNames.map((val, i) => <div key={i}> {val} </div>)}
      </div>
    </div>
  );
  
};

// useObservable Hook
const useObservable = (observable: any) => {
  const [state, setState] = useState();


  useEffect(() => {
    const subscription = observable.subscribe(setState);
    return () => subscription.unsubscribe();
  }, [observable]);

  return state;
};


export default Main;
