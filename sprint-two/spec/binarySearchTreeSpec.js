var assert = chai.assert;

describe("binarySearchTree", function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = makeBinarySearchTree(5);
  });

  it("should have methods named 'insert', 'contains', and 'depthFirstLog", function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it("should insert values for tree with only one level", function(){
    binarySearchTree.insert(6);
    binarySearchTree.insert(4);
    expect(binarySearchTree.left.value).to.equal(4);
    expect(binarySearchTree.right.value).to.equal(6);
  });

  it("should insert values at the correct location in the tree", function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it("should have a working 'contains' method", function(){
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    assert.isTrue(binarySearchTree.contains(7));
    assert.isFalse(binarySearchTree.contains(8));
  });

  it("should execute a callback on every value in a tree using 'depthFirstLog'", function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    assert.notStrictEqual(array, [5,2,3]);
  });

  it("Print array, no test", function(){
    var array = [];
    var func = function(value){ array.push(value); };
    binarySearchTree.insert(1);
    binarySearchTree.insert(7);
    binarySearchTree.insert(2);
    binarySearchTree.insert(6);
    binarySearchTree.insert(3);
    binarySearchTree.insert(5);
    binarySearchTree.insert(4);
    binarySearchTree.depthFirstLog(func);
    console.log(array);
  });

  it("it should execute a callback on every value in a tree using 'breadthFirstLog", function(){
    var str = "";
    var func = function() {
      str += this.value;
    };

    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(2);
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    binarySearchTree.insert(8);
    binarySearchTree.breadthFirstLog(func);
    expect(str).to.equal('5738642');
  });

  it("it should return an array tree elements in order of value", function(){
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(2);
    binarySearchTree.insert(4);
    binarySearchTree.insert(6);
    binarySearchTree.insert(8);
    var arr = binarySearchTree.getOrderedArray();
    expect(arr.join(',')).to.equal("2,3,4,5,6,7,8");
  });
});