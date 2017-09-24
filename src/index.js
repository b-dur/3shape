import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import actions from './actions';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BookApi} from './services';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

BookApi.loadBooks(store.dispatch, 0);