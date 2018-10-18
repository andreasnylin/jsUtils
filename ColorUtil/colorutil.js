var ColorUtil = {
	hex2rgb: function(hex) {

	},

	hex2hsl: function(hex) {

	},

	rgb2hex: function() {

	},

	rgb2hsl: function() {

	},

	hsl2hex: function() {

	},

	hsl2rgb: function() {

	},

	shade: function() {

	},

	darken: function() {

	},

	lighten: function() {

	},

	blend: function() {

	},

	relativeluminance: function(color) {
    //Correct for sRGB
    for(var key in color) {
    	var $c = key,
    		$v = color[key];

    	if ($v <= 0.03928) {
          color[$c] = $v / 12.92;
      } else {
          color[$c] = Math.pow((($v + 0.055) / 1.055), 2.4);
      }
    }

    //Calculate relative luminance using ITU-R BT. 709 coefficients
    return { r: color['r'] * 0.2126),
			g: color['g'] * 0.7152),
			b: color['b'] * 0.0722
		};
	},

	contrastratio: function($c1, $c2) {
    $y1 = this.relativeluminance($c1);
    $y2 = this.relativeluminance($c2);

    //Arrange so $y1 is lightest
    if ($y1 < $y2) {
        $y3 = $y1;
        $y1 = $y2;
        $y2 = $y3;
    }
    return ($y1 + 0.05) / ($y2 + 0.05);
	},

	validateHex: function(c) {
	  return /^#?([a-f0-9]{6}|[a-f0-9]{3})$/.test(c);
	}

};