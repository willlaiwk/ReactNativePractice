import React from 'react';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './reducers';

// import LoginScreen from './components/LoginScreen';
import Router from './Router';

const store = createStore(reducers, {}, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
