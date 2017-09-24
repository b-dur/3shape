import React, { Component } from 'react';
import BookShelf from './containers/BookShelf';
import BookPagination from './containers/BookPagination';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookShelf/>
        <BookPagination/>
      </div>
    );
  }
}

export default App;
