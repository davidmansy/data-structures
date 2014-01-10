var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._currentSize = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = this.getHash(k);
  if(this._storage.get(i) === undefined) {
    this._storage.set(i, [[k,v]]);  //initialize array bucket with key-value array item
  } else {
    this._storage.get(i).push([k,v]);
  }
};



HashTable.prototype.retrieve = function(k){
  var i = this.getHash(k);
  var val = null;

  //retrieve array
  var bucket = this._storage.get(i);
  _.each(bucket, function(keyValuePair) {  //key stored at [0], val stored at [1]
    if(keyValuePair[0] === k) {
      val = keyValuePair[1];
    }
  });
  return val;
};

HashTable.prototype.remove = function(k){
  var i = this.getHash(k);

  var bucket = this._storage.get(i);
  _.each(bucket, function(keyValuePair, index, bucketArray) {  //key stored at [0], val stored at [1]
    if(keyValuePair[0] === k) {
      bucketArray.splice(index, 1);
    }
  });

};

HashTable.prototype.getHash = function(k) {
  return getIndexBelowMaxForKey(k, this._limit);
};

