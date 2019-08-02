import React from 'react';
import {GlobalStyle} from "./style";
import store from './store'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Provider} from 'react-redux'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
function App() {
  return (
    <Provider store={store}>
		    <GlobalStyle />
		    <Header />
		    <Router>
						    <Route exact path="/"  component={Home}/>
						    <Route  path="/detail" component={Detail} />
		    </Router>
    </Provider>
  );
}

export default App;
