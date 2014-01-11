var makeBinarySearchTree = function(value){
  var tree = {};

  tree.right = null;
  tree.left = null;
  tree.value = value;
  tree.maxDepth = 1;
  _.extend(tree, binarySearchTreeMethods);

  return tree;
};


var binarySearchTreeMethods = {
  insert: function(value) {
    var newTree = makeBinarySearchTree(value);
    var baseTree = this;

    var depthOfCurrentInsertion = 1;

    var insertValue = function(root, insertion) {
      depthOfCurrentInsertion++;
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
    baseTree.maxDepth = (baseTree.maxDepth > depthOfCurrentInsertion) ? baseTree.maxDepth : depthOfCurrentInsertion;
  },

  contains: function(value) {
    var found = false;

    var containValue = function(value, targetTree) {
      if(value === targetTree.value) {
        found = true;
      } else {
        if(value > targetTree.value && targetTree.right) {
          containValue(value, targetTree.right);
        } else if(targetTree.left) {
          containValue(value, targetTree.left);
        }
      }
    };
    containValue(value, this);
    return found;
  },

  depthFirstLog: function(func) {

    var processTreeElement = function(tree) {
      func.call(tree, tree.value);
      if(tree.right !== null) {
        processTreeElement(tree.right);
      }
      if(tree.left !== null) {
        processTreeElement(tree.left);
      }
    };

    processTreeElement(this);
  },

  breadthFirstLog: function(func) {
    storage =[];

    //add element to 2 dimensional array based on depth of tree
    var recordTreeDepth = function(tree, depthVal) {
      if(!storage[depthVal]) {
        storage[depthVal] = [];
      }
      storage[depthVal].push(tree);
      if(tree.right !== null) {
        recordTreeDepth(tree.right, depthVal+1);
      }
      if(tree.left !== null) {
        recordTreeDepth(tree.left, depthVal+1);
      }
    };
    recordTreeDepth(this, 0);

    //perform passed in function on each element in order
    for(var level = 0; level < storage.length; level++) {
      for(var tree = 0; tree < storage[level].length; tree++) {
        func.apply(storage[level][tree]);
      }
    }
  },

  getOrderedArray: function() {
    var arr = [];
    var func = function(){
      arr.push(this.value);
    };

    var pushValues = function(tree) {
      if(tree) {
        if(tree.left !== null) {
          pushValues(tree.left);
        }
        arr.push(tree.value);
        if(tree.right !== null) {
          pushValues(tree.right);
        }
      }
    };
    pushValues(this);
    return arr;
  }



};














