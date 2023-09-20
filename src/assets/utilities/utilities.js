export  function getFeatures (features, fn) {
    let content = [];
    for (let item in features) {      
      const feature = features[item];
      content.push(fn(item, feature));
    } 
    return content
  }