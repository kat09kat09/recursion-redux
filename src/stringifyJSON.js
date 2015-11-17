// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var resultArr = [];
  if (Array.isArray(obj)) {
    obj.forEach(function(el) {
      if (typeof el !== "function" && el !== undefined) {
        resultArr.push(stringifyJSON(el));
      }
    });
    return '[' + resultArr.join(',') + ']';
  } else if (typeof obj === 'object' && obj !== null) {
    for (var key in obj) {
      if (typeof obj[key] !== "function" && obj[key] !== undefined) {
        resultArr.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + resultArr.join(',') + '}';
  }
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  return '' + obj;
};
