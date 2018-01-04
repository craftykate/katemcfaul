import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import FavoriteProjects from '../FavoriteProjects/FavoriteProjects';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div id="wrapper">
          <div id="content">
            <FavoriteProjects />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
