import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NewsContainer from './components/News/NewsContainer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NewsContainer />, document.getElementById('root'));
registerServiceWorker();
