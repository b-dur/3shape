import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store'
import './index.css';
import App from './App';
import BookDetail from './containers/BookDetail';
import registerServiceWorker from './registerServiceWorker';
import { BookApi } from './services';

ReactDOM.render(
  <Provider store={store}>
    <Router basename="/3shape/">
      <div>
        <Route exact path="/book/:id" component={BookDetail} />
        <Route exact path="/" component={App} />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();

BookApi.loadBooks(store.dispatch, 0);