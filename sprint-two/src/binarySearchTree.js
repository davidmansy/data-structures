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

    if(newTree.value > this.value) {  //insert somewhere to right
      if(this.right === null) {
        this.right = newTree;
      }
    } else { //insert somewhere to left
      if(this.left === null) {
        this.left = newTree;
      }
    }

  },

  contains: function() {

  },

  depthFirstLog: function() {

  }
};


