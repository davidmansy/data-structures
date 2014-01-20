var HashTable = function(){
  this._size = 0;
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];

  // 2 conditions:
  // a. key never been stored
  // b. key previously stored

  // handle b:
  for( var j = 0; j < bucket.length; j++ ){
    // for each, key value pairs, look for key
    var pair = bucket[j];
    if( pair[0] === k ){
      pair[1] = v;
      return;
    }
  }

  // handle a:
  bucket.push([k,v]);
  this._size++;
  if( this._size > 0.75 * this._limit ){
    this.resize( this._limit * 2 );
  }
  this._storage.set(i, bucket);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];

  for( var j = 0; j < bucket.length; j++ ){
    var pair = bucket[j];
    if( pair[0] === k ){
      return pair[1];
    }
  }

  return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i) || [];

  for( var j = 0; j < bucket.length; j++ ){
    var pair = bucket[j];
    if( pair[0] === k ){
      bucket.splice(j, 1);
      this._size--;
      if( this._size < 0.25 * this._limit ){
        this.resize( this._limit * 0.5 );
      }
      return pair[1];
    }
  }
};

HashTable.prototype.resize = function(newLimit){
  var oldStorage = this._storage;
  this._storage = makeLimitedArray(newLimit);
  this._size = 0;
  this._limit = newLimit;

  var hashTable = this;
  oldStorage.each(function(bucket){
    if(!bucket){ return; }
    for( var i = 0; i < bucket.length; i++ ){
      var pair = bucket[i];
      hashTable.insert(pair[0], pair[1]);
    }
  });

};
