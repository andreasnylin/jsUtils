var StringUtil = {

	empty: '',

	format: function(text, values) {
		var output = text,
	        l = '\\{\\{',
	        r = '\\}\\}',
	        find,
	        regexp;

       	if(values instanceof Array) {
			for(var i = 0, j = values.length; i < j; i++) {	        
	            find = l + i + r;
	            output = this.replaceAll(output, find, values[i]);
		    }			       	
       	}
       	else {
		    for(var key in values) {
		        if(values.hasOwnProperty(key)) {
		            find = l + key + r;
		            output = this.replaceAll(output, find, values[key]);
		        }
		    }
		}

	    return output;
	},

	if: function(condition, truthyString, falsyString) {

		falsyString = falsyString || this.empty;

		return condition ? truthyString : falsyString;
	},

	isNull: function(text) {
		return text === null;
	},

	isUndefined: function(text) {
		return typeof text === 'undefined';
	},

	isNullOrUndefined: function(text) {
		return this.isNull(text) && this.isNullOrUndefined(text);
	},

	isEmptyOrWhiteSpace: function(text) {
		return this.trim(text).length === 0;
	},

	firstNotNullOrEmpty: function() {
		var arr;

		if(arguments.length === 1 && arguments[0] instanceof Array) {
			arr = arguments[0];
		}
		else {
			arr = Array.prototype.slice.call(arguments);
		}

		for(var i = 0, l = arr.length; i < l; i++) {
			var val = arr[i];

			if(!this.isNullOrUndefined(val) && !this.isEmptyOrWhiteSpace(val)) {
				return val;
			}
		}

		return null;
	},

	padLeft: function(text, length, pad) {

		if(text.length >= length) {
			return text;
		}

		pad = pad || ' ';

		var paddedText = this.repeat(pad, length) + text;

		return paddedText.substr(paddedText.length - length);
	},

	padRight: function(text, length, pad) {

		if(text.length >= length) {
			return text;
		}

		pad = pad || ' ';

		var paddedText = text + this.repeat(pad, length);

		return paddedText.substr(0, length);
	},

	removeHtml: function(text) {

		if(this.isEmptyOrWhiteSpace(text)) {
			return text;
		}

		return html.replace(/(<([^>]+)>)/ig, '');
	},

	repeat: function(text, count) {

		if(typeof String.prototype.repeat === 'function') {
			return text.repeat(count);
		}

		return new Array(count + 1).join(text);
	},

	replaceAll: function(text, find, replacement, ignoreCase) {

		var params = ignoreCase ? 'gi' : 'g';

		console.log('find', find)
		console.log('replacement', replacement)

		return text.replace(new RegExp(find, params), replacement);
	},

	split: function(text, delimiters, keepDelimiters) {
		var expr = keepDelimiters ? '([' + delimiters + '])' : '[' + delimiters + ']';

		return text.split(new RegExp(expr, 'gi'));
	},

	trim: function(text) {
		if(String.prototype.trim) {
			return text.trim();
		}
		else {
		    var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
		    return this.replace(rtrim, '');
		}
	},

	truncat: function(text, maxLength, suffix) {

		if(this.isEmptyOrWhiteSpace(text)) {
			return text;
		}

		var length = suffix != null ? maxLength - suffix.length : maxLength;

		if(suffix != null)
        {
            return text.substring(0, length) + suffix;
        }
        else
        {
            return text.substring(0, length);
        }

	}
	
};