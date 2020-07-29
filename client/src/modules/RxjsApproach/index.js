import React from 'react';
import SearchForm from './components/SearchForm';
import DisplayHistory from './components/DisplayHistory';
import styled from 'styled-components';
import { size } from '../../shared/theme';
import DisplayTranslation from './components/DisplayTranslation';
import { saveToLocalStorage$ } from './service/LanguageState';
import { useObservable } from './service/hooks';

const StyledContainer = styled.div`
  margin-left: ${size.history};
`;

const RxjsApproach = () => {
  // initialize stream to save values to localStorage
  useObservable(saveToLocalStorage$);

  return (
  <>
    <DisplayHistory />
    <StyledContainer>
      <SearchForm />
      <DisplayTranslation />
    </StyledContainer>
  </>
  );
}

export default {
  routeProps: {
    path: '/rxjs',
    component: RxjsApproach,
  },
  name: 'RxjsApproach',
};
