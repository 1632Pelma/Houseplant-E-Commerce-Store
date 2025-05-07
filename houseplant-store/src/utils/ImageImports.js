const importAll = (r) => {
    return r.keys().reduce((acc, key) => {
      acc[key.replace('./', '')] = r(key);
      return acc;
    }, {});
  };
  
  const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
  
  export default images;