var makeStack = function(){
  var instance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  instance.push = function(value){
  };

  instance.pop = function(){
  };

  instance.size = function(){
    return size;
  };

  return instance;
};