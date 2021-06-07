import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';




const app = (
    <App />
);

ReactDOM.render(app, document.getElementById('root'));

serviceWorker.register();