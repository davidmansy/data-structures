var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  var key = JSON.stringify(item);
  if(!(key in this._storage)) {
    this._storage[key] = item;
  }
};

setPrototype.contains = function(item){
  var key = JSON.stringify(item);
  return (key in this._storage);
};

setPrototype.remove = function(item){
  var key = JSON.stringify(item);
  delete this._storage[key];
};
