import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'
import actions from './actions';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

fetch('https://www.googleapis.com/books/v1/volumes?q=3shape')
.then(x => x.json())
.then(x => store.dispatch(actions.loadBooks(x)));
