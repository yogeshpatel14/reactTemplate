import React, { Component } from 'react';
import './App.css';

import RootRouter from './router/rootRouter';
import { Provider } from 'react-redux';
import { store } from './ReduxStore/CreateStore';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootRouter />
      </Provider>
    );
  }
}

export default App;
