var DomUtil = {
  addClass: function(element, className) {

    if(element.classList) {
      element.classList.add(className);
    }
    else {
      var classes = element.className.split(' ');
      if(classes.indexOf(className) === -1) {
          classes.push(className);
          element.className = classes.join(' ');
      }
    }
  },
  get: function(sel) {
    return document.querySelector(sel);
  },
  getAll: function(sel) {
    return document.querySelectorAll(sel);
  },
  getById: function(id) {
    return document.getElementById(id);
  },
  getChildren: function(p) {
    var el = typeof p === 'string' ? this.get(p) : p;

    return el.children;
  },
  off: function(element, eventName, handler) {
    if (element.length) {
      for (var i = 0, l = element.length; i < l; i++) {
        element[i].removeEventListener(eventName, handler, false);
      }
    } else {
      element.removeEventListener(eventName, handler, false);
    }
  },
  on: function(element, eventName, handler) {
    if (element.length) {
      for (var i = 0, l = element.length; i < l; i++) {
        element[i].addEventListener(eventName, handler, false);
      }
    } else {
      element.addEventListener(eventName, handler, false);
    }
  },
  removeClass: function(element, className) {
    if(element.classList) {
      element.classList.remove(className);
    }
    else {
      var classes = element.className.split(' '),
          classNameIndex = classes.indexOf(className);

      if(classNameIndex != -1) {
          classes.splice(classNameIndex, 1);
          element.className = classes.join(' ');
      }
    }
  },
  setStyle: function(element, style) {
    for (var s in style) {
      element.style[s] = style[s];
    }
  },
  setAttr: function(element, attr, value) {
    element.setAttribute(value);
  }
};