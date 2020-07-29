import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, Tab } from '@material-ui/core';

import styled from 'styled-components';
import { color } from '../shared/theme';

const StyledTabs = styled(Tabs)`
  color: ${color.Text};
  background: ${color.Primary};
  & .MuiTabs-flexContainer {
    justify-content: center;
  }
  & .MuiTabs-indicator {
    height: 4px;
    background: ${color.Green};
  }
`;


const NavBar = ({modules}) => {
  const [value, setValue] = React.useState(0);

  const location = useLocation();

  // Set up correct tab when page is refreshed
  useEffect(() => {
    modules.map((module, i) => module.routeProps.path === location.pathname ? setValue(i): null)
  }, [location]);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return ( 
    <StyledTabs  value={value} onChange={handleChange} >
    {modules.map(module => (
      <Tab key={module.name} label={module.name} component={Link} to={module.routeProps.path} >
      </Tab>
    ))}
  </StyledTabs>
   );
}
 
export default NavBar;