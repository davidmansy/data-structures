var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._currentSize = 0;
};

HashTable.prototype.insert = function(k, v){

  if(this._currentSize+1 > (this._limit * 0.75)) {  //check before maxing out storage

    var oldStorage =  this._storage; //save old values
    this._limit *= 2; //double the size limit
    this._storage = makeLimitedArray(this._limit); //create new empty storage with double the size
    var context = this;
    this._currentSize = 0; //reset currentSize to zero --> no vals in storage
    oldStorage.each(function(val, key) {
      context.insert(/*We need to find a way to recreate hash values for larger storage*/);
    });


  }

  this._currentSize++;
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
  this._currentSize--;
};

HashTable.prototype.getHash = function(k) {
  return getIndexBelowMaxForKey(k, this._limit);
};

