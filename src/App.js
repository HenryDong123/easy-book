import React from 'react';
import {GlobalStyle} from "./style";
import store from './store'
import {Provider} from 'react-redux'
import Header from './common/header'
function App() {
  return (
    <Provider store={store}>
		    <GlobalStyle />
		    <Header />
    </Provider>
  );
}

export default App;
