import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CarSearchAndUI from './components/CarSearchAndUI';
import Carlist from './components/Carlist';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<CarSearchAndUI />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

// ReactDOM.render(<CarSearchAndUI />, document.getElementById('searchui'));


registerServiceWorker();
