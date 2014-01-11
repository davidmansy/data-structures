var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._currentSize = 0;
};

HashTable.prototype.insert = function(k, v){
  var i = this.getHash(k);

  if(this._currentSize+1 >= this._limit * 0.75) {  //increase size of storage if current size is >=75% of size limit
    var oldStorage = this._storage; //retain access to old storage
    this._limit *= 2;  //double storage size limit
    this._storage = makeLimitedArray(this._limit); //create new storage with larger size limit
    this._currentSize = 0; //set current size to zero

    //add key-value pairs into newly expanded storage
    var hashTable = this;
    oldStorage.each(function(bucket, index, storage) {
      _.each(bucket, function(keyValuePair) {
        hashTable.insert(keyValuePair[0], keyValuePair[1]);
      });
    });
  }

  this._currentSize++;
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
  if(this._currentSize <= this._limit * 0.25) {
    var oldStorage = this._storage;
    this._limit /= 2;
    this._storage = makeLimitedArray(this._limit);
    this._currentSize = 0;

    //Iterate over the oldStorage
    var hashTable = this;
    oldStorage.each(function(bucket) {
      _.each(bucket, function(keyValuePair) {
        hashTable.insert(keyValuePair[0], keyValuePair[1]);
      });
    });
  }

  var i = this.getHash(k);
  this._currentSize--;
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