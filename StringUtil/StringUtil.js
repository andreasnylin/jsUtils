var StringUtil = {

	anyNullOrUndefined: function() {
		var arr;

		if(arguments.length === 1 && arguments[0] instanceof Array) {
			arr = arguments[0];
		}
		else {
			arr = Array.prototype.slice.call(arguments);
		}

		for(var i = 0, l = arr.length; i < l; i++) {
			if(this.isNull(text) && this.isNullOrUndefined(text)) {
				return true;
			}
		}

		return false;
	},

	anyEmptyOrWhiteSpace: function() {
		var arr;

		if(arguments.length === 1 && arguments[0] instanceof Array) {
			arr = arguments[0];
		}
		else {
			arr = Array.prototype.slice.call(arguments);
		}

		for(var i = 0, l = arr.length; i < l; i++) {
			if(this.trim(text).length === 0) {
				return true;
			}
		}

		return false;
	},

	appendIf: function(condition, truthyString, falsyString) {

		falsyString = falsyString || this.empty;

		return condition ? truthyString : falsyString;
	},

	camelCase: function(text, splitChars) {
		splitChars = splitChars || ' ';
		
		var arr = text.split(splitChars);

		for (var i = 0; i < arr.length; i++) {
			arr[i] = i === 0 ? arr[i].toLowerCase() : this.capitalizeFirstLetter(arr[i]);
		}

		return arr.join('');
	},

	pascalCase: function(text, splitChars) {
		splitChars = splitChars || ' ';
		
		var arr = text.split(splitChars);

		for (var i = 0; i < arr.length; i++) {
			arr[i] = this.capitalizeFirstLetter(arr[i]);
		}

		return arr.join('');
	},

	capitalizeFirstLetter: function(text) {
		return text.substring(0,1).toUpperCase() + text.substring(1);
	},

	capitalizeFirstLetters: function(text) {
		return text.split(' ').map(function(value) {
			return this.capitalizeFirstLetter(value);
		});
	},

	chunk: function(text, length) {

		if(length <= 0 || text.length <= length)  {
			return text;
		}

		var rx = new RegExp(".{1," + length + "}", "gi");
		
		return text.match(rx);
	},

	count: function(text, find) {
		return text.split(find).length - 1;
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
	        find;

	    if(arguments.length > 2) {
	    	for (var i = 0, l = arguments.length - 1; i < l; i++) {
	    		find = l + i + r;
	    		output = this.replaceAll(output, find, arguments[i+1]);
	    	};
	    }
       	else if(values instanceof Array) {
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

	formatNumber: function(num, n, x, s, c) {
		if(typeof num !== "number") {
			num = Number(num);
		}

	    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
		    num = num.toFixed(Math.max(0, ~~n));

		return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
	},

	isLetter: function(char) {
		return char.toLowerCaste() !== char.toUpperCase();
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

	// This does not work with unicode characters
	reverse: function(text) {
	    return text.split('').reverse().join('');
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

	trim2: function(text, chars) {
		// todo: escape regex chars
		var r = new RegExp('^[' + chars + ']+|[' + chars + ']+$', 'g');
		    return text.replace(r, '');
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

	truncate: function(text, maxLength, suffix) {

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

	},

	truncateLeft: function(text, maxLength, prefix) {

		if(this.isEmptyOrWhiteSpace(text)) {
			return text;
		}

		var length = prefix != null ? maxLength - prefix.length : maxLength;

		if(prefix != null)
        {
            return prefix + text.substring(text.length - length);
        }
        else
        {
            return text.substring(text.length - length);
        }

	},

	truncateMid: function(text, maxLength, replacement) {
		if(this.isNullOrUndefined(text) || text.length <= maxLength) {
			return text;
		}
			
		if(replacement) {
			maxLength -= replacement.length;
		}
		else {
			replacement = '';
		}
			
		var mid = Math.floor(maxLength / 2),
			first = mid % 2 == 0 ? mid + 1 : mid;

		return text.substring(0, first) + replacement + text.substring(text.length - mid);
	}
	
};