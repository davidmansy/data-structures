var Queue = function() {
  // Hey! Copy your code from src/prototypal/queue.js and paste it here
  this.storage = {};
  this.start = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function(value){
  this.storage[this.end] = value;
  this.end++;
};

Queue.prototype.dequeue = function(){
  if (this.size() > 0) {
    var result = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return result;
  }
};

Queue.prototype.size = function(){
  return this.end - this.start;
};
