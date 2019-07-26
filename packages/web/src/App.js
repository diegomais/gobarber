import React from 'react';
import { Router } from 'react-router-dom';

import './config/Reactotron';

import Routes from './routes';
import history from './services/history';

import GlobalStyles from './styles/global';

function App() {
  return (
    <Router history={history}>
      <Routes />
      <GlobalStyles />
    </Router>
  );
}

export default App;
