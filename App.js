import React from 'react';
import { Provider } from 'react-redux';
import './src/config/ReactotronConfig';
import store from './src/redux/store';
import { Landing } from './src/screens';

console.disableYellowBox = true;

const App = () =>
  (
    <Provider store={store}>
      {
        <Landing />
      }
    </Provider>
  );


export default App;
