var expect = chai.expect;
var assert = chai.assert;

describe("set", function() {
  var set;

  beforeEach(function() {
    set = makeSet();
  });

  it("should have methods named 'add', 'contains', and 'remove'", function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it("should add values to a set", function(){
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    assert.isTrue(set.contains("Danny Glover"));
    assert.isTrue(set.contains("Susan Sarandon"));
  });

  it("should remove values from a set", function(){
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    assert.isFalse(set.contains('Mel Gibson'));
  });

  it("should add/remove numeric values to a set", function(){
    set.add(10);
    set.remove(10);
    assert.isFalse(set.contains(10));
    set.add(15);
    set.add(30);
    set.remove(15);
    assert.isFalse(set.contains(10));
    assert.isTrue(set.contains(30));
  });

  it("should add/remove object values to a set", function(){
    var obj1 = {'a':1, '2':3, 'hello':undefined};
    var obj2 = {'david':40, 'bye':null};
    set.add(obj1);
    set.remove(obj1);
    assert.isFalse(set.contains(obj1));
    set.add(obj1);
    set.add(obj2);
    set.remove(obj1);
    assert.isFalse(set.contains(obj1));
    assert.isTrue(set.contains(obj2));
  });

});
