import React from 'react';
import './css/About.css';

export default function About() {
  return (
    <div>
      <div className='header'>Zipf's law</div>
      <div className='about-container'>
        <p className='about'>Zipf's law is an empirical law formulated using mathematical statistics. The law is named after the linguist George Kingsley Zipf, who first proposed it. Zipf's law states that given a large sample of words used, the frequency of any word is inversely proportional to its rank in the frequency table. So word number n has a frequency proportional to 1/n.</p>
      </div>
    </div>
  )
}
