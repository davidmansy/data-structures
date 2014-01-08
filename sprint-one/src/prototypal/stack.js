var makeStack = function() {
  var instance = Object.create(stackMethods);
  instance.storage = {};
  instance.sizeValue = 0;
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