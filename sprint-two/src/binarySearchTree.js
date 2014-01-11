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

    var insertValue = function(root, insertion) {
      if(insertion.value > root.value) {  //insert somewhere to right
        if(root.right === null) {
          root.right = insertion;
        } else { //try inserting at the right of the root
          insertValue(root.right, insertion);
        }
      } else { //insert somewhere to left
        if(root.left === null) {
          root.left = insertion;
        } else { //try inserting at the left of the root
          insertValue(root.left, insertion);
        }
      }
    };

    insertValue(this, newTree);
  },

  contains: function() {

  },

  depthFirstLog: function() {

  }
};


