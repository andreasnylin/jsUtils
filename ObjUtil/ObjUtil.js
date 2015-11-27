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
	}
};