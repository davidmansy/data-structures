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
      list.tail.next.prev = this.tail;
      list.tail = newNode;
    }
  };

  list.removeHead = function(){
    list.head = list.head.next;
    list.head.prev = null;
  };

  list.contains = function(target, node){
    var currentNode = list.head;
    var valFound = false;

    return Boolean(list.findElement(target));
  };

  list.removeValue = function(target) {
    var prevNode = list.findElement(target, true);
    var removedNode = prevNode.next;
    prevNode.next = removedNode.next;
  };

  list.findElement = function(target, findPrev) { //findPrev is true is previous value should be returned
    var currentNode = list.head;

    while(currentNode) {
      var prop = findPrev ? currentNode.next.value : currentNode.value;
      if(prop === target) {
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
  node.prev = null;

  return node;
};
