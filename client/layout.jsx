import React from 'react';
import {AppNavbar} from './header.jsx';

export const AppLayout = ({content}) => (
  <div className="app-root">
    <header>
      <AppNavbar />
    </header>
    {content}
  </div>
);
