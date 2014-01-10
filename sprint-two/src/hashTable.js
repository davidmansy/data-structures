var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._currentSize = 0;
};

HashTable.prototype.insert = function(k, v){

};


HashTable.prototype.retrieve = function(k){

};

HashTable.prototype.remove = function(k){

};

HashTable.prototype.getHash = function(k) {
  return getIndexBelowMaxForKey(k, this._limit);
};

