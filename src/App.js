import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        {/* <ImageLinkForm />
        <ImageDisplay />*/}
      </div>
    );
  }
}

export default App;
