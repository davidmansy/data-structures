var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(list.head === null) { //list is empty
      list.head = newNode;
      list.tail = newNode;
    } else {  //list is populated, head doesn't change
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    list.head = list.head.next;
  };

  list.contains = function(target, node){
    var currentNode = list.head;
    var valFound = false;

    while(currentNode) {
      if(currentNode.value === target) {
        valFound = true;
        currentNode = null; //done searching --> break out of loop
      } else {
        currentNode = currentNode.next; //continue on to next node
      }
    }
    return valFound;
  };

  list.removeValue = function(target) {

  };

  list.findElement = function(target) {
    var currentNode = list.head;

    while(currentNode) {
      if(currentNode.value === target) {
        return currentNode;
      } else {
        currentNode = currentNode.next; //continue on to next node
      }
    }
    return null;
  };

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};
