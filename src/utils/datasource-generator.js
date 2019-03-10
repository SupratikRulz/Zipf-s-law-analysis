export function chartGenerator (fcConfig = {}, serverData, extraProps = {}) {
  return {
    type: fcConfig.type || 'msline',
    width: fcConfig.width || '1000',
    height: fcConfig.height || '500',
    dataFormat: fcConfig.dataFormat || 'json',
    dataSource: fcConfig.dataSource(serverData, extraProps)
  };
}

export function msLineFreqGenerator(serverData) {
  let rawData = serverData;
  let datasource, categories, category = [], dataset = [], data_1 = [], data_2 = [];

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
    seriesname: 'Calculated Value',
    data: data_1
  })
  dataset.push({
    seriesname: 'Theoretical Value',
    data: data_2
  })

  datasource = {
    chart: {
      theme: 'candy'
    },
    categories,
    dataset
  };

  return datasource;
}