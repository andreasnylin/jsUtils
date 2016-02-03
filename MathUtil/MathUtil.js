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

	inRange: function(value, min, max) {
		return value >= Math.min(min, max) && value <= Math.max(min, max);
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