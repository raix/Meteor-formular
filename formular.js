var getFields = function(evt, temp, fields, callback) {
  var result = {};
  var functions = {};
  var scope = this;
  _.each(fields, function(val, key) {
    if (typeof val === 'function') {
      functions[key] = val;
    } else {
      var el = $(temp.find(val));
      result[key] = el && el.val() || null;
    }
  });

  _.each(functions, function(f, key) {
    try {
      result[key] = f.apply(scope, [result, evt, temp]);
    } catch(err) {
      // Throw an error?
      result[key] = err;
    }
  });
  callback.apply(scope, [result, evt, temp]);
};

formular = function(fields, callback) {
  return function(evt, temp) {
    getFields.apply(this, [evt, temp, fields, callback]);
  };
};