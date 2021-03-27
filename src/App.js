import React from 'react';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';

import store from './store';

import LandingPage from './views/LandingPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <LandingPage path="/" />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
