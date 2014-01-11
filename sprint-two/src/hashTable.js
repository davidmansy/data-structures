var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
  this._currentSize = 0;

  this._getHash = function(k) {
    return getIndexBelowMaxForKey(k, this._limit);
  };

  this._switchLimitedArray = function() {
    var oldStorage = this._storage; //retain access to old storage
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

};

HashTable.prototype.insert = function(k, v){
  var i = this._getHash(k);

  if(this._currentSize+1 >= this._limit * 0.75) {  //increase size of storage if current size is >=75% of size limit
    this._limit *= 2;  //double storage size limit
    this._switchLimitedArray(); //Switch to a limitedArray with a bigger array
  }

//  this._currentSize++;
  if(this._storage.get(i) === undefined) {
    this._storage.set(i, [[k,v]]);  //initialize array bucket with key-value array item
    this._currentSize++;
  } else {//array is not empty
    var bucket = this._storage.get(i); //Get the bucket
    var found = false;
    _.each(bucket, function(keyValuePair) { //Check that the same key does not exist
      if(keyValuePair[0] === k) { //If it exist, update the value only
        keyValuePair[1] = v;
        found = true;
      }
    });
    if (!found) { //If the key was not found, push a new k-v pair
      this._storage.get(i).push([k,v]);
      this._currentSize++;
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var i = this._getHash(k);
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
    this._limit /= 2;
    this._switchLimitedArray();
  }

  var i = this._getHash(k);
  this._currentSize--;
  var bucket = this._storage.get(i);
  _.each(bucket, function(keyValuePair, index, bucketArray) {  //key stored at [0], val stored at [1]
    if(keyValuePair[0] === k) {
      bucketArray.splice(index, 1);
    }
  });

};

