var MathUtil = {

	norm: function(value, min, max) {
		return (value - min) / (max - min);
	},

	lerp: function(norm, min, max) {
		return (max - min) * norm + min;
	},

	map: function(value, sourceMin, sourceMax, destMin, destMax) {
		return MathUtil.lerp(MathUtil.norm(value, sourceMin, sourceMax), destMin, destMax);
	},

	clamp: function(value, min, max) {
		return Math.min(Math.max(value, Math.min(min, max)), Math.max(min, max));
	},

	distance: function(p0, p1) {
		var dx = p1.x - p0.x,
			dy = p1.y - p0.y;
		return Math.sqrt(dx * dx + dy * dy);
	},

	distanceXY: function(x0, y0, x1, y1) {
		var dx = x1 - x0,
			dy = y1 - y0;
		return Math.sqrt(dx * dx + dy * dy);
	},

	circleCollision: function(c0, c1) {
		return utils.distance(c0, c1) <= c0.radius + c1.radius;
	},

	circlePointCollision: function(x, y, circle) {
		return utils.distanceXY(x, y, circle.x, circle.y) < circle.radius;
	},

	pointInRect: function(x, y, rect) {
		return utils.inRange(x, rect.x, rect.x + rect.width) &&
		       utils.inRange(y, rect.y, rect.y + rect.height);
	},

	loop: function(val, min, max) {
	    var p = max - min + 1;
	    var mod = (val - min) % p;

	    if(mod < 0) {
	        mod += p;
	    }

	    return min + mod;
	},

	inRange: function(value, min, max) {
		return value >= Math.min(min, max) && value <= Math.max(min, max);
	},

	mid: function() {
		return this.sum.apply(this, arguments) / arguments.length;
	},

	mean: function() {
		var mid = Math.floor((arguments.length - 1) / 2);
		console.log(mid);
		return arguments[mid];
	},

	neg: function(value) {
		return 0 - value;
	},

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

	range: function(min, max, step) {
		step = step || 1;
		var values = [];
		while(min <= max) {
			values.push(min);
			min += step;
		}

		return values;
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

	randomMultiplier: function(min, max, multiplier){
	    return Math.floor((min + Math.random() * (max - min + 1)) / multiplier) * multiplier;
	},

	roundDecimals: function(v, d) {
	    var x = Math.pow(10, d); 
	    return Math.round(v * x)/x;
	},

	roundToNearest: function(val, multiplier) {
		return Math.round(val / multiplier) * multiplier;
	},

	sum: function() {
		var s = 0;

		for (var i = arguments.length - 1; i >= 0; i--) {
			s += arguments[i];
		}

		return s;
	}

};