import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageSearchForm from './components/ImageSearchForm/ImageSearchForm';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_MEALPLANNER_API_KEY
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    //    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    app.models
      .predict(
        "bd367be194cf45149e75f01d59f77ba7",
        "https://samples.clarifai.com/food.jpg")
      .then(
        function(response) {
          console.log(response);
        },
        function(err) {
          console.log(err);// there was an error
        }
      );
  }

  render() {
    return (
      <div className="App">
        <Navigation />
        <ImageSearchForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        {/*<ImageDisplay />*/}
      </div>
    );
  }
}

export default App;
