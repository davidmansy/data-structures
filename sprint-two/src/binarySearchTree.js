var makeBinarySearchTree = function(value){
  var tree = {};

  tree.right = null;
  tree.left = null;
  tree.value = value;
  _.extend(tree, binarySearchTreeMethods);

  return tree;
};


var binarySearchTreeMethods = {
  insert: function(value) {
    var newTree = makeBinarySearchTree(value);
    if(newTree.value > this.value) {
      this.right = newTree; //
    } else {
      this.left = newTree;
    } 
  },

  contains: function() {

  },

  depthFirstLog: function() {

  }
};


