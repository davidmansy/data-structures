var makeQueue = function() {
  // Hey! Copy your code from src/functional-shared/queue.js and paste it here
  var instance = Object.create(queueMethods);
  instance.storage = {};
  instance.start = 0;
  instance.end = 0;

  return instance;
};

var queueMethods = {

  enqueue : function(value){
    this.storage[this.end] = value;
    this.end++;
  },

  dequeue : function(){
    if (this.size() > 0) {
      var result = this.storage[this.start];
      delete this.storage[this.start];
      this.start++;
      return result;
    }
  },

  size : function(){
    return this.end - this.start;
  }

};