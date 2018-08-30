import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './ui.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
