
var ctor;
var repeater;

var array = [];

function TestObject() {
  this._raf = new RafRepeater(this._think.bind(this));
  this._lastIndex = -1;
  this._testArray = [];
  for (let i = 0; i < 1000000; i++) {
    this._testArray.push(i);
  }
}

TestObject.prototype = {
  _think: function() {
    let start = 0;
    if (this._lastIndex !== -1) {
      start = this._lastIndex;
    }
    let ts = this._raf.ts(2);

    for (let i = start; i < this._testArray.length; i++) {
      this.current = this._testArray[i]
      console.log(this.current);
      if (ts.checkExpired()) {
        this._lastIndex = i;
        break;
      }
    }
    if (this._lastIndex === -1) {
      return true;
    } else {
      return false;
    }
  },

  restart: function() {
    this._raf.start();
  }
}

describe('test TimeStamp()', function() {
  beforeAll(function() {
    ctor = new TestObject();
  });

  it ('check progress', function() {
    expect(ctor.current).toBeGreaterThan(10);
    ctor.restart();
  });
});
