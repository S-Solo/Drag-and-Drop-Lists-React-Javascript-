import React from 'react';
import { Provider } from 'react-redux';

import store from 'reducers';

import List from 'containers/List';

const App = () =>
  <Provider store={store}>
    <List />
  </Provider>

export default App;
