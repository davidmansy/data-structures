var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = makeTree(value);

  this.children = this.children || []; //check/initalize children of tree
  this.children.push(newTree);
};

treeMethods.contains = function(target){
};

