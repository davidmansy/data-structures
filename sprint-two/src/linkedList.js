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

  list.addToHead = function(value) {
    var newNode = makeNode(value);
    if(list.head === null) { //list is empty
      list.head = newNode;
      list.tail = newNode;
    } else { //list is populated
      list.head.prev = newNode;
      var temp = list.head;
      list.head = newNode;
      list.head.next = temp;
    }
  };

  list.contains = function(target, node){
    var currentNode = list.head;
    var valFound = false;

    return Boolean(list.findElement(target));
  };

  list.removeValue = function(target) {
    var node = this.findElement(target);
    if(node) {
      if(node.prev) {
        node.prev.next = node.next;
      }
      if(node.next) {
        node.next.prev = node.prev;
      }
    }
  };

  list.findElement = function(target) {
    var currentNode = list.head;

    while(currentNode) {
      var prop = currentNode.value;
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
