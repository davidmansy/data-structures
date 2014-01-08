var makeQueue = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var start = 0;
  var end = 0;

  // Implement the methods below

  instance.enqueue = function(value){
    storage[end] = value;
    end++;
  };

  instance.dequeue = function(){
    if (instance.size() > 0) {
      var result = storage[start];
      delete storage[start];
      start++;
      return result;
    }
  };

  instance.size = function(){
    return end - start;
  };

  return instance;
};
