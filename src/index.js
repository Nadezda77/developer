import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './index.css';
import App from './App';
import Show from './Show';
import Success from "./Success";
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
<Router>
    <div>
    
    <Route exact path='/show' component={Show} />
    <Route exact path='/success' component={Success} />
    <Route exact path='/' component={App} />
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
