var DomUtil = {
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
  on: function(element, eventName, handler) {
    if (element.length) {
      for (var i = 0, l = element.length; i < l; i++) {
        element[i].addEventListener(eventName, handler, false);
      }
    } else {
    element.addEventListener(eventName, handler, false);
  }
  },
  setStyle: function(style, element) {
    for (var s in style) {
      element.style[s] = style[s];
    }
  },
  setAttr: function(element, attr, value) {
    element.setAttribute(value);
  }
};