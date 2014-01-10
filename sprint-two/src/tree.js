var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  newTree.parent = null;
  _.extend(newTree, treeMethods);
  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  var newTree = makeTree(value);
  newTree.parent = this;

  this.children = this.children || []; //check/initalize children of tree
  this.children.push(newTree);
};



treeMethods.removeFromParent = function(tree) {
  var children = tree.parent.children;
  for(var i = 0; i < children.length; i++) {
    if(children[i] === tree) {
      var temp = children[i];
      children[i] = undefined;
      return temp;
    }
  }
  return null;

};

treeMethods.contains = function(target){

  var targetFound = false;

  var checkChildren = function(children) {
    for(var i = 0; i < children.length; i++) {
      if(children[i].value === target) {
        targetFound = true;
        return;
      } else if(children[i].children) {
        checkChildren(children[i].children);
      }
    }
  };

  if(this.value === target) {
    targetFound = true;
  } else if(this.children) {
    checkChildren(this.children);
  } else {
    targetFound = false;
  }

  return targetFound;

};