/// Publish/Subscribe Pattern
  // Similar to Observer Pattern , this pattern lets the observers to subscribe to a specific topic
  // and lets the observer implement its own notification handler 

  var pubsub = (function(){
    var topics = {};
    var counter = -1;
    return {
      /**
      * Publishes notifications to subscribers of a specific topic
      * @method publish 
      * @param {String} topic
      * @param {Mixed} args
      */
      publish: function (topic, args) {
        var subscribers;
        if (!topics[topic]) {
          return false;
        }
        subscribers = topics[topic],
        len = subscribers ? subscribers.length : 0;
        while (len--) {
          subscribers[len].fn(topic, args);
        }
      },

      /**
      * Adds the subscriber to a topic collection
      * @method subscribe 
      * @param {String} topic
      * @param {Function} fn
      * @return {Number} id
      */
      subscribe: function (topic, fn) {
        if (!topics[topic]) {
          // Defining new topic
          topics[topic] = [];
        }
        var id = (++counter);
        topics[topic].push({
          id: id,
          fn: fn
        });
        return id;
      },

      /**
      * Removes the subscriber by the given id
      * @method ubsubscribe
      * @param {Number} id
      * @return {Number} id
      */
      unsubscribe: function (id) {
        var topic;
        for(topic in topics) {
          for (var i = 0, length = topics[topic].length; i < length; i++) {
            if (Array.isArray(topics[topic]))
            if (topics[topic][i].id === id) {
              topics[topic].splice(i, 1);
              return id;
            }
          }
        }
      }
    }
  }());

  // Implementation 
  var subscription = pubsub.subscribe("inbox/message", function (topics, data){
    console.log( " log : " + topics + " : " + data);
  });
  pubsub.publish("inbox/message", "hello buddy");
  pubsub.publish("inbox/message", ["test","a",1, 2, 3]);
  pubsub.publish("inbox/message", {
    sender: "@iframe",
    body: " Hey dude thanks to follow back"
  });
  pubsub.unsubscribe(subscription);
  pubsub.publish("inbox/message", "hello again ! ");
