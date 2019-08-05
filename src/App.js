import React from 'react';
import {GlobalStyle} from "./style";
import store from './store'
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Provider} from 'react-redux'
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail/loadable'
import Login from './pages/login';
import Write from './pages/write';
function App() {
  return (
    <Provider store={store}>
		    <GlobalStyle />
		    <Router>
				    <Header />
				    <Route exact path="/"  component={Home}/>
				    <Route exact path="/detail/:id" component={Detail} />
				    <Route path='/login' exact component={Login} />
				    <Route path='/write' exact component={Write} />
		    </Router>
    </Provider>
  );
}

export default App;
