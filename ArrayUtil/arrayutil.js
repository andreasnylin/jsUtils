var ArrayUtil = {

    chunk: function(array, chunkLength) {
      var chunks = [];

      for(var i = 0, l = array.length; i < l; i += chunkLength) {
        chunks.push(array.slice(i, i + chunkLength));
      }

      return chunks;
    },

    contains: function(array, value) {
        return array.indexOf(value) !== -1;
    },

    clone: function(arr) {
        return arr.slice(0);
    },

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

    filterEmptyValues: function(arr) {
        var newArr = [];

        for (var i = arr.length - 1; i >= 0; i--) {
            var value = arr[i];

            if(value !== null &&
                typeof value !== 'undefined' && 
                value !== '') {
                newArr.unshift(value);
            }
        }

        return newArr;
    },

    nth: function(arr, startIndex, cycleSize) {
        var i,
            l,
            newArr = [];
        
        for (i = startIndex, l = arr.length; i < l; i += cycleSize) {
            newList.push(arr[i]);
        }

        return newList;
    },

    matrix: function(w, h) {
        var m = new Array(h);

        for (var i = 0; i < h; i++) {
            m[i] = new Array(w);
        }

        return m;
    },

    rangeFromCenter: function(arr, count, index) {

        index = typeof index === 'undefined' ? 0 : index;

        var howMany = Math.Min(count, arr.length);
        var end = Math.Min(index + howMany / 2, arr.length);

        return this.take(this.skip(arr, end - howMany), howMany);
    },

    range: function(arr, start, count) {
        return arr.slice(start, start + count);
    },

    randomValue: function() {
        var length, 
            array, 
            index;

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

    },

    randomValues: function(array, count, unique) {

        unique = typeof unique === 'undefined' ? true : unique;

        var values = [],
            pickedIndexes = [];

        while(count > 0) {
            var index = Math.floor(Math.random() * array.length),
                value = array[index];

            if(!unique || (unique && !this.contains(pickedIndexes, index))) {
                values.push(value);
                pickedIndexes.push(index);
                count--;
            }
            
        }

        return values;

    },

    rotate: function(array, offset) {
        return array.slice(offset).concat(array.slice(0, offset));
    },

    splitColumns: function(arr, parts) {
        var newArr = [],
            defaultSize = Math.floor(arr.length / parts),
            offset = arr.length % parts,
            position = 0,
            i,
            size;

        for (i = 0; i < parts; i++) {
            size = defaultSize;

            if (i < offset) {
                size++; // Just add one to the size (it's enough).
            }

            newArr.push(this.range(arr, position, size));

            // Set the new position after creating a part newArr, so that it always start with position zero on the first yield return above.
            position += size;
        }

        return newArr;
    },

    splitColumns2: function(arr, size) {
        var newArr = new Array(size);

        for(var i = 0; i < size; i++) {
            newArr[i] = [];
        }

        for(var i = 0; i < arr.length; i++) {
            newArr[i % size].push(arr[i]);
        }

        return newArr;
    },

    shuffle: function(array) {
        var counter = array.length;

        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            var index = Math.floor(Math.random() * counter);

            // Decrease counter by 1
            counter--;

            // And swap the last element with it
            var temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }

        return array;
    },

    skip:function(arr, count) {
        var newArr,
            length = arr.length;

        if(length > count) {
            newArr = arr.slice(count);
        } else {
            newArr = [];
        }

        return newArr;
    },

    take: function(arr, count) {
        var newArr,
            length = arr.length;

        if(count > length) {
            count = length;
        }

        newArr = arr.slice(0, count);

        return newArr;
    },

    // This won't work with objects or arrays of arrays 
    unique: function(array) {
        var newArr = [];

        for (var i = array.length - 1; i >= 0; i--) {
            var val = array[i];

            if(!this.contains(newArr, val)) {
                newArr.push(val);
            }
        }

        return newArr;
    }
    
};