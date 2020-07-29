import React from 'react';
import { Provider } from 'react-redux';
import styled from 'styled-components';

import { size } from '../../shared/theme';
import DisplayHistory from './components/DisplayHistory';
import DisplayTranslation from './components/DisplayTranslation';
import SearchForm from './components/SearchForm';
import store from './store/store';

const StyledContainer = styled.div`
  margin-left: ${size.history};
`;

const ReduxApproach = () => (
  <Provider store={store}>
    <DisplayHistory />
    <StyledContainer>
      <SearchForm />
      <DisplayTranslation />
    </StyledContainer>
  </Provider>
);

export default {
  routeProps: {
    path: '/redux',
    component: ReduxApproach,
  },
  name: 'ReduxApproach',
};
