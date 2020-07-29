import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { DrawerElement, DrawerElementsList, HistoryTitle, StyledDrawer } from '../../Styles';
import { selectWordAction } from '../store/actions';
import { ModuleState } from '../store/store';

// interface RootState {
// Separate state props + dispatch props to their own interfaces.
interface StateProps {
  history: string[],
  wordSelected: string
}

interface PropsFromDispatch {
  selectWordAction: typeof selectWordAction
}

type DisplayHistoryProps = StateProps & PropsFromDispatch


const DisplayHistory: React.SFC<DisplayHistoryProps> = ( {history, wordSelected, selectWordAction} ) => {
  useEffect(() => {
  console.log('props', history);
  }, [history]);

  return (
    <StyledDrawer variant="permanent" open>
      <HistoryTitle> Search history</HistoryTitle>
      <DrawerElementsList>
        {history
          .slice()
          .reverse()
          .map((word: string, i: number) => (
            <DrawerElement
              key={i}
              data-testid={i}
              selected={word === wordSelected}
              onClick={() => selectWordAction(word)}
            >
              {word}
            </DrawerElement>
          ))}
      </DrawerElementsList>
    </StyledDrawer>
  );
};

const mapStateToProps = ({ history }: ModuleState) => ({
  history: history.history,
  wordSelected: history.wordSelected
});

const mapDispatchToProps = {
  selectWordAction
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayHistory);
