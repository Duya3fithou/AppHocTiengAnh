
import React, { Component } from 'react';
import store from './src//redux/store/Store.js'
import { Provider } from 'react-redux'
import Main from './src/components/Main.js'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

export default App;


