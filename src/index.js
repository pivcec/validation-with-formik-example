import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './css/App.css';
import './css/typogrophy.css';
import './css/form.css';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);
registerServiceWorker();
