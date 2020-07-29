import React from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';

import modules from './modules';
import NavBar from './components/NavBar';

import styled from 'styled-components';
import { color } from './shared/theme';

const AppContainer = styled.div`
  background: ${color.Light};
  height: 100vh;
`;

function App(props) {
  return (
    <Router>
      <AppContainer>
        <header >
          <NavBar modules={modules}/>
        </header>
        <div>
          {modules.map(module => (
            <Route {...module.routeProps} key={module.name} />
          ))}
        </div>
      </AppContainer>
    </Router>
  );
}

export default App;
