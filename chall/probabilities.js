export default (arr) => {
  let uniqKeys = {};

  arr.forEach((item, i) => {
    if(!Object.prototype.hasOwnProperty.call(uniqKeys, item)) uniqKeys[item] = [];
    if (arr[i + 1]) uniqKeys[item] = [...uniqKeys[item], arr[i + 1]];
  });
  
  Object.entries(uniqKeys).map(([key, value]) => {
    const count = value.length;
    uniqKeys[key] = value.reduce((acc, item) => {
      const a = {};
      a[item] = 100 / count / 100;
      if(a[item].toString().length > 3) a[item] = +a[item].toFixed(2);
      return {...acc, ...a};
    }, {})
  });

  return uniqKeys;
};