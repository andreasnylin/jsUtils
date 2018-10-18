var ObjUtil = {
	clone: function(obj) {
		var clone = {};

		this.extend(clone, obj);

		return clone;
	},
	extend: function(obj, props) {
    for(var prop in props) {
      if(props.hasOwnProperty(prop)) {
        obj[prop] = props[prop];
      }
    }
	},
  forEach: function(obj, fn) {
    var index = 0;
    for(var key in obj) {
      if(obj.hasOwnProperty(key)) {
        fn(obj[key], index++);
      }
    }
  },
  findProp: function(obj, pattern) {
    var parts = pattern.split('.'),
      val = obj;

    for (var i = 0; i < parts.length; i++) {
      var propKey = parts[i];

      if(!val.hasOwnProperty(propKey)) {
        return null;
      }

      val = val[propKey];
    }

    return val;
  }
};