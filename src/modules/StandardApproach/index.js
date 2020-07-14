import React from 'react';
import SearchForm from './components/SearchForm';
import { TranslateContextProvider } from './context/TranslateContext';
import DisplayTranslation from './components/DisplayTranslation';
import { Container } from '@material-ui/core';
import DisplayHistory from './components/DisplayHistory';

const StandardApproach = () => (
  <div></div>
);

export default {
    routeProps: {
        path: '/standard',
        component: StandardApproach,
    },
    name: 'StandardApproach',
};
