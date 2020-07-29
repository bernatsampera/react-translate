import React, { useEffect } from 'react';

import { DrawerElement, DrawerElementsList, HistoryTitle, StyledDrawer } from '../../Styles';
import { useObservable } from '../service/hooks';
import { history$, selectedWord$, selectWordAction } from '../service/LanguageState';

export interface DisplayHistoryProps {}

const DisplayHistory: React.SFC<DisplayHistoryProps> = () => {
  const history: string[] = useObservable(history$) || [];
  const selectedWord: string = useObservable(selectedWord$) || "";

  useEffect(() => {
  console.log('history', history);
  }, [history]);

  useEffect(() => console.log('selectedWord',typeof selectedWord), [selectedWord])
 
  return (
    <StyledDrawer variant="permanent" open>
      <HistoryTitle> Search history</HistoryTitle>
      <DrawerElementsList>
        {history
          .slice()
          .reverse()
          .map((word, i) => (
            <DrawerElement
              key={i}
              data-testid={i}
              selected={word === selectedWord}
              onClick={() => selectWordAction.next(word)}
            >
              {word}
            </DrawerElement>
          ))}
      </DrawerElementsList>
    </StyledDrawer>
  );
};
export default DisplayHistory;
