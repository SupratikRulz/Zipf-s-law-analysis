import React from 'react';
import FusionCharts from 'fusioncharts/core';
import MsLine from 'fusioncharts/viz/msline';
import ReactFC from 'react-fusioncharts';


import {chartGenerator, msLineFreqGenerator} from './../utils/datasource-generator';

ReactFC.fcRoot(FusionCharts, MsLine);

export default function RenderChart(props) {
  return (
    <div className='chart-container'>
      <ReactFC
        {...chartGenerator({dataSource: msLineFreqGenerator}, props.wordFreqArr)}
      />
    </div>
  )
}
