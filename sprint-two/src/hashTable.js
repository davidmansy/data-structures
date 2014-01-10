var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = this.getHash(k);
  this._storage.set(i, v);
};


HashTable.prototype.retrieve = function(k){
  var i = this.getHash(k);
  return this._storage.get(i);
};

HashTable.prototype.remove = function(k){
  var i = this.getHash(k);
  this._storage.each(function(value, key, storage) {
    if(key === i) {
      storage[key] = null;
    }
  });
};

HashTable.prototype.getHash = function(k) {
  return getIndexBelowMaxForKey(k, this._limit);
};

