import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.scss';
import App from './App';


/*ReactDOM.render(
  <App />
  , document.getElementById('root')
);*/

ReactDOM.render(
  <Router basename='/React'>
    <Switch>
      <Route path='/' component={App} />
    </Switch>
  </Router>
  , document.getElementById('root')
);
