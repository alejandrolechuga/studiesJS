function Observer () {
  this.observers = [];
}

Observer.prototype.add = function (obj) {
  this.observers.push(obj);
};

Observer.prototype.count = function (obj) {
  return this.observers.length;
};

Observer.prototype.get = function (index) {
  if (index > -1 && index < this.observers.length) {
    return this.observers[index];
  }
};

Observer.prototype.indexOf = function (obj, start) {
  var i = start;
  while (i < this.observers.length) {
    if (this.observers[i] === obj) {
      return i;
    }
    i++;
  }
};

Observer.prototype.removeAt = function (index) {
  this.observers.splice(index, 1);
};

