var MathUtil = {

	degreesToRadians: function(degrees) {
    	return (degrees * Math.PI) / 180;
	},

	// Convert radians to degrees
	radiansToDegrees: function(radians) {
	    return (radians * 180) / Math.PI;
	},

	// Get scale based on width or height
	getScale: function(width, height, maxWidth, maxHeight) {
	    return Math.min(maxWidth / width, maxHeight / height);
	},

	random: function(min, max) {
	  return min + Math.random() * (max - min); 
	},

	randomInt: function(min, max) {
	  return Math.floor(min + Math.random() * (max - min + 1));
	},

	randomRange: function(count, min, max) {
	  var range = [];
	  for(var i  = count; i > 0; i--) {
	    range.push(random(min, max));
	    }
	  return range;
	},

	randomIntRange: function(count, min, max) {
	  var range = [];
	  for(var i  = count; i > 0; i--) {
	    range.push(randomInt(min, max));
	    }
	  return range;
	},

	randomValue: function() {

		var length = arguments.length;

		if(length === 1 && arguments[0] instanceof Array) {
			var array = arguments[0];
			return array[this.randomInt(0, array.length - 1)];
		}
		else {
			return arguments[this.randomInt(0, length - 1)];
		}

	}

};