var DomUtil = {
  addCss: function(href, callback) {
    var l = document.createElement('link');
    l.setAttribute('href', src);
    l.setAttribute('rel', 'stylesheet');
    l.onload = callback;
    document.getElementsByTagName('head')[0].appendChild(l);
    return l;
  },
  addScript: function(src, callback) {
    var s = document.createElement('script');
    s.setAttribute('src', src);
    s.onload = callback;
    document.getElementsByTagName('head')[0].appendChild(s);
    return s;
  },
  addStyle: function(str) {
    var s = document.createElement('style');
    s.innerText = str;
    document.getElementsByTagName('head')[0].appendChild(s);
    return s;
  },
  append: function(parent, child) {
    parent.appendChild(child);
  },
  prepend: function(parent, child) {
    if(parent.childNodes.length > 0) {
      parent.insertBefore(child, parent.childNodes[0]);
    }
    else {
      parent.appendChild(child);
    }
  },
  createElement: function(tag, parent) {
    var el =  document.createElement(tag);

    if(parent) {
      parent.appendChild(el);
    }

    return el;
  },
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
  next: function() {

  },
  nextOrFirst: function() {

  },
  prev: function() {

  },
  prevOrLast: function() {

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
  removeElement: function() {

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