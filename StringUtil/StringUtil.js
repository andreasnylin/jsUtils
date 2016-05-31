var StringUtil = {

	appendIf: function(condition, truthyString, falsyString) {

		falsyString = falsyString || this.empty;

		return condition ? truthyString : falsyString;
	},

	chunk: function(text, length) {

		if(length <= 0 || text.length <= length)  {
			return text;
		}

		var rx = new RegExp(".{1," + length + "}", "gi");
		
		return text.match(rx);
	},

	empty: '',

	endsWith: function(text, searchString, position) {
		if (!String.prototype.endsWith) {
		 var subjectString = text.toString();
		      if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
		        position = subjectString.length;
		      }
		      position -= searchString.length;
		      var lastIndex = subjectString.indexOf(searchString, position);
		      return lastIndex !== -1 && lastIndex === position;
		} else {
			return text.endsWith(searchString, position);
		      
		}
	},

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

		return text.replace(new RegExp(find, params), replacement);
	},

	replaceBetween: function(text, start, end, replacement) {
	    return text.substring(0, start) + replacement + text.substring(end);
	},

	split: function(text, delimiters, keepDelimiters) {
		var expr = keepDelimiters ? '([' + delimiters + '])' : '[' + delimiters + ']';

		return text.split(new RegExp(expr, 'gi'));
	},

	splitTrim: function(text, delimiter) {
		var arr = this.split(text, delimiter);

		return this.trimAll(arr);
	},

	startsWith: function(text, textToFind, position) {

		position = position || 0;

		if (String.prototype.startsWith) {
			return text.startsWith(textToFind, position);
		}
		else {
	      return text.substr(position, textToFind.length) === searchString;
	  	}
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

	trimAll: function() {
		var arr;

		if(arguments.length === 1 && arguments[0] instanceof Array) {
			arr = arguments[0];
		}
		else {
			arr = Array.prototype.slice.call(arguments);
		}

		for (var i = arr.length - 1; i >= 0; i--) {
			arr[i] = this.trim(String(arr[i]));
		}

		return arr;
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