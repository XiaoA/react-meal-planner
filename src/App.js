import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import ImageSearchForm from './components/ImageSearchForm/ImageSearchForm';
import ImageDisplay from './components/ImageDisplay/ImageDisplay';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: process.env.REACT_APP_CLARIFAI_MEALPLANNER_API_KEY
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
    }
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input});
    app.models
      .predict(
        Clarifai.FOOD_MODEL,
        this.state.input)
      .then(
        function(response) {
          console.log(response.outputs[0].data.concepts.map(function(element) {return element.name;}));
        },
        function(err) {
          console.log(err);
        }
      );
  }
  
  render() {
    return (
      <div className="App">
        <Navigation />
        <ImageSearchForm
          onInputChange={this.onInputChange} 
          onButtonSubmit={this.onButtonSubmit}
          />
        <ImageDisplay imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
