const obj = {
  stuff: 'foo',
  data: {
    val: {
      thing: {
        info: 'bar',
        moreInfo: {
          evenMoreInfo: {
            weMadeIt: 'baz'
          }
        }
      }
    }
  }
};

function collectStrings(obj) {
  let array = [];
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      array.push(obj[key]);
      continue;
    }
    if (typeof obj[key] === 'object') array.push(collectStrings(obj[key]));
  }
  return array;
}

collectStrings(obj); // ["foo", "bar", "baz"])
