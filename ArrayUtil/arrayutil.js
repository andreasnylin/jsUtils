var ArrayUtil = {

    fill: function(array, value, start, end) {

        start = start || 0;
        end = end || array.length;

        if(start < 0) {
            throw('Start index cannot be less that 0');
        }

        if(end > array.length) {
            throw('end index cannot be greater that array length');
        }

        for(var i = start; i < end; i++) {
            array[i] = value;
        }

    },

    fillMatrix: function(array, value, px1, py1, px2, py2) {
        var x1, x2, y1, y2, x, y;

        if(px2 < 0) {
            x1 = px1 + px2;
            x2 = px1;
        }
        else if(px2 < px1) {
            x1 = px2;
            x2 = px1;
        }
        else {
            x1 = px1;
            x2 = px2;
        }
        
        if(py2 < 0) {
            y1 = py1 + py2;
            y2 = py1;
        }
        else if(py2 < py1) {
            y1 = py2;
            y2 = py1;
        }
        else {
            y1 = py1;
            y2 = py2;
        }
        
        x = x1;
        y= y1;
        
        while(x <= x2) {
            while(y <= y2) {
                arr[x][y] = val;
                y++;
            }
            y = y1;
            x++;    
        }
    },

    randomValue: function() {
        var length, array, index;

        if(arguments.length === 1) {
            array = arguments[0];
            length = array.length - 1;
        }
        else {
            array = arguments;
            length = arguments.length - 1;
        }

        index = Math.floor(Math.random() * (length + 1));

        return array[index];

    }
    
};