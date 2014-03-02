/// Observer Pattern
  // Observer List that the subject would be attached
  function Observers () {
    this.observers = [];
  }

  /**
  * Adds an observer to a collection of observers
  * @method add
  * @param {Object} obj
  * @public
  */
  Observers.prototype.add = function (obj) {
    this.observers.push(obj);
  };

  /**
  * Returns the length of the observers collection
  * @method count
  * @return {Number}
  */
  Observers.prototype.count = function () {
    return this.observers.length;
  };

  /**
  * Returns the observer at the given index 
  * @method get
  * @param {Number} index 
  * @return {Object}
  */
  Observers.prototype.get = function (index) {
    if (index > -1 && index < this.observers.length) {
      return this.observers[index];
    }
  };

  /**
  * Returns the Observer position 
  * @method indexOf
  * @param {Object} obj 
  * @param {Number} start
  * @return {Number}
  */
  Observers.prototype.indexOf = function (obj, start) {
    var i = start;
    while (i < this.observers.length) {
      if (this.observers[i] === obj) {
        return i;
      }
      i++;
    }
  };

  /**
  * Removes the Observer at the given position
  * @method removeAt
  * @param {Number} index
  */
  Observers.prototype.removeAt = function (index) {
    this.observers.splice(index, 1);
  };

  // Subject 
  // This class notifies all the observers everytime an event happens
  function Subject() {
    this.observers = new Observers();
  }

  /**
  * Adds the observer to the subject observers list
  * @method addObserver
  * @param {Object} observer
  */
  Subject.prototype.addObserver = function (observer) {
    this.observers.add(observer);
  };

  /** 
  * Removes the observer from the notification list
  * @method removeObserver
  * @param {Object} observer
  */
  Subject.prototype.removeObserver = function (observer) {
    this.observers.removeAt(this.observers.indexOf(observer,0));
  };

  /** 
  * Notifies the observers of any event
  * @method removeObserver
  * @param {Mixed} context
  */
  Subject.prototype.notify = function (context) {
    var observerCount = this.observers.count();
    for(var i = 0 ; i < observerCount; i ++) {
      this.observers.get(i).update(context);
    }
  };
  // Observer 
  function Observer() {
    this.update = function (){

    };
  }

  function extend (extension, obj) {
    for (var  key in extension) {
      obj[key] = extension[key];
    }
  }