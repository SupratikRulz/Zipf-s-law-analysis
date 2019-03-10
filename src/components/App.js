import React, { Component } from 'react';
import logo from './../icons/logo.svg';
import './css/App.css';

import scrapedData from './../words.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: []
    }
  }


  componentDidMount() {
    this.setState({
      data: scrapedData
    })
  }

   render() {
    return (
      <div className="App">
        {this.state.data.map(word => <div>{word}</div>)}
      </div>
    );
  }
}

export default App;
