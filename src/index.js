import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import './index.css';
import App from './App';
import Show from './Show';
import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
<Router>
    <div>
    <Route exact path='/' component={App} />
    <Route path='/show' component={Show} />
    </div>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
