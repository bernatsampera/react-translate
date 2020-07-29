import { useState, useEffect } from 'react';
import { Observable } from 'rxjs';

export const useObservable = (observable: Observable<any>) => {
  const [state, setState] = useState();

  useEffect(() => {
    const subscription = observable.subscribe(setState);
    return () => subscription.unsubscribe();
  }, [observable]);

  return state;
};
