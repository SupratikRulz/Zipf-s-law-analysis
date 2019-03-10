import React, { Component } from 'react';
import logo from './../icons/logo.svg';
import './css/App.css';

import scrapedData from './../words.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      wordFreqArr: [],
      wordCount: 0
    }
  }


  componentDidMount() {
    let wordFrequencyObj = {},
      wordFreqArr,
      wordCount;
    this.setState({
      data: scrapedData
    })

    scrapedData.forEach(word => {
      let frequency = wordFrequencyObj[word];
      wordFrequencyObj[word] =  frequency ? frequency + 1 : 1;
    });

    wordFreqArr = Object.keys(wordFrequencyObj)
                      .map(key => ({name: key, frequency: wordFrequencyObj[key]}))
                      .sort((objA, objB) => objB.frequency - objA.frequency);

    wordCount = wordFreqArr.length;

    this.setState({wordFreqArr, wordCount})



  }

   render() {
    return (
      <div className="App">
        {this.state.wordFreqArr.map(word => <div>{word["name"]}&nbsp; {word["frequency"]}</div>)}
      </div>
    );
  }
}

export default App;
