var typeUtil = {
	getType: function(obj) {

		if(obj === null) {
			return 'null';
		}
		else if(obj instanceof Array) {
			return 'array';
		}
		else if(obj instanceof Date) {
			return 'date';
		}

		return typeof obj;
	},

	isArray: function(obj) {
		return this.getType(obj) === 'array';
	},

	isDate: function(obj) {
		return this.getType(obj) === 'date';
	},

	isFunction: function(obj) {
		return this.getType(obj) === 'function';
	},

	isObject: function(obj) {
		return this.getType(obj) === 'object';
	},

	isNull: function(obj) {
		return this.getType(obj) === 'null';
	},

	isNullOrUndefined: function(obj) {
		return this.isNull(obj) || this.isUndefined(obj);
	},

	isNumber: function(obj) {
		return this.getType(obj) === 'number';
	},

	isString: function(obj) {
		return this.getType(obj) === 'string';
	},

	isUndefined: function(obj) {
		return this.getType(obj) === 'undefined';
	}
};