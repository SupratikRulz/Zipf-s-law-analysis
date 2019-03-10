import React, { Component } from 'react';
import logo from './../icons/logo.svg';
import './css/App.css';

import RenderChart from './RenderChart';
import About from './About';
import scrapedData from './../words.json';

class App extends Component {

  constructor() {
    super();
    this.state = {
      data: [],
      wordFreqArr: [],
      totalWordCount: 0,
      numberOfDisplayWords: 20
    };
    this.currentCount = 20;
  }


  componentDidMount() {
    let wordFrequencyObj = {},
      wordFreqArr,
      totalWordCount;
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

    totalWordCount = wordFreqArr.length;

    this.setState({wordFreqArr, totalWordCount})
  }

   render() {
    return (
      <div className='App'>
        <About />
        <div className='controller'>
          <input type='number' min='20' max={this.state.totalWordCount} defaultValue='20' onBlur={this.setMaxCount} className='input-box'/>
          <button onClick={this.setNumberOfDisplayWords} className='btn-apply'>Apply</button>
        </div>
        <RenderChart wordFreqArr={this.state.wordFreqArr.slice(0, this.state.numberOfDisplayWords)}/>
      </div>
    );
  }

  setMaxCount = event => {
    let count = Number(event.target.value);

    if (count < 20) {
      count = 20;
    } else if (count > this.state.totalWordCount) {
      count = this.state.totalWordCount;
    }
    event.target.value = count;
    this.currentCount = count;
  }

  setNumberOfDisplayWords = () => {
    this.setState({numberOfDisplayWords: this.currentCount});
  }
}

export default App;
