var makeStack = function() {
  // Hey! Copy your code from src/functional/stack.js and paste it here
  var instance = {};
  instance.storage = {};
  instance.sizeValue = 0;
  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  push : function(value){
    this.storage[this.sizeValue++] = value;
  },

  pop : function(){
    if(this.sizeValue) {
      var val = this.storage[this.sizeValue-1];
      delete this.storage[this.sizeValue-1];
      this.sizeValue--;
      return val;
    }
  },

  size : function(){
    return this.sizeValue;
  }

};