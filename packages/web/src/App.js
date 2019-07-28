import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import './config/Reactotron';
import store from './store';

import Routes from './routes';
import history from './services/history';

import GlobalStyles from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
        <GlobalStyles />
      </Router>
    </Provider>
  );
}

export default App;
