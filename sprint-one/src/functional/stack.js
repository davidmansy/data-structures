var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  instance.push = function(value){
    storage[size++] = value;
  };

  instance.pop = function(){
    if(size) {
      var val = storage[size-1];
      delete storage[size-1];
      size--;
      return val;
    }
  };

  instance.size = function(){
    return size;
  };

  return instance;
};