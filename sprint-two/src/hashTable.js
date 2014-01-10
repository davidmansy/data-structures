var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._currentSize = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = this.getHash(k);
  this._storage.set(i, v);
  this._currentSize++;

  if(this._currentSize === (this._limit - 1)) {  //check before maxing out storage

    var oldStorage =  this._storage; //save old values

    this._limit *= 2; //double the size limit
    this._storage = makeLimitedArray(this._limit); //create new empty storage with double the size
    this._currentSize = 0; //reset currentSize to zero --> no vals in storage

    var currentStorage = this;
    oldStorage.each(function(val, key, storage) { //copy over vals from old hash table into new larger hash table
      currentStorage.insert(key, val);
    });
  }
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

