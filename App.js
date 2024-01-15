import React from 'react';
import { Provider } from 'react-redux';
import  { mystore } from './slices/MyStore';
import Main from './screens/Main';

(JSON.stringify(mystore))
const App = () => (
  <Provider store={mystore}>
    <Main/>
  </Provider>
);

export default App;