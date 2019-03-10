export function chartGenerator (fcConfig = {}, serverData, extraProps = {}) {
  return {
    type: fcConfig.type || 'msline',
    width: fcConfig.width || '1000',
    height: fcConfig.height || '600',
    dataFormat: fcConfig.dataFormat || 'json',
    dataSource: fcConfig.dataSource(serverData, extraProps)
  };
}

export function msLineFreqGenerator(serverData) {
  let rawData = serverData;
  let datasource = {}, categories, category = [], dataset = [], data_1 = [], data_2 = [];
  datasource.chart = {
    "paletteColors": "#0075c2,#1aaf5d,#f2c500,#f45b00,#8e0000,#0e948c,#8cbb2c,#f3de00",
    "caption": "Zip'f law visualisation",
    "subCaption": "Theoretical vs Calculated",
    "xAxisName": "Frequent Words",
    "yAxisName": "Count",
    "labelDisplay": "auto",
    "baseFontColor": "#333333",
    "baseFont": "Helvetica Neue,Arial",
    "captionFontSize": "14",
    "baseFontSize": "12",
    "subcaptionFontSize": "14",
    "subcaptionFontBold": "0",
    "showBorder": "0",
    "bgColor": "#EFE9F4",
    "canvasBgColor": "#EFE9F4",
    "showCanvasBorder": "0",
    "useplotgradientcolor": "0",
    "useRoundEdges": "0",
    "showPlotBorder": "0",
    "showAlternateHGridColor": "0",
    "showAlternateVGridColor": "0",
    "toolTipColor": "#ffffff",
    "toolTipBorderThickness": "0",
    "toolTipBgColor": "#000000",
    "toolTipBgAlpha": "80",
    "toolTipBorderRadius": "2",
    "toolTipPadding": "5",
    "legendBgAlpha": "0",
    "legendBorderAlpha": "0",
    "legendShadow": "0",
    "legendItemFontSize": "10",
    "legendItemFontColor": "#666666",
    "legendCaptionFontSize": "9",
    "divlineAlpha": "100",
    "divlineColor": "#999999",
    "divlineThickness": "1",
    "divLineIsDashed": "1",
    "divLineDashLen": "1",
    "divLineGapLen": "1",
    "scrollheight": "10",
    "flatScrollBars": "1",
    "scrollShowButtons": "0",
    "scrollColor": "#cccccc",
    "showHoverEffect": "1",
    "valueFontSize": "10",
    "showXAxisLine": "1",
    "showYAxisLine": "1",
    "xAxisLineThickness": "1",
    "xAxisLineColor": "#999999",
    "yAxisLineThickness": "1",
    "yAxisLineColor": "#999999",
    "canvasBgAlpha": "100",
    "bgAlpha": "100",
    "showValues": "0",
    "drawCrossline": "1",
    "crosslineColor": "#2A2A2A"
  };
  rawData.forEach((word, index) => {
    category.push({
      'label': word.name
    })
    data_1.push({
      value: word.frequency
    })
    data_2.push({
      value: rawData[0].frequency / (index + 1)
    })
  })
  categories = [{
    category: category
  }];
  dataset.push({
    seriesname: 'calculated value',
    data: data_1
  })
  dataset.push({
    seriesname: 'theoretical value',
    data: data_2
  })

  datasource.categories = categories;
  datasource.dataset = dataset;

  return datasource;
}