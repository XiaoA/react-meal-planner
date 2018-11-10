import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageSearchForm from './components/ImageSearchForm/ImageSearchForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <ImageSearchForm />
        {/*<ImageDisplay />*/}
      </div>
    );
  }
}

export default App;
