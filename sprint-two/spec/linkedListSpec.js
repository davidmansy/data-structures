var expect = chai.expect;
var assert = chai.assert;

describe("linkedList", function() {
  var linkedList;

  beforeEach(function() {
    linkedList = makeLinkedList();
  });

  it("should have a head and tail", function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it("should have methods named 'addToTail', 'removeHead', and 'contains'", function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it("should designate a new tail when new nodes are added", function(){
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it("should remove the head from the list when removeHead is called", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it("should contain a value that was added", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    assert.isTrue(linkedList.contains(4));
    assert.isTrue(linkedList.contains(5));
    assert.isFalse(linkedList.contains(6));
  });

  it("should not contain a value that was removed", function(){
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    assert.isFalse(linkedList.contains(4));
  });

  // add more tests here to test the functionality of linkedList
  it("should not contain a value that was removed within the list, not only head and tail", function(){
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');
    linkedList.addToTail('d');
    linkedList.removeValue('c');
    assert.isFalse(linkedList.contains('c'));
    expect(linkedList.head.next.next.value).to.equal('d');
  });

  it("should remove value if value is last item on list", function(){
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');
    linkedList.addToTail('d');
    linkedList.removeValue('d');
    assert.isFalse(linkedList.contains('d'));
    expect(linkedList.head.next.next.value).to.equal('c');
    expect(linkedList.head.next.next.next).to.equal(null);
  });

  // add more tests here to test the functionality of linkedList
  it("should return an element if the value is included in the linkedList", function(){
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');
    linkedList.addToTail('d');
    expect(linkedList.findElement('c').value).to.equal('c');
    expect(linkedList.findElement('c').next.value).to.equal('d');
  });

  it("should return previous element if the value is included in the linkedList and findPrev paramater is true", function(){
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');
    linkedList.addToTail('d');
    expect(linkedList.findElement('c', true).value).to.equal('b');
    expect(linkedList.findElement('c', true).next.value).to.equal('c');
  });

  it("should test that node.prev points to previous node", function(){
    linkedList.addToTail('a');
    linkedList.addToTail('b');
    linkedList.addToTail('c');
    linkedList.addToTail('d');
    expect(linkedList.findElement('a').prev).to.equal(null);
    expect(linkedList.findElement('a').next.value).to.equal('b');
    expect(linkedList.findElement('d').prev.value).to.equal('c');
    expect(linkedList.findElement('d').next).to.equal(null);
  });

});
