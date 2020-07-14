import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar = ({modules}) => {
  const [currentTab, setCurrentTab] = useState('');
  const location = useLocation();

  useEffect(() => {
    setCurrentTab(location.pathname)
  }, [location]);

  return ( 
    <ul className="App-nav">
    {modules.map(module => (
      <li key={module.name} className={currentTab === module.routeProps.path ? 'active' : ''}>
        <Link to={module.routeProps.path}> {module.name} </Link>
      </li>
    ))}
  </ul>
   );
}
 
export default NavBar;