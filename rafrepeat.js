
const DEFAULT_OPTIONS = {
  forgetTry: false,
  notContinue: false
};

function createClosure(repeaterPtr, callback, options) {
  return function() {
    var continueRun;
    if (options.forgetTry) {
      // Save complexity without a try catch when solidified.
      continueRun = callback(options);
    } else {
      try {
        continueRun = callback(options);
      } catch (e) {
        console.log(options.name);
        console.error(e);
        continueRun = true;
        if (options.notContinue) {
          continueRun = false;
        }
      }
    }
    if (continueRun) {
      repeaterPtr.start();
    } else {
      repeaterPtr._isRunning = false;
    }
  };
}


function RafRepeater(callback, options) {
  var tempOpts = options ? options : {};
  this.options = Object.assign(tempOpts, DEFAULT_OPTIONS);
  this.callback = createClosure(this, callback, options);
  this.start();
}

RafRepeater.prototype = {
  start: function() {
    this.token = requestAnimationFrame(this.callback);
    this._isRunning = true;
  },
  pause: function() {
    cancelAnimationFrame(this.token);
    this._isRunning =false;
  }
};

Object.defineProperties(RafRepeater.prototype, {
  isRunning: {
    get: function() {
      return this._isRunning;
    }
  }
});

var exposed = RafRepeater;

// only exposed for browsers not NODE JS.
if (typeof define === 'function' && define.amd) {
  define(function() {
    return exposed;
  });
} else {
  window.RafRepeater = exposed;
}
