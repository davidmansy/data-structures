var Stack = function() {
  this.storage = {};
  this.sizeValue = 0;
};

Stack.prototype.push = function(value){
  this.storage[this.sizeValue++] = value;
};

Stack.prototype.pop = function(){
  if(this.sizeValue) {
    var val = this.storage[this.sizeValue-1];
    delete this.storage[this.sizeValue-1];
    this.sizeValue--;
    return val;
  }
};

Stack.prototype.size = function(){
  return this.sizeValue;
};

