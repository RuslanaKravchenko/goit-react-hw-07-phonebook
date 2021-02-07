import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import '../node_modules/modern-normalize/modern-normalize.css';
import './index.css';
import App from './components/App';
import store from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <App />{' '}
  </Provider>,
  document.getElementById('root'),
);
