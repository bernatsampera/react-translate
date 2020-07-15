import React from 'react';
import SearchForm from './components/SearchForm';
import { TranslateContextProvider } from './context/TranslateContext';
import DisplayTranslation from './components/DisplayTranslation';
import DisplayHistory from './components/DisplayHistory';

import styled from 'styled-components';
import { size } from '../../shared/theme';

const StyledContainer = styled.div`
  margin-left: ${size.history}
`;


const StandardApproach = () => (
  <TranslateContextProvider>
    <DisplayHistory />
    <StyledContainer>
      <SearchForm />
      <DisplayTranslation />
    </StyledContainer>
  </TranslateContextProvider>
);

export default {
    routeProps: {
        path: '/standard',
        component: StandardApproach,
    },
    name: 'StandardApproach',
};
