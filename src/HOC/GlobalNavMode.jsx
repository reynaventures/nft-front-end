import React from 'react'
import { useLocation } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import { darkNav, lightNav } from '../constans/headerNavModes';

function GlobalNavMode(props) {
    const location = useLocation();

    const userLocation = () => {
      if(location.pathname === '/' || location.pathname === '/license') {
        return lightNav;
      } else {
        return darkNav;
      }
    }
    return (
    <ThemeProvider theme={userLocation()}>
      {props.children}
    </ThemeProvider>
  )
}

export default GlobalNavMode