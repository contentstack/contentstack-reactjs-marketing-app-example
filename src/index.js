import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './assets/bootstrap-3.3.6-dist/css/bootstrap.css'
import './assets/bootstrap-3.3.6-dist/css/bootstrap.min.css'
import './assets/css/font-awesome.css'
import './assets/css/icon-fonts.css'
import './assets/css/normalize.css'
import './assets/css/style.css'
import './assets/css/style1.css'




ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
