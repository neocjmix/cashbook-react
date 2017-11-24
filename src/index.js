import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Cashbook from './Cashbook';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Cashbook />, document.getElementById('root'));
registerServiceWorker();
